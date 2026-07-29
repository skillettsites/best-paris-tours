import { MonthContent } from '@/lib/season-types';
import { august, september, october, november, december } from './paris-months-a';
import { january, february, march, april, may } from './paris-months-b';

export const monthPages: MonthContent[] = [
  august, september, october, november, december,
  january, february, march, april, may,
];

export function getMonthBySlug(slug: string): MonthContent | undefined {
  return monthPages.find((m) => m.slug === slug);
}

/** Footer month strip order, chronological across the season. */
export const monthStrip = monthPages.map((m) => ({ month: m.month, href: `/${m.slug}` }));

export interface HubMonth {
  /** Anchor id and climate key */
  key: string;
  month: string;
  /** Path to the month page, or a hub anchor where no page exists. */
  href: string;
  hasPage: boolean;
  /** 40 to 60 words, standalone, at least one hard number, no links inside. */
  capsule: string;
  verdict: string;
}

// Twelve capsules, calendar order. June and July have no dedicated page in this
// build, so they link to their own section on this hub.
export const hubMonths: HubMonth[] = [
  {
    key: 'january',
    month: 'January',
    href: '/paris-in-january',
    hasPage: true,
    verdict: 'Coldest, emptiest, cheapest',
    capsule:
      'The coldest month at 7.3C highs and 1.7C lows, with thirteen wet days. From about the 5th Paris is emptier than at any other point in the year and Louvre slots are available same-day. The Eiffel Tower summit usually takes its annual maintenance shutdown somewhere in this part of the winter.',
  },
  {
    key: 'february',
    month: 'February',
    href: '/paris-in-february',
    hasPage: true,
    verdict: 'Driest of the winter',
    capsule:
      'The driest month of the Paris winter at 54mm across eleven wet days, and the first since October with daylight over ten hours. Prices stay near the January floor. School holidays run 6 to 21 February, which fills the family attractions without moving hotel rates much.',
  },
  {
    key: 'march',
    month: 'March',
    href: '/paris-in-march',
    hasPage: true,
    verdict: 'Wettest, but Easter falls here',
    capsule:
      'Fourteen wet days, the highest count of the year, but Easter Sunday is 28 March 2027 so the whole of Holy Week sits in March. The clocks go forward the same day, pushing sunset from about 19:15 to roughly 20:15. Five Mondays means five days without Versailles.',
  },
  {
    key: 'april',
    month: 'April',
    href: '/paris-in-april',
    hasPage: true,
    verdict: 'Driest month of the year',
    capsule:
      'The driest month at 51mm over ten wet days, with 15.7C highs and sunset past 20:40. Monet\'s garden at Giverny reopens and the Versailles fountains restart after five months off. Because Easter already passed on 28 March, April 2027 gets spring conditions without the Easter price premium.',
  },
  {
    key: 'may',
    month: 'May',
    href: '/paris-in-may',
    hasPage: true,
    verdict: 'Longest days, one terrible date',
    capsule:
      'The longest days of the year at 15 hours 20 minutes, with everything seasonal running. It also contains the worst single date in the calendar: Saturday 1 May, when the Louvre, the Musee d\'Orsay, the Orangerie, Sainte-Chapelle and Versailles all close together for Labour Day.',
  },
  {
    key: 'june',
    month: 'June',
    href: '/best-time-to-visit-paris#june',
    hasPage: false,
    verdict: 'Peak daylight, peak price',
    capsule:
      'The longest daylight of the year at around 16 hours 9 minutes in mid-June, with 23.8C highs and twelve wet days. The Fete de la Musique on 21 June puts free live music on street corners across the city, and Nuit Blanche now takes place in June rather than in October.',
  },
  {
    key: 'july',
    month: 'July',
    href: '/best-time-to-visit-paris#july',
    hasPage: false,
    verdict: 'Fewest wet days of the year',
    capsule:
      'Nine wet days and 57mm makes July the driest month by rainfall after April, with 25.4C highs. Bastille Day on 14 July brings a military parade and fireworks at the Trocadero. Advance booking at the Louvre becomes compulsory from 1 July and stays that way until 31 August.',
  },
  {
    key: 'august',
    month: 'August',
    href: '/paris-in-august',
    hasPage: true,
    verdict: 'Warmest, and milder than expected',
    capsule:
      'The warmest month at 25.4C, which is around seven degrees cooler than a Roman or Barcelona August. Sunset near 21:05 gives the longest usable evenings of the ten-month guide. Louvre advance booking stays compulsory until 31 August, and Paris Plages runs on the riverbanks until 30 August.',
  },
  {
    key: 'september',
    month: 'September',
    href: '/paris-in-september',
    hasPage: true,
    verdict: 'Best all-round month',
    capsule:
      'Nine wet days, the fewest of any month in Paris, paired with 21.8C highs and no public holiday at all. Heritage Days on 19 and 20 September open hundreds of normally-closed buildings for free. Fashion Week from the 28th takes hotel prices with it, so book the first three weeks.',
  },
  {
    key: 'october',
    month: 'October',
    href: '/paris-in-october',
    hasPage: true,
    verdict: 'Most congested and most expensive',
    capsule:
      'Four major trade events land in the same month, including the Mondial de l\'Auto from 12 to 18 October, which puts hotel demand at its annual peak. The clocks go back on 25 October and sunset drops from about 18:45 to 17:40 overnight. Nuit Blanche is no longer an October event.',
  },
  {
    key: 'november',
    month: 'November',
    href: '/paris-in-november',
    hasPage: true,
    verdict: 'Best value, 1 to 18 November',
    capsule:
      'The best value stretch of the year runs 1 to 18 November, between the autumn trade fairs and the Christmas market pricing. The cost is real: Monet\'s garden at Giverny and the Versailles Musical Fountains both close for the winter on 1 November and do not return until the spring.',
  },
  {
    key: 'december',
    month: 'December',
    href: '/paris-in-december',
    hasPage: true,
    verdict: 'Shortest days, best lit',
    capsule:
      'The shortest days of the year at 8 hours 21 minutes, with sunset around 16:55, which means illuminated Paris is available from five in the afternoon. The Louvre, the Musee d\'Orsay and Versailles all close on 25 December. Versailles runs a seasonal King\'s Tour from 12 December to 2 January.',
  },
];
