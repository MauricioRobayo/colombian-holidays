export interface BasicHoliday {
  name: string;
  nextMonday: boolean;
}

export interface DateHoliday extends BasicHoliday {
  date: string;
}

export interface EasterHoliday extends BasicHoliday {
  offset: number;
}

export interface ColombianHoliday extends BasicHoliday {
  date: string;
  celebrationDate: string;
}

export type Holiday = DateHoliday | EasterHoliday;
