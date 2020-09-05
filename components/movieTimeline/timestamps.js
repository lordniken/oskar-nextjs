import css from "./timeline.module.scss";
import React, { useState, useEffect } from "react";

const formatTime = (number) => {
  return number < 10 ? `0${number}` : number;
};

const hoursList = new Array(20).fill(0).map((_, i) => {
  const hour = 9 + i > 23 ? i - 15 : 9 + i;
  return formatTime(hour) + ":00";
});

const currentTimeOffset = (date) => {
  const widthPerHourPrc = 5;
  let hourOffset = date.getHours();
  if (date.getHours() < 9) hourOffset = date.getHours() + 15;
  const minOffset = (((date.getMinutes() * 100) / 60) * widthPerHourPrc) / 100;

  let offset = (hourOffset * widthPerHourPrc + minOffset).toFixed(2);
  if (offset > 100) offset = 0;
  return offset;
};

export default function Timestamps({ children }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const currentTime =
    formatTime(date.getHours()) + ":" + formatTime(date.getMinutes());

  return (
    <div className={css.timestamp_container}>
      <div
        className={css.currentHour}
        style={{ left: `${currentTimeOffset(date)}%` }}
      >
        <span>{currentTime}</span>
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
