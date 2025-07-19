// Converts seconds to an object of format:
// {hours: string = "00", minutes: string = "00", seconds: string = "00"}
export function formatTime(count) {
  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  function padWithZero(time) {
    return time < 10 ? "0" + time : time;
  }

  return {
    hours: padWithZero(hours),
    minutes: padWithZero(minutes),
    seconds: padWithZero(seconds),
  };
}
