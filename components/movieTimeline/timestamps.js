import css from "./timeline.module.scss";
import React, { useState, useEffect } from "react";
import { caltLeftPosByTime } from "../functions";

const formatTime = (number) => {
  return number < 10 ? `0${number}` : number;
};

const hoursList = new Array(20).fill(0).map((_, i) => {
  const hour = 9 + i > 23 ? i - 15 : 9 + i;
  return formatTime(hour) + ":00";
});

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
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={css.timestamp_container}>
      <div
        className={css.currentTime}
        style={{ left: `calc(${caltLeftPosByTime(time)} - 23px)` }}
      >
        <span>{time}</span>
      </div>
      <div className={css.marks}>
        {hoursList.map((hour) => (
          <div className={css.marks_hour} key={hour}>
            {hour}
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}
