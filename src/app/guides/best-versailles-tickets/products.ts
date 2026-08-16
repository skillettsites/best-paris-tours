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

const guidedPalace = catalogueTour('versailles-palace-tour-gardens-with-optional-full-access');
const fullAccess = catalogueTour('palace-of-versailles-full-access-passport-ticket');
const withTransport = catalogueTour('skip-the-line-versailles-palace-garden-tour-with-transport');

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
  when: string;
  why: string;
  who: string;
  bookingNote: string;
};

export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best for a first visit',
    gygTourId: guidedPalace.gygTourId,
    name: guidedPalace.title,
    shortName: guidedPalace.shortTitle,
    href: guidedPalace.affiliateUrl,
    imageUrl: cardImage(guidedPalace.imageUrl),
    imageAlt: 'GetYourGuide group on the gravel path beside the Palace of Versailles and its gardens',
    price: guidedPalace.price,
    currency: guidedPalace.currency,
    duration: guidedPalace.duration,
    rating: guidedPalace.rating,
    reviewCount: guidedPalace.reviewCount,
    bestFor: 'First visit, guide through the palace',
    guided: true,
    refundable: true,
    when: 'About two hours at the palace',
    why: 'This is the Versailles ticket most first-time visitors should book. A licensed guide takes you through the Hall of Mirrors and the State Apartments on a skip-the-line slot, then you have garden access. You still get yourself to Versailles Château Rive Gauche. You are paying for the guide and the reserved palace entry, not for a coach from Paris.',
    who: 'First-time visitors who will take the RER and want the rooms explained, and anyone who wants a booking they can still cancel.',
    bookingNote: 'Free cancellation. Instant confirmation',
  },
  {
    rank: 2,
    badge: 'Best value / most booked',
    gygTourId: fullAccess.gygTourId,
    name: fullAccess.title,
    shortName: fullAccess.shortTitle,
    href: fullAccess.affiliateUrl,
    imageUrl: cardImage(fullAccess.imageUrl),
    imageAlt: 'Hall of Mirrors inside the Palace of Versailles, chandeliers and gilded arches',
    price: fullAccess.price,
    currency: fullAccess.currency,
    duration: fullAccess.duration,
    rating: fullAccess.rating,
    reviewCount: fullAccess.reviewCount,
    bestFor: 'The cheapest full-estate ticket',
    guided: false,
    refundable: false,
    when: 'Timed palace slot, full-day estate',
    why: 'This is the Versailles product people actually book: more than 46,000 GetYourGuide reviews and the lowest typical from-price of the three. It is a one-day passport for the palace, the Trianon, Marie Antoinette’s Estate and the gardens. There is no guide and the listing is non-refundable, so only book a date you are sure of.',
    who: 'Independent visitors who will handle the train, want the whole estate, and do not need a guide in the Hall of Mirrors.',
    bookingNote: 'Non-refundable. Instant confirmation',
  },
  {
    rank: 3,
    badge: 'Best with transport from Paris',
    gygTourId: withTransport.gygTourId,
    name: withTransport.title,
    shortName: withTransport.shortTitle,
    href: withTransport.affiliateUrl,
    imageUrl: cardImage(withTransport.imageUrl),
    imageAlt: 'Guide pointing out the Hall of Mirrors ceiling inside the Palace of Versailles',
    price: withTransport.price,
    currency: withTransport.currency,
    duration: withTransport.duration,
    rating: withTransport.rating,
    reviewCount: withTransport.reviewCount,
    bestFor: 'A half-day from Paris without the RER',
    guided: true,
    refundable: true,
    when: 'Half-day, 3 to 3.5 hours',
    why: 'The listing bundles skip-the-line palace entry, a guided walk through the Hall of Mirrors and Grand Apartments, free time in the gardens, and round-trip transport from Paris. Book this if you do not want to plan the RER C yourself. It is a half-day, not a full estate wander.',
    who: 'Visitors who want the logistics handled, including anyone on a first Paris trip who would rather not change trains.',
    bookingNote: 'Free cancellation. Instant confirmation',
  },
];
