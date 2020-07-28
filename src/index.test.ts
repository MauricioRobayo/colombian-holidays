import getColombianHolidays from ".";
import { ColombianHoliday } from "./types";

describe("Gets all holidays for a given year", () => {
  const holidaysYears: Record<number, ColombianHoliday[]> = {
    2015: [
      {
        date: "2015-01-01",
        celebrationDate: "2015-01-01",
        name: "Año Nuevo",
      },
      {
        date: "2015-05-01",
        celebrationDate: "2015-05-01",
        name: "Día del Trabajo",
      },
      {
        date: "2015-07-20",
        celebrationDate: "2015-07-20",
        name: "Grito de la Independencia",
      },
      {
        date: "2015-08-07",
        celebrationDate: "2015-08-07",
        name: "Batalla de Boyacá",
      },
      {
        date: "2015-12-08",
        celebrationDate: "2015-12-08",
        name: "Inmaculada Concepción",
      },
      {
        date: "2015-12-25",
        celebrationDate: "2015-12-25",
        name: "Navidad",
      },
      {
        date: "2015-01-06",
        celebrationDate: "2015-01-12",
        name: "Reyes Magos",
      },
      {
        date: "2015-03-19",
        celebrationDate: "2015-03-23",
        name: "San José",
      },
      {
        date: "2015-06-29",
        celebrationDate: "2015-06-29",
        name: "San Pedro y San Pablo",
      },
      {
        date: "2015-08-15",
        celebrationDate: "2015-08-17",
        name: "Asunción de la Virgen",
      },
      {
        date: "2015-10-12",
        celebrationDate: "2015-10-12",
        name: "Día de la Raza",
      },
      {
        date: "2015-11-01",
        celebrationDate: "2015-11-02",
        name: "Todos los Santos",
      },
      {
        date: "2015-11-11",
        celebrationDate: "2015-11-16",
        name: "Independencia de Cartagena",
      },
      {
        date: "2015-04-02",
        celebrationDate: "2015-04-02",
        name: "Jueves Santo",
      },
      {
        date: "2015-04-03",
        celebrationDate: "2015-04-03",
        name: "Viernes Santo",
      },
      {
        date: "2015-05-18",
        celebrationDate: "2015-05-18",
        name: "Ascensión de Jesús",
      },
      {
        date: "2015-06-08",
        celebrationDate: "2015-06-08",
        name: "Corpus Christi",
      },
      {
        date: "2015-06-15",
        celebrationDate: "2015-06-15",
        name: "Sagrado Corazón de Jesús",
      },
    ],
    2018: [
      {
        date: "2018-01-01",
        celebrationDate: "2018-01-01",
        name: "Año Nuevo",
      },
      {
        date: "2018-05-01",
        celebrationDate: "2018-05-01",
        name: "Día del Trabajo",
      },
      {
        date: "2018-07-20",
        celebrationDate: "2018-07-20",
        name: "Grito de la Independencia",
      },
      {
        date: "2018-08-07",
        celebrationDate: "2018-08-07",
        name: "Batalla de Boyacá",
      },
      {
        date: "2018-12-08",
        celebrationDate: "2018-12-08",
        name: "Inmaculada Concepción",
      },
      {
        date: "2018-12-25",
        celebrationDate: "2018-12-25",
        name: "Navidad",
      },
      {
        date: "2018-01-06",
        celebrationDate: "2018-01-08",
        name: "Reyes Magos",
      },
      {
        date: "2018-03-19",
        celebrationDate: "2018-03-19",
        name: "San José",
      },
      {
        date: "2018-06-29",
        celebrationDate: "2018-07-02",
        name: "San Pedro y San Pablo",
      },
      {
        date: "2018-08-15",
        celebrationDate: "2018-08-20",
        name: "Asunción de la Virgen",
      },
      {
        date: "2018-10-12",
        celebrationDate: "2018-10-15",
        name: "Día de la Raza",
      },
      {
        date: "2018-11-01",
        celebrationDate: "2018-11-05",
        name: "Todos los Santos",
      },
      {
        date: "2018-11-11",
        celebrationDate: "2018-11-12",
        name: "Independencia de Cartagena",
      },
      {
        date: "2018-03-29",
        celebrationDate: "2018-03-29",
        name: "Jueves Santo",
      },
      {
        date: "2018-03-30",
        celebrationDate: "2018-03-30",
        name: "Viernes Santo",
      },
      {
        date: "2018-05-14",
        celebrationDate: "2018-05-14",
        name: "Ascensión de Jesús",
      },
      {
        date: "2018-06-04",
        celebrationDate: "2018-06-04",
        name: "Corpus Christi",
      },
      {
        date: "2018-06-11",
        celebrationDate: "2018-06-11",
        name: "Sagrado Corazón de Jesús",
      },
    ],
  };
  Object.keys(holidaysYears).forEach((holidaysYear) => {
    it(`Should return holidays for ${holidaysYear}`, () => {
      const year = Number(holidaysYear);
      expect(getColombianHolidays(year)).toEqual(holidaysYears[year]);
    });
  });
  it("Should return holidays for the current year when no year given", () => {
    const currYear = new Date().getFullYear();
    const currHols = getColombianHolidays();
    expect(currHols).toEqual(getColombianHolidays(currYear));
    expect(Array.isArray(currHols)).toBe(true);
    expect(currHols.length).toBe(18);
  });
});

describe("Should return error for a non valid year", () => {
  it("should throw an error for a year below 1984", () => {
    expect(() => {
      getColombianHolidays(1983);
    }).toThrow("The year should be between 1984 and 9999");
  });
  it("should throw an error for a year above 9999", () => {
    expect(() => {
      getColombianHolidays(10000);
    }).toThrow("The year should be between 1984 and 9999");
  });
});
