const widthPerHourPrc = 5;

const calcWidthByDuration = (duration) => {
  const length = duration / 60;

  return `${length.toFixed(2) * widthPerHourPrc}%`;
};

const calcTopPosByHall = (hall) => `${hall * 40 + (hall - 1) * 10}px`;

export const calcLeftPosByTime = (time) => {
  const [hour, mins] = time.split(":");

  let hourOffset = 0;

  if (hour < 9) hourOffset += 15 + +hour;
  else hourOffset = +hour - 9;

  const minOffset = (((+mins * 100) / 60) * widthPerHourPrc) / 100;

  let offset = (hourOffset * widthPerHourPrc + minOffset).toFixed(2);
  if (offset > 98) offset = 0;

  return offset + "%";
};

export const makeItemPosition = (duration, hall, session) => {
  return {
    width: calcWidthByDuration(duration),
    top: calcTopPosByHall(hall),
    left: calcLeftPosByTime(session),
  };
};

export const formatTime = (number) => {
  return number < 10 ? `0${number}` : number;
};
