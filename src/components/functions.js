export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const movieTimeCompare = (movieTime) => {
  return (
    movieTime * 1000 < new Date().getTime() &&
    new Date(movieTime * 1000).getHours() > 5 // to display correctly night sessions
  );
};

export const ratingLogoPaths = ["/imdb.png", "/kp.png"];

export const formatTime = (number) => {
  return number < 10 ? `0${number}` : number;
};

export const utToTime = (unixTime) => {
  const date = new Date(unixTime * 1000);
  return `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
};
