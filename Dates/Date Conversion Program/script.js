const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const formatted = date.toLocaleDateString("en-US");
  return `Formatted Date (MM/DD/YYYY): ${formatted}`;
}

function formatDateLong(date) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formatted = date.toLocaleDateString("en-US", options);
  return `Formatted Date (Month Day, Year): ${formatted}`;
}

