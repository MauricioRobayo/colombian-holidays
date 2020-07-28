export enum HolidayType {
  FixedDate,
  NextMonday,
  RelativeToEaster,
}

export enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export enum DayOfTheWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export interface BasicHoliday {
  type: HolidayType;
  name: string;
}

export interface Holiday extends BasicHoliday {
  day: number;
  month: Months;
}

export interface Easter extends BasicHoliday {
  name: string;
  offset: number;
}

export interface ColombianHoliday {
  date: string;
  celebrationDate: string;
  name: string;
}