import css from "./movie.module.scss";
import { dayOfWeekByDate } from "./functions";
import { movieTimeCompare, utToTime } from "../functions";
import { useState, useEffect } from "react";

export default function ScheduleBlock({ schedule }) {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <div className={css.schedule}>
      <h3>Расписание сеансов</h3>
      {isLoaded
        ? schedule.map((item, itemIndex) => (
            <div className={css.schedule_day} key={`${item.date}_${itemIndex}`}>
              <div className={css.schedule_date}>
                {`${item.date
                  .split("-")
                  .reverse()
                  .join(".")}, ${dayOfWeekByDate(item.date)}`}
              </div>
              <div className={css.schedule_sessions}>
                {item.sessions.map((schedule, scheduleIndex) => (
                  <span
                    className={[
                      css.schedule_sessions_item,
                      movieTimeCompare(schedule, new Date(item.date))
                        ? css.schedule_sessions_item_inactive
                        : null,
                    ].join(" ")}
                    key={`${schedule}_${scheduleIndex}`}
                  >
                    {utToTime(schedule)}
                  </span>
                ))}
              </div>
            </div>
          ))
        : null}
    </div>
  );
}
