import React from "react";
import TimeStamps from "./timestamps";
import css from "./timeline.module.scss";
import {
  calcWidthByDuration,
  calcTopPosByRoom,
  caltLeftPosByTime,
} from "../functions";

export default function Timeline({ movies }) {
  const makeMoviePosition = (movieInfo, room, session) => {
    return {
      width: calcWidthByDuration(movieInfo.duration),
      top: calcTopPosByRoom(room),
      left: caltLeftPosByTime(session),
    };
  };

  return (
    <div className={css.container}>
      <TimeStamps>
        {movies.map((movieItem) =>
          movieItem.schedule_timeline.map((item) =>
            item.sessions.map((session) => (
              <div
                className={css.movie}
                key={`${movieItem.title}_${session}`}
                style={makeMoviePosition(movieItem, item.room, session)}
              >
                {session}
              </div>
            ))
          )
        )}
      </TimeStamps>
    </div>
  );
}
