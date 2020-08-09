export type HolidayType = 'FixDate' | 'NextMonday' | 'RelativeToEaster';

export interface BasicHoliday {
  type: HolidayType;
  name: string;
}

export interface Holiday extends BasicHoliday {
  day: number;
  month: number;
}

export interface Easter extends BasicHoliday {
  offset: number;
}

export interface ColombianHoliday {
  date: string;
  celebrationDate: string;
  name: string;
}
