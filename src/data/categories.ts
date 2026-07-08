import { Category } from '@/lib/types';

export const categories: Category[] = [
  {
    slug: 'skip-the-line',
    title: 'Skip-the-Line Tickets',
    metaTitle: 'Skip-the-Line Tickets in Paris 2026',
    metaDescription: 'Browse the best skip-the-line tickets in Paris. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best skip-the-line tickets in Paris, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated skip-the-line tickets in Paris, booked direct through GetYourGuide.',
    icon: '🎟️',
    tourSlugs: ['paris-1-hour-seine-cruise-departing-from-the-eiffel-tower', 'disneyland-paris-2-parks-ticket-1-2-3-4-5-day', 'palace-of-versailles-full-access-passport-ticket', 'paris-night-cruise-on-the-seine-river-with-aperitif', 'paris-eiffel-tower-entry-ticket-with-optional-summit-access', 'eiffel-tower-dedicated-reserved-access-summit-or-2nd-floor'],
    faqs: [
      { question: 'How do I book skip-the-line tickets in Paris?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'guided-tours',
    title: 'Guided Tours',
    metaTitle: 'Guided Tours in Paris 2026',
    metaDescription: 'Browse the best guided tours in Paris. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best guided tours in Paris, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated guided tours in Paris, booked direct through GetYourGuide.',
    icon: '🧑‍🏫',
    tourSlugs: ['paris-1-hour-seine-cruise-departing-from-the-eiffel-tower', 'paris-night-cruise-on-the-seine-river-with-aperitif', 'paris-big-bus-hop-on-hop-off-tour-with-optional-cruise', 'paris-louvre-museum-tour-mona-lisa-iconic-masterpieces', 'from-paris-mont-st-michel-at-your-own-pace-by-coach', 'parisnotre-dame-cathedral-interior-and-exterior-guided-tour', 'paris-bateaux-mouches-evening-cruise-souvenir-postcard', 'paris-seine-river-sightseeing-evening-cruise-with-champagne'],
    faqs: [
      { question: 'How do I book guided tours in Paris?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'food-drink',
    title: 'Food, Wine & Nightlife',
    metaTitle: 'Food, Wine & Nightlife in Paris 2026',
    metaDescription: 'Browse the best food, wine & nightlife in Paris. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best food, wine & nightlife in Paris, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated food, wine & nightlife in Paris, booked direct through GetYourGuide.',
    icon: '🍷',
    tourSlugs: ['paris-1-hour-seine-cruise-departing-from-the-eiffel-tower', 'disneyland-paris-2-parks-ticket-1-2-3-4-5-day', 'palace-of-versailles-full-access-passport-ticket', 'paris-night-cruise-on-the-seine-river-with-aperitif', 'paris-eiffel-tower-entry-ticket-with-optional-summit-access', 'eiffel-tower-dedicated-reserved-access-summit-or-2nd-floor'],
    faqs: [
      { question: 'How do I book food, wine & nightlife in Paris?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
  {
    slug: 'top-attractions',
    title: 'Top Attractions',
    metaTitle: 'Top Attractions in Paris 2026',
    metaDescription: 'Browse the best top attractions in Paris. Instant confirmation and free cancellation on most bookings via GetYourGuide.',
    description: 'The best top attractions in Paris, hand-picked from the top-rated experiences on GetYourGuide. Book ahead for the best availability, skip the queues where offered, and enjoy free cancellation on most options.',
    excerpt: 'Top-rated top attractions in Paris, booked direct through GetYourGuide.',
    icon: '⭐',
    tourSlugs: ['eiffel-tower-dedicated-reserved-access-summit-or-2nd-floor', 'paris-eiffel-tower-summit-or-second-floor-access', 'eiffel-tower-dedicated-reserved-access-summit-or-2nd-floor', 'eiffel-tower-dedicated-reserved-access-top-or-2nd-by-lift', 'paris-macaron-baking-class-for-families-and-kids'],
    faqs: [
      { question: 'How do I book top attractions in Paris?', answer: 'Choose a tour below and book directly through GetYourGuide. You get instant confirmation and a mobile ticket.' },
      { question: 'Is free cancellation available?', answer: 'Most experiences offer free cancellation up to 24 hours before. Check the individual booking page for details.' },
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
