import { getTourBySlug } from '@/data/tours';

function catalogueTour(slug: string) {
  const tour = getTourBySlug(slug);
  if (!tour) {
    throw new Error(`Missing GetYourGuide catalogue tour: ${slug}`);
  }
  return tour;
}

function cardImage(url: string): string {
  return url.replace(/\/(39|53|73|145)\.jpg$/i, '/98.jpg').replace(/\/(39|53|73|145)\.jpeg$/i, '/98.jpeg');
}

const optionalSummit = catalogueTour('paris-eiffel-tower-entry-ticket-with-optional-summit-access');
const reservedAccess = catalogueTour('eiffel-tower-dedicated-reserved-access-summit-or-2nd-floor');
const summitOrSecond = catalogueTour('paris-eiffel-tower-summit-or-second-floor-access');

export type RankedTicket = {
  rank: 1 | 2 | 3;
  badge: string;
  gygTourId: string;
  name: string;
  shortName: string;
  href: string;
  imageUrl: string;
  imageAlt: string;
  price: number;
  currency: string;
  duration: string;
  rating: number;
  reviewCount: number;
  bestFor: string;
  guided: boolean;
  refundable: boolean;
  cancellation: string;
  when: string;
  why: string;
  who: string;
  bookingNote: string;
};

export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best for a first visit',
    gygTourId: optionalSummit.gygTourId,
    name: optionalSummit.title,
    shortName: optionalSummit.shortTitle,
    href: optionalSummit.affiliateUrl,
    imageUrl: cardImage(optionalSummit.imageUrl),
    imageAlt: 'Visitors on a Paris bridge with the Eiffel Tower behind them',
    price: optionalSummit.price,
    currency: optionalSummit.currency,
    duration: optionalSummit.duration,
    rating: optionalSummit.rating,
    reviewCount: optionalSummit.reviewCount,
    bestFor: 'First visit, optional summit',
    guided: false,
    refundable: false,
    cancellation: '50% refund up to 24h',
    when: '1.5 to 2 hours at the tower',
    why: 'This is the Eiffel Tower ticket most first-time visitors should book. Elevator access to the first and second floors, with an optional summit upgrade at checkout. A host meets you nearby and takes you to the second floor. The listing is not a full guided tour, and it is not a Seine cruise.',
    who: 'First-time visitors who want the classic tower visit and may want the summit, and anyone comparing the highest-rated GetYourGuide tower ticket.',
    bookingNote: '50% refund if cancelled 24h ahead. Instant confirmation',
  },
  {
    rank: 2,
    badge: 'Best reserved slot',
    gygTourId: reservedAccess.gygTourId,
    name: reservedAccess.title,
    shortName: reservedAccess.shortTitle,
    href: reservedAccess.affiliateUrl,
    imageUrl: cardImage(reservedAccess.imageUrl),
    imageAlt: 'Looking up through the iron lattice arches at the base of the Eiffel Tower',
    price: reservedAccess.price,
    currency: reservedAccess.currency,
    duration: reservedAccess.duration,
    rating: reservedAccess.rating,
    reviewCount: reservedAccess.reviewCount,
    bestFor: 'A dedicated reserved entrance',
    guided: true,
    refundable: false,
    cancellation: 'Non-refundable',
    when: 'Reserved slot, time varies',
    why: 'This is the reserved-access listing people actually book: more than 19,000 GetYourGuide reviews and a dedicated reserved entrance, with summit or second-floor options. The listing includes a guided visit. It is non-refundable, so only book a date you are sure of.',
    who: 'Visitors who want a reserved entrance and a host, and anyone who can lock a date without needing a refund.',
    bookingNote: 'Non-refundable. Instant confirmation',
  },
  {
    rank: 3,
    badge: 'Best summit or second-floor choice',
    gygTourId: summitOrSecond.gygTourId,
    name: summitOrSecond.title,
    shortName: summitOrSecond.shortTitle,
    href: summitOrSecond.affiliateUrl,
    imageUrl: cardImage(summitOrSecond.imageUrl),
    imageAlt: 'View over the Champ de Mars from an Eiffel Tower observation deck',
    price: summitOrSecond.price,
    currency: summitOrSecond.currency,
    duration: summitOrSecond.duration,
    rating: summitOrSecond.rating,
    reviewCount: summitOrSecond.reviewCount,
    bestFor: 'Second floor, or the summit if you upgrade',
    guided: true,
    refundable: false,
    cancellation: '50% refund up to 24h',
    when: '1.5 to 2 hours at the tower',
    why: 'You meet a guide beside the tower for a short introduction, take the elevator to the second floor, then stay as long as you like. Upgrade at checkout if you want the summit. There is no reserved lift from the second floor to the top: summit holders still queue there. Security and elevator waits still happen.',
    who: 'Visitors who want a short briefing then free time on the second floor, and anyone deciding at booking whether the summit is worth the extra wait.',
    bookingNote: '50% refund if cancelled 24h ahead. Instant confirmation',
  },
];
