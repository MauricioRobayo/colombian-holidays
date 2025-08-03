import { describe, expect, it } from "vitest";
import { getHoliday } from "./getHoliday";

describe("test getHoliday", () => {
	it("should return holiday for a holiday date object", () => {
		const expectedHoliday = {
			celebrationDate: "2018-01-01",
			date: "2018-01-01",
			name: { en: "New Year's Day", es: "Año Nuevo" },
			nextMonday: false,
		};
		const holiday = getHoliday(new Date("2018-01-01"));
		expect(holiday).toEqual(expectedHoliday);
	});

	it("should return holiday with values as dates for a holiday date object", () => {
		const expectedHoliday = {
			celebrationDate: new Date("2018-01-01T00:00:00.000Z"),
			date: new Date("2018-01-01T00:00:00.000Z"),
			name: { en: "New Year's Day", es: "Año Nuevo" },
			nextMonday: false,
		};
		const holiday = getHoliday(new Date("2018-01-01"), {
			valueAsDate: true,
		});
		expect(holiday).toEqual(expectedHoliday);
	});

	it("should return false for a non holiday date object", () => {
		expect(getHoliday(new Date("2018-01-02T05:00:00.000Z"))).toBe(null);
	});
});
