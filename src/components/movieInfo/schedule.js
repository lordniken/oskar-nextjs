import css from "./movie.module.scss";
import { dayOfWeekByDate } from "./functions";
import { movieTimeCompare } from "../functions";

export default function ScheduleBlock({ schedule }) {
  return (
    <div className={css.schedule}>
      <h3>Расписание сеансов</h3>
      {schedule.map((item, itemIndex) => (
        <div className={css.schedule_day} key={`${item.date}_${itemIndex}`}>
          <div className={css.schedule_date}>
            {`${item.date.split("-").reverse().join(".")}, ${dayOfWeekByDate(
              item.date
            )}`}
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
                {schedule}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
