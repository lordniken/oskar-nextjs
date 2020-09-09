import css from "./timeline.module.scss";
import { makeItemPosition } from "./functions";
import { movieTimeCompare } from "../functions";
import Link from "next/link";

export default function Movie({ title, start, name, duration, session, hall }) {
  const isMovieStarted = movieTimeCompare(session);

  const HeadContainer = ({ children }) => {
    return isMovieStarted ? (
      <>{children}</>
    ) : (
      <Link href="/cinema/[page]" as={`/cinema/${name}`}>
        {children}
      </Link>
    );
  };

  return (
    <HeadContainer>
      <div
        className={[
          css.movie_container,
          isMovieStarted ? css.movie_container_inactive : null,
        ].join(" ")}
        style={makeItemPosition(duration, hall, session)}
      >
        <div className={css.movie}>
          <h6 className={css.movie_title}>{title}</h6>
          <span className={css.movie_start}>{start}</span>
        </div>
      </div>
    </HeadContainer>
  );
}
