import css from "./timeline.module.scss";
import React, { useState, useEffect } from "react";
import { calcLeftPosByTime, formatTime } from "./functions";
import TimeMarks from "./marks";

export default function Timestamps({ children }) {
  const [time, setTime] = useState(
    formatTime(new Date().getHours()) +
      ":" +
      formatTime(new Date().getMinutes())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        formatTime(new Date().getHours()) +
          ":" +
          formatTime(new Date().getMinutes())
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.wrapper}>
      <div
        className={css.currentTime}
        style={{ left: `calc(${calcLeftPosByTime(time)} - 23px)` }}
      >
        <span>{time}</span>
      </div>
      <TimeMarks />
      {children}
    </div>
  );
}
