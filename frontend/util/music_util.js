const parseTime = timeInSeconds => {
  const minutes = Math.floor(timeInSeconds / 60);
  const sec = Math.round(timeInSeconds % 60);
  const seconds = sec < 10 ? `0${sec}` : `${sec}`;
  return `${minutes}:${seconds}`;
};

export default parseTime;
