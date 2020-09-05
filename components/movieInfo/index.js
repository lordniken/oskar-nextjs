import Page from "../page";
import css from "./movie.module.scss";
import {
  declOfNum,
  dayOfWeekByDate,
  movieTimeCompare,
  ratingLogoPaths,
} from "../functions";

export default function MoviePage({
  movie: {
    title,
    image,
    en_title,
    age,
    country,
    type,
    duration,
    director,
    actors,
    format,
    description,
    trailer,
    rating,
    start,
    schedule,
  },
}) {
  const durationHours = `${Math.floor(duration / 60)} ${declOfNum(
    Math.floor(duration / 60),
    ["час", "часа", "часов"]
  )}`;

  const durationMins =
    duration % 60
      ? `${duration % 60} ${declOfNum(duration % 60, [
          "минута",
          "минуты",
          "минут",
        ])}`
      : "";

  let infoRows = [
    {
      title: "страна",
      value: country,
    },
    {
      title: "жанр",
      value: type,
    },
    {
      title: "продолжительность",
      value: `${durationHours} ${durationMins}`,
    },
    {
      title: "режисер",
      value: director,
    },
    {
      title: "актеры",
      value: actors.map((actor) => actor).join(", "),
    },
    {
      title: "формат",
      value: format,
    },
    {
      title: "возрастное ограничение",
      value: `${age}+`,
    },
    {
      title: "премьера",
      value: start,
    },
  ];

  if (rating) {
    infoRows = [
      ...infoRows,
      {
        title: "рейтинг",
        value: rating.map(
          (item, index) =>
            item && (
              <div className={css.info_rating} key={`${item}_${index}`}>
                <img src={ratingLogoPaths[index]} />
                {item}
              </div>
            )
        ),
      },
    ];
  }

  return (
    <Page title={title}>
      <div className={css.container}>
        <div className={css.poster}>
          <img
            src={`http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/${image}.jpg`}
            title={title}
          />
        </div>
        <div className={css.info}>
          <h1>{title}</h1>
          <h3>
            {en_title && `${en_title}, `}
            {age}+
          </h3>
          {infoRows.map(({ title, value }, index) => (
            <div className={css.info_specs} key={`${title}_${index}`}>
              <div className={css.info_specs_title}>{title}</div>
              <div className={css.info_specs_value}>{value}</div>
            </div>
          ))}
          <p className={css.info_description}>{description}</p>
          <iframe className={css.info_trailer} src={trailer} />
        </div>
        {schedule && (
          <div className={css.schedule}>
            <h3>Расписание сеансов</h3>
            {schedule.map((item, itemIndex) => (
              <div
                className={css.schedule_day}
                key={`${item.date}_${itemIndex}`}
              >
                <div className={css.schedule_date}>
                  {`${item.date
                    .split("-")
                    .reverse()
                    .join(".")}, ${dayOfWeekByDate(item.date)}`}
                </div>
                <div className={css.schedule_sessions}>
                  {item.sessions.map((schedule, scheduleIndex) => (
                    <span
                      className={[
                        css.schedule_sessions_item,
                        movieTimeCompare(schedule, new Date(item.date))
                          ? css.schedule_sessions_item_inactive
                          : null,
                      ].join(" ")}
                      key={`${schedule}_${scheduleIndex}`}
                    >
                      {schedule}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Page>
  );
}
