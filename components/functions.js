export const declOfNum = (
  number,
  titles = ["совпадение", "совпадения", "совпадений"]
) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const movieTimeCompare = (movieTime, date = new Date()) => {
  const movieUnixTime = new Date(
    `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${movieTime}:00`
  ).getTime();
  return movieUnixTime < new Date().getTime();
};

export const dayOfWeekByDate = (date) => {
  const days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  return days[new Date(date).getDay()];
};

export const ratingLogoPaths = ["/imdb.png", "/kp.png"];

// timeline functions

const widthPerHourPrc = 5;

export const calcWidthByDuration = (duration) => {
  const length = duration / 60;

  return `${length.toFixed(2) * widthPerHourPrc}%`;
};

export const calcTopPosByRoom = (room) => `${room * 30 + room * 4}px`;

export const caltLeftPosByTime = (time) => {
  const [hour, mins] = time.split(":");

  let hourOffset = 0;

  if (hour < 9) hourOffset += 15 + +hour;
  else hourOffset = +hour - 9;

  const minOffset = (((+mins * 100) / 60) * widthPerHourPrc) / 100;

  return (hourOffset * widthPerHourPrc + minOffset).toFixed(2) + "%";
};
