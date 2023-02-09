import { isHoliday } from "./isHoliday";

describe("test isHoliday", () => {
  it(`should return true for a holiday date object`, () => {
    expect(isHoliday(new Date("2018-01-01T05:00:00.000Z"))).toBe(true);
  });
  it(`should return false for a non holiday date object`, () => {
    expect(isHoliday(new Date("2018-01-02T05:00:00.000Z"))).toBe(false);
  });
});
