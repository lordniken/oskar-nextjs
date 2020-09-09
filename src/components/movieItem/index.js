import css from "./movie.module.scss";
import Link from "next/link";
import { movieTimeCompare, ratingLogoPaths } from "../functions";

export default function MovieItem({
  data: { name, title, image, type, schedule, start, rating },
  filtered,
}) {
  return (
    <Link href={"/cinema/[page]"} as={`/cinema/${name}`}>
      <div className={[css.item, filtered && css.item_filtered].join(" ")}>
        {rating && (
          <div className={css.item_rating}>
            {rating.map((item, index) => (
              <div key={index} className={css.item_rating_item}>
                {item && (
                  <>
                    <img src={ratingLogoPaths[index]} />
                    <span className={css.item_rating_value}>{item}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        <img
          src={`http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/${image}.jpg`}
          className={css.item_poster}
          title={title}
        />
        <span className={css.item_title}>{title}</span>
        <span className={css.item_type}>{type}</span>
        <ul className={css.item_sessions}>
          {schedule &&
            schedule.map((item, index) => (
              <li
                className={[
                  css.item_sessions_item,
                  movieTimeCompare(item)
                    ? css.item_sessions_item_inactive
                    : null,
                ].join(" ")}
                key={`${item}_${index}`}
                title={
                  movieTimeCompare(item)
                    ? "На этот сеанс Вы уже не успеете 😦"
                    : null
                }
              >
                {item}
              </li>
            ))}
          {start && (
            <li className={css.item_sessions_item}>в кино с {start}</li>
          )}
        </ul>
      </div>
    </Link>
  );
}
