
//  * Formats a date into a readable string (e.g., "December 29, 2024")
//  * @param {Date} date - The date object to format
//  * @returns {string} The formatted date string

export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function getCurrentHour() {
	return new Date().getHours()
}

//  * Gets the start of the current week (Sunday)
//  * @returns {Date} The date representing the start of the current week

export function getStartOfWeek() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek);
  startOfWeek.setHours(0, 0, 0, 0); // Reset time to midnight
  return startOfWeek;
}


//  * Adds days to a given date
//  * @param {Date} date - The date to which days will be added
//  * @param {number} days - The number of days to add
//  * @returns {Date} The new date after adding the days

export function addDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
}
