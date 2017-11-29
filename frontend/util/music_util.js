export const parseTime = timeInSeconds => {
  let minutes = Math.floor(timeInSeconds / 60);
  let sec = Math.round(timeInSeconds % 60);
  let seconds = (sec < 10) ? `0${sec}` : `${sec}`;
  return `${minutes}:${seconds}`;
};
