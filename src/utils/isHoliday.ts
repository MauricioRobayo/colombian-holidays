import colombianHolidays from "..";

export function isHoliday(date: Date): boolean {
  return colombianHolidays({ year: date.getUTCFullYear() }).some(
    ({ celebrationDate }) => {
      const d = new Date(celebrationDate);
      return (
        d.getUTCDate() === date.getUTCDate() &&
        d.getUTCMonth() === date.getUTCMonth() &&
        d.getUTCFullYear() === date.getUTCFullYear()
      );
    }
  );
}
