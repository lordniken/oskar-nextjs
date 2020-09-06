import React from "react";
import TimeStamps from "./timestamps";
import css from "./timeline.module.scss";
import {
  calcWidthByDuration,
  calcTopPosByRoom,
  calcLeftPosByTime,
  movieTimeCompare,
} from "../functions";
import Movie from "./movie";
import Link from "next/link";

export default function Timeline({ movies }) {
  const makeMoviePosition = (duration, room, session) => {
    return {
      width: calcWidthByDuration(duration),
      top: calcTopPosByRoom(room),
      left: calcLeftPosByTime(session),
    };
  };

  return (
    <div className={css.container}>
      <div className={css.halls}>
        <ul>
          <li>Зал 1</li>
          <li>Зал 2</li>
        </ul>
      </div>
      <TimeStamps>
        {movies.map(({ title, schedule_timeline, duration, format, name }) =>
          schedule_timeline.map((item) =>
            item.sessions.map((session) => (
              <Link
                href="/cinema/[page]"
                as={`/cinema/${name}`}
                key={`${title}_${session}`}
              >
                <div
                  className={[
                    css.movie_container,
                    movieTimeCompare(session)
                      ? css.movie_container_inactive
                      : null,
                  ].join(" ")}
                  style={makeMoviePosition(duration, item.room, session)}
                  title={
                    movieTimeCompare(session)
                      ? "На этот сеанс Вы уже не успеете 😦"
                      : null
                  }
                >
                  <Movie start={session} title={title} format={format} />
                </div>
              </Link>
            ))
          )
        )}
      </TimeStamps>
    </div>
  );
}
