import { FAQ } from '@/lib/types';

export interface Attraction {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tourSlugs: string[];
  faqs: FAQ[];
}

export const attractions: Attraction[] = [
  {
    slug: 'eiffel-tower',
    name: 'Eiffel Tower',
    title: 'Eiffel Tower Tickets and Tours',
    metaTitle: 'Eiffel Tower Tickets and Tours 2026',
    metaDescription: 'Book Eiffel Tower tickets and tours in Paris. 5 top-rated options from £15, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Eiffel Tower tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['paris-1-hour-seine-cruise-departing-from-the-eiffel-tower', 'paris-eiffel-tower-entry-ticket-with-optional-summit-access', 'eiffel-tower-dedicated-reserved-access-summit-or-2nd-floor', 'paris-eiffel-tower-summit-or-second-floor-access', 'eiffel-tower-dedicated-reserved-access-summit-or-2nd-floor'],
    faqs: [
      { question: 'How much are Eiffel Tower tickets?', answer: 'Eiffel Tower tickets and tours in Paris start from around £15. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Eiffel Tower tour?', answer: 'The top-rated option is 1-Hour Seine Cruise departing from the Eiffel To, rated 4.4 stars by 86,985 travellers, from £15.' },
      { question: 'Can I skip the line at Eiffel Tower?', answer: 'Yes, many Eiffel Tower options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'seine-river-cruise',
    name: 'Seine River Cruise',
    title: 'Seine River Cruise Tickets and Tours',
    metaTitle: 'Seine River Cruise Tickets and Tours 2026',
    metaDescription: 'Book Seine River Cruise tickets and tours in Paris. 4 top-rated options from £15, with skip-the-line where available, instant confirmation and free cancell',
    intro: 'Compare the best Seine River Cruise tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['bateaux-parisiens-dinner-cruise', 'paris-4-course-dinner-cruise-on-seine-river-with-live-music', 'paris-catacombs-entry-seine-river-cruise-with-audio-guide', 'paris-1-hour-seine-cruise-departing-from-the-eiffel-tower'],
    faqs: [
      { question: 'How much are Seine River Cruise tickets?', answer: 'Seine River Cruise tickets and tours in Paris start from around £15. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Seine River Cruise tour?', answer: 'The top-rated option is 3-Course-Dinner Cruise on the Seine with live mu, rated 4.7 stars by 8,321 travellers, from £98.' },
      { question: 'Can I skip the line at Seine River Cruise?', answer: 'Yes, many Seine River Cruise options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'louvre-museum',
    name: 'Louvre Museum',
    title: 'Louvre Museum Tickets and Tours',
    metaTitle: 'Louvre Museum Tickets and Tours 2026',
    metaDescription: 'Book Louvre Museum tickets and tours in Paris. 3 top-rated options from £55, with skip-the-line where available, instant confirmation and free cancellation',
    intro: 'Compare the best Louvre Museum tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['quick-entrance-louvre-museum-3-hour-tour', 'paris-louvre-museum-tour-mona-lisa-iconic-masterpieces', 'louvre-museum-guided-tour-with-mona-lisa'],
    faqs: [
      { question: 'How much are Louvre Museum tickets?', answer: 'Louvre Museum tickets and tours in Paris start from around £55. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Louvre Museum tour?', answer: 'The top-rated option is Mona Lisa & Louvre Masterpieces Tour with Reserv, rated 4.7 stars by 7,374 travellers, from £55.' },
      { question: 'Can I skip the line at Louvre Museum?', answer: 'Yes, many Louvre Museum options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'palace-of-versailles',
    name: 'Palace of Versailles',
    title: 'Palace of Versailles Tickets and Tours',
    metaTitle: 'Palace of Versailles Tickets and Tours 2026',
    metaDescription: 'Book Palace of Versailles tickets and tours in Paris. 3 top-rated options from £21, with skip-the-line where available, instant confirmation and free cance',
    intro: 'Compare the best Palace of Versailles tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['versailles-palace-tour-gardens-with-optional-full-access', 'palace-of-versailles-full-access-passport-ticket', 'skip-the-line-versailles-palace-garden-tour-with-transport'],
    faqs: [
      { question: 'How much are Palace of Versailles tickets?', answer: 'Palace of Versailles tickets and tours in Paris start from around £21. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Palace of Versailles tour?', answer: 'The top-rated option is Versailles: Skip-the-Line Tour of Palace and Gar, rated 4.7 stars by 11,368 travellers, from £66.' },
      { question: 'Can I skip the line at Palace of Versailles?', answer: 'Yes, many Palace of Versailles options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'musee-dorsay',
    name: 'Musee d’Orsay',
    title: 'Musee d’Orsay Tickets and Tours',
    metaTitle: 'Musee d’Orsay Tickets and Tours 2026',
    metaDescription: 'Book Musee d’Orsay tickets and tours in Paris. 1 top-rated options from £60, with skip-the-line where available, instant confirmation and free cancellation',
    intro: 'Compare the best Musee d’Orsay tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access'],
    faqs: [
      { question: 'How much are Musee d’Orsay tickets?', answer: 'Musee d’Orsay tickets and tours in Paris start from around £60. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Musee d’Orsay tour?', answer: 'The top-rated option is Musée d’Orsay Skip-the-Line Tour with Expert Gui, rated 4.8 stars by 1,167 travellers, from £60.' },
      { question: 'Can I skip the line at Musee d’Orsay?', answer: 'Yes, many Musee d’Orsay options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'paris-catacombs',
    name: 'Paris Catacombs',
    title: 'Paris Catacombs Tickets and Tours',
    metaTitle: 'Paris Catacombs Tickets and Tours 2026',
    metaDescription: 'Book Paris Catacombs tickets and tours in Paris. 1 top-rated options from £98, with skip-the-line where available, instant confirmation and free cancellati',
    intro: 'Compare the best Paris Catacombs tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['paris-catacombs-entry-seine-river-cruise-with-audio-guide'],
    faqs: [
      { question: 'How much are Paris Catacombs tickets?', answer: 'Paris Catacombs tickets and tours in Paris start from around £98. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Paris Catacombs tour?', answer: 'The top-rated option is Catacombs Entry & Seine River Cruise with Audio, rated 4.5 stars by 1,430 travellers, from £98.' },
      { question: 'Can I skip the line at Paris Catacombs?', answer: 'Yes, many Paris Catacombs options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'disneyland-paris',
    name: 'Disneyland Paris',
    title: 'Disneyland Paris Tickets and Tours',
    metaTitle: 'Disneyland Paris Tickets and Tours 2026',
    metaDescription: 'Book Disneyland Paris tickets and tours in Paris. 1 top-rated options from £44, with skip-the-line where available, instant confirmation and free cancellat',
    intro: 'Compare the best Disneyland Paris tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['disneyland-paris-2-parks-ticket-1-2-3-4-5-day'],
    faqs: [
      { question: 'How much are Disneyland Paris tickets?', answer: 'Disneyland Paris tickets and tours in Paris start from around £44. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Disneyland Paris tour?', answer: 'The top-rated option is Disneyland® Paris 1-Day Ticket, rated 4.6 stars by 55,388 travellers, from £44.' },
      { question: 'Can I skip the line at Disneyland Paris?', answer: 'Yes, many Disneyland Paris options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
  {
    slug: 'notre-dame',
    name: 'Notre-Dame',
    title: 'Notre-Dame Tickets and Tours',
    metaTitle: 'Notre-Dame Tickets and Tours 2026',
    metaDescription: 'Book Notre-Dame tickets and tours in Paris. 1 top-rated options from £18, with skip-the-line where available, instant confirmation and free cancellation.',
    intro: 'Compare the best Notre-Dame tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['parisnotre-dame-cathedral-interior-and-exterior-guided-tour'],
    faqs: [
      { question: 'How much are Notre-Dame tickets?', answer: 'Notre-Dame tickets and tours in Paris start from around £18. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Notre-Dame tour?', answer: 'The top-rated option is Notre-Dame Cathedral Interior and Exterior Guide, rated 4.7 stars by 1,674 travellers, from £18.' },
      { question: 'Can I skip the line at Notre-Dame?', answer: 'Yes, many Notre-Dame options include skip-the-line or priority access. Look for skip-the-line in the tour name, and book ahead in peak season as slots sell out.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
