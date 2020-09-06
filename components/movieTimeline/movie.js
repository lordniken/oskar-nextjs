import css from "./timeline.module.scss";

export default function TimelineMovie({ title, start }) {
  return (
    <div className={css.movie}>
      <h6 className={css.movie_title}>{title}</h6>
      <span className={css.movie_start}>{start}</span>
    </div>
  );
}
