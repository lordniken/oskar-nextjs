import css from "../../css/movie_item.module.css";
import Link from "next/link";
import { movieTimeCompare } from "../../components/functions";

export default function MovieItem({ data, filtered }) {
  return (
    <Link href={"/cinema/[page]"} as={`/cinema/${data.name}`}>
      <a className={css.link}>
        <div className={[css.item, filtered && css.item_filtered].join(" ")}>
          <img
            src={`http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/${data.image}.jpg`}
            className={css.poster}
          />
          <span className={css.title}>{data.title}</span>
          <span className={css.type}>{data.type}</span>
          <div className={css.sessions}>
            {data.schedule &&
              data.schedule.map((item, index) => (
                <div
                  className={[
                    css.session,
                    movieTimeCompare(item) && css.inactive,
                  ].join(" ")}
                  key={`${item}_${index}`}
                >
                  {item}
                </div>
              ))}
            {data.start && (
              <div className={css.session}>в кино с {data.start}</div>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}
