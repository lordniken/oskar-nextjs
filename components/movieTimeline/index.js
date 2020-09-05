import React from "react";
import TimeStamps from "./timestamps";
import css from "./timeline.module.scss";

export default function Timeline() {
  return (
    <div className={css.container}>
      <TimeStamps>
        <div className={css.movie}></div>
      </TimeStamps>
    </div>
  );
}
