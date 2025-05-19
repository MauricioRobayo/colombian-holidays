import { getHolidaysForYear } from "..";
import { ColombianHoliday, ColombianHolidayWithNativeDate } from "../types";

export function holidaysWithinInterval(options: {
  start: Date;
  end: Date;
  valueAsDate: false | undefined;
}): ColombianHoliday[];
export function holidaysWithinInterval(options: {
  start: Date;
  end: Date;
  valueAsDate: true;
}): ColombianHolidayWithNativeDate[];
export function holidaysWithinInterval(options: {
  start: Date;
  end: Date;
  valueAsDate?: boolean;
}): ColombianHoliday[] | ColombianHolidayWithNativeDate[];
export function holidaysWithinInterval({
  start,
  end,
  valueAsDate = false,
}: {
  start: Date;
  end: Date;
  valueAsDate?: boolean;
}): unknown {
  if (start >= end) {
    throw new Error("end date should be greater than start date");
  }
  const yearEnd = end.getUTCFullYear();
  const yearStart = start.getUTCFullYear();

  const holidays = Array.from({ length: yearEnd - yearStart + 1 }, (_, i) =>
    getHolidaysForYear(i + yearStart, { valueAsDate: true })
  ).flat();

  const holidaysWithin = holidays.filter(
    ({ celebrationDate }) => celebrationDate >= start && celebrationDate <= end
  );

  if (valueAsDate) {
    return holidaysWithin;
  }

  return holidaysWithin.map((holiday) => ({
    ...holiday,
    date: holiday.date.toISOString().slice(0, 10),
    celebrationDate: holiday.celebrationDate.toISOString().slice(0, 10),
  }));
}
