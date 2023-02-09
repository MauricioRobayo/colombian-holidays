import colombianHolidays from "..";
import { ColombianHoliday } from "../types";

export type Interval = {
  start: Date;
  end: Date;
};
export function holidaysWithinInterval({
  start,
  end,
}: Interval): ColombianHoliday[] {
  const yearEnd = new Date(end).getUTCFullYear();
  const yearStart = new Date(start).getUTCFullYear();
  let holidays: ColombianHoliday[] = [];

  for (let i = yearStart; i <= yearEnd; i += 1) {
    holidays = holidays.concat(colombianHolidays(i));
  }

  return holidays.filter(({ celebrationDate }) => {
    const date = new Date(celebrationDate);
    return date >= start && date <= end;
  });
}
