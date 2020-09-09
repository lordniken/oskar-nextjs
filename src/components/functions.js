export const declOfNum = (number, titles) => {
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

export const ratingLogoPaths = ["/imdb.png", "/kp.png"];
