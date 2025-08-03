import { describe, expect, it } from "vitest";
import colombianHolidays, { FIRST_HOLIDAY_YEAR, LAST_HOLIDAY_YEAR } from ".";
import type { ColombianHoliday, ColombianHolidayWithNativeDate } from "./types";

const holidaysYears: Record<number, ColombianHoliday[]> = {
	1976: [
		{
			date: "1976-01-01",
			celebrationDate: "1976-01-01",
			name: expect.objectContaining({ es: "Año Nuevo" }),
			nextMonday: false,
		},
		{
			date: "1976-01-06",
			celebrationDate: "1976-01-06",
			name: expect.objectContaining({ es: "Reyes Magos" }),
			nextMonday: false,
		},
		{
			date: "1976-03-19",
			celebrationDate: "1976-03-19",
			name: expect.objectContaining({ es: "San José" }),
			nextMonday: false,
		},
		{
			date: "1976-04-15",
			celebrationDate: "1976-04-15",
			name: expect.objectContaining({ es: "Jueves Santo" }),
			nextMonday: false,
		},
		{
			date: "1976-04-16",
			celebrationDate: "1976-04-16",
			name: expect.objectContaining({ es: "Viernes Santo" }),
			nextMonday: false,
		},
		{
			date: "1976-05-01",
			celebrationDate: "1976-05-01",
			name: expect.objectContaining({ es: "Día del Trabajo" }),
			nextMonday: false,
		},
		{
			date: "1976-05-27",
			celebrationDate: "1976-05-27",
			name: expect.objectContaining({ es: "Ascensión del Señor" }),
			nextMonday: false,
		},
		{
			date: "1976-06-17",
			celebrationDate: "1976-06-17",
			name: expect.objectContaining({ es: "Corpus Christi" }),
			nextMonday: false,
		},
		{
			date: "1976-06-25",
			celebrationDate: "1976-06-25",
			name: expect.objectContaining({ es: "Sagrado Corazón de Jesús" }),
			nextMonday: false,
		},
		{
			date: "1976-06-29",
			celebrationDate: "1976-06-29",
			name: expect.objectContaining({ es: "San Pedro y San Pablo" }),
			nextMonday: false,
		},
		{
			date: "1976-07-20",
			celebrationDate: "1976-07-20",
			name: expect.objectContaining({ es: "Grito de la Independencia" }),
			nextMonday: false,
		},
		{
			date: "1976-08-07",
			celebrationDate: "1976-08-07",
			name: expect.objectContaining({ es: "Batalla de Boyacá" }),
			nextMonday: false,
		},
		{
			date: "1976-08-15",
			celebrationDate: "1976-08-15",
			name: expect.objectContaining({ es: "Asunción de la Virgen" }),
			nextMonday: false,
		},
		{
			date: "1976-10-12",
			celebrationDate: "1976-10-12",
			name: expect.objectContaining({ es: "Día de la Raza" }),
			nextMonday: false,
		},
		{
			date: "1976-11-01",
			celebrationDate: "1976-11-01",
			name: expect.objectContaining({ es: "Todos los Santos" }),
			nextMonday: false,
		},
		{
			date: "1976-11-11",
			celebrationDate: "1976-11-11",
			name: expect.objectContaining({ es: "Independencia de Cartagena" }),
			nextMonday: false,
		},
		{
			date: "1976-12-08",
			celebrationDate: "1976-12-08",
			name: expect.objectContaining({ es: "Inmaculada Concepción" }),
			nextMonday: false,
		},
		{
			date: "1976-12-25",
			celebrationDate: "1976-12-25",
			name: expect.objectContaining({ es: "Navidad" }),
			nextMonday: false,
		},
	],
	1983: [
		{
			date: "1983-01-01",
			celebrationDate: "1983-01-01",
			name: expect.objectContaining({ es: "Año Nuevo" }),
			nextMonday: false,
		},
		{
			date: "1983-01-06",
			celebrationDate: "1983-01-06",
			name: expect.objectContaining({ es: "Reyes Magos" }),
			nextMonday: false,
		},
		{
			date: "1983-03-19",
			celebrationDate: "1983-03-19",
			name: expect.objectContaining({ es: "San José" }),
			nextMonday: false,
		},
		{
			date: "1983-03-31",
			celebrationDate: "1983-03-31",
			name: expect.objectContaining({ es: "Jueves Santo" }),
			nextMonday: false,
		},
		{
			date: "1983-04-01",
			celebrationDate: "1983-04-01",
			name: expect.objectContaining({ es: "Viernes Santo" }),
			nextMonday: false,
		},
		{
			date: "1983-05-01",
			celebrationDate: "1983-05-01",
			name: expect.objectContaining({ es: "Día del Trabajo" }),
			nextMonday: false,
		},
		{
			date: "1983-05-12",
			celebrationDate: "1983-05-12",
			name: expect.objectContaining({ es: "Ascensión del Señor" }),
			nextMonday: false,
		},
		{
			date: "1983-06-02",
			celebrationDate: "1983-06-02",
			name: expect.objectContaining({ es: "Corpus Christi" }),
			nextMonday: false,
		},
		{
			date: "1983-06-10",
			celebrationDate: "1983-06-10",
			name: expect.objectContaining({ es: "Sagrado Corazón de Jesús" }),
			nextMonday: false,
		},
		{
			date: "1983-06-29",
			celebrationDate: "1983-06-29",
			name: expect.objectContaining({ es: "San Pedro y San Pablo" }),
			nextMonday: false,
		},
		{
			date: "1983-07-20",
			celebrationDate: "1983-07-20",
			name: expect.objectContaining({ es: "Grito de la Independencia" }),
			nextMonday: false,
		},
		{
			date: "1983-08-07",
			celebrationDate: "1983-08-07",
			name: expect.objectContaining({ es: "Batalla de Boyacá" }),
			nextMonday: false,
		},
		{
			date: "1983-08-15",
			celebrationDate: "1983-08-15",
			name: expect.objectContaining({ es: "Asunción de la Virgen" }),
			nextMonday: false,
		},
		{
			date: "1983-10-12",
			celebrationDate: "1983-10-12",
			name: expect.objectContaining({ es: "Día de la Raza" }),
			nextMonday: false,
		},
		{
			date: "1983-11-01",
			celebrationDate: "1983-11-01",
			name: expect.objectContaining({ es: "Todos los Santos" }),
			nextMonday: false,
		},
		{
			date: "1983-11-11",
			celebrationDate: "1983-11-11",
			name: expect.objectContaining({ es: "Independencia de Cartagena" }),
			nextMonday: false,
		},
		{
			date: "1983-12-08",
			celebrationDate: "1983-12-08",
			name: expect.objectContaining({ es: "Inmaculada Concepción" }),
			nextMonday: false,
		},
		{
			date: "1983-12-25",
			celebrationDate: "1983-12-25",
			name: expect.objectContaining({ es: "Navidad" }),
			nextMonday: false,
		},
	],
	2015: [
		{
			date: "2015-01-01",
			celebrationDate: "2015-01-01",
			name: expect.objectContaining({ es: "Año Nuevo" }),
			nextMonday: false,
		},
		{
			date: "2015-01-06",
			celebrationDate: "2015-01-12",
			name: expect.objectContaining({ es: "Reyes Magos" }),
			nextMonday: true,
		},
		{
			date: "2015-03-19",
			celebrationDate: "2015-03-23",
			name: expect.objectContaining({ es: "San José" }),
			nextMonday: true,
		},
		{
			date: "2015-04-02",
			celebrationDate: "2015-04-02",
			name: expect.objectContaining({ es: "Jueves Santo" }),
			nextMonday: false,
		},
		{
			date: "2015-04-03",
			celebrationDate: "2015-04-03",
			name: expect.objectContaining({ es: "Viernes Santo" }),
			nextMonday: false,
		},
		{
			date: "2015-05-01",
			celebrationDate: "2015-05-01",
			name: expect.objectContaining({ es: "Día del Trabajo" }),
			nextMonday: false,
		},
		{
			date: "2015-05-14",
			celebrationDate: "2015-05-18",
			name: expect.objectContaining({ es: "Ascensión del Señor" }),
			nextMonday: true,
		},
		{
			date: "2015-06-04",
			celebrationDate: "2015-06-08",
			name: expect.objectContaining({ es: "Corpus Christi" }),
			nextMonday: true,
		},
		{
			date: "2015-06-12",
			celebrationDate: "2015-06-15",
			name: expect.objectContaining({ es: "Sagrado Corazón de Jesús" }),
			nextMonday: true,
		},
		{
			date: "2015-06-29",
			celebrationDate: "2015-06-29",
			name: expect.objectContaining({ es: "San Pedro y San Pablo" }),
			nextMonday: true,
		},
		{
			date: "2015-07-20",
			celebrationDate: "2015-07-20",
			name: expect.objectContaining({ es: "Grito de la Independencia" }),
			nextMonday: false,
		},
		{
			date: "2015-08-07",
			celebrationDate: "2015-08-07",
			name: expect.objectContaining({ es: "Batalla de Boyacá" }),
			nextMonday: false,
		},
		{
			date: "2015-08-15",
			celebrationDate: "2015-08-17",
			name: expect.objectContaining({ es: "Asunción de la Virgen" }),
			nextMonday: true,
		},
		{
			date: "2015-10-12",
			celebrationDate: "2015-10-12",
			name: expect.objectContaining({ es: "Día de la Raza" }),
			nextMonday: true,
		},
		{
			date: "2015-11-01",
			celebrationDate: "2015-11-02",
			name: expect.objectContaining({ es: "Todos los Santos" }),
			nextMonday: true,
		},
		{
			date: "2015-11-11",
			celebrationDate: "2015-11-16",
			name: expect.objectContaining({ es: "Independencia de Cartagena" }),
			nextMonday: true,
		},
		{
			date: "2015-12-08",
			celebrationDate: "2015-12-08",
			name: expect.objectContaining({ es: "Inmaculada Concepción" }),
			nextMonday: false,
		},
		{
			date: "2015-12-25",
			celebrationDate: "2015-12-25",
			name: expect.objectContaining({ es: "Navidad" }),
			nextMonday: false,
		},
	],
	2018: [
		{
			date: "2018-01-01",
			celebrationDate: "2018-01-01",
			name: expect.objectContaining({ es: "Año Nuevo" }),
			nextMonday: false,
		},
		{
			date: "2018-01-06",
			celebrationDate: "2018-01-08",
			name: expect.objectContaining({ es: "Reyes Magos" }),
			nextMonday: true,
		},
		{
			date: "2018-03-19",
			celebrationDate: "2018-03-19",
			name: expect.objectContaining({ es: "San José" }),
			nextMonday: true,
		},
		{
			date: "2018-03-29",
			celebrationDate: "2018-03-29",
			name: expect.objectContaining({ es: "Jueves Santo" }),
			nextMonday: false,
		},
		{
			date: "2018-03-30",
			celebrationDate: "2018-03-30",
			name: expect.objectContaining({ es: "Viernes Santo" }),
			nextMonday: false,
		},
		{
			date: "2018-05-01",
			celebrationDate: "2018-05-01",
			name: expect.objectContaining({ es: "Día del Trabajo" }),
			nextMonday: false,
		},
		{
			date: "2018-05-10",
			celebrationDate: "2018-05-14",
			name: expect.objectContaining({ es: "Ascensión del Señor" }),
			nextMonday: true,
		},
		{
			date: "2018-05-31",
			celebrationDate: "2018-06-04",
			name: expect.objectContaining({ es: "Corpus Christi" }),
			nextMonday: true,
		},
		{
			date: "2018-06-08",
			celebrationDate: "2018-06-11",
			name: expect.objectContaining({ es: "Sagrado Corazón de Jesús" }),
			nextMonday: true,
		},
		{
			date: "2018-06-29",
			celebrationDate: "2018-07-02",
			name: expect.objectContaining({ es: "San Pedro y San Pablo" }),
			nextMonday: true,
		},
		{
			date: "2018-07-20",
			celebrationDate: "2018-07-20",
			name: expect.objectContaining({ es: "Grito de la Independencia" }),
			nextMonday: false,
		},
		{
			date: "2018-08-07",
			celebrationDate: "2018-08-07",
			name: expect.objectContaining({ es: "Batalla de Boyacá" }),
			nextMonday: false,
		},
		{
			date: "2018-08-15",
			celebrationDate: "2018-08-20",
			name: expect.objectContaining({ es: "Asunción de la Virgen" }),
			nextMonday: true,
		},
		{
			date: "2018-10-12",
			celebrationDate: "2018-10-15",
			name: expect.objectContaining({ es: "Día de la Raza" }),
			nextMonday: true,
		},
		{
			date: "2018-11-01",
			celebrationDate: "2018-11-05",
			name: expect.objectContaining({ es: "Todos los Santos" }),
			nextMonday: true,
		},
		{
			date: "2018-11-11",
			celebrationDate: "2018-11-12",
			name: expect.objectContaining({ es: "Independencia de Cartagena" }),
			nextMonday: true,
		},
		{
			date: "2018-12-08",
			celebrationDate: "2018-12-08",
			name: expect.objectContaining({ es: "Inmaculada Concepción" }),
			nextMonday: false,
		},
		{
			date: "2018-12-25",
			celebrationDate: "2018-12-25",
			name: expect.objectContaining({ es: "Navidad" }),
			nextMonday: false,
		},
	],
};

const years = Object.keys(holidaysYears).map(Number);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

describe.each(years)("Gets all holidays for %p", (year) => {
	describe.each(months)(
		"Get only corresponding holidays for month %p",
		(month) => {
			it("should return all holidays for %p", () => {
				const holidays = colombianHolidays({ year, month });
				const expected = holidaysYears[year].filter(
					(holiday) => Number(holiday.celebrationDate.slice(5, 7)) === month,
				);
				expect(holidays).toEqual(expected);
			});

			it("should return all holidays for %p when using native dates", () => {
				const holidays = colombianHolidays({
					year,
					month,
					valueAsDate: true,
				});
				const expected = holidaysYears[year]
					.filter(
						(holiday) => Number(holiday.celebrationDate.slice(5, 7)) === month,
					)
					.map(transformStringsToDates);
				expect(holidays).toEqual(expected);
			});
		},
	);

	it("Should return holidays formatted as string for %p if no options given", () => {
		expect(colombianHolidays({ year })).toEqual(holidaysYears[year]);
	});

	it("Should return holidays formatted as string for %p if valueAsDate is set to false", () => {
		expect(colombianHolidays({ year, valueAsDate: false })).toEqual(
			holidaysYears[year],
		);
	});

	it("Should return holidays with native JS date for %p if valueAsDate is set to true", () => {
		expect(colombianHolidays({ year, valueAsDate: true })).toEqual(
			holidaysYears[year].map(transformStringsToDates),
		);
	});
});

describe("Gets all holidays for the current year", () => {
	it("Should return holidays for the current year when no year is given", () => {
		const currYear = new Date().getFullYear();
		const currHols = colombianHolidays();
		const holidaysInAYear = 18;
		expect(currHols).toEqual(colombianHolidays({ year: currYear }));
		expect(Array.isArray(currHols)).toBe(true);
		expect(currHols.length).toBe(holidaysInAYear);
	});

	describe("Current year", () => {
		it("should return 2 holidays for month 1 for current year when no year is given", () => {
			const holidays = colombianHolidays({ month: 1 });
			expect(Array.isArray(holidays)).toBe(true);
			expect(holidays.length).toBe(2);
		});

		it("Should return holidays for the current year when no year is given", () => {
			const currYear = new Date().getFullYear();
			const currHols = colombianHolidays();
			const holidaysInAYear = 18;
			expect(currHols).toEqual(colombianHolidays({ year: currYear }));
			expect(Array.isArray(currHols)).toBe(true);
			expect(currHols.length).toBe(holidaysInAYear);
		});
	});
});

describe("Should throw an error for a non valid year", () => {
	it(`should throw an error for a year below ${FIRST_HOLIDAY_YEAR}`, () => {
		expect(() => colombianHolidays({ year: FIRST_HOLIDAY_YEAR })).not.toThrow();
		expect(() => colombianHolidays({ year: FIRST_HOLIDAY_YEAR - 1 })).toThrow();
	});
	it(`should throw an error for a year above ${LAST_HOLIDAY_YEAR}`, () => {
		expect(() => colombianHolidays({ year: LAST_HOLIDAY_YEAR })).not.toThrow();
		expect(() => colombianHolidays({ year: LAST_HOLIDAY_YEAR + 1 })).toThrow();
	});
});

function transformStringsToDates(
	holiday: ColombianHoliday,
): ColombianHolidayWithNativeDate {
	return {
		date: new Date(holiday.date),
		celebrationDate: new Date(holiday.celebrationDate),
		name: holiday.name,
		nextMonday: holiday.nextMonday,
	};
}
