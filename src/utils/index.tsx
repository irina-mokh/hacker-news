export const convertUnixTime = (unix_timestamp: number) => {
  const date = new Date(unix_timestamp * 1000);
  const formatted = date.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
  });
  return formatted;
};
