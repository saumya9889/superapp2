// takes a dateString ("2023-09-26T13:00:00Z") as input and
// returns { date: '26-09-2023', time: '1:00 PM' }

export const formatDateString = (dateString) => {
  return {
    date:
      dateString.substr(8, 2) +
      "-" +
      dateString.substr(5, 2) +
      "-" +
      dateString.substr(0, 4),
    time: (function () {
      const hours = parseInt(dateString.substr(11, 2));
      const minutes = dateString.substr(14, 2);
      if (hours >= 12) {
        return (hours - 12).toString() + ":" + minutes + " PM";
      } else {
        return hours.toString() + ":" + minutes + " AM";
      }
    })(),
  };
};
