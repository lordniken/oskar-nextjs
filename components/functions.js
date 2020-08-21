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

export const movieTimeCompare = (movieTime) => {
  const movieUnixTime = new Date(
    `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()} ${movieTime}:00`
  ).getTime();

  return movieUnixTime < new Date().getTime();
};
