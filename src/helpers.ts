import pascua from "pascua";
import type {
	ColombianHoliday,
	ColombianHolidayWithNativeDate,
	EasterHoliday,
	Holiday,
} from "./types";

// 1984 is the year when the current holidays scheme is enforced
// http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=4954
export const NEW_HOLIDAY_SCHEMA_START_YEAR = 1984;

function getNextDayOfWeek(date: Date, dayOfWeek: number): Date {
	const resultDate = new Date(date);
	resultDate.setUTCDate(
		date.getUTCDate() + ((7 + dayOfWeek - date.getUTCDay()) % 7),
	);
	return resultDate;
}

function getNextMonday(date: Date): Date {
	const MONDAY = 1;
	return getNextDayOfWeek(date, MONDAY);
}

function isEasterHoliday(holiday: Holiday): holiday is EasterHoliday {
	return "offset" in holiday;
}

function getHolidayDate(holiday: Holiday, year: number): Date {
	if (isEasterHoliday(holiday)) {
		const { month, day } = pascua(year);
		const date = new Date(generateUtcStringFromDateParts(year, month, 1));
		date.setUTCDate(day + holiday.offset);
		return date;
	}

	return new Date(
		generateUtcStringFromDateParts(year, holiday.month, holiday.day),
	);
}

function generateUtcStringFromDateParts(
	year: number,
	month: number,
	day: number,
) {
	return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
		2,
		"0",
	)}`;
}

function getHoliday(
	holiday: Holiday,
	options?: { year?: number; valueAsDate: false | undefined },
): ColombianHoliday;
function getHoliday(
	holiday: Holiday,
	options: { year?: number; valueAsDate: true },
): ColombianHolidayWithNativeDate;
function getHoliday(
	holiday: Holiday,
	options?: { year?: number; valueAsDate?: boolean },
): ColombianHoliday | ColombianHolidayWithNativeDate;
function getHoliday(
	holiday: Holiday,
	{
		year = new Date().getUTCFullYear(),
		valueAsDate = false,
	}: { year?: number; valueAsDate?: boolean } = {},
): unknown {
	const holidayDate = getHolidayDate(holiday, year);
	const celebrationDate =
		year >= NEW_HOLIDAY_SCHEMA_START_YEAR && holiday.nextMonday
			? getNextMonday(holidayDate)
			: holidayDate;

	return {
		date: valueAsDate ? holidayDate : holidayDate.toISOString().slice(0, 10),
		celebrationDate: valueAsDate
			? celebrationDate
			: celebrationDate.toISOString().slice(0, 10),
		name: holiday.name,
		nextMonday: year >= NEW_HOLIDAY_SCHEMA_START_YEAR && holiday.nextMonday,
	};
}

export default getHoliday;
