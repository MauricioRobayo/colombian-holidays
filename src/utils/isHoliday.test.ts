import timezone_mock, { TimeZone } from "timezone-mock";
import { isHoliday } from "./isHoliday";

const timezones: TimeZone[] = [
  "US/Pacific",
  "US/Eastern",
  "Brazil/East",
  "UTC",
  "Europe/London",
  "Australia/Adelaide",
];

afterEach(() => {
  timezone_mock.unregister();
});

describe("test isHoliday", () => {
  describe.each(timezones)("%p", (timezone) => {
    timezone_mock.register(timezone);

    it(`should return true for a holiday date object`, () => {
      expect(isHoliday(new Date("2018-01-01"))).toBe(true);
    });

    it(`should return false for a non holiday date object`, () => {
      expect(isHoliday(new Date("2018-01-02"))).toBe(false);
    });
  });
});
