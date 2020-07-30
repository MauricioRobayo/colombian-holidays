import getColombianHolidays from 'colombian-holidays';

export const monthsNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function getYears(currentYear, startYear, yearsPastCurrentYear) {
  const totalYears = currentYear - startYear + yearsPastCurrentYear + 1;
  return Array.from({ length: totalYears }, (_, k) => startYear + k);
}

export function getDays(year, month) {
  if (!year || !month) return [];
  const intYear = parseInt(year, 10);
  const intMonth = parseInt(month, 10);
  if (isNaN(intYear) || isNaN(intMonth)) return [];
  const totalDays = new Date(intYear, intMonth, 0).getDate();
  return Array.from({ length: totalDays }, (_, k) => k + 1);
}

export function getHolidays(year) {
  try {
    return getColombianHolidays(year).sort((a, b) =>
      a.date.localeCompare(b.date)
    );
  } catch {
    return [];
  }
}

export function isValidYear(year, startYear, endYear) {
  return year >= parseInt(startYear, 10) && year <= parseInt(endYear, 10);
}

export function isValidMonth(month) {
  const monthInt = parseInt(month, 10);
  return monthInt >= 1 && monthInt <= 12;
}

export function isValidDay(day, days) {
  return days.includes(parseInt(day, 10));
}
