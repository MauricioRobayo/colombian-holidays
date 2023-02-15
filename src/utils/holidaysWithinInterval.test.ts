import { holidaysWithinInterval } from "./holidaysWithinInterval";

describe("holidaysWithinInterval", () => {
  it("should throw an error if end is equal to start", () => {
    const start = new Date("2022-01-01");
    const end = new Date("2022-01-01");
    expect(() => holidaysWithinInterval({ start, end })).toThrowError(
      "end date should be greater than start date"
    );
  });

  it("should throw an error if start is greater than end", () => {
    const start = new Date("2022-01-02");
    const end = new Date("2022-01-01");
    expect(() => holidaysWithinInterval({ start, end })).toThrowError(
      "end date should be greater than start date"
    );
  });

  it("should return the correct number of holidays overlapping two years", () => {
    const start = new Date("2020-12-01");
    const end = new Date("2021-01-15");
    const result = holidaysWithinInterval({ end, start });

    expect(result).toEqual([
      {
        celebrationDate: "2020-12-08",
        date: "2020-12-08",
        name: expect.objectContaining({ es: "Inmaculada Concepción" }),
        nextMonday: false,
      },
      {
        celebrationDate: "2020-12-25",
        date: "2020-12-25",
        name: expect.objectContaining({ es: "Navidad" }),
        nextMonday: false,
      },
      {
        celebrationDate: "2021-01-01",
        date: "2021-01-01",
        name: expect.objectContaining({ es: "Año Nuevo" }),
        nextMonday: false,
      },
      {
        celebrationDate: "2021-01-11",
        date: "2021-01-06",
        name: expect.objectContaining({ es: "Reyes Magos" }),
        nextMonday: true,
      },
    ]);
  });

  it("should return the correct number of holidays inclusive", () => {
    const start = new Date("2021-01-01");
    const end = new Date("2021-01-11");
    const result = holidaysWithinInterval({ start, end });

    expect(result).toEqual([
      {
        celebrationDate: "2021-01-01",
        date: "2021-01-01",
        name: expect.objectContaining({ es: "Año Nuevo" }),
        nextMonday: false,
      },
      {
        celebrationDate: "2021-01-11",
        date: "2021-01-06",
        name: expect.objectContaining({ es: "Reyes Magos" }),
        nextMonday: true,
      },
    ]);
  });

  it("should return the correct number of holidays for a given year", () => {
    const start = new Date("2021-01-01");
    const end = new Date("2021-12-31");
    const result = holidaysWithinInterval({ start, end });

    expect(result.length).toBe(18);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          date: expect.any(String),
          celebrationDate: expect.any(String),
        }),
      ])
    );
  });

  it("should return the correct number of holidays for a given year with native JS dates", () => {
    const start = new Date("2021-01-01");
    const end = new Date("2021-12-31");
    const result = holidaysWithinInterval({
      start,
      end,
      returnNativeDate: true,
    });
    expect(result.length).toBe(18);
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          date: expect.any(Date),
          celebrationDate: expect.any(Date),
        }),
      ])
    );
  });

  it("should return the correct number of holidays overlapping three years", () => {
    const start = new Date("2014-07-20");
    const end = new Date("2016-03-25");
    const result = holidaysWithinInterval({ start, end });

    expect(result.length).toBe(31);
  });
});
