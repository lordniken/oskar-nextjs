import { formatTime } from "../functions";
import css from "./timeline.module.scss";

const hoursList = new Array(20).fill(0).map((_, i) => {
  const hour = 9 + i > 23 ? i - 15 : 9 + i;
  return formatTime(hour) + ":00";
});

export default function TimeMarks() {
  return (
    <div className={css.marks}>
      {hoursList.map((hour) => (
        <div className={css.marks_hour} key={hour}>
          {hour}
        </div>
      ))}
    </div>
  );
}
