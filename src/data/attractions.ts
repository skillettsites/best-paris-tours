import { FAQ, ContentSection } from '@/lib/types';

export interface Attraction {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tourSlugs: string[];
  faqs: FAQ[];
  /** Unique, hand-written body sections rendered below the ranked tour list. */
  sections?: ContentSection[];
  /** Blog posts linked from this attraction page (internal link mesh). */
  relatedPostSlugs?: string[];
}

export const attractions: Attraction[] = [
  {
    slug: 'eiffel-tower',
    name: 'Eiffel Tower',
    title: 'Eiffel Tower Tickets and Tours',
    metaTitle: 'Eiffel Tower Tickets and Tours 2026',
    metaDescription: 'Book Eiffel Tower tickets and tours in Paris. 4 top-rated options from £15, with reserved and summit access, instant confirmation and free cancellation.',
    intro: 'Compare the best Eiffel Tower tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['paris-1-hour-seine-cruise-departing-from-the-eiffel-tower', 'paris-eiffel-tower-entry-ticket-with-optional-summit-access', 'eiffel-tower-dedicated-reserved-access-summit-or-2nd-floor', 'paris-eiffel-tower-summit-or-second-floor-access'],
    faqs: [
      { question: 'How much are Eiffel Tower tickets?', answer: 'Eiffel Tower tickets and tours in Paris start from around £15. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Eiffel Tower tour?', answer: 'The most-reviewed option is the 1-Hour Seine Cruise from the Eiffel Tower, rated 4.4 stars by 86,985 travellers, from £15. For the tower itself, the Eiffel Tower Entry Ticket with Summit Access starts from £21.' },
      { question: 'Can I skip the line at the Eiffel Tower?', answer: 'Yes. Reserved-access and timed-entry tickets bypass the ground-level ticket queue, though everyone still passes through security. Look for reserved or priority access in the option name, and book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['is-the-eiffel-tower-summit-worth-it', 'eiffel-tower-vs-montparnasse-tower-view', 'how-to-skip-the-line-in-paris'],
  },
  {
    slug: 'seine-river-cruise',
    name: 'Seine River Cruise',
    title: 'Seine River Cruise Tickets and Tours',
    metaTitle: 'Seine River Cruise Tickets and Tours 2026',
    metaDescription: 'Seine river cruise tickets and prices in Paris for 2026. Compare daytime cruises from £15, evening lights cruises from £20 and dinner cruises from £97, with departure points for each operator.',
    intro: 'Seine river cruise tickets start from £15 for a one-hour daytime sightseeing sailing, rise to around £20 to £21 for an evening lights cruise, and reach £97 to £98 for a dinner cruise with three or four courses. The price table and operator guide below show what each ticket buys and where each boat leaves from, so you can pick before you book. Every option links straight to GetYourGuide for live prices and availability.',
    tourSlugs: ['paris-1-hour-seine-cruise-departing-from-the-eiffel-tower', 'paris-bateaux-mouches-evening-cruise-souvenir-postcard', 'paris-night-cruise-on-the-seine-river-with-aperitif', 'paris-4-course-dinner-cruise-on-seine-river-with-live-music', 'bateaux-parisiens-dinner-cruise', 'paris-catacombs-entry-seine-river-cruise-with-audio-guide'],
    sections: [
      {
        heading: 'Seine river cruise prices in 2026',
        content: `<p>There are really only three price bands on the Seine, and knowing which one you want takes about ten seconds. Everything below is the current live from-price on GetYourGuide for the exact ticket named.</p>
<div class="table-scroll">
<table>
<thead><tr><th>Cruise</th><th>From</th><th>Rating</th><th>Type</th></tr></thead>
<tbody>
<tr><td>1-Hour Seine Cruise from the Eiffel Tower</td><td><strong>&pound;15</strong></td><td>4.4 (86,985)</td><td>Daytime, audio commentary</td></tr>
<tr><td>Evening Lights Cruise with Bateaux-Mouches</td><td><strong>&pound;20</strong></td><td>4.3 (1,259)</td><td>Evening, 70 min to 1.5 hrs</td></tr>
<tr><td>Evening River Cruise with Music</td><td><strong>&pound;21</strong></td><td>4.4 (24,697)</td><td>Evening, background music</td></tr>
<tr><td>Bateaux Mouches Dinner Cruise</td><td><strong>&pound;97</strong></td><td>4.5 (4,157)</td><td>Dinner, live musicians</td></tr>
<tr><td>3-Course Dinner Cruise with Live Music</td><td><strong>&pound;98</strong></td><td>4.7 (8,321)</td><td>Dinner, 2.5 hrs, top-rated</td></tr>
<tr><td>Catacombs Entry &amp; Seine Cruise</td><td><strong>&pound;98</strong></td><td>4.5 (1,430)</td><td>Combined ticket</td></tr>
</tbody>
</table>
</div>
<p><strong>Where to buy Seine river cruise tickets:</strong> book online in advance rather than at the quay. Every ticket here is sold through GetYourGuide with instant mobile delivery and free cancellation on most options, which matters on the Seine because sailings genuinely sell out on summer evenings and the pier queues are worst for people buying on the day. There is nothing to print and nothing to collect.</p>
<p>If you want the full verdict on which one to spend your money on, read <a href="/blog/which-seine-river-cruise-is-worth-it">which Seine river cruise is worth it</a>.</p>`,
      },
      {
        heading: 'Bateaux-Mouches vs Bateaux Parisiens vs Vedettes: which operator and where they leave from',
        content: `<p>Paris has three long-standing sightseeing fleets on the Seine and they board at completely different points on the river. Turning up at the wrong pier is the single most common Seine cruise mistake, so check the departure point on your ticket before you set out.</p>
<ul>
<li><strong>Bateaux-Mouches</strong> boards at its own pier at <strong>Pont de l'Alma</strong>, Port de la Conference in the 8th arrondissement, on the Right Bank. Nearest metro: Alma-Marceau (line 9). This is the fleet behind the <a href="/tours/paris-bateaux-mouches-evening-cruise-souvenir-postcard">evening lights cruise from &pound;20</a> and the <a href="/tours/paris-4-course-dinner-cruise-on-seine-river-with-live-music">dinner cruise from &pound;97</a>. Big glass-roofed boats, the most recognisable name on the river.</li>
<li><strong>Bateaux Parisiens</strong> boards at its pier <strong>at the foot of the Eiffel Tower</strong>, on the Left Bank. It runs the <a href="/tours/paris-1-hour-seine-cruise-departing-from-the-eiffel-tower">one-hour sightseeing cruise from &pound;15</a> and the <a href="/tours/bateaux-parisiens-dinner-cruise">three-course dinner cruise from &pound;98</a>. If you are already visiting the tower, this is the easiest cruise to bolt on.</li>
<li><strong>Vedettes du Pont Neuf</strong> boards at <strong>1 Square du Vert-Galant</strong>, on the tip of the Ile de la Cite in the 1st arrondissement, right under the Pont Neuf. Smaller boats and a more central starting point, handy if you are based around the Marais or the Latin Quarter.</li>
</ul>
<p>The route is broadly the same whichever you pick: the loop takes in the Louvre, the Musee d'Orsay, the Conciergerie, Notre-Dame and the Eiffel Tower. What changes is the boarding point, the boat and whether you get commentary, music or dinner. Pick the pier closest to where your day already is.</p>`,
      },
      {
        heading: 'How much is the Seine river cruise, and when is it best?',
        content: `<p>The short answer on cost: <strong>&pound;15 by day, around &pound;20 by night, and about &pound;97 with dinner</strong>. Children's fares and combination tickets vary by operator, and prices move with season and demand, so the from-price on each option above is the live figure rather than a printed rate card.</p>
<p>On timing, daytime cruises are better for sightseeing because you can actually see the facades and the audio commentary has something to point at. Evening cruises are better for atmosphere. The one thing worth planning around is the Eiffel Tower sparkle, which runs for five minutes on the hour after dark, so an evening sailing that has you mid-river on the hour is the one to book. In midsummer that means a late departure, since Paris does not go properly dark until close to 10pm.</p>`,
      },
    ],
    relatedPostSlugs: ['which-seine-river-cruise-is-worth-it', 'is-a-paris-catacombs-tour-worth-it', 'is-the-eiffel-tower-summit-worth-it'],
    faqs: [
      { question: 'How much is the Seine river cruise in Paris?', answer: 'A one-hour daytime sightseeing cruise starts from £15. Evening lights cruises start from around £20 to £21, and dinner cruises with three or four courses start from £97 to £98. Prices are per person and shown live on each booking page.' },
      { question: 'Where can I buy Seine river cruise tickets?', answer: 'Book online in advance through GetYourGuide rather than queuing at the quay. Tickets arrive instantly on your phone, most options include free cancellation up to 24 hours before, and popular evening sailings sell out in summer.' },
      { question: 'What is the best Seine river cruise?', answer: 'The best value is the 1-Hour Seine Cruise from the Eiffel Tower at £15. The highest-rated is the 3-Course Dinner Cruise on the Seine with Live Music, rated 4.7 stars by 8,321 travellers, from £98. For a romantic evening at a low price, the Bateaux-Mouches evening lights cruise from £20 is the pick.' },
      { question: 'Where do Seine river cruises depart from?', answer: 'It depends on the operator. Bateaux-Mouches boards at Pont de l\'Alma (Port de la Conference, 8th arrondissement), Bateaux Parisiens boards at the foot of the Eiffel Tower, and Vedettes du Pont Neuf boards at 1 Square du Vert-Galant on the Ile de la Cite. Check the departure point on your ticket before you travel.' },
      { question: 'How long is a Seine river cruise?', answer: 'Sightseeing cruises typically run about an hour. The Bateaux-Mouches evening lights cruise runs 70 minutes to 1.5 hours, and dinner cruises run around 2.5 hours.' },
    ],
  },
  {
    slug: 'louvre-museum',
    name: 'Louvre Museum',
    title: 'Louvre Museum Tickets and Tours',
    metaTitle: 'Louvre Museum Tickets and Tours 2026',
    metaDescription: 'Book Louvre Museum tickets and tours in Paris. 3 top-rated options from £55, with reserved and priority access, instant confirmation and free cancellation.',
    intro: 'Compare the best Louvre Museum tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['quick-entrance-louvre-museum-3-hour-tour', 'paris-louvre-museum-tour-mona-lisa-iconic-masterpieces', 'louvre-museum-guided-tour-with-mona-lisa'],
    faqs: [
      { question: 'How much are Louvre Museum tickets?', answer: 'Louvre Museum tickets and tours in Paris start from around £55. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Louvre Museum tour?', answer: 'The top-rated option is the Mona Lisa & Louvre Masterpieces Tour with Reserved Access, rated 4.7 stars by 7,374 travellers, from £55.' },
      { question: 'Can I skip the line at the Louvre?', answer: 'Yes. Every Louvre tour listed here includes reserved or priority access, so you bypass the main entrance queue. Book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['louvre-guided-tour-vs-skip-the-line-ticket', 'louvre-vs-musee-dorsay-which-museum', 'how-to-skip-the-line-in-paris'],
  },
  {
    slug: 'palace-of-versailles',
    name: 'Palace of Versailles',
    title: 'Palace of Versailles Tickets and Tours',
    metaTitle: 'Palace of Versailles Tickets and Tours 2026',
    metaDescription: 'Book Palace of Versailles tickets and tours from Paris. 3 top-rated options from £21, with skip-the-line access, instant confirmation and free cancellation.',
    intro: 'Compare the best Palace of Versailles tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['versailles-palace-tour-gardens-with-optional-full-access', 'palace-of-versailles-full-access-passport-ticket', 'skip-the-line-versailles-palace-garden-tour-with-transport'],
    faqs: [
      { question: 'How much are Palace of Versailles tickets?', answer: 'Palace of Versailles tickets and tours in Paris start from around £21. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Palace of Versailles tour?', answer: 'The top-rated option is the Versailles Skip-the-Line Palace and Gardens Tour, rated 4.7 stars by 11,368 travellers, from £66.' },
      { question: 'Can I skip the line at the Palace of Versailles?', answer: 'Yes. Skip-the-line tours bypass the ticket queue at the gates, which is the worst wait at Versailles. Book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['is-a-versailles-day-trip-from-paris-worth-it', 'how-to-skip-the-line-in-paris'],
  },
  {
    slug: 'musee-dorsay',
    name: 'Musee d’Orsay',
    title: 'Musee d’Orsay Tickets and Tours',
    metaTitle: 'Musee d’Orsay Tickets and Tours 2026',
    metaDescription: 'Book Musee d’Orsay tickets and tours in Paris. A top-rated skip-the-line guided tour from £60, with instant confirmation and free cancellation.',
    intro: 'Compare the best Musee d’Orsay tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access'],
    faqs: [
      { question: 'How much are Musee d’Orsay tickets?', answer: 'Musee d’Orsay tickets and tours in Paris start from around £60. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Musee d’Orsay tour?', answer: 'The top-rated option is the Musée d’Orsay Skip-the-Line Tour with Expert Guide, rated 4.8 stars by 1,167 travellers, from £60. It is the highest-rated experience anywhere on this site.' },
      { question: 'Can I skip the line at the Musee d’Orsay?', answer: 'Yes. The guided tour listed here includes skip-the-line access, so you avoid the entry queue that builds mid-morning. Book ahead in peak season as slots sell out.' },
    ],
    relatedPostSlugs: ['louvre-vs-musee-dorsay-which-museum', 'how-to-skip-the-line-in-paris'],
  },
  {
    slug: 'paris-catacombs',
    name: 'Paris Catacombs',
    title: 'Paris Catacombs Tickets and Tours',
    metaTitle: 'Paris Catacombs Tickets and Tours 2026',
    metaDescription: 'Book Paris Catacombs tickets in Paris. A top-rated combined Catacombs entry and Seine cruise ticket from £98, with instant confirmation and free cancellation.',
    intro: 'Compare the best Paris Catacombs tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['paris-catacombs-entry-seine-river-cruise-with-audio-guide'],
    faqs: [
      { question: 'How much are Paris Catacombs tickets?', answer: 'Paris Catacombs tickets and tours in Paris start from around £98. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Paris Catacombs tour?', answer: 'The top-rated option is the Catacombs Entry & Seine Cruise with Audio Guide, rated 4.5 stars by 1,430 travellers, from £98. It pairs Catacombs entry with a Seine river cruise.' },
      { question: 'Can I skip the line at the Paris Catacombs?', answer: 'Booking a timed entry ticket in advance is the only reliable way in. On-the-day queues at the Denfert-Rochereau entrance are long and daily capacity underground is capped, so slots sell out.' },
    ],
    relatedPostSlugs: ['is-a-paris-catacombs-tour-worth-it', 'which-seine-river-cruise-is-worth-it'],
  },
  {
    slug: 'disneyland-paris',
    name: 'Disneyland Paris',
    title: 'Disneyland Paris Tickets and Tours',
    metaTitle: 'Disneyland Paris Tickets and Tours 2026',
    metaDescription: 'Book Disneyland Paris tickets. A top-rated 1-day park ticket from £44, rated 4.6 by 55,388 travellers, with instant confirmation and free cancellation.',
    intro: 'Compare the best Disneyland Paris tickets and guided tours in Paris, ranked by verified reviews. Booking online guarantees entry, unlocks skip-the-line access where offered, and gives free cancellation on most options. Every option below links straight to GetYourGuide.',
    tourSlugs: ['disneyland-paris-2-parks-ticket-1-2-3-4-5-day'],
    faqs: [
      { question: 'How much are Disneyland Paris tickets?', answer: 'Disneyland Paris tickets and tours in Paris start from around £44. Guided and skip-the-line options cost a little more. The ranked list shows current prices.' },
      { question: 'What is the best Disneyland Paris tour?', answer: 'The top-rated option is Disneyland® Paris 1-Day Ticket, rated 4.6 stars by 55,388 travellers, from £44.' },
      { question: 'Do I need to book Disneyland Paris tickets in advance?', answer: 'Yes. Dated park tickets are cheaper online than at the gate and guarantee entry on busy dates such as school holidays and weekends, when the parks can reach capacity.' },
    ],
  },
  {
    slug: 'notre-dame',
    name: 'Notre-Dame',
    title: 'Notre-Dame Tickets and Tours',
    metaTitle: 'Notre-Dame Tickets and Tours 2026',
    metaDescription: 'Notre-Dame tours in Paris for 2026. General entry to the reopened cathedral is free, so here is what a paid guided tour from £18 actually adds, and how the queue works.',
    intro: 'Notre-Dame reopened in December 2024 and general entry is free, which changes the question completely: it is no longer whether you can get in, it is whether a paid guided tour is worth booking on top. The section below explains exactly what the guided option adds, what it does not include, and how long you will queue either way.',
    tourSlugs: ['parisnotre-dame-cathedral-interior-and-exterior-guided-tour'],
    sections: [
      {
        heading: 'Notre-Dame after the reopening: what a tour actually adds',
        content: `<p>Since the cathedral reopened in December 2024, <strong>entry to Notre-Dame is free</strong>. The cathedral describes itself as open to all, freely and without charge, and free reservation slots are offered only on the official notredamedeparis.fr website, with no intermediaries authorised. So nobody needs to buy a ticket to walk in, and any listing that implies otherwise is selling you something you already have.</p>
<p>What you can pay for is a guide. The <a href="/tours/parisnotre-dame-cathedral-interior-and-exterior-guided-tour">Notre-Dame Cathedral guided tour</a>, from &pound;18, is a one-hour small-group walk limited to five participants with a certified guide, covering both the exterior and the newly restored interior. It starts on the Parvis in front of the west facade, where the guide reads the portals and the sculpture before you go inside, then continues through the nave to look at the restoration work, the reopened chapels and the stained glass.</p>
<p>Be clear about one thing before you book: this tour <strong>does not include skip-the-line access</strong>. The listing states plainly that you queue in the general entry line alongside your guide, that no advance ticket reservation is needed to enter, and that you should expect to wait 10 to 20 minutes. You are paying for expertise and a group of five, not for a shortcut.</p>`,
      },
      {
        heading: 'Is a paid Notre-Dame tour worth it?',
        content: `<p><strong>Worth it if:</strong> you care about the architecture and the restoration story, you want the facade and the portals decoded rather than photographed, or you would otherwise walk the nave in ten minutes without knowing what you were looking at. At &pound;18 for an hour with a certified guide in a group of five, it is one of the cheapest guided experiences in central Paris, and the group size is genuinely small rather than nominally small.</p>
<p><strong>Skip it if:</strong> you mainly want to see the interior and take photographs, or you are on a tight schedule. General entry is free and the queue moves; you can be in and out inside half an hour with no booking at all. The tower climb is a separate ticketed experience run by the national monuments authority and is not part of this tour.</p>
<p>Either way, get there early. The Parvis fills from mid-morning, and the shortest waits are at opening and in the last hour of the day. The cathedral sits at 6 Parvis Notre-Dame, Place Jean-Paul II, on the Ile de la Cite in the 4th arrondissement, a two-minute walk from Cite metro station on line 4. Many <a href="/attractions/seine-river-cruise">Seine river cruises</a> pass directly beneath it, which is the other free-ish way to see the building.</p>`,
      },
    ],
    relatedPostSlugs: ['is-a-paris-catacombs-tour-worth-it', 'which-seine-river-cruise-is-worth-it', 'how-to-skip-the-line-in-paris'],
    faqs: [
      { question: 'Do you need a ticket to enter Notre-Dame?', answer: 'No. Since the cathedral reopened in December 2024, general entry to Notre-Dame is free and open to all. Free timed reservations are offered on the official notredamedeparis.fr website only. A paid guided tour is optional and buys you a guide, not entry.' },
      { question: 'What is the best Notre-Dame tour?', answer: 'The Notre-Dame Cathedral Guided Tour, Inside and Out is the option we list, rated 4.7 stars by 1,674 travellers, from £18. It is a one-hour small-group tour limited to five people with a certified guide, covering the exterior on the Parvis and the reopened interior.' },
      { question: 'Can I skip the line at Notre-Dame?', answer: 'Not with this tour. The guided tour explicitly has no skip-the-line access: you queue in the general entry line with your guide, no advance reservation is required, and the typical wait is 10 to 20 minutes. Arriving at opening or late in the day is the most reliable way to cut the queue.' },
      { question: 'How much are Notre-Dame tours?', answer: 'Entry itself is free. The guided tour listed here starts from £18 per person for one hour with a certified guide in a group of no more than five.' },
    ],
  },
];

export function getAttractionBySlug(slug: string): Attraction | undefined {
  return attractions.find((a) => a.slug === slug);
}
