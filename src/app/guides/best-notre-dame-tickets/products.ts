import { GYG_CAMPAIGN, GYG_PARTNER_ID } from '@/lib/constants';
import { getTourBySlug } from '@/data/tours';

const PARAMS = `partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher&cmp=${GYG_CAMPAIGN}`;

function catalogueTour(slug: string) {
  const tour = getTourBySlug(slug);
  if (!tour) {
    throw new Error(`Missing GetYourGuide catalogue tour: ${slug}`);
  }
  return tour;
}

function gygActivity(id: string): string {
  return `https://www.getyourguide.com/activity/-t${id}?${PARAMS}`;
}

function cardImage(url: string): string {
  return url.replace(/\/(39|53|73|145)\.jpg$/i, '/98.jpg');
}

const interiorExterior = catalogueTour('parisnotre-dame-cathedral-interior-and-exterior-guided-tour');

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

// Live GetYourGuide figures for the two extra Notre-Dame products were
// checked 16 August 2026 (en-GB, currency=GBP) via the partner activities widget.
export const TOP_THREE: RankedTicket[] = [
  {
    rank: 1,
    badge: 'Best for a first visit',
    gygTourId: interiorExterior.gygTourId,
    name: interiorExterior.title,
    shortName: interiorExterior.shortTitle,
    href: interiorExterior.affiliateUrl,
    imageUrl: cardImage(interiorExterior.imageUrl),
    imageAlt: 'Small-group guide on the Parvis in front of Notre-Dame Cathedral',
    price: interiorExterior.price,
    currency: interiorExterior.currency,
    duration: interiorExterior.duration,
    rating: interiorExterior.rating,
    reviewCount: interiorExterior.reviewCount,
    bestFor: 'First visit, guide inside and out',
    guided: true,
    refundable: true,
    when: 'One-hour small-group slot',
    why: 'This is the Notre-Dame ticket most first-time visitors should book. A certified guide walks the west facade on the Parvis, then goes inside with you. General entry to the cathedral is free: you are paying for the guide and a group of five, not for a door ticket. The listing does not include skip-the-line access. You queue in the ordinary line with the guide.',
    who: 'First-time visitors who want the portals and the restored interior explained, and anyone who wants a booking they can still cancel.',
    bookingNote: 'Free cancellation. Instant confirmation',
  },
  {
    rank: 2,
    badge: 'Best value / most booked',
    gygTourId: '1156458',
    name: 'Paris: Notre-Dame The Restored Masterpiece Guided Tour',
    shortName: 'Restored Masterpiece guided tour',
    href: gygActivity('1156458'),
    imageUrl: cardImage(
      'https://cdn.getyourguide.com/img/tour/e1e6cdb53a28eaadaa99e2c7e23da37cfd1a14e255077b62cde31a45cb5b1228.jpg/145.jpg',
    ),
    imageAlt: 'West facade and towers of Notre-Dame Cathedral from the Parvis',
    price: 9,
    currency: 'GBP',
    duration: '45–75 minutes',
    rating: 4.5,
    reviewCount: 4511,
    bestFor: 'The cheapest highly-reviewed guide',
    guided: true,
    refundable: true,
    when: '45 to 75 minutes, small group',
    why: 'This is the Notre-Dame tour people actually book: 4,511 GetYourGuide reviews, a live guide, and the lowest typical from-price of the three. It covers the Gothic symbols and the restored interior. It is not a paid entry ticket. Cathedral admission stays free.',
    who: 'Visitors who want a guide without paying the small-group premium, and anyone comparing the cheapest well-reviewed Notre-Dame tour.',
    bookingNote: 'Free cancellation. Instant confirmation',
  },
  {
    rank: 3,
    badge: 'Best reserved / priority slot',
    gygTourId: '607051',
    name: 'Paris: Notre-Dame Cathedral Skip-the-Line Guided Tour',
    shortName: 'Reserved-access guided tour',
    href: gygActivity('607051'),
    imageUrl: cardImage(
      'https://cdn.getyourguide.com/img/tour/5a0c1de343b6ddcceb4ea6170693900091913d9e93393b900ed4fe3139e75bf5.jpg/145.jpg',
    ),
    imageAlt: 'Notre-Dame Cathedral west facade from the visitor plaza',
    price: 9,
    currency: 'GBP',
    duration: '1 hour',
    rating: 4.8,
    reviewCount: 316,
    bestFor: 'A reserved or priority slot',
    guided: true,
    refundable: true,
    when: 'One-hour reserved slot',
    why: 'The listing sells reserved priority entry with a licensed guide through the interior and exterior. Official cathedral entry is still free. You are buying a reserved slot and a guide, not a secret paid door. Compare start times against the interior-and-exterior tour if you care more about group size than the reserved-access claim.',
    who: 'Visitors who want a reserved slot on a busy day, including anyone who needs a wheelchair-accessible listing.',
    bookingNote: 'Free cancellation. Instant confirmation',
  },
];
