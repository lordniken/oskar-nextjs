import React from "react";
import TimeStamps from "./timestamps";
import css from "./timeline.module.scss";
import Movie from "./movie";

export default function Timeline({ movies }) {
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
          schedule_timeline.map(({ room, sessions }) =>
            sessions.map((session) => (
              <Movie
                start={session}
                title={title}
                format={format}
                name={name}
                duration={duration}
                hall={room}
                session={session}
                key={`${title}_${session}`}
              />
            ))
          )
        )}
      </TimeStamps>
    </div>
  );
}
