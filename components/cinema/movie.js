import Page from "../page";
import css from "../../css/movie.module.css";
import { declOfNum } from "../../components/functions";

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

  const infoRows = [
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
  ];

  return (
    <Page title={title}>
      <div className={css.container}>
        <div className={css.poster_container}>
          <img
            src={`http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/${image}.jpg`}
            className={css.poster}
            title={title}
          />
        </div>

        <div className={css.movie_container}>
          <h1 className={css.title}>{title}</h1>
          <span className={css.original_title}>
            {en_title && `${en_title}, `}
            {age}+
          </span>

          <div className={css.info_container}>
            {infoRows.map(({ title, value }, index) => (
              <div className={css.info_item} key={`${title}_${index}`}>
                <div className={css.info_title}>{title}</div>
                <div className={css.info_value}>{value}</div>
              </div>
            ))}
          </div>
          <p className={css.description}>{description}</p>
          <div className={css.trailer_container}>
            <iframe
              width="100%"
              height="274"
              src={trailer}
              frameborder="0"
              allowfullscreen=""
            />
          </div>
        </div>
        <div className={css.schedule_container}></div>
      </div>
    </Page>
  );
}
