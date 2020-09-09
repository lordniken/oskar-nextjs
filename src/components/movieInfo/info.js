import css from "./movie.module.scss";
import { declOfNum } from "../functions";
import { ratingLogoPaths } from "../functions";

export default function InfoBlock({
  country,
  type,
  duration,
  director,
  actors,
  format,
  rating,
  start,
  age,
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
    <>
      {infoRows.map(({ title, value }, index) => (
        <div className={css.info_specs} key={index}>
          <div className={css.info_specs_title}>{title}</div>
          <div className={css.info_specs_value}>{value}</div>
        </div>
      ))}
    </>
  );
}
