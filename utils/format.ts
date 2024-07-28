export function formatDate(date: Date) {
  // Ensure the input is a Date object
  if (!(date instanceof Date)) {
    throw new Error("Invalid Date");
  }

  // Extract day, month, and year from the date
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are zero-based
  const year = date.getFullYear();

  // Pad day and month with leading zeros if necessary
  const formattedDay = day.toString().padStart(2, "0");
  const formattedMonth = month.toString().padStart(2, "0");

  // Return the formatted date string
  return `${formattedDay}/${formattedMonth}/${year}`;
}
