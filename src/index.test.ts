import timezone_mock, { TimeZone } from "timezone-mock";
import colombianHolidays, { FIRST_HOLIDAY_YEAR, LAST_HOLIDAY_YEAR } from ".";
import { ColombianHoliday } from "./types";

const holidaysYears: Record<number, ColombianHoliday[]> = {
  1976: [
    {
      date: "1976-01-01",
      celebrationDate: "1976-01-01",
      name: "Año Nuevo",
      nextMonday: false,
    },
    {
      date: "1976-01-06",
      celebrationDate: "1976-01-06",
      name: "Reyes Magos",
      nextMonday: false,
    },
    {
      date: "1976-03-19",
      celebrationDate: "1976-03-19",
      name: "San José",
      nextMonday: false,
    },
    {
      date: "1976-04-15",
      celebrationDate: "1976-04-15",
      name: "Jueves Santo",
      nextMonday: false,
    },
    {
      date: "1976-04-16",
      celebrationDate: "1976-04-16",
      name: "Viernes Santo",
      nextMonday: false,
    },
    {
      date: "1976-05-01",
      celebrationDate: "1976-05-01",
      name: "Día del Trabajo",
      nextMonday: false,
    },
    {
      date: "1976-05-27",
      celebrationDate: "1976-05-27",
      name: "Ascensión del Señor",
      nextMonday: false,
    },
    {
      date: "1976-06-17",
      celebrationDate: "1976-06-17",
      name: "Corpus Christi",
      nextMonday: false,
    },
    {
      date: "1976-06-25",
      celebrationDate: "1976-06-25",
      name: "Sagrado Corazón de Jesús",
      nextMonday: false,
    },
    {
      date: "1976-06-29",
      celebrationDate: "1976-06-29",
      name: "San Pedro y San Pablo",
      nextMonday: false,
    },
    {
      date: "1976-07-20",
      celebrationDate: "1976-07-20",
      name: "Grito de la Independencia",
      nextMonday: false,
    },
    {
      date: "1976-08-07",
      celebrationDate: "1976-08-07",
      name: "Batalla de Boyacá",
      nextMonday: false,
    },
    {
      date: "1976-08-15",
      celebrationDate: "1976-08-15",
      name: "Asunción de la Virgen",
      nextMonday: false,
    },
    {
      date: "1976-10-12",
      celebrationDate: "1976-10-12",
      name: "Día de la Raza",
      nextMonday: false,
    },
    {
      date: "1976-11-01",
      celebrationDate: "1976-11-01",
      name: "Todos los Santos",
      nextMonday: false,
    },
    {
      date: "1976-11-11",
      celebrationDate: "1976-11-11",
      name: "Independencia de Cartagena",
      nextMonday: false,
    },
    {
      date: "1976-12-08",
      celebrationDate: "1976-12-08",
      name: "Inmaculada Concepción",
      nextMonday: false,
    },
    {
      date: "1976-12-25",
      celebrationDate: "1976-12-25",
      name: "Navidad",
      nextMonday: false,
    },
  ],
  1983: [
    {
      date: "1983-01-01",
      celebrationDate: "1983-01-01",
      name: "Año Nuevo",
      nextMonday: false,
    },
    {
      date: "1983-01-06",
      celebrationDate: "1983-01-06",
      name: "Reyes Magos",
      nextMonday: false,
    },
    {
      date: "1983-03-19",
      celebrationDate: "1983-03-19",
      name: "San José",
      nextMonday: false,
    },
    {
      date: "1983-03-31",
      celebrationDate: "1983-03-31",
      name: "Jueves Santo",
      nextMonday: false,
    },
    {
      date: "1983-04-01",
      celebrationDate: "1983-04-01",
      name: "Viernes Santo",
      nextMonday: false,
    },
    {
      date: "1983-05-01",
      celebrationDate: "1983-05-01",
      name: "Día del Trabajo",
      nextMonday: false,
    },
    {
      date: "1983-05-12",
      celebrationDate: "1983-05-12",
      name: "Ascensión del Señor",
      nextMonday: false,
    },
    {
      date: "1983-06-02",
      celebrationDate: "1983-06-02",
      name: "Corpus Christi",
      nextMonday: false,
    },
    {
      date: "1983-06-10",
      celebrationDate: "1983-06-10",
      name: "Sagrado Corazón de Jesús",
      nextMonday: false,
    },
    {
      date: "1983-06-29",
      celebrationDate: "1983-06-29",
      name: "San Pedro y San Pablo",
      nextMonday: false,
    },
    {
      date: "1983-07-20",
      celebrationDate: "1983-07-20",
      name: "Grito de la Independencia",
      nextMonday: false,
    },
    {
      date: "1983-08-07",
      celebrationDate: "1983-08-07",
      name: "Batalla de Boyacá",
      nextMonday: false,
    },
    {
      date: "1983-08-15",
      celebrationDate: "1983-08-15",
      name: "Asunción de la Virgen",
      nextMonday: false,
    },
    {
      date: "1983-10-12",
      celebrationDate: "1983-10-12",
      name: "Día de la Raza",
      nextMonday: false,
    },
    {
      date: "1983-11-01",
      celebrationDate: "1983-11-01",
      name: "Todos los Santos",
      nextMonday: false,
    },
    {
      date: "1983-11-11",
      celebrationDate: "1983-11-11",
      name: "Independencia de Cartagena",
      nextMonday: false,
    },
    {
      date: "1983-12-08",
      celebrationDate: "1983-12-08",
      name: "Inmaculada Concepción",
      nextMonday: false,
    },
    {
      date: "1983-12-25",
      celebrationDate: "1983-12-25",
      name: "Navidad",
      nextMonday: false,
    },
  ],
  2015: [
    {
      date: "2015-01-01",
      celebrationDate: "2015-01-01",
      name: "Año Nuevo",
      nextMonday: false,
    },
    {
      date: "2015-01-06",
      celebrationDate: "2015-01-12",
      name: "Reyes Magos",
      nextMonday: true,
    },
    {
      date: "2015-03-19",
      celebrationDate: "2015-03-23",
      name: "San José",
      nextMonday: true,
    },
    {
      date: "2015-04-02",
      celebrationDate: "2015-04-02",
      name: "Jueves Santo",
      nextMonday: false,
    },
    {
      date: "2015-04-03",
      celebrationDate: "2015-04-03",
      name: "Viernes Santo",
      nextMonday: false,
    },
    {
      date: "2015-05-01",
      celebrationDate: "2015-05-01",
      name: "Día del Trabajo",
      nextMonday: false,
    },
    {
      date: "2015-05-14",
      celebrationDate: "2015-05-18",
      name: "Ascensión del Señor",
      nextMonday: true,
    },
    {
      date: "2015-06-04",
      celebrationDate: "2015-06-08",
      name: "Corpus Christi",
      nextMonday: true,
    },
    {
      date: "2015-06-12",
      celebrationDate: "2015-06-15",
      name: "Sagrado Corazón de Jesús",
      nextMonday: true,
    },
    {
      date: "2015-06-29",
      celebrationDate: "2015-06-29",
      name: "San Pedro y San Pablo",
      nextMonday: true,
    },
    {
      date: "2015-07-20",
      celebrationDate: "2015-07-20",
      name: "Grito de la Independencia",
      nextMonday: false,
    },
    {
      date: "2015-08-07",
      celebrationDate: "2015-08-07",
      name: "Batalla de Boyacá",
      nextMonday: false,
    },
    {
      date: "2015-08-15",
      celebrationDate: "2015-08-17",
      name: "Asunción de la Virgen",
      nextMonday: true,
    },
    {
      date: "2015-10-12",
      celebrationDate: "2015-10-12",
      name: "Día de la Raza",
      nextMonday: true,
    },
    {
      date: "2015-11-01",
      celebrationDate: "2015-11-02",
      name: "Todos los Santos",
      nextMonday: true,
    },
    {
      date: "2015-11-11",
      celebrationDate: "2015-11-16",
      name: "Independencia de Cartagena",
      nextMonday: true,
    },
    {
      date: "2015-12-08",
      celebrationDate: "2015-12-08",
      name: "Inmaculada Concepción",
      nextMonday: false,
    },
    {
      date: "2015-12-25",
      celebrationDate: "2015-12-25",
      name: "Navidad",
      nextMonday: false,
    },
  ],
  2018: [
    {
      date: "2018-01-01",
      celebrationDate: "2018-01-01",
      name: "Año Nuevo",
      nextMonday: false,
    },
    {
      date: "2018-01-06",
      celebrationDate: "2018-01-08",
      name: "Reyes Magos",
      nextMonday: true,
    },
    {
      date: "2018-03-19",
      celebrationDate: "2018-03-19",
      name: "San José",
      nextMonday: true,
    },
    {
      date: "2018-03-29",
      celebrationDate: "2018-03-29",
      name: "Jueves Santo",
      nextMonday: false,
    },
    {
      date: "2018-03-30",
      celebrationDate: "2018-03-30",
      name: "Viernes Santo",
      nextMonday: false,
    },
    {
      date: "2018-05-01",
      celebrationDate: "2018-05-01",
      name: "Día del Trabajo",
      nextMonday: false,
    },
    {
      date: "2018-05-10",
      celebrationDate: "2018-05-14",
      name: "Ascensión del Señor",
      nextMonday: true,
    },
    {
      date: "2018-05-31",
      celebrationDate: "2018-06-04",
      name: "Corpus Christi",
      nextMonday: true,
    },
    {
      date: "2018-06-08",
      celebrationDate: "2018-06-11",
      name: "Sagrado Corazón de Jesús",
      nextMonday: true,
    },
    {
      date: "2018-06-29",
      celebrationDate: "2018-07-02",
      name: "San Pedro y San Pablo",
      nextMonday: true,
    },
    {
      date: "2018-07-20",
      celebrationDate: "2018-07-20",
      name: "Grito de la Independencia",
      nextMonday: false,
    },
    {
      date: "2018-08-07",
      celebrationDate: "2018-08-07",
      name: "Batalla de Boyacá",
      nextMonday: false,
    },
    {
      date: "2018-08-15",
      celebrationDate: "2018-08-20",
      name: "Asunción de la Virgen",
      nextMonday: true,
    },
    {
      date: "2018-10-12",
      celebrationDate: "2018-10-15",
      name: "Día de la Raza",
      nextMonday: true,
    },
    {
      date: "2018-11-01",
      celebrationDate: "2018-11-05",
      name: "Todos los Santos",
      nextMonday: true,
    },
    {
      date: "2018-11-11",
      celebrationDate: "2018-11-12",
      name: "Independencia de Cartagena",
      nextMonday: true,
    },
    {
      date: "2018-12-08",
      celebrationDate: "2018-12-08",
      name: "Inmaculada Concepción",
      nextMonday: false,
    },
    {
      date: "2018-12-25",
      celebrationDate: "2018-12-25",
      name: "Navidad",
      nextMonday: false,
    },
  ],
};
const years = Object.keys(holidaysYears).map(Number);
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

describe.each(years)("Gets all holidays for %p", (year) => {
  it.each(timezones)("Should return holidays for %p", (timezone) => {
    timezone_mock.register(timezone);
    expect(colombianHolidays(year)).toEqual(holidaysYears[year]);
  });
});

describe.each(years)("Gets all holidays for %p", (year) => {
  it.each(timezones)("Should return holidays for %p", (timezone) => {
    timezone_mock.register(timezone);
    expect(colombianHolidays(year, true)).toEqual(
      holidaysYears[year].map((holiday) => ({
        date: new Date(holiday.date),
        celebrationDate: new Date(holiday.celebrationDate),
        name: holiday.name,
        nextMonday: holiday.nextMonday,
      }))
    );
  });
});

describe("Gets all holidays for the current year", () => {
  it("Should return holidays for the current year when no year is given", () => {
    const currYear = new Date().getFullYear();
    const currHols = colombianHolidays();
    const holidaysInAYear = 18;
    expect(currHols).toEqual(colombianHolidays(currYear));
    expect(Array.isArray(currHols)).toBe(true);
    expect(currHols.length).toBe(holidaysInAYear);
  });
});

describe("Should throw an error for a non valid year", () => {
  it(`should throw an error for a year below ${FIRST_HOLIDAY_YEAR}`, () => {
    expect(() => colombianHolidays(FIRST_HOLIDAY_YEAR)).not.toThrow();
    expect(() => colombianHolidays(FIRST_HOLIDAY_YEAR - 1)).toThrow();
  });
  it(`should throw an error for a year above ${LAST_HOLIDAY_YEAR}`, () => {
    expect(() => colombianHolidays(LAST_HOLIDAY_YEAR)).not.toThrow();
    expect(() => colombianHolidays(LAST_HOLIDAY_YEAR + 1)).toThrow();
  });
});
