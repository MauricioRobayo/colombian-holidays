import { getHolidaysForYear } from "./getHolidaysByYear";
import { isSameDate } from "./helpers";

export function isHoliday(date: Date): boolean {
	const holidays = getHolidaysForYear(date.getUTCFullYear(), {
		valueAsDate: true,
	});
	return holidays.some(({ celebrationDate }) =>
		isSameDate(celebrationDate, date),
	);
}
