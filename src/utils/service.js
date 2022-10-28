const formattedDateAndTime = (date) => {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit'
  };
  const formattedDate = new Date(date).toLocaleDateString('id-ID', dateOptions);
  const formattedTime = new Date(date).toLocaleTimeString('id-ID', timeOptions);
  return [formattedDate, formattedTime];
};

export {
  formattedDateAndTime
}