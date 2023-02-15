export interface BasicHoliday {
  name: {
    en: string;
    es: string;
  };
  nextMonday: boolean;
}

export interface DateHoliday extends BasicHoliday {
  month: number;
  day: number;
}

export interface EasterHoliday extends BasicHoliday {
  offset: number;
}

export interface ColombianHoliday extends BasicHoliday {
  date: string;
  celebrationDate: string;
}

export interface ColombianHolidayWithNativeDate extends BasicHoliday {
  date: Date;
  celebrationDate: Date;
}

export type Holiday = DateHoliday | EasterHoliday;
