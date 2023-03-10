import colombianHolidays from "..";

export function isHoliday(date: Date): boolean {
  return colombianHolidays({
    year: date.getUTCFullYear(),
    valueAsDate: true,
  }).some(({ celebrationDate }) => {
    return (
      celebrationDate.getUTCDate() === date.getUTCDate() &&
      celebrationDate.getUTCMonth() === date.getUTCMonth() &&
      celebrationDate.getUTCFullYear() === date.getUTCFullYear()
    );
  });
}
