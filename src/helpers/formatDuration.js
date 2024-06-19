export default function formatDuration(minutesAmount) {
  if (minutesAmount < 0) return "00:00";
  let hours = Math.floor(minutesAmount / 60);
  let minutes = minutesAmount % 60;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${hours}:${minutes}`;
}
