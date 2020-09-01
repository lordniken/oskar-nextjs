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
