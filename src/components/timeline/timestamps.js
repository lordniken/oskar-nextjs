import css from "./timeline.module.scss";
import React, { useState, useEffect } from "react";
import { calcLeftPosByTime } from "./functions";
import TimeMarks from "./marks";
import { utToTime } from "../functions";

export default function Timestamps({ children }) {
  const [time, setTime] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getTime());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.wrapper}>
      <div
        className={css.currentTime}
        style={{ left: `calc(${calcLeftPosByTime(time / 1000)} - 23px)` }}
      >
        <span>{utToTime(time / 1000)}</span>
      </div>
      <TimeMarks />
      {children}
    </div>
  );
}
