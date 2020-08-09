export type HolidayType = 'FixDate' | 'NextMonday' | 'RelativeToEaster';

export interface BasicHoliday {
  name: string;
  type: HolidayType;
}

export interface Holiday extends BasicHoliday {
  day: number;
  month: number;
}

export interface Easter extends BasicHoliday {
  offset: number;
}

export interface ColombianHoliday extends BasicHoliday {
  date: string;
  celebrationDate: string;
}
