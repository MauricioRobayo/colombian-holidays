export type HolidayType = 'FixedDate' | 'NextMonday' | 'RelativeToEaster';

export enum Months {
  January,
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

export interface BasicHoliday {
  type: HolidayType;
  name: string;
}

export interface Holiday extends BasicHoliday {
  day: number;
  month: Months;
}

export interface Easter extends BasicHoliday {
  offset: number;
}

export interface ColombianHoliday {
  date: string;
  celebrationDate: string;
  name: string;
}
