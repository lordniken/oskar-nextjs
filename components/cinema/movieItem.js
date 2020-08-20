import css from "../../css/movie_item.module.css";
import Link from "next/link";

export default function MovieItem({ data }) {
  return (
    <Link href={"/movie/[movie]"} as={`/movie/${data.name}`}>
      <a className={css.link}>
        <div className={css.item}>
          <img
            src={`http://xn----7sbbina5amcvokdhi4p.xn--p1ai/images/posters/500-725/${data.image}.jpg`}
            className={css.poster}
          />
          <span className={css.title}>{data.title}</span>
          <span className={css.type}>{data.type}</span>
        </div>
      </a>
    </Link>
  );
}
