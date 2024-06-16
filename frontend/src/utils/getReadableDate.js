const getReadableDate = (isoDate) => {
  const date = new Date(isoDate);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  const readableDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return readableDate;
};

export default getReadableDate;
