import { MonthContent } from '@/lib/season-types';

// August through December.
//
// Weekly closing days (Louvre Tuesdays, Musee d'Orsay Mondays, Chateau de
// Versailles Mondays) and the fixed holiday closures were read from each venue's
// own site on 29 July 2026. Every weekday stated below was calculated from the
// calendar, not assumed. Nothing on the "could not verify" list, which covers the
// 2027 Giverny opening date, the 2027 Versailles fountain season, whether the
// Eiffel Tower summit closes in January 2027 specifically, and the 2027 dates for
// the Paris Marathon and Roland-Garros, is stated as fact anywhere on these pages.

export const august: MonthContent = {
  slug: 'paris-in-august',
  month: 'August',
  monthKey: 'august',
  yearOffset: 0,
  prevMonth: 'July',
  prevPath: '/best-time-to-visit-paris#july',
  nextMonth: 'September',
  nextPath: '/paris-in-september',
  metaDescription:
    'Paris in August: 25.4C highs, 14h 26m of daylight and sunset near 21:05, with Louvre advance booking compulsory until 31 August. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'August is the warmest month in Paris at 25.4C average highs, and much milder than its Mediterranean reputation suggests. It also carries the longest usable evenings of this ten-month guide, with sunset around 21:05 mid-month. The catch is the Louvre, where advance booking is compulsory until 31 August.',

  verdict: {
    capsule:
      'Yes, and more comfortably than most people expect. Paris in August averages 25.4C, seven degrees cooler than a Roman or Barcelona August, so the outdoor half of the city stays workable all day. The real August constraints are queue management and a partly shuttered residential city, not heat.',
    body: [
      'The single biggest misconception about a Paris August is temperature. The ten-year mean high is 25.4C with lows of 15.2C, which is shirt-sleeves warm rather than punishing, and it is the reason Paris keeps working through the month while cities further south empty out at midday. Only a handful of afternoons in a typical August push past 32C, and the Seine quays hold a breeze that the inland squares do not.',
      'The compensation on top of that is light. Sunset is around 21:30 on 1 August and still about 20:35 by the 31st, and mid-month you get 14 hours 26 minutes of daylight. That is roughly six hours more usable evening than a December visit, which is what makes August the month for the things that need daylight: the fourteen-hour Mont-Saint-Michel coach day, the open top deck of a sightseeing bus, a full afternoon at Giverny with an evening still ahead of you.',
      'What does bite is the second half of the "Paris shuts in August" story. The version that is overstated is the tourist city: the Louvre, the Eiffel Tower, Versailles, the cruise operators and the cabarets all run a full programme. The version that is true is the neighbourhood city. Away from the central arrondissements a real share of bakeries, butchers and family bistros close for two or three weeks around the middle of the month, and they put a handwritten sign in the window rather than updating anything online. Book dinner instead of wandering into the 11th and hoping.',
    ],
  },

  weather: {
    capsule:
      'Expect 25.4C average highs and 15.2C lows, about 66mm of rain spread across ten wet days, and 14 hours 26 minutes of daylight in mid-August. Sunset sits near 21:05 on the 15th. August rain in Paris arrives as short heavy showers rather than the all-day drizzle of the autumn.',
    body: [
      'Ten wet days out of thirty-one sounds worse than it plays. August rainfall in Paris is convective: a sharp shower builds in the late afternoon, drops most of the month\'s 66mm in a handful of episodes and clears within the hour. That pattern is very different from November and March, when the same rainfall total arrives as low grey cloud that sits over the city all day. A packable shell beats an umbrella, because the wind that comes with an August storm turns umbrellas inside out along the river.',
      'The heat that does exist is concentrated where the stone is. The Marais lanes, the Rue de Rivoli arcades and the Metro platforms run several degrees above the airport reading, and Metro carriages on the older lines have no air conditioning at all. Lines 1 and 14 are the two you actually want in August. Above ground, the Tuileries and the Champ de Mars have almost no shade, so build the middle of the day around the Louvre, the Orsay or a boat rather than a park.',
      'The light is the thing to plan around. Because it is still fully light at 21:00, an evening river cruise in August is a daylight cruise, not an illuminated one. If you want Paris lit up from the water you need to book a departure after about 21:30 in the first half of the month, and even then the Eiffel Tower sparkle looks thin against a bright sky. That inverts completely by November, and it is the biggest single scheduling difference between an August trip and a winter one.',
    ],
  },

  crowds: {
    capsule:
      'August is the peak international month and the quietest local one. The rule that matters is the Louvre: advance booking is compulsory from 1 July to 31 August, so a walk-up visit is not an option. Everything else can be done on the day if you are flexible about the hour.',
    body: [
      'Book the Louvre before you fly. From 1 July to 31 August the museum requires an advance reservation, which means the usual fallback of turning up early and queueing does not exist this month. The Louvre is closed on Tuesdays in any case, which in August 2026 means the 4th, 11th, 18th and 25th, and it runs late to 21:00 on Wednesdays and Fridays. A Wednesday or Friday evening slot is by some distance the most comfortable way to see it in August.',
      'The Eiffel Tower behaves differently from the museums. Its bottleneck is the lift queue rather than a sell-out, so a reserved-access ticket buys you a time rather than the last available space. Summit access is the part that goes first, and on a clear August evening it is worth having: visibility from the top is at its annual best in settled summer air, and the 21:05 sunset means a 20:00 slot puts you up there for the light changing.',
      'Prices are a mixed picture and not the one people expect. Central hotel rates in August are softer than in September and October because the business, conference and fashion trade stops entirely, so the second half of August is genuinely good value in the 1st, 7th and 8th arrondissements. Flights are the opposite, since this is peak European holiday season. If you are choosing between late August and early October on cost, late August usually wins on the hotel and loses on the plane.',
    ],
  },

  tours: {
    capsule:
      'Ranked for August specifically: anything that needs a long day or a working garden goes to the top, because 14 hours 26 minutes of daylight and an open Giverny only exist for part of the year. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'paris-1-hour-seine-cruise-departing-from-the-eiffel-tower',
        bestFor: 'Using the long evenings cheaply',
        why: 'Top for August because the Seine is where the breeze is and £15 buys an hour of it. Book a late departure: with sunset near 21:05 you want to be on the water at 20:00 or later, because a 17:00 sailing in August is simply a boat ride in full sun.',
      },
      {
        slug: 'palace-of-versailles-full-access-passport-ticket',
        bestFor: 'Getting the fountains as well as the palace',
        why: 'This is the ticket whose value is genuinely seasonal. It carries the Musical Fountains and Musical Gardens upgrade, and those run only in the warm half of the year, so an August visit gets the full estate working. The gardens and park stay open every day, including the Mondays when the palace itself is shut.',
      },
      {
        slug: 'half-day-trip-to-giverny-from-paris',
        bestFor: 'A garden that is only open half the year',
        why: 'Ranked far above its 4.2 rating on purpose. Monet\'s garden at Giverny opens for a defined season and shuts for the winter, so August is one of the months where this trip exists at all. Late summer is the nasturtium and dahlia phase, when the flowers have grown across the Grande Allee and closed the path.',
      },
      {
        slug: 'from-paris-mont-st-michel-at-your-own-pace-by-coach',
        bestFor: 'A fourteen-hour day that still ends in daylight',
        why: 'A fourteen-hour coach day only makes sense when the day is long enough to hold it. In August you leave and return in daylight and still see the abbey in decent light; the same trip in December is largely spent looking at a dark motorway. This is the strongest month of the ten for it.',
      },
      {
        slug: 'paris-big-bus-hop-on-hop-off-tour-with-optional-cruise',
        bestFor: 'The open top deck actually working',
        why: 'The whole point of this ticket is the open upper deck, and August at 25.4C is warm enough to enjoy it without being hot enough to cook on it. Ten wet days across the month is the risk, but August showers pass quickly, so a 24-hour ticket gives you time to wait one out.',
      },
      {
        slug: 'paris-eiffel-tower-entry-ticket-with-optional-summit-access',
        bestFor: 'The summit on a clear evening',
        why: 'August is when the summit upgrade earns its money. Settled summer air gives the clearest long views of the year, and with sunset around 21:05 a late slot puts you at the top for the change of light rather than in flat midday haze.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'The compulsory-booking month',
        why: 'Advance booking at the Louvre is not optional between 1 July and 31 August, so a reserved-access guided tour solves the month\'s hardest logistical problem in one purchase. Avoid Tuesdays, when the museum is closed, and take a Wednesday or Friday if you want the 21:00 late closing.',
      },
      {
        slug: 'moulin-rouge-show-with-champagne',
        bestFor: 'An air-conditioned evening',
        why: 'A fixed seated two-hour show is a sensible way to spend an evening that is still 20C at 22:00, and Montmartre is one of the few districts where the neighbourhood restaurants stay open right through the August closures because they trade on visitors.',
      },
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'Wet-day insurance',
        why: 'The highest-rated tour on this site at 4.8, and the obvious bolt-hole when one of August\'s ten wet days lands on you. Note the Orsay is closed on Mondays, which in August 2026 is five separate dates, so it cannot be your rainy-Monday plan.',
      },
      {
        slug: 'versailles-palace-tour-gardens-with-optional-full-access',
        bestFor: 'The state rooms without the queue',
        why: 'Versailles in August is the busiest it gets, and the Hall of Mirrors is a genuine crush by 11:00. A guided skip-the-line slot is worth more this month than in any other, and pairs with an afternoon in the gardens while the fountains are still running.',
      },
    ],
    note:
      'Dropped from the August ten on purpose: the two Seine dinner cruises and the Bateaux-Mouches evening lights cruise. All three sell an illuminated Paris, and Paris is not illuminated at dinner time in August. They return to the top of the list from November, when sunset falls back to 17:10. Also worth saying plainly: we do not stock a Paris Plages activity, a Montmartre walking tour or a Sainte-Chapelle ticket, and all three are things we would otherwise put on an August list. Paris Plages is free anyway, and Sainte-Chapelle sells its own timed entry.',
  },

  events: {
    capsule:
      'August has one public holiday, the Assumption on Saturday 15 August, and one summer institution, Paris Plages on the riverbanks until 30 August. It is the quietest month of the year for trade fairs, which is exactly why hotel rates are softer than in September.',
    rows: [
      { event: 'Paris Plages', dates: 'Until Sunday 30 August', where: 'Parc Rives de Seine and Bassin de la Villette', free: 'Free' },
      { event: 'Assumption Day, a national public holiday', dates: 'Saturday 15 August', where: 'Nationwide; church services across Paris', free: 'Public holiday' },
      { event: 'Compulsory Louvre advance booking window', dates: 'Until Monday 31 August', where: 'Musee du Louvre', free: 'Ticketed, reservation required' },
      { event: 'Last full month of the Versailles fountain season', dates: 'All August', where: 'Gardens of the Chateau de Versailles', free: 'Ticketed upgrade' },
    ],
    body: [
      'Paris Plages turns the Right Bank expressway and the Bassin de la Villette into a temporary riverside strip of sand, deckchairs, pools and free activities, and it runs until 30 August. It is free, it needs no booking, and it is the single best thing to do with a hot afternoon in Paris that costs nothing. We do not sell a ticket for it because there is nothing to sell.',
      'The Assumption on 15 August is a national public holiday and in 2026 it falls on a Saturday, which makes it an ordinary weekend rather than the awkward midweek bridge that empties French cities for four days. Banks, offices and some independent shops close; museums, monuments, cruise operators and the Metro all run normally. Notre-Dame holds its patronal celebrations around the date, and the cathedral is free to enter in any case.',
      'August is the low point of the Paris trade-fair calendar, and that matters more to your bill than any festival does. The city that fills hotel rooms in September and October, the fashion, motor show and food industry visitors, is simply not here in August. If you are price-sensitive and flexible, the last ten days of August are among the better value windows of the autumn half.',
    ],
  },

  closures: {
    capsule:
      'Nothing shuts for the season in August, which makes it one of only two months in this guide with the full estate available. The recurring closures are weekly: the Louvre every Tuesday, and the Musee d\'Orsay and the Chateau de Versailles every Monday, five Mondays in August 2026.',
    rows: [
      { site: 'Musee du Louvre', closed: 'Tuesdays 4, 11, 18 and 25 August', note: 'Open 09:00 to 18:00 on other days, and to 21:00 on Wednesdays and Fridays. Advance booking is compulsory to 31 August.' },
      { site: 'Musee d\'Orsay', closed: 'Mondays 3, 10, 17, 24 and 31 August', note: 'Late opening on Thursdays until 21:45. Closed every Monday all year, plus 1 May and 25 December.' },
      { site: 'Chateau de Versailles', closed: 'Mondays 3, 10, 17, 24 and 31 August', note: 'The palace and the Trianon estate close on Mondays. The gardens and the park stay open every day.' },
      { site: 'Neighbourhood restaurants and bakeries', closed: 'Roughly two to three weeks around mid-August', note: 'Mostly outside the central arrondissements. Nothing is published centrally, so book rather than wander.' },
      { site: 'Nothing seasonal', closed: 'No seasonal closures in August', note: 'Giverny and the Versailles fountains are both running. From 1 November neither is.' },
    ],
    body: [
      'August is the easy month for closures, and it is worth understanding what that means by contrast. Five of the ten months in this guide have Monet\'s garden at Giverny shut for the winter, and five have the Versailles Musical Fountains switched off. August has neither problem, so an August itinerary can include things that a January one physically cannot.',
      'That leaves only the weekly pattern to work around, and it is a simple one. The Louvre closes on Tuesdays. The Musee d\'Orsay and the Chateau de Versailles close on Mondays. Because August 2026 begins on a Saturday it contains five Mondays, so plan Orsay and Versailles for any other day. The one useful exception is that Versailles keeps its gardens and its park open seven days a week, so a Monday can still be a Versailles day if you are happy to stay outside the palace.',
      'One thing we deliberately do not promise: our Notre-Dame guided tour is not a skip-the-line product. The cathedral is free to enter and you queue in the general line with your guide. In August that queue is at its longest of the year, and the listing itself puts it at ten to twenty minutes rather than the hours some sites imply. Reservation is not needed and is not offered.',
    ],
  },

  packing: {
    capsule:
      'Pack for 25.4C afternoons, ten possible thunderstorms and evenings that stay light until 21:00. The two items people regret leaving behind are a packable waterproof, because August showers arrive with wind, and shoes that survive eight hours of pavement.',
    body: [
      'Paris in August is a walking city with almost no shade in the places you most want to stand. The Champ de Mars, the Tuileries axis and the Versailles parterres are all fully exposed, and a brimmed hat does more for you than a fan. Public drinking fountains, including the sparkling-water Wallace fountains, are scattered across the centre and are free, so a refillable bottle removes most of the need to buy water at monument prices.',
      'The dress question is about restaurants rather than churches. Paris has no equivalent of the Vatican dress code, and shorts are fine in any monument, but a fair number of the better bistros and every cabaret expect something smarter in the evening. Moulin Rouge and Crazy Horse both operate a dress standard, and a linen shirt and a pair of trousers cover it without adding weight to the bag.',
    ],
    list: [
      'A packable waterproof shell rather than an umbrella, for the wind that comes with August storms',
      'Refillable bottle for the free street fountains across the centre',
      'Broken-in walking shoes; the centre is cobbles and long stone galleries',
      'Something smarter for cabaret evenings and better restaurants',
      'A light layer for air-conditioned galleries and for the river after 21:00',
    ],
  },

  faqs: [
    {
      question: 'How hot does Paris actually get in August?',
      answer: 'Less than most people assume. The ten-year mean high for Paris in August is 25.4C with an average low of 15.2C, which is around seven degrees cooler than Rome or Barcelona in the same month. Only a handful of afternoons in a typical August exceed 32C. The heat that is noticeable is concentrated in the Metro and the narrow stone streets rather than out on the river.',
    },
    {
      question: 'Does Paris shut down in August?',
      answer: 'The tourist city does not; the neighbourhood city partly does. Museums, monuments, Versailles, the cruise operators, the cabarets and the Metro all run a full August programme. Away from the central arrondissements, a real share of independent bakeries, butchers and family bistros close for two or three weeks around mid-month, and they rarely announce it online. Book dinner rather than turning up.',
    },
    {
      question: 'Do I have to book the Louvre in advance in August?',
      answer: 'Yes. The Louvre requires an advance reservation from 1 July to 31 August, so turning up and queueing is not an option in August. The museum is closed every Tuesday, which in August 2026 means the 4th, 11th, 18th and 25th, and it opens late until 21:00 on Wednesdays and Fridays, which is the most comfortable slot of the week.',
    },
    {
      question: 'Is Monet\'s garden at Giverny open in August?',
      answer: 'Yes. Giverny opens for a defined spring-to-autumn season and closes for the winter, so August is comfortably inside it. Late summer is the nasturtium and dahlia phase, when the flowers have spread across the Grande Allee. The garden is shut for five of the ten months covered by this guide, from November through to the spring, so August is one of the months where the trip exists at all.',
    },
    {
      question: 'Is an evening Seine cruise worth it in August?',
      answer: 'Only if you book late. Sunset in mid-August is around 21:05, so a cruise that departs at 19:00 or 20:00 is a daylight cruise rather than an illuminated one. To see the monuments lit you need a departure after roughly 21:30. From November onwards, when sunset falls back to about 17:10, any early evening sailing does the same job for less money.',
    },
    {
      question: 'Is August cheaper than September in Paris?',
      answer: 'For hotels, usually yes. August is the low point of the Paris trade-fair calendar, so the business, conference and fashion demand that fills central rooms in September and October simply is not there. Flights run the other way, because August is peak European holiday season. If you are weighing late August against early October, late August tends to win on the room and lose on the flight.',
    },
  ],
};

export const september: MonthContent = {
  slug: 'paris-in-september',
  month: 'September',
  monthKey: 'september',
  yearOffset: 0,
  prevMonth: 'August',
  prevPath: '/paris-in-august',
  nextMonth: 'October',
  nextPath: '/paris-in-october',
  metaDescription:
    'Paris in September: nine wet days, the fewest of any month, 21.8C highs and the Heritage Days weekend on 19 and 20 September. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'September is the driest month of the year in Paris by wet days, averaging nine, and it pairs that with 21.8C highs. The standout date is the Journees du Patrimoine on 19 and 20 September, when buildings that are shut to the public for the other 363 days open their doors for free.',

  verdict: {
    capsule:
      'September is the best all-round month in this guide. Nine wet days is the lowest count of any month in the Paris year, 21.8C is the ideal temperature for a city you walk across, and the seasonal attractions are all still running. The cost is that hotel prices climb through the month.',
    body: [
      'The number that decides it is nine. Paris averages nine wet days in September against ten in August, twelve in October and fourteen in March. Rainfall total is a similar 60mm, but it falls on fewer days, which for a trip built around walking between arrondissements is the statistic that actually matters. Combine that with 21.8C highs and you get the most reliable walking weather of the twelve months.',
      'September is also the month Paris becomes itself again. La rentree brings Parisians back from the first week, the neighbourhood bistros that shuttered in August reopen, gallery seasons restart and the queues at the Louvre thin out for a fortnight before the autumn business travel begins. That two-week window in the middle of the month, roughly the 7th to the 20th, is the sweet spot of the entire ten-month guide for a first visit.',
      'The pressure comes at the end. Paris Fashion Week opens on 28 September and immediately absorbs central hotel stock, which pushes rates up sharply for the last few days of the month and straight into October. If you are booking September, book the first three weeks and let someone else have the fourth.',
    ],
  },

  weather: {
    capsule:
      'September averages 21.8C highs and 12.3C lows, with 60mm of rain falling across nine wet days, the fewest of any month in Paris. Daylight drops fast, from about 13 hours 40 minutes at the start of the month to under 12 hours by the end, with sunset near 20:05 on the 15th.',
    body: [
      'The defining weather fact about September is not the temperature, it is the reliability. Nine wet days means roughly seven days in ten are dry, which is better than any other month on the calendar. Rain still arrives in short bursts rather than continuous cloud, so the August habit of carrying a shell rather than an umbrella still applies, but you will use it much less often.',
      'What changes fastest is the light. Paris loses close to two hours of daylight across September, more than in any other month of the year. Sunset moves from about 20:35 on the 1st to around 19:35 by the 30th, so an itinerary planned in the first week does not work in the last. If you want a daylight cruise, take it early in the month; if you want an illuminated one, the last week of September is when it first becomes possible at a civilised hour.',
      'Evenings turn noticeably cooler than the daytime figure suggests. A 21.8C afternoon can be a 12.3C night, which is a nine-degree swing and enough to make a riverside dinner uncomfortable in a t-shirt. September is the first month of the ten where a proper jacket, rather than a light layer, earns its place in the bag.',
    ],
  },

  crowds: {
    capsule:
      'Crowds fall for the first three weeks and then spike. The compulsory Louvre advance-booking window ends on 31 August, so from 1 September you can technically walk up, but the Heritage Days weekend on 19 and 20 September puts the whole city on the street at once.',
    body: [
      'From 1 September the Louvre reverts to recommending rather than requiring an advance reservation. In practice a timed slot is still the right call, because the Mona Lisa room does not get any less busy for being technically walkable-in, but the change gives you flexibility that August did not. Note that September 2026 begins on a Tuesday, so the Louvre is shut on the 1st, and again on the 8th, 15th, 22nd and 29th.',
      'The Journees Europeennes du Patrimoine on the weekend of 19 and 20 September is a genuine anomaly in the Paris calendar. Government buildings, private mansions, embassies and working institutions that never admit the public open for free for two days. It is wonderful and it is completely mobbed, with queues of hours for the most famous buildings. Treat it as a reason to visit, not as a weekend to also try to do the Louvre.',
      'Hotel pricing splits the month cleanly in half. The first three weeks are among the calmer stretches of the autumn. From 28 September, when Fashion Week begins, central rates jump and stay high through October, which is the most expensive month of the ten. If the dates are yours to choose, the week of 7 to 14 September is the best combination of weather, availability and price in this guide.',
    ],
  },

  tours: {
    capsule:
      'Ranked for September: the outdoor and half-day-trip experiences go highest because nine wet days is the best odds of the year, and the seasonal attractions have only two months of running left. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'half-day-trip-to-giverny-from-paris',
        bestFor: 'The best weather odds of the Giverny season',
        why: 'Ranked first despite the lowest rating in our Paris list, because September gives Monet\'s garden its best odds of the year: nine wet days, and the coach traffic thins once the French school year restarts. The garden shuts for the winter after the start of November, so this and October are the last chances.',
      },
      {
        slug: 'palace-of-versailles-full-access-passport-ticket',
        bestFor: 'Fountains plus comfortable walking',
        why: 'The estate is enormous and you walk all of it, which makes 21.8C a far better proposition than August\'s 25.4C. The Musical Fountains upgrade included in this passport is still running in September; it stops at the start of November and does not come back until the spring.',
      },
      {
        slug: 'paris-big-bus-hop-on-hop-off-tour-with-optional-cruise',
        bestFor: 'An open top deck with the best odds of staying dry',
        why: 'Nine wet days is the lowest count in the Paris year, which makes September the single best month of the twelve to buy a ticket whose entire value sits on an open upper deck. It is also a sensible way to cover ground during Heritage Days, when the Metro exits nearest the famous buildings jam up.',
      },
      {
        slug: 'parisnotre-dame-cathedral-interior-and-exterior-guided-tour',
        bestFor: 'Heritage Days architecture, at £18',
        why: 'Ranked up for the Heritage Days weekend, when the whole city turns its attention to buildings and access. Be clear on what this is: general entry to the cathedral is free and this tour queues in the ordinary line with you, so you are paying £18 for an hour of expert commentary, not for skipping anything.',
      },
      {
        slug: 'paris-1-hour-seine-cruise-departing-from-the-eiffel-tower',
        bestFor: 'Catching the switch from daylight to lit',
        why: 'September is the month the evening cruise changes character. Sunset falls from about 20:35 to 19:35 across the four weeks, so by the last week a 20:00 departure finally puts you on a lit river rather than a bright one. Earlier in the month, book it as a daytime trip.',
      },
      {
        slug: 'from-paris-mont-st-michel-at-your-own-pace-by-coach',
        bestFor: 'The last comfortable month for a fourteen-hour day',
        why: 'Twelve hours forty minutes of daylight mid-month is still enough to make a fourteen-hour coach day worth doing, and the light on the bay in September is better than in high summer. By November there is not enough daylight left to justify the seat time, so this is close to the last call.',
      },
      {
        slug: 'versailles-palace-tour-gardens-with-optional-full-access',
        bestFor: 'The state rooms once the August crush eases',
        why: 'The Hall of Mirrors is materially calmer in September than in August, and a guided slot still saves you the entry queue on the forecourt, which is entirely unsheltered. Remember the palace is closed on Mondays, which in September 2026 means the 7th, 14th, 21st and 28th.',
      },
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'Impressionists in the same trip as Giverny',
        why: 'The highest-rated tour we sell, at 4.8, and September is the month to pair it deliberately with Giverny: the garden Monet built and the room where his contemporaries hang, within a few days of each other. The Orsay is shut on Mondays and opens late to 21:45 on Thursdays.',
      },
      {
        slug: 'paris-eiffel-tower-entry-ticket-with-optional-summit-access',
        bestFor: 'Sunset from the summit at a sensible hour',
        why: 'September is arguably the best month of the year for the summit. The air is still settled enough for a long view, but sunset has moved back to around 20:05, so you no longer have to book a late-night slot to catch it as August required.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'The month advance booking stops being compulsory',
        why: 'From 1 September the Louvre no longer requires a reservation, so a guided reserved-access tour becomes a choice rather than a necessity. It is still the better choice on a Heritage Days weekend, when everything with a queue has a longer one.',
      },
    ],
    note:
      'Kept off the September list: the two Seine dinner cruises and the cabaret shows. Nothing is wrong with them, but with nine dry days out of ten and the seasonal attractions in their final weeks, September is the wrong month to spend an evening indoors. They move up sharply from November. Inventory gap worth stating: we do not sell anything tied to the Journees du Patrimoine, which is the biggest single event of the Paris September. It is free and unbookable by design, so there is nothing for anyone to sell you.',
  },

  events: {
    capsule:
      'Two dates shape September. The Journees Europeennes du Patrimoine on Saturday 19 and Sunday 20 September open hundreds of normally-closed buildings for free, and Paris Fashion Week begins on Monday 28 September and takes the hotel market with it.',
    rows: [
      { event: 'La rentree, the French return to work and school', dates: 'First week of September', where: 'Citywide', free: 'Free' },
      { event: 'Journees Europeennes du Patrimoine, Heritage Days', dates: 'Saturday 19 and Sunday 20 September', where: 'Hundreds of buildings across Paris', free: 'Free, queues can be hours' },
      { event: 'Paris Fashion Week', dates: 'From Monday 28 September', where: 'Venues across the city, mostly closed to the public', free: 'Trade only' },
      { event: 'Versailles Musical Fountains still running', dates: 'All September', where: 'Gardens of the Chateau de Versailles', free: 'Ticketed upgrade' },
    ],
    body: [
      'Heritage Days are the reason to move a trip to hit this specific weekend. The Elysee Palace, the Senate, ministries, private hotels particuliers and any number of working institutions that are permanently closed to visitors open for two days at no charge. The trade-off is queueing: the famous addresses run to several hours, and the smart approach is to pick two or three less obvious buildings in one arrondissement rather than chase the headline ones.',
      'Fashion Week from 28 September is not something you can attend, but it is something that will happen to your bill. The shows are trade events, and the effect on a visitor is purely that central hotel rooms become scarce and expensive from that date onwards. That pressure does not release; it runs straight into October, which is the most congested month of the ten.',
      'The seasonal attractions are on their final run. Both Monet\'s garden at Giverny and the Versailles Musical Fountains operate a spring-to-autumn season that ends at the start of November, so September and October are the last two months where a Paris itinerary can include either of them. From November they simply are not available.',
    ],
  },

  closures: {
    capsule:
      'September is one of only two months in this guide with nothing shut for the season and no public holiday at all. The whole month runs on the ordinary weekly rhythm: Louvre closed Tuesdays, Musee d\'Orsay and Chateau de Versailles closed Mondays.',
    rows: [
      { site: 'Musee du Louvre', closed: 'Tuesdays 1, 8, 15, 22 and 29 September', note: 'Five Tuesdays this month, because September 2026 opens on a Tuesday. Late opening to 21:00 on Wednesdays and Fridays.' },
      { site: 'Musee d\'Orsay', closed: 'Mondays 7, 14, 21 and 28 September', note: 'Late opening on Thursdays until 21:45.' },
      { site: 'Chateau de Versailles', closed: 'Mondays 7, 14, 21 and 28 September', note: 'Palace and Trianon estate only. The gardens and park are open every day of the week.' },
      { site: 'No public holidays', closed: 'None in September', note: 'The only month of the ten in this guide with no French public holiday and nothing closing for the season.' },
    ],
    body: [
      'September is the cleanest month in this guide for opening hours. There is no French public holiday in September at all, nothing shuts for the season, and no venue on our list has a fixed annual closure date this month. That is genuinely unusual: December carries the Christmas closures, May carries the worst single closure day of the year, and January opens with the whole city shut for New Year.',
      'The one quirk to plan around is that September 2026 begins on a Tuesday, so the month contains five Tuesdays and therefore five days on which the Louvre is closed. Anyone arriving on the 1st for a short trip should know the Louvre is not available on the day they land. The Orsay and Versailles run the usual four Mondays.',
      'Two seasonal endings are approaching rather than happening. Monet\'s garden at Giverny and the Versailles Musical Fountains both run a season that finishes at the start of November, so September is not affected but is your second-to-last opportunity. Everything else on the Paris list, the cruises, the towers, the museums, the cabarets and the catacombs, runs all twelve months.',
    ],
  },

  packing: {
    capsule:
      'Pack for a nine-degree daily swing. A 21.8C afternoon becomes a 12.3C evening, and September is the first month of the ten where a proper jacket earns its space. With only nine wet days you can afford to leave the heavy waterproof at home.',
    body: [
      'The layering problem in September is real and specific. You will be too warm at 15:00 in anything with a lining and too cold at 22:00 without one, so the answer is a light jumper plus a compact jacket rather than one heavier coat. Riverside dinners and the open top deck of a sightseeing bus are the two places the evening chill catches people out.',
      'Because the odds are so strongly in your favour on rain, September is the month to prioritise comfortable shoes over waterproof ones. Paris is a city best covered on foot between arrondissements, and September gives you around twenty-one dry days to do it in. Heritage Days weekend in particular is a standing-and-walking event, not a sitting-down one.',
    ],
    list: [
      'A compact jacket for a nine-degree drop between afternoon and night',
      'Comfortable walking shoes rather than waterproof ones; only nine wet days',
      'A light jumper for riverside evenings and open-top bus decks',
      'Sunglasses; September light in Paris is low and direct rather than weak',
      'A bag you can queue with for the Heritage Days weekend',
    ],
  },

  faqs: [
    {
      question: 'Is September a good month to visit Paris?',
      answer: 'It is the best all-round month in this guide. Paris averages nine wet days in September, the fewest of any month in the year, with 21.8C highs that suit a city you cross on foot. The seasonal attractions including Giverny and the Versailles fountains are still running. The only drawback is that hotel rates climb hard from the 28th, when Fashion Week begins.',
    },
    {
      question: 'What are the Journees du Patrimoine in Paris?',
      answer: 'European Heritage Days, held on Saturday 19 and Sunday 20 September 2026. Hundreds of buildings that are closed to the public for the rest of the year, including government ministries, private mansions and working institutions, open their doors free of charge for two days. It is free and unbookable, and queues at the famous addresses can run to several hours, so pick lesser-known buildings in one district.',
    },
    {
      question: 'Do I still need to book the Louvre in advance in September?',
      answer: 'It is no longer compulsory. The Louvre requires advance reservation only from 1 July to 31 August, so from 1 September a walk-up visit is permitted, though a timed slot is still the sensible choice. The museum is closed every Tuesday, and September 2026 contains five of them: the 1st, 8th, 15th, 22nd and 29th.',
    },
    {
      question: 'How much daylight does Paris lose in September?',
      answer: 'Close to two hours, more than in any other month of the year. Sunset moves from about 20:35 on 1 September to roughly 19:35 by the 30th, and mid-month daylight is 12 hours 40 minutes. That means an itinerary planned around the first week does not work in the last, and an evening river cruise only becomes a genuinely illuminated one in the final days of the month.',
    },
    {
      question: 'Is Paris expensive in September?',
      answer: 'It splits in two. The first three weeks are among the calmer stretches of the autumn for central hotel rates. From 28 September, when Paris Fashion Week opens, rooms become scarce and prices jump, and that pressure carries straight into October, the most congested and expensive month of the ten covered here. Book the first three weeks if the dates are yours to choose.',
    },
    {
      question: 'Are there any public holidays in Paris in September?',
      answer: 'No. September is the only month of the ten in this guide with no French public holiday, no seasonal closure and no fixed annual closure date at any of the major venues. Everything runs on the ordinary weekly rhythm, which means the Louvre closed on Tuesdays and the Musee d\'Orsay and Chateau de Versailles closed on Mondays.',
    },
  ],
};

export const october: MonthContent = {
  slug: 'paris-in-october',
  month: 'October',
  monthKey: 'october',
  yearOffset: 0,
  prevMonth: 'September',
  prevPath: '/paris-in-september',
  nextMonth: 'November',
  nextPath: '/paris-in-november',
  metaDescription:
    'Paris in October: four major trade fairs, the most expensive hotel month of the year, and the clocks going back on 25 October. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'October is the most congested and most expensive month in this guide, because four major trade events land in it at once. It is also the month the clocks go back, on Sunday 25 October, which cuts an hour off the evening overnight and changes what is worth booking after about 17:00.',

  verdict: {
    capsule:
      'October works, but it is the month to book earliest and pay most. Fashion Week, the Mondial de l\'Auto from 12 to 18 October, Art Basel Paris and the SIAL food fair all fall inside it, which puts hotel demand at its annual peak while the weather drops to 17.0C and twelve wet days.',
    body: [
      'Nobody warns visitors about the Paris October trade calendar, and it is the single most useful thing on this page. Fashion Week runs from the end of September into the first days of October. The Mondial de l\'Auto, the Paris motor show, occupies 12 to 18 October. Art Basel Paris and SIAL, the food industry fair, also fall in the month. Individually none of them is something you would attend; collectively they mean the city is hosting hundreds of thousands of business visitors who booked their rooms a year ago.',
      'The effect on a leisure visitor is entirely financial and logistical. Central hotel rates in October are the highest of the ten months covered here, higher than August, higher than May. Restaurant tables in the 1st, 7th and 8th get harder, and the Metro at 08:30 and 18:00 is genuinely unpleasant during the motor show week. None of that touches the monuments, which are no busier than September.',
      'Against that, October is a lovely month to look at. Average highs of 17.0C are ideal for long walks, the plane trees along the canals and in the Luxembourg turn, and the low autumn light on limestone is the reason so many photographers pick it. If you can book the last week of October, after the motor show has packed up and the clocks have gone back, you get most of the month\'s virtues at a materially lower price.',
    ],
  },

  weather: {
    capsule:
      'October averages 17.0C highs and 9.4C lows, with 72mm of rain across twelve wet days. Mid-month daylight is 10 hours 54 minutes with sunset near 19:00, but the clocks go back on Sunday 25 October and sunset drops from about 18:45 to about 17:40 overnight.',
    body: [
      'The clock change on 25 October is the biggest practical weather event of the Paris autumn. On Saturday 24 October the sun sets at around 18:45. On Monday 26 October it sets at around 17:40. Nothing about the amount of daylight changed much; what changed is that the light now finishes before the working day does, and anything you planned to do outdoors after 17:00 needs rethinking from that Sunday onwards.',
      'Rainfall shifts character too. October\'s 72mm arrives across twelve wet days, and unlike the sharp August storms it comes as persistent grey drizzle driven in off the Atlantic. That is a different packing problem: an umbrella works in October in a way it does not in August, because there is much less wind behind the rain.',
      'The temperature is the redeeming feature. At 17.0C average highs October is the best pure walking temperature of the ten months, warm enough to stand still and cool enough to cover eight or nine kilometres without noticing. Evenings drop to 9.4C, which is coat weather, and the first properly cold nights of the season usually arrive in the last week.',
    ],
  },

  crowds: {
    capsule:
      'This is the peak hotel-price month of the ten. The Mondial de l\'Auto from 12 to 18 October is the worst single week, with Fashion Week, Art Basel Paris and SIAL adding to the same demand. Book accommodation months ahead or accept a location further out.',
    body: [
      'The order to book things in October is unusual: accommodation first, by a wide margin, and attractions second. Museum and monument tickets are not the scarce resource in October; hotel rooms in the central arrondissements are. If you are booking inside three months for the week of 12 to 18 October, look at the 11th, 12th or 15th arrondissements or across at La Defense rather than paying motor-show prices for a small room near the Louvre.',
      'The attraction picture is genuinely calmer than the summer. The Louvre and Versailles both run below their August peak, and the queue on the Versailles forecourt is a much better prospect at 17.0C than at 25.4C. October is also the last month of the Versailles fountain season and the last month Monet\'s garden at Giverny is open, so those two are the exceptions that stay busy right to the end.',
      'One correction worth making, because a great many October guides still repeat it: Nuit Blanche, the all-night arts festival, is not an October event any more. It has moved to June. If a page tells you to plan an early-October Saturday night around Nuit Blanche, that page has not been updated. Plan around the motor show instead, which is the thing that will actually affect your trip.',
    ],
  },

  tours: {
    capsule:
      'Ranked for October: the seasonal attractions in their final weeks come first, then the indoor options, because twelve wet days and a 25 October clock change push the value of a covered afternoon up sharply. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'half-day-trip-to-giverny-from-paris',
        bestFor: 'The last month of the Giverny season',
        why: 'Ranked first because this is the deadline. Monet\'s garden closes at the start of November and stays shut through the winter, so October is the final month of the ten covered here in which this trip can be taken at all. Autumn colour in the water garden is the compensation for the shorter day.',
      },
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'Twelve wet days and the highest rating we stock',
        why: 'Twelve wet days makes a covered, seated, guided afternoon worth considerably more in October than in September. At 4.8 this is the best-rated tour on the site, and the Thursday late opening until 21:45 is a genuinely good use of an evening once the clocks have gone back.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'A grey afternoon with a plan',
        why: 'Ranked up for the wet-day count. The Louvre is enormous and reserved access with a guide turns an intimidating building into a three-hour route, which is exactly what you want on a drizzly October afternoon. Closed Tuesdays: the 6th, 13th, 20th and 27th.',
      },
      {
        slug: 'palace-of-versailles-full-access-passport-ticket',
        bestFor: 'The final month of the fountain season',
        why: 'The second deadline in the month. The Musical Fountains and Musical Gardens that this passport unlocks run only to the start of November, so October is the last chance to buy the version of Versailles with the water working. From November this same ticket is worth noticeably less.',
      },
      {
        slug: 'disneyland-paris-2-parks-ticket-1-2-3-4-5-day',
        bestFor: 'The Halloween season',
        why: 'Ranked up for October specifically. Disneyland Paris runs a Halloween season through the month, which is the one time of year the park has a distinct seasonal identity that is not Christmas. French school holidays fall in the second half of October, so weekdays in the first fortnight are the calmer choice.',
      },
      {
        slug: 'paris-bateaux-mouches-evening-cruise-souvenir-postcard',
        bestFor: 'The month an evening cruise becomes practical',
        why: 'Ranked up for the clock change. Before 25 October sunset is around 18:45 and an illuminated cruise means a late dinner-time sailing. After the 25th sunset is about 17:40, so a 19:00 departure gives you a properly lit Seine at £15. Boarding is at Pont de l\'Alma, Port de la Conference in the 8th, not at the Eiffel Tower quay.',
      },
      {
        slug: 'paris-catacombs-entry-seine-river-cruise-with-audio-guide',
        bestFor: 'Weather that cannot reach you',
        why: 'Twenty metres underground the temperature sits around 14C whatever October is doing on the surface, which makes the catacombs the most weather-proof thing on our Paris list. The paired Seine cruise means you get the river too, and can take it on whichever half of the day looks drier.',
      },
      {
        slug: 'moulin-rouge-show-with-champagne',
        bestFor: 'Evenings that now start in the dark',
        why: 'From 25 October it is dark by six, and a seated two-hour show becomes a natural way to fill an evening that no longer has any light in it. Montmartre is also at its best in October, when the autumn colour reaches the Butte and the summer coach crowds have gone.',
      },
      {
        slug: 'paris-1-hour-seine-cruise-departing-from-the-eiffel-tower',
        bestFor: 'One dry hour on the water for £15',
        why: 'Still the cheapest way to see the whole monumental centre in an hour, and the covered seating means one of October\'s twelve wet days does not ruin it. Take it before the 25th for a daylight run and after the 25th for a lit one; the same ticket does both jobs in different halves of the month.',
      },
      {
        slug: 'versailles-palace-tour-gardens-with-optional-full-access',
        bestFor: 'Queueing outdoors in 17C rather than 25C',
        why: 'The entry queue on the Versailles forecourt is completely unsheltered, and October at 17.0C is a much kinder place to spend twenty minutes than August at 25.4C. A guided skip-the-line slot removes it entirely. Closed Mondays: the 5th, 12th, 19th and 26th.',
      },
    ],
    note:
      'Dropped for October: the fourteen-hour Mont-Saint-Michel coach day and the open-top sightseeing bus. The coach day loses too much of its return leg to the dark once the clocks change on the 25th, and an open upper deck is a poor buy at twelve wet days a month. Both come back in April. Inventory gaps to be honest about: we do not sell a ticket to the Mondial de l\'Auto, to Art Basel Paris or to SIAL, and none of them is a leisure event anyway. We also do not stock a Montmartre walking tour, which is the thing we would most like to be able to offer you in a Paris October.',
  },

  events: {
    capsule:
      'October is the busiest trade month of the Paris year. The Mondial de l\'Auto runs 12 to 18 October, with Fashion Week carrying over from September and Art Basel Paris and SIAL also in the month. The clocks go back on Sunday 25 October.',
    rows: [
      { event: 'Paris Fashion Week, carrying over from September', dates: 'Into early October', where: 'Venues citywide, closed to the public', free: 'Trade only' },
      { event: 'Mondial de l\'Auto, the Paris motor show', dates: 'Monday 12 to Sunday 18 October', where: 'Paris Expo, Porte de Versailles', free: 'Ticketed' },
      { event: 'Art Basel Paris and SIAL food fair', dates: 'During October', where: 'Grand Palais and Paris Nord Villepinte', free: 'Ticketed and trade' },
      { event: 'Clocks go back one hour', dates: 'Sunday 25 October', where: 'Nationwide', free: 'Free' },
      { event: 'Final month of the Giverny and Versailles fountain seasons', dates: 'All October', where: 'Giverny and the Versailles gardens', free: 'Ticketed' },
    ],
    body: [
      'The Mondial de l\'Auto from 12 to 18 October is a public-ticketed show rather than a trade-only one, which is why it moves the hotel market so hard: it draws a very large general audience on top of the industry. If your dates are flexible by a week, moving either side of it is the highest-value change you can make to an October trip.',
      'Nuit Blanche does not belong on this list, and this is where most October guides get Paris wrong. The all-night contemporary arts festival used to be an early-October fixture and has moved to June. Any itinerary that has you keeping a Saturday night free in October for Nuit Blanche is built on out-of-date information.',
      'The clock change on Sunday 25 October is the date to build the second half of the month around. Evening light disappears an hour earlier from that morning, which turns an outdoor plan into an indoor one for anything after about 17:30. On the plus side it is the moment the illuminated-Paris experiences, the evening cruises and the lit monuments, become available at a normal hour rather than late at night.',
    ],
  },

  closures: {
    capsule:
      'October is the last month with everything seasonal still running, and the month it all ends. Monet\'s garden at Giverny and the Versailles Musical Fountains both close at the start of November, so an October booking is the final one that includes them.',
    rows: [
      { site: 'Fondation Claude Monet, Giverny', closed: 'Closes at the start of November', note: 'Open through October, then shut for the winter. This is the last of the ten months in this guide in which the Giverny day trip runs.' },
      { site: 'Versailles Musical Fountains', closed: 'Season ends at the start of November', note: 'The fountain and musical-gardens upgrade included in the Full Access passport stops running. The palace and gardens stay open.' },
      { site: 'Musee du Louvre', closed: 'Tuesdays 6, 13, 20 and 27 October', note: 'Open to 21:00 on Wednesdays and Fridays, which is worth more once the clocks go back on the 25th.' },
      { site: 'Musee d\'Orsay', closed: 'Mondays 5, 12, 19 and 26 October', note: 'Late opening on Thursdays until 21:45.' },
      { site: 'Chateau de Versailles', closed: 'Mondays 5, 12, 19 and 26 October', note: 'Palace and Trianon only. Gardens and park open every day.' },
    ],
    body: [
      'October is a hinge month for closures. Nothing has shut yet, and two significant things are about to. The Fondation Claude Monet at Giverny operates a spring-to-autumn season that finishes at the start of November, and the Versailles Musical Fountains run on the same rhythm. Between them they account for the two most seasonal products we sell, and both disappear from the November, December, January, February and March pages.',
      'That gives October a specific value that no amount of good weather in April gives it: it is a deadline. If Monet\'s garden is on your list, an October trip is the last one in this ten-month window that can include it. The next opportunity is the spring, and the exact reopening date is set by the foundation each year and had not been published for 2027 when we wrote this, so check before you build a trip around it.',
      'Everything else is the standard weekly pattern. The Louvre closes on Tuesdays, the Musee d\'Orsay and the Chateau de Versailles on Mondays. The Versailles gardens and park remain open seven days a week, which after the fountains stop is actually a better proposition than it sounds: the parterres and the Grand Canal in late-October colour, with the palace shut and almost nobody there, is one of the quiet pleasures of the Paris autumn.',
    ],
  },

  packing: {
    capsule:
      'Pack for 17.0C days, 9.4C nights and twelve days of Atlantic drizzle. October rain in Paris comes without much wind, so unlike August this is the month an umbrella genuinely beats a hood, and the clock change on 25 October means you need something for the dark.',
    body: [
      'The autumn rain pattern changes what works. August storms arrive with gusts that destroy umbrellas; October drizzle arrives on still grey air and can last most of a day. A compact umbrella plus water-resistant shoes covers October far better than a technical shell, and the shoes matter more than the coat because Paris pavements hold standing water at every kerb.',
      'From the 25th onwards you are walking around in the dark from about half past five, which changes what you carry rather than what you wear. A phone that will survive a long evening of navigating and photographing lit monuments is the practical concern, and lit monuments are what the second half of October gives you in exchange for the early sunset.',
    ],
    list: [
      'A compact umbrella; October drizzle in Paris comes without much wind',
      'Water-resistant shoes rather than a heavy coat',
      'A warm layer for 9.4C evenings, especially after the 25th',
      'A power bank for long dark evenings out',
      'Accommodation booked early, or a location outside the central arrondissements',
    ],
  },

  faqs: [
    {
      question: 'Is Nuit Blanche in October in Paris?',
      answer: 'No, not any more. Nuit Blanche, the all-night contemporary arts festival, has moved to June and is no longer an October event. A large number of Paris guides still list it in early October, and any itinerary built around keeping an October Saturday night free for it is working from out-of-date information.',
    },
    {
      question: 'Why is Paris so expensive in October?',
      answer: 'Four major events land in the same month. Paris Fashion Week carries over from late September, the Mondial de l\'Auto motor show runs from 12 to 18 October, and Art Basel Paris and the SIAL food industry fair also fall in October. Together they put central hotel demand at its annual peak, which makes October the most expensive of the ten months covered in this guide.',
    },
    {
      question: 'When do the clocks change in Paris in October?',
      answer: 'On Sunday 25 October 2026, when they go back one hour. Sunset falls from about 18:45 on Saturday 24 October to roughly 17:40 on Monday 26 October. Anything you planned outdoors after 17:00 needs rethinking from that weekend, but it is also the point at which evening river cruises and lit monuments become available at a normal hour rather than late at night.',
    },
    {
      question: 'Is Giverny open in October?',
      answer: 'Yes, and October is the last month it is. The Fondation Claude Monet runs a spring-to-autumn season that closes at the start of November, so an October trip is the final opportunity in this ten-month guide to visit Monet\'s garden. The water garden in autumn colour is the compensation for the shorter day and the twelve wet days.',
    },
    {
      question: 'Do the Versailles fountains run in October?',
      answer: 'Yes, October is the final month of the season. The Musical Fountains and Musical Gardens that the Versailles Full Access passport unlocks operate from spring to the start of November only. From November through the winter the palace and gardens remain open but the water does not run, which changes what that ticket is worth.',
    },
    {
      question: 'What is the weather like in Paris in October?',
      answer: 'Average highs of 17.0C and lows of 9.4C, with 72mm of rain across twelve wet days. That temperature is arguably the best walking weather of the year, warm enough to stand still in and cool enough to cover long distances. The rain is Atlantic drizzle on still air rather than the sharp thunderstorms of August, so an umbrella works better than a hood.',
    },
  ],
};

export const november: MonthContent = {
  slug: 'paris-in-november',
  month: 'November',
  monthKey: 'november',
  yearOffset: 0,
  prevMonth: 'October',
  prevPath: '/paris-in-october',
  nextMonth: 'December',
  nextPath: '/paris-in-december',
  metaDescription:
    'Paris in November: the best value stretch of the year runs 1 to 18 November, but Giverny and the Versailles fountains both stop on 1 November. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'The first eighteen days of November are the best value of the entire ten months covered here: the autumn trade fairs have gone and the Christmas market pricing has not started. The trade-off is that two seasonal attractions, Monet\'s garden at Giverny and the Versailles fountains, both end on 1 November.',

  verdict: {
    capsule:
      'November is the value month, with one hard condition attached. From 1 to 18 November Paris is as cheap and as calm as it gets all year. But 1 November is also the day Giverny and the Versailles fountains shut for the winter, so November buys you a quieter, cheaper, smaller Paris.',
    body: [
      'The eighteen-day window is the finding worth acting on. October\'s trade fairs finish, the Christmas market and light-switch-on demand has not yet begun, and central Paris briefly has more rooms than visitors. Hotel rates in the first two and a half weeks of November are the lowest in this guide, and the difference against the same room in October is not marginal.',
      'What you give up is the outdoor half of the city. Average highs fall to 11.3C, twelve wet days out of thirty bring Atlantic grey, and mid-month daylight is 9 hours 14 minutes with sunset around 17:10. Paris in November is a museum, cafe and river city rather than a garden and rooftop one, and any itinerary that fights that will be a disappointing one.',
      'The seasonal losses land on the very first day. All Saints, 1 November, is a public holiday and falls on a Sunday in 2026. It is also the last day of the Fondation Claude Monet season at Giverny and the last day of the Versailles Musical Fountains. From 2 November neither is available, and neither returns inside this guide until April. If either is the reason for your trip, November is the wrong month by one day.',
    ],
  },

  weather: {
    capsule:
      'November averages 11.3C highs and 5.4C lows, with 63mm of rain across twelve wet days and just 9 hours 14 minutes of daylight in mid-month. Sunset is around 17:10 on the 15th, so the practical sightseeing day finishes before most people would think of dinner.',
    body: [
      'Nine hours and fourteen minutes is the number that reshapes a November itinerary. You get roughly a five-hour window of good light, from about 09:00 to 14:00, and then a long lit evening. That is not a small day, but it is a differently shaped one: two proper outdoor stops before lunch, then somewhere indoors, then the illuminated city from five o\'clock. Trying to run an August-style schedule in November is what makes people say the month is depressing.',
      'The rainfall total, 63mm, is actually lower than October\'s 72mm and much lower than December\'s 76mm, so November is not the wettest month of the ten by volume. Twelve wet days is the same count as October. What makes it feel wetter is the combination with low cloud and short light: rain at 11.3C under a grey sky at three in the afternoon reads as worse weather than the same rainfall in a bright October.',
      'It is also not properly cold yet. At 11.3C average highs and 5.4C lows, November sits well above December, January and February, and frost is uncommon before the last week. A decent coat is enough; you do not need the winter kit that January demands. That combination of mild-but-dark is exactly why November is cheap.',
    ],
  },

  crowds: {
    capsule:
      'From 1 to 18 November Paris is the quietest and cheapest it gets. Nothing needs booking weeks ahead, museum queues are at their annual low and restaurant tables are available. From roughly the 19th the Christmas season starts to price rooms upwards again.',
    body: [
      'This is the one month in the guide where the honest advice is to book less. Louvre timed slots are widely available a day or two ahead, the Versailles forecourt queue barely exists, and the Eiffel Tower lift wait at 10:00 on a Tuesday in mid-November is a fraction of the August equivalent. If you like arranging a trip loosely and deciding in the morning, this is the month for it.',
      'Two public holidays punctuate the month and both are worth knowing. All Saints on Sunday 1 November is a holiday that falls on a weekend, so its practical effect is small. Armistice Day on Wednesday 11 November is a midweek public holiday with a ceremony at the Arc de Triomphe, and it closes banks, offices and some shops while leaving museums and monuments open.',
      'The turn comes in the third week. Once the Christmas lights are up on the Champs-Elysees and the seasonal markets open, weekend demand returns and the value window closes. We are not publishing a switch-on date because the city sets it each year and it had not been confirmed when we wrote this. What we can say with confidence is that the first eighteen days are the value, and the last ten days are not.',
    ],
  },

  tours: {
    capsule:
      'Ranked for November: with Giverny closed and the Versailles fountains off, the top of this list is deliberately indoor and evening-weighted. Nine hours of daylight rewards things that work after dark. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'Monet, now that Giverny has shut',
        why: 'Ranked first for a specific November reason: the garden Monet built closed on 1 November, and the Orsay is where the paintings he and his contemporaries made are hanging all winter. It is also the highest-rated tour we sell at 4.8, and the Thursday late opening to 21:45 uses an evening that has no daylight in it anyway.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'Filling the dark half of the day',
        why: 'Reserved access with a guide turns the Louvre into a defined three-hour route, which is the right shape for a month where useful daylight runs out at 17:10. Take a Wednesday or Friday and use the 21:00 late closing: in November that is four hours of the museum after dark, and the galleries are close to empty.',
      },
      {
        slug: 'versailles-palace-tour-gardens-with-optional-full-access',
        bestFor: 'Versailles once the water has stopped',
        why: 'This is the Versailles ticket that makes sense from 1 November. The fountains ended on the 1st, so the value has moved decisively from the gardens to the state rooms and the Hall of Mirrors, which is what a guided palace tour actually delivers. Closed Mondays: the 2nd, 9th, 16th, 23rd and 30th.',
      },
      {
        slug: 'paris-louvre-museum-tour-mona-lisa-iconic-masterpieces',
        bestFor: 'A second, slower Louvre visit',
        why: 'November is the only month in this guide where a second Louvre visit is a realistic idea, because the museum is quiet enough to be worth returning to and the weather gives you no reason to be outside. This is the longer two to three hour version with reserved access.',
      },
      {
        slug: 'paris-bateaux-mouches-evening-cruise-souvenir-postcard',
        bestFor: 'A lit river at a civilised hour',
        why: 'With sunset around 17:10 an evening cruise finally happens before dinner rather than after it. At £15 for seventy minutes it is the cheapest thing on this page and the one that most uses November\'s long dark evening. Departures are from Pont de l\'Alma at Port de la Conference in the 8th, which is not the same pier as the Eiffel Tower cruises.',
      },
      {
        slug: 'paris-catacombs-entry-seine-river-cruise-with-audio-guide',
        bestFor: 'Twelve wet days and a stable 14C',
        why: 'The catacombs sit at roughly 14C year round, twenty metres below whatever November is doing above them, which makes this the most weather-independent booking on our Paris list. The Seine cruise paired with it gives you the illuminated river in the same ticket.',
      },
      {
        slug: 'parisnotre-dame-cathedral-interior-and-exterior-guided-tour',
        bestFor: 'An hour indoors for £18',
        why: 'Ranked up because £18 for an hour under cover is good value in a month with twelve wet days, and the cathedral itself is free to enter. To be clear about what you are buying: this is not a skip-the-line ticket. You queue in the general line with your guide, which the listing puts at ten to twenty minutes, and no advance reservation is needed.',
      },
      {
        slug: 'moulin-rouge-show-with-champagne',
        bestFor: 'An evening that starts in the dark',
        why: 'By mid-November it is dark from five, and a fixed seated two-hour show with a drink is exactly the right shape for that. It is also one of the few things in Paris that is no less good in November than in June, because none of it happens outdoors.',
      },
      {
        slug: 'bateaux-parisiens-dinner-cruise',
        bestFor: 'Dinner and the lit monuments in one booking',
        why: 'Ranked up sharply for the season. A heated two and a half hour dinner cruise solves a November evening completely: you eat, you stay warm, and the monuments are lit for the entire sailing rather than for the last twenty minutes as they would be in August.',
      },
      {
        slug: 'paris-macaron-class-at-galeries-lafayette',
        bestFor: 'A wet afternoon with something to show for it',
        why: 'A ninety-minute hands-on class under the Galeries Lafayette dome, which is about as good a use of one of November\'s twelve wet afternoons as Paris offers. You leave with four macarons you made and two recipes, and the store itself is worth the detour once the Christmas display goes up late in the month.',
      },
    ],
    note:
      'Off the November list, and this is the month it matters most: the Giverny day trip and the open-top sightseeing bus. Giverny is not a ranking decision, it is a closure. Monet\'s garden shut on 1 November and does not reopen inside this guide until April, so we have moved it into the closures section rather than leave it on a list you cannot act on. The bus is a judgement call: an open upper deck at 11.3C with twelve wet days is not worth £33. The Mont-Saint-Michel fourteen-hour day also drops out, because nine hours of daylight cannot hold it. Gaps we cannot fill: no Christmas market tour and no Champs-Elysees lights experience, both of which would belong on a late-November list if we stocked them.',
  },

  events: {
    capsule:
      'November opens with two closures rather than an event: 1 November is All Saints, a public holiday falling on a Sunday, and the last day of both the Giverny season and the Versailles fountains. Armistice Day on Wednesday 11 November is the month\'s other public holiday.',
    rows: [
      { event: 'All Saints Day, a national public holiday', dates: 'Sunday 1 November', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Final day of the Giverny season', dates: 'Sunday 1 November', where: 'Fondation Claude Monet, Giverny', free: 'Ticketed' },
      { event: 'Final day of the Versailles Musical Fountains', dates: 'Sunday 1 November', where: 'Gardens of the Chateau de Versailles', free: 'Ticketed upgrade' },
      { event: 'Armistice Day, a national public holiday', dates: 'Wednesday 11 November', where: 'Ceremony at the Arc de Triomphe', free: 'Public holiday' },
      { event: 'Best value window of the ten-month guide', dates: 'Sunday 1 to Wednesday 18 November', where: 'Citywide', free: 'Free advice' },
    ],
    body: [
      'The two seasonal endings on 1 November are the most consequential dated facts in this entire guide, because they are the only ones that remove a whole product from sale. The Fondation Claude Monet at Giverny and the Versailles Musical Fountains both finish on that Sunday. Everything else in Paris, the towers, the museums, the cruises, the catacombs, the cabarets, runs all twelve months.',
      'Armistice Day on Wednesday 11 November is a full public holiday with a wreath-laying at the Tomb of the Unknown Soldier under the Arc de Triomphe. Because it falls midweek, some French workers take the Monday and Tuesday as a bridge, which briefly firms up domestic demand around that date. Museums and monuments keep normal hours.',
      'From roughly the 19th the Christmas season begins to assert itself: lights go up, seasonal markets open along the Champs-Elysees and at La Defense, and the department store windows on Boulevard Haussmann are unveiled. We are not publishing specific 2026 dates for any of that because the city and the stores set them annually and they had not been confirmed at the time of writing. Treat the last ten days of November as early December on price.',
    ],
  },

  closures: {
    capsule:
      'Two things close for the season on 1 November and neither returns inside this guide until April: Monet\'s garden at Giverny, and the Versailles Musical Fountains. Everything else follows the usual weekly rhythm, with five Mondays in November 2026 affecting Orsay and Versailles.',
    rows: [
      { site: 'Fondation Claude Monet, Giverny', closed: 'From 2 November, all winter', note: 'The season ends on 1 November. Shut for November, December, January, February and March. The 2027 reopening date had not been published when this was written.' },
      { site: 'Versailles Musical Fountains', closed: 'From 2 November, all winter', note: 'The fountain upgrade in the Full Access passport does not run. The palace, Trianon, gardens and park all stay open.' },
      { site: 'Chateau de Versailles', closed: 'Mondays 2, 9, 16, 23 and 30 November', note: 'Five Mondays, because November 2026 begins on a Sunday. The gardens and park remain open every day.' },
      { site: 'Musee d\'Orsay', closed: 'Mondays 2, 9, 16, 23 and 30 November', note: 'Late opening on Thursdays until 21:45, which is worth more in a month with a 17:10 sunset.' },
      { site: 'Musee du Louvre', closed: 'Tuesdays 3, 10, 17 and 24 November', note: 'Late to 21:00 on Wednesdays and Fridays. Quietest month of the ten for timed-slot availability.' },
    ],
    body: [
      'This is the closure section that matters most in the guide, because November is where the Paris year genuinely changes shape. On 1 November the Fondation Claude Monet closes its gates at Giverny for the winter, and the Versailles Musical Fountains run for the last time. Those are the only two seasonal shutdowns in the whole Paris calendar, and they both happen on the same day.',
      'The practical consequence is that our Giverny day trip is not something you can book in November, December, January, February or March. We have taken it off those five month pages rather than list a product you cannot use, and we have put it here instead. The foundation sets its own opening date each spring and had not announced the 2027 one when this page was written, so if a spring trip depends on it, check the foundation directly before booking travel.',
      'For Versailles, the fountains stopping does not close anything, it changes what a ticket is worth. The Full Access passport carries the Musical Fountains and Musical Gardens upgrade, and from 2 November that upgrade has nothing to unlock. A guided tour of the state rooms is the better November purchase. The gardens and the park stay open every day of the week including Mondays, and an empty Versailles park under November light is one of the better free things within an hour of central Paris.',
    ],
  },

  packing: {
    capsule:
      'Pack for 11.3C days, 5.4C nights, twelve wet days and a 17:10 sunset. November in Paris is mild rather than cold, so a good coat beats winter kit, but the short daylight means you will spend more of your walking hours in the dark than in the light.',
    body: [
      'The mistake people make is over-packing for cold. November highs of 11.3C are seven degrees above January\'s, and frost is uncommon before the last week, so thermal layers are unnecessary weight. What you actually need is waterproofing and a scarf: it is the damp and the wind off the river that makes 11C feel colder than the number, not the air temperature itself.',
      'Footwear does more work than anything else in November. Twelve wet days on limestone pavements means standing water at every crossing, and the museum days that dominate a November itinerary involve several hours of standing on hard floors. One pair of properly waterproof shoes is worth more than any other item in the bag.',
    ],
    list: [
      'Genuinely waterproof shoes rather than water-resistant ones',
      'A warm scarf; the damp off the Seine does more than the air temperature',
      'A coat with a hood, for twelve wet days',
      'Layers you can shed indoors; Paris museums run warm',
      'No need for thermals; November highs are 11.3C, not January\'s 7.3C',
    ],
  },

  faqs: [
    {
      question: 'Is November a good time to visit Paris?',
      answer: 'The first eighteen days are the best value in this ten-month guide. The autumn trade fairs have finished and Christmas pricing has not started, so hotel rates are at their annual floor and museum queues at their lowest. The cost is 9 hours 14 minutes of daylight, twelve wet days and 11.3C highs, plus the fact that Giverny and the Versailles fountains both close on 1 November.',
    },
    {
      question: 'Is Giverny open in November?',
      answer: 'Only on 1 November. The Fondation Claude Monet season ends that day, and the garden is then shut through November, December, January, February and March. It does not reopen inside this guide until the spring, and the exact 2027 reopening date had not been published when this page was written, so check the foundation directly before planning a spring trip around it.',
    },
    {
      question: 'Do the Versailles fountains run in November?',
      answer: 'Only on 1 November, the last day of the season. From 2 November the Musical Fountains and Musical Gardens do not run, which means the Versailles Full Access passport loses the upgrade that distinguishes it. The palace, the Trianon estate, the gardens and the park all stay open, and a guided tour of the state rooms is the better winter purchase.',
    },
    {
      question: 'How dark is Paris in November?',
      answer: 'Mid-month daylight is 9 hours 14 minutes, with sunset around 17:10 on the 15th. That gives roughly a five-hour window of good light from about 09:00 to 14:00, then a long lit evening. It is a differently shaped day rather than a short one: two outdoor stops before lunch, something indoors in the afternoon, then the illuminated city from five o\'clock.',
    },
    {
      question: 'When is the cheapest time to visit Paris?',
      answer: 'The window from 1 to 18 November. October\'s trade fairs have ended and the Christmas market and lights demand has not begun, so central Paris briefly has more rooms than visitors. From roughly the 19th, as the seasonal markets open and the lights go up, weekend demand returns and rates climb back towards December levels.',
    },
    {
      question: 'Are there public holidays in Paris in November?',
      answer: 'Two. All Saints on Sunday 1 November, which falls on a weekend in 2026 so has little practical effect, and Armistice Day on Wednesday 11 November, which includes a ceremony at the Arc de Triomphe. Both close banks, offices and some independent shops, while museums, monuments and the Metro run normally.',
    },
  ],
};

export const december: MonthContent = {
  slug: 'paris-in-december',
  month: 'December',
  monthKey: 'december',
  yearOffset: 0,
  prevMonth: 'November',
  prevPath: '/paris-in-november',
  nextMonth: 'January',
  nextPath: '/paris-in-january',
  metaDescription:
    'Paris in December: 8 hours 21 minutes of daylight, the shortest of the year, with the Louvre and Versailles both closed on 25 December. Weather table, closures, events and ten ranked tours.',
  heroCapsule:
    'December has the shortest days of the Paris year at 8 hours 21 minutes, with sunset around 16:55. That is not the drawback most people assume: it means the illuminated city, which is the whole point of a Paris December, is available from five in the afternoon rather than after ten at night.',

  verdict: {
    capsule:
      'December is the month to stop resisting the dark and build the trip around it. With sunset near 16:55, Paris spends more of your waking visit lit up than in daylight. Plan two outdoor things before lunch, then treat 17:00 onwards as the main event rather than the end of the day.',
    body: [
      'Eight hours and twenty-one minutes is the shortest daylight figure in this guide, almost exactly six hours less than May. Fighting that produces a bad trip. Accepting it produces a very good one, because Paris is the rare city that is unambiguously better looking illuminated, and in December you get the illuminated version at four in the afternoon instead of at eleven at night.',
      'A small piece of astronomy makes December less bleak than the headline suggests. Paris does not get steadily darker all month. The earliest sunset of the year happens around the middle of December, at roughly 16:52, and by 31 December the sun is already setting a few minutes later. The mornings keep getting darker into January, but the evenings start recovering before Christmas.',
      'The weather is the genuinely hard part, and worse than November on every measure that matters. December brings 76mm of rain across thirteen wet days, tied with May as the wettest month of the ten by volume, at 8.7C highs and 3.5C lows. That combination, cold and damp and dark, is why the successful December itineraries are the ones weighted towards heated interiors and boats rather than towards walking.',
    ],
  },

  weather: {
    capsule:
      'December averages 8.7C highs and 3.5C lows with 76mm of rain across thirteen wet days, the wettest month of the ten alongside May. Daylight is 8 hours 21 minutes mid-month with sunset near 16:55. Snow that settles in central Paris is rare, at most a day or two in a typical winter.',
    body: [
      'Thirteen wet days at 8.7C is the least forgiving combination in the guide, and it is worth being direct about it: a Paris December can hand you a fortnight of low grey cloud and persistent drizzle. What it very rarely hands you is snow. Central Paris sits low and close to the Atlantic, and settling snow is unusual and short-lived. Plan for wet rather than for white.',
      'The daylight arithmetic is the thing to actually schedule around. Sunrise is not until about 08:40, so there is no early start to be had, and sunset is around 16:55. Your realistic outdoor window is roughly 09:30 to 16:00, which is six and a half hours. That is enough for two substantial things, not four, and any December plan with four outdoor stops in it will fail.',
      'The upside is the one Paris is famous for. Once the lights are on, the Seine reflects the illuminated facades of the Louvre, the Conciergerie and the Institut de France, and the Eiffel Tower runs its five-minute sparkle on the hour after dark. In August you have to stay up until half past ten to see that. In December it is happening while you are still deciding where to eat.',
    ],
  },

  crowds: {
    capsule:
      'December splits into two different cities. The first ten days are quiet and reasonably priced. From roughly the second weekend the Christmas market, shopping and New Year demand takes over, and the week between Christmas and New Year is the second busiest of the ten months after October.',
    body: [
      'If you want a cheap December, come in the first ten days. Rates are still close to the November floor, the museums are calm, and the Christmas lights are already up on the main boulevards, so you get the seasonal look without the seasonal price. That window closes fast: by the second weekend the Boulevard Haussmann department stores are the busiest retail environment in France and the Metro around Chaussee d\'Antin is genuinely difficult.',
      'Christmas Day 2026 falls on a Friday, which produces a long weekend and makes the 24th to the 27th the tightest stretch for restaurant tables. Book anywhere you actually care about eating well before you travel. Museum tickets are less of a problem, because the two biggest, the Louvre and Versailles, are shut on the 25th anyway.',
      'The New Year is its own event. Seine cruise operators run New Year sailings, the Champs-Elysees hosts the public countdown, and the Metro runs late on the 31st. Those sailings sell out earliest of anything in the Paris December calendar, so if a New Year cruise is the plan, treat it as the first booking rather than the last.',
    ],
  },

  tours: {
    capsule:
      'Ranked for December: everything that works after dark, is heated, or is genuinely improved by illumination goes to the top, because you only have six and a half hours of usable daylight. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'paris-bateaux-mouches-evening-cruise-souvenir-postcard',
        bestFor: 'The lit city at 17:30, for £15',
        why: 'The single best-value booking of the Paris December. Sunset is around 16:55, so a 17:30 sailing gives you seventy minutes of fully illuminated river for £15, and the Eiffel Tower sparkles for five minutes on the hour after dark. Board at Pont de l\'Alma, Port de la Conference in the 8th; that is the Bateaux-Mouches pier and not the Eiffel Tower one.',
      },
      {
        slug: 'paris-night-cruise-on-the-seine-river-with-aperitif',
        bestFor: 'A second, different evening on the water',
        why: 'Ranked up hard for the season. With eight hours twenty-one minutes of daylight there is no such thing as a wasted evening in December, and an hour on a heated boat with the monuments lit is a better use of 17:00 than anything happening on the pavements at 3.5C.',
      },
      {
        slug: 'bateaux-parisiens-dinner-cruise',
        bestFor: 'Solving dinner and the view together',
        why: 'A two and a half hour dinner cruise from the Eiffel Tower quay is close to the ideal December booking: heated, seated, and lit for the whole sailing rather than only at the end as it would be in July. It also removes the problem of finding a table in the busiest restaurant fortnight of the year.',
      },
      {
        slug: 'versailles-palace-tour-gardens-with-optional-full-access',
        bestFor: 'Winter Versailles, indoors',
        why: 'The fountains stopped on 1 November, so a December Versailles trip is entirely about the state rooms, which is exactly what this guided tour delivers. The palace runs a seasonal King\'s Tour programme from 12 December to 2 January, and the Hall of Mirrors in low winter light with a fraction of the summer crowd is worth the train. Closed Mondays and on 25 December.',
      },
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'Thursday late opening in the dark',
        why: 'The highest-rated tour we sell at 4.8, and the Orsay\'s Thursday late opening to 21:45 is worth more in December than in any other month, because the alternative use of that evening is standing outside in the rain at 3.5C. Note it is closed on Mondays and on 25 December.',
      },
      {
        slug: 'disneyland-paris-2-parks-ticket-1-2-3-4-5-day',
        bestFor: 'The one park that is better in December',
        why: 'Ranked up for the season, unusually. Disneyland Paris runs its Christmas programme through December, and a park built around lights and evening parades genuinely benefits from a 16:55 sunset. French school holidays begin in the second half of the month, so the first two weeks are much the calmer half.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'A guided route through the dark afternoon',
        why: 'Three hours of reserved-access guided Louvre is the right shape for a December afternoon that has no daylight left in it after four. Take the Wednesday or Friday late opening to 21:00. The museum is closed on Tuesdays, and on Friday 25 December.',
      },
      {
        slug: 'moulin-rouge-show-with-champagne',
        bestFor: 'A guaranteed warm, dry, seated evening',
        why: 'Thirteen wet days and 3.5C nights make a fixed indoor show with a drink an easy call in December. Its other December virtue is certainty: nothing about it can be affected by weather, which is not true of anything else on this list that happens outdoors.',
      },
      {
        slug: 'paris-catacombs-entry-seine-river-cruise-with-audio-guide',
        bestFor: 'Warmer underground than above',
        why: 'The catacombs hold around 14C all year, which in December means it is genuinely warmer twenty metres down than it is on the street at 8.7C. Paired with a Seine cruise, this covers the two things that work best in a Paris winter: underground and on the water.',
      },
      {
        slug: 'parisnotre-dame-cathedral-interior-and-exterior-guided-tour',
        bestFor: 'A cathedral in its own season',
        why: 'Advent and Christmas are the liturgical high point of the cathedral year, and general entry to Notre-Dame is free. What the £18 buys is an hour of guided commentary, not queue-jumping: you wait in the ordinary line with your guide, which the listing puts at ten to twenty minutes, and no reservation is needed or offered.',
      },
    ],
    note:
      'Deliberately absent from the December ten: the fourteen-hour Mont-Saint-Michel coach day, the Giverny day trip, the open-top sightseeing bus and the Versailles Full Access passport. Mont-Saint-Michel is the clearest case in the guide: a fourteen-hour trip into 8 hours 21 minutes of daylight means most of the journey and much of the site are experienced in the dark. Giverny is shut for the winter. The bus is an open upper deck at 3.5C. And the Full Access passport is the ticket whose headline feature, the Musical Fountains, stopped running on 1 November, so the guided palace tour is the better December buy. Gaps worth admitting: we do not sell a Christmas market tour, a Champs-Elysees lights tour or a New Year Seine sailing, and all three are things a December visitor will reasonably look for.',
  },

  events: {
    capsule:
      'December is built around light and closures. The Chateau de Versailles runs a seasonal King\'s Tour from 12 December to 2 January, Seine operators run New Year sailings, and both the Louvre and Versailles are closed on Friday 25 December.',
    rows: [
      { event: 'Christmas markets and boulevard illuminations', dates: 'Through December', where: 'Champs-Elysees, La Defense, Tuileries and elsewhere', free: 'Free to walk' },
      { event: 'Versailles seasonal King\'s Tour', dates: 'Saturday 12 December to Saturday 2 January', where: 'Chateau de Versailles', free: 'Ticketed' },
      { event: 'Christmas Day, a national public holiday', dates: 'Friday 25 December', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Winter solstice, the shortest day', dates: 'Monday 21 December', where: 'Paris', free: 'Free' },
      { event: 'New Year\'s Eve Seine sailings and Champs-Elysees countdown', dates: 'Thursday 31 December', where: 'The Seine and the Champs-Elysees', free: 'Countdown free, sailings ticketed' },
    ],
    body: [
      'The Versailles King\'s Tour running from 12 December to 2 January is the strongest dated reason to go to Versailles in winter rather than summer, and it is precisely the sort of thing that gets left out of general Paris guides. It is a seasonal programme at the palace across the Christmas and New Year period, and it exists only in a window that most itineraries treat as the worst time to make the trip.',
      'Christmas Day falls on a Friday in 2026, which turns the 25th to the 27th into a long weekend and puts real pressure on restaurant tables. It also means the two big-ticket sites, the Louvre and the Chateau de Versailles, are both shut on the 25th, along with the Musee d\'Orsay. If you have four days over Christmas, that is one of them gone for museums, so plan the 25th around the river, a meal and the lit streets instead.',
      'New Year sailings on the Seine are the most competitive booking of the Paris December. Cruise operators run through the winter and put on special New Year departures, and those sell out well before the ordinary evening ones. We do not sell a New Year sailing ourselves, so if that is the plan, book direct with the operator and do it early.',
    ],
  },

  closures: {
    capsule:
      'Friday 25 December closes the Louvre, the Musee d\'Orsay and the Chateau de Versailles on the same day. Giverny and the Versailles fountains have been shut since 1 November. Everything else, including the Seine cruises, runs right through the winter.',
    rows: [
      { site: 'Musee du Louvre', closed: 'Friday 25 December, plus Tuesdays 1, 8, 15, 22 and 29 December', note: 'Five Tuesdays this month, because December 2026 opens on a Tuesday. Also closed 1 January.' },
      { site: 'Chateau de Versailles', closed: 'Friday 25 December, plus Mondays 7, 14, 21 and 28 December', note: 'Also closed 1 January and 1 May. The gardens and park stay open every day, including 25 December.' },
      { site: 'Musee d\'Orsay', closed: 'Friday 25 December, plus Mondays 7, 14, 21 and 28 December', note: 'Closed every Monday, plus 1 May and 25 December, all year. Thursday late opening to 21:45.' },
      { site: 'Fondation Claude Monet, Giverny', closed: 'All December', note: 'Shut for the winter since 1 November. Reopens for the spring season; the 2027 date had not been published when this was written.' },
      { site: 'Versailles Musical Fountains', closed: 'All December', note: 'The fountain season ended on 1 November. The Full Access passport upgrade has nothing to unlock this month.' },
      { site: 'Seine river cruises', closed: 'Not closed', note: 'Cruise operators run through the winter, including special New Year sailings. This is the December exception worth knowing.' },
    ],
    body: [
      'Christmas Day is the concentrated closure of the Paris December. On Friday 25 December the Louvre, the Musee d\'Orsay and the Chateau de Versailles are all shut. That is a genuinely significant loss on a short trip, and it catches people out because Paris otherwise gives the impression of running as normal through the season. The Versailles gardens and park stay open, which is the one useful exception.',
      'December 2026 also opens on a Tuesday, which means five Tuesdays and therefore five days without the Louvre, on the 1st, 8th, 15th, 22nd and 29th. Combined with the 25th that is six December days on which the Louvre is not available. Anyone with a four-night December trip should check their dates against that list before assuming the museum is a given.',
      'The point worth ending on is what stays open. Seine cruises run all winter, including New Year sailings, and they are the December experience that is not merely surviving the season but actively improved by it. The same is true of the catacombs, which are warmer than the street this month, and of the cabarets, which are entirely indoors. Paris in December is not a diminished city, it is a differently shaped one.',
    ],
  },

  packing: {
    capsule:
      'Pack for 8.7C days, 3.5C nights, thirteen wet days and a 16:55 sunset. What Paris in December needs is waterproofing and warmth for standing still, because you will spend more evening than daylight outside and much of it queueing or looking at lights.',
    body: [
      'The specific December problem is standing rather than walking. Christmas markets, illuminated boulevards, waiting for a boat: all of these involve being stationary outdoors at 3.5C, which is a completely different demand from walking at 3.5C. That means a proper insulated coat, gloves and a hat rather than the mid-weight layers that carry you through November.',
      'Snow is not the risk; rain is. Thirteen wet days on cold pavement means waterproof footwear is not optional, and the museum-heavy shape of a December day means those same shoes need to be comfortable on hard floors for several hours. A single pair that does both is the most important thing in the bag.',
    ],
    list: [
      'An insulated coat, for standing still at 3.5C rather than walking',
      'Gloves and a hat; you will be outside in the dark more than in the light',
      'Waterproof shoes that stay comfortable on museum floors',
      'Restaurant bookings made before you travel, especially 24 to 27 December',
      'A phone charged for long lit evenings; sunset is around 16:55',
    ],
  },

  faqs: [
    {
      question: 'How short are the days in Paris in December?',
      answer: 'Mid-December daylight is 8 hours 21 minutes, the shortest of the year, with sunrise around 08:40 and sunset around 16:55. Your realistic outdoor window is roughly 09:30 to 16:00. One consolation: Paris does not get steadily darker all month. The earliest sunset is around mid-December, at about 16:52, and the evenings are already lengthening again by the 31st.',
    },
    {
      question: 'Is the Louvre open on Christmas Day?',
      answer: 'No. The Louvre is closed on 25 December, and so are the Musee d\'Orsay and the Chateau de Versailles. In 2026 that falls on a Friday. The Louvre is also closed every Tuesday, and December 2026 contains five of them, on the 1st, 8th, 15th, 22nd and 29th, so six December days in total have no Louvre. The Versailles gardens and park do stay open on 25 December.',
    },
    {
      question: 'Do Seine river cruises run in December?',
      answer: 'Yes, all winter, and December is arguably the best month for one. Sunset around 16:55 means a 17:30 sailing gives you a fully illuminated river at a normal hour rather than the after-ten departure an August cruise would need. Operators also run special New Year sailings on 31 December, and those sell out earlier than anything else in the Paris December calendar.',
    },
    {
      question: 'Does it snow in Paris in December?',
      answer: 'Rarely, and it seldom settles. Central Paris is low-lying and close to Atlantic weather systems, so a typical December brings at most a day or two of snow that does not last. What December reliably brings is rain: 76mm across thirteen wet days, which ties it with May as the wettest month of the ten covered in this guide.',
    },
    {
      question: 'Is Versailles worth visiting in December?',
      answer: 'Yes, for different reasons than in summer. The Musical Fountains stopped running on 1 November, so a winter trip is about the state rooms rather than the gardens, and the palace runs a seasonal King\'s Tour programme from 12 December to 2 January. The Hall of Mirrors in low winter light with a fraction of the summer crowd is the payoff. It is closed on Mondays and on 25 December.',
    },
    {
      question: 'When is the cheapest week to visit Paris in December?',
      answer: 'The first ten days. Rates are still close to the November floor, museums are quiet, and the Christmas lights are already up on the main boulevards, so you get the seasonal look without the seasonal pricing. From the second weekend onwards, shopping and Christmas market demand takes over, and the week between Christmas and New Year is the second busiest of the ten months after October.',
    },
  ],
};
