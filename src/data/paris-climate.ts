// Paris monthly climate.
//
// Average high, average low, monthly rainfall total and number of wet days are
// ten-year observed means for Paris drawn from the ERA5 reanalysis via the
// Open-Meteo historical weather API. A "wet day" is a day recording measurable
// rainfall.
//
// Daylight is the length of day on the 15th of each month, computed for Paris
// at 48.8566N, 2.3522E using the standard NOAA solar position algorithm with the
// official sunrise and sunset zenith of 90.833 degrees. Sunset times quoted in
// the body copy come from the same calculation and are given to the nearest five
// minutes, in local Paris time including summer time.
//
// Paris is not a coastal city, so there is no sea temperature column. Nothing
// here is estimated or copied from a secondary aggregator.
//
// August through May are the figures the seasonal research pass produced and
// were re-checked against an independent ten-year pull of the same reanalysis on
// 29 July 2026; every value agreed to within 0.3C and a few millimetres. June and
// July, which appear only in the twelve-month table on the hub, come from that
// same independent pull because the research pass covered August to May only.

export interface ClimateRow {
  month: string;
  avgHighC: number;
  avgLowC: number;
  rainDays: number;
  rainMm: number;
  /** Length of day on the 15th, formatted. */
  daylight: string;
  /** Approximate sunset on the 15th, local Paris time. */
  sunset: string;
}

export const parisClimate: Record<string, ClimateRow> = {
  january: { month: 'January', avgHighC: 7.3, avgLowC: 1.7, rainDays: 13, rainMm: 64, daylight: '8h 46m', sunset: '17:20' },
  february: { month: 'February', avgHighC: 9.5, avgLowC: 2.3, rainDays: 11, rainMm: 54, daylight: '10h 15m', sunset: '18:10' },
  march: { month: 'March', avgHighC: 12.3, avgLowC: 3.9, rainDays: 14, rainMm: 72, daylight: '11h 54m', sunset: '18:55' },
  april: { month: 'April', avgHighC: 15.7, avgLowC: 5.5, rainDays: 10, rainMm: 51, daylight: '13h 45m', sunset: '20:40' },
  may: { month: 'May', avgHighC: 19.1, avgLowC: 9.4, rainDays: 13, rainMm: 76, daylight: '15h 20m', sunset: '21:25' },
  june: { month: 'June', avgHighC: 23.8, avgLowC: 14.0, rainDays: 12, rainMm: 74, daylight: '16h 09m', sunset: '21:55' },
  july: { month: 'July', avgHighC: 25.4, avgLowC: 15.5, rainDays: 9, rainMm: 57, daylight: '15h 47m', sunset: '21:50' },
  august: { month: 'August', avgHighC: 25.4, avgLowC: 15.2, rainDays: 10, rainMm: 66, daylight: '14h 26m', sunset: '21:05' },
  september: { month: 'September', avgHighC: 21.8, avgLowC: 12.3, rainDays: 9, rainMm: 60, daylight: '12h 40m', sunset: '20:05' },
  october: { month: 'October', avgHighC: 17.0, avgLowC: 9.4, rainDays: 12, rainMm: 72, daylight: '10h 54m', sunset: '19:00' },
  november: { month: 'November', avgHighC: 11.3, avgLowC: 5.4, rainDays: 12, rainMm: 63, daylight: '9h 14m', sunset: '17:10' },
  december: { month: 'December', avgHighC: 8.7, avgLowC: 3.5, rainDays: 13, rainMm: 76, daylight: '8h 21m', sunset: '16:55' },
};

export const MONTH_ORDER = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
] as const;
