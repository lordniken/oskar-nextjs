import css from "../../css/movie_item.module.css";
import Link from "next/link";
import { movieTimeCompare, ratingLogoPaths } from "../../components/functions";

export default function MovieItem({
  data: { name, title, image, type, schedule, start, rating },
  filtered,
}) {
  return (
    <Link href={"/cinema/[page]"} as={`/cinema/${name}`}>
      <a className={css.link}>
        <div className={[css.item, filtered && css.item_filtered].join(" ")}>
          {rating && (
            <div className={css.rating}>
              {rating.map((item, index) => (
                <div key={index} className={css.rating_item}>
                  {item && (
                    <>
                      <img src={ratingLogoPaths[index]} />
                      <span className={css.rating_value}>{item}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
          <img
            src={`http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/${image}.jpg`}
            className={css.poster}
            title={title}
          />
          <span className={css.title}>{title}</span>
          <span className={css.type}>{type}</span>
          <div className={css.sessions}>
            {schedule &&
              schedule.map((item, index) => (
                <div
                  className={[
                    css.session,
                    movieTimeCompare(item) ? css.inactive : null,
                  ].join(" ")}
                  key={`${item}_${index}`}
                  title={
                    movieTimeCompare(item)
                      ? "На этот сеанс Вы уже не успеете 😦"
                      : null
                  }
                >
                  {item}
                </div>
              ))}
            {start && <div className={css.session}>в кино с {start}</div>}
          </div>
        </div>
      </a>
    </Link>
  );
}
