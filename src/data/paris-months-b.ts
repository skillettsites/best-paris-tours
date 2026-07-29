import { MonthContent } from '@/lib/season-types';

// January through May.
//
// Same sourcing rules as paris-months-a.ts. Two items in this half of the season
// are deliberately written in general terms because they could not be confirmed
// for 2027 from a primary source: the Eiffel Tower summit maintenance window,
// which is described as a recurring pattern rather than a dated closure, and the
// Fondation Claude Monet reopening date at Giverny. The Paris Marathon and
// Roland-Garros 2027 dates are handled the same way.

export const january: MonthContent = {
  slug: 'paris-in-january',
  month: 'January',
  monthKey: 'january',
  yearOffset: 1,
  prevMonth: 'December',
  prevPath: '/paris-in-december',
  nextMonth: 'February',
  nextPath: '/paris-in-february',
  metaDescription:
    'Paris in January: the coldest month at 7.3C highs and 1.7C lows, with the Louvre and Versailles shut on 1 January and the Eiffel Tower summit typically down for maintenance. Weather, closures, events and ten ranked tours.',
  heroCapsule:
    'January is the coldest month in Paris, averaging 7.3C highs and 1.7C lows across thirteen wet days. It is also the quietest and the cheapest after the first week. The one thing to check before booking is the Eiffel Tower, which usually takes its annual maintenance shutdown of the summit in this part of the winter.',

  verdict: {
    capsule:
      'January is for people who want Paris rather than Paris in good weather. From about the 5th the city is emptier than at any other point in this guide, museum queues effectively disappear and hotel rates are at their floor. You pay for it with 7.3C days and thirteen wet ones.',
    body: [
      'The first four days are not the January most people mean. New Year\'s Day is a public holiday, the Louvre and Versailles are both closed on 1 January, and the city is still running on Christmas demand. From roughly the 5th the switch flips completely: French visitors go back to work, international visitors go home, and Paris becomes a working city with a small number of tourists in it.',
      'That emptiness is the product. The Mona Lisa room is walkable rather than a scrum. The Hall of Mirrors at Versailles can be photographed without twenty people in the frame. You can get a same-day table at restaurants that will not answer the phone in October. Nothing else in this guide, not November, not the first week of December, comes close to January for having Paris to yourself.',
      'What January cannot do is anything outdoors that requires standing still. At 1.7C average lows with thirteen wet days, an hour on an open observation deck or an open-top bus is genuinely unpleasant rather than merely chilly. The Eiffel Tower compounds that: the summit is an exposed platform 276 metres up, and it usually goes down for annual maintenance in this part of the winter, so it is the one attraction to verify before you commit to it.',
    ],
  },

  weather: {
    capsule:
      'January is the coldest month in Paris at 7.3C average highs and 1.7C average lows, with 64mm of rain over thirteen wet days. Daylight is 8 hours 46 minutes mid-month, twenty-five minutes more than December, and sunset moves from about 17:05 on the 1st to roughly 17:45 by the 31st.',
    body: [
      'January is where the daylight recovery becomes obvious. The month starts with sunset around 17:05 and ends with it around 17:45, so Paris gains about forty minutes of evening across the four weeks. Sunrise barely moves, staying stubbornly around 08:40 until the middle of the month, which is why January mornings feel darker than December ones even though the day as a whole is longer.',
      'The cold is real but modest by continental standards. An average low of 1.7C means frost most weeks and hard freezes occasionally, but Paris very rarely holds sub-zero daytime temperatures for long. The Atlantic influence that keeps snow away also keeps the deep cold away. What it brings instead is damp, and 7.3C with rain and river wind is a more uncomfortable proposition than 2C in still dry air would be.',
      'Thirteen wet days is the same count as December, from a slightly lower total of 64mm. In practical terms that means roughly four days in ten will have some rain on them, and the rain will be light and persistent rather than heavy. It is the sort of weather that spoils a walking itinerary and does nothing at all to a museum one.',
    ],
  },

  crowds: {
    capsule:
      'After about 5 January this is the emptiest Paris in the guide. Louvre timed slots are available same-day, Versailles has no forecourt queue, and hotel rates match the early-November floor. The winter sales draw domestic crowds to the department stores but not to the monuments.',
    body: [
      'January genuinely does not need advance booking, which is not something we say about any other month here. A Louvre slot can usually be had for the following morning. The Eiffel Tower lift queue at 10:00 on a January Tuesday is a few minutes rather than an hour. If you like planning a trip in the morning over coffee, January is the month that rewards it.',
      'The one crowd that does exist is domestic and retail. The French winter sales, the soldes, run for several weeks from early January, and the dates are fixed by the government each year rather than by the shops, so check the current dates rather than assuming. Their effect on a visitor is confined to the big department stores on Boulevard Haussmann and the Marais boutiques; the museums and monuments are unaffected.',
      'Book two things and only two things. The first is anything on 1 January itself, because the Louvre, the Musee d\'Orsay and the Chateau de Versailles are all shut and the alternatives are correspondingly busy. The second is the Eiffel Tower summit, and booking here means checking rather than reserving: the summit typically closes for annual maintenance during the winter, so confirm on the official Eiffel Tower calendar before you buy a summit upgrade you cannot use.',
    ],
  },

  tours: {
    capsule:
      'Ranked for January: heated, indoor and seated first, because 1.7C lows and thirteen wet days make every exposed experience a worse buy than it is in any other month. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'The emptiest Louvre of the year',
        why: 'Ranked first because January is the one month when the Louvre is a pleasure rather than an endurance test. The galleries are quiet enough that a guided three-hour route can actually stop in front of things. Closed Tuesdays, closed 1 January, and open to 21:00 on Wednesdays and Fridays.',
      },
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'The highest-rated thing we sell, in its quietest month',
        why: 'At 4.8 this is the best-rated tour on the site, and January is when the Impressionist rooms are calm enough to stand still in. The Thursday late opening to 21:45 is worth using: a January evening has nothing else to offer and the museum is warm.',
      },
      {
        slug: 'paris-louvre-museum-tour-mona-lisa-iconic-masterpieces',
        bestFor: 'A longer, slower museum day',
        why: 'The two to three hour version, and January is the only month in this guide where taking the longer option is obviously right. There is no competing outdoor plan you are giving up at 7.3C in the rain, and the museum is empty enough to reward the extra time.',
      },
      {
        slug: 'bateaux-parisiens-dinner-cruise',
        bestFor: 'Two and a half heated hours',
        why: 'Ranked up sharply for the coldest month. This is the longest heated indoor experience on our list that still shows you the city, and with sunset around 17:20 the whole sailing happens against lit monuments rather than a bright sky.',
      },
      {
        slug: 'paris-4-course-dinner-cruise-on-seine-river-with-live-music',
        bestFor: 'The same idea, from the Bateaux-Mouches pier',
        why: 'The Bateaux-Mouches version, boarding at Pont de l\'Alma at Port de la Conference in the 8th rather than at the Eiffel Tower. Worth knowing which pier you are booking in January specifically, because arriving at the wrong quay in the cold and dark is a miserable start to an evening.',
      },
      {
        slug: 'moulin-rouge-show-with-champagne',
        bestFor: 'Certainty in a month with none',
        why: 'Nothing about a fixed indoor cabaret can be affected by 1.7C or by thirteen wet days, which is a real advantage in January. It also fills the long evening that January hands you whether you want it or not, with sunset before half past five.',
      },
      {
        slug: 'crazy-horse-show',
        bestFor: 'A second indoor evening, if you have several',
        why: 'January trips tend to have more evenings than daytime plans, which is exactly when a second cabaret makes sense in a way it would not in May. Rated 4.6 with free cancellation on most options, which matters more in a month when travel disruption is likelier.',
      },
      {
        slug: 'paris-macaron-class-at-galeries-lafayette',
        bestFor: 'A wet January afternoon, indoors, with a result',
        why: 'Ninety minutes of hands-on pastry under the Galeries Lafayette dome, which puts you in the warmest and most theatrical interior in central Paris on a day the street has nothing to offer. You leave with four macarons and two recipes. The winter sales make the surrounding store busy, so book a session rather than hoping.',
      },
      {
        slug: 'fragonard-paris-mini-perfume-workshop',
        bestFor: 'Forty-five minutes out of the rain',
        why: 'Short, indoor, £27, and you leave with a 12ml eau de toilette you blended yourself. In a month where the gap between two plans is likely to be spent sheltering, a forty-five minute workshop near the Opera is a better use of it than another cafe.',
      },
      {
        slug: 'paris-eiffel-tower-entry-ticket-with-optional-summit-access',
        bestFor: 'The tower, with the summit upgrade skipped',
        why: 'The only Eiffel Tower ticket we keep on the January list, and specifically because the summit is optional on it. Buy the second-floor level and leave the upgrade: the summit is an exposed platform at 276 metres in 1.7C air, and it is usually the part of the tower that closes for annual winter maintenance. Check the official calendar before booking any summit ticket in January.',
      },
    ],
    note:
      'Three of our four Eiffel Tower products are off the January list, and that is a deliberate call rather than an oversight. The tower typically takes its annual maintenance shutdown of the summit during the winter, and we could not confirm the 2027 dates from the official calendar when this page was written, so we are not going to sell you a summit ticket for January without saying that first. Also absent: Giverny, which is shut for the winter; the Versailles Full Access passport, whose fountain upgrade does not run; the open-top bus; and the fourteen-hour Mont-Saint-Michel day. Gaps we cannot cover: no ice rink, no winter sales shopping experience and no Sainte-Chapelle ticket, and Sainte-Chapelle in low winter light with almost nobody in it is one of the best things in Paris in January. Buy that one direct.',
  },

  events: {
    capsule:
      'January is the thinnest month of the year for events, which is the point of it. New Year\'s Day on Friday 1 January is a public holiday that closes the Louvre, the Musee d\'Orsay and Versailles. The winter sales follow shortly after, on dates the government sets annually.',
    rows: [
      { event: 'New Year\'s Day, a national public holiday', dates: 'Friday 1 January', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Versailles seasonal King\'s Tour, final days', dates: 'Until Saturday 2 January', where: 'Chateau de Versailles', free: 'Ticketed' },
      { event: 'Epiphany and the galette des rois', dates: 'Wednesday 6 January and through the month', where: 'Bakeries citywide', free: 'Buy a cake' },
      { event: 'French winter sales, the soldes', dates: 'From early January, dates set annually by the government', free: 'Free to browse', where: 'Boulevard Haussmann and citywide' },
    ],
    body: [
      'The Versailles King\'s Tour that began on 12 December runs until 2 January, so the first two days of the month are the tail end of the Christmas programme rather than the start of the quiet season. After that, Versailles returns to its ordinary winter shape: state rooms open, fountains off, gardens free to walk.',
      'Epiphany on 6 January is not a public holiday in France but it is a genuinely pleasant thing to be in Paris for. Every boulangerie in the city sells the galette des rois, a puff pastry and frangipane cake with a charm hidden inside, and they keep selling it through most of January rather than only on the day. It costs a few euros and it is the most reliably good thing about a Paris January.',
      'We are not publishing exact dates for the winter sales. The soldes are regulated: the French government sets the start date and duration each year, and it varies. Because they are the one thing that will genuinely change how busy the department stores are, look up the current dates rather than working from a guide, including this one.',
    ],
  },

  closures: {
    capsule:
      'Friday 1 January closes the Louvre, the Musee d\'Orsay and the Chateau de Versailles. Giverny and the Versailles fountains remain shut for the winter. The item to check yourself is the Eiffel Tower summit, which usually takes its annual maintenance shutdown at this time of year.',
    rows: [
      { site: 'Musee du Louvre', closed: 'Friday 1 January, plus Tuesdays 5, 12, 19 and 26 January', note: 'Open 09:00 to 18:00 otherwise, and to 21:00 on Wednesdays and Fridays. Same-day slots are usually available all month.' },
      { site: 'Chateau de Versailles', closed: 'Friday 1 January, plus Mondays 4, 11, 18 and 25 January', note: 'Gardens and park open every day. The Musical Fountains do not run in winter.' },
      { site: 'Musee d\'Orsay', closed: 'Mondays 4, 11, 18 and 25 January', note: 'Closed every Monday, 1 May and 25 December all year. Thursday late opening to 21:45.' },
      { site: 'Eiffel Tower summit', closed: 'Typically closed for annual maintenance during the winter', note: 'This is the usual pattern rather than a confirmed 2027 date. The official Eiffel Tower calendar publishes dates when they are set. Check before buying a summit upgrade.' },
      { site: 'Fondation Claude Monet, Giverny', closed: 'All January', note: 'Shut for the winter since 1 November. Reopens for the spring season on a date the foundation sets each year.' },
      { site: 'Versailles Musical Fountains', closed: 'All January', note: 'Off since 1 November. The Full Access passport upgrade has nothing to unlock until the spring.' },
    ],
    body: [
      'The Eiffel Tower is the honest uncertainty on this page. The tower has a long-established habit of taking the summit out of service for annual maintenance during the quiet winter months, and January is the usual window. We are not going to publish a 2027 date for it, because when we checked the official calendar the dates for that period had not been released, and inventing one would be worse than useless. Check toureiffel.paris before you buy a summit ticket for January, and if it is not published yet, buy the second-floor option and upgrade at the tower if it turns out to be running.',
      'The 1 January closures are straightforward and they catch a lot of people, because a New Year trip is often exactly four nights and one of them is the 1st. The Louvre, the Musee d\'Orsay and the Chateau de Versailles are all shut. The Versailles gardens and park stay open, and so do the Seine cruise operators, the catacombs and the cabarets, so a 1 January itinerary is perfectly possible; it just cannot be a museum one.',
      'January 2027 opens on a Friday, which puts four Tuesdays and four Mondays in the month, so the weekly closures are as light as they get. Combined with 1 January that is five days without the Louvre and five without Versailles across thirty-one, which is the best ratio in the guide. If you have a week in January, there is no realistic way to miss anything through a closing day.',
    ],
  },

  packing: {
    capsule:
      'Pack for 7.3C days, 1.7C nights and thirteen wet days. January in Paris is damp cold rather than dry cold, which behaves differently: the temperature reads mild but the river wind and the wet air make a coat that is merely warm feel inadequate.',
    body: [
      'Damp cold defeats the wrong kind of coat. A padded jacket that would be comfortable at minus five in Prague can leave you cold at plus five in Paris if it wets out, because the moisture carries the heat away. A waterproof outer with an insulating layer underneath is the combination that works, and it also handles the thirteen wet days without a separate rain layer.',
      'Museum days need one more thing than winter days elsewhere: something you can carry easily. Paris galleries run warm, cloakrooms have queues in January because everyone has a coat, and being stuck in a heavy jacket through three hours of the Louvre is genuinely unpleasant. A coat that compresses into a bag is worth the extra thought.',
    ],
    list: [
      'A waterproof outer layer, not just a warm one; Paris cold is wet cold',
      'Gloves and a scarf for river wind at 1.7C',
      'A coat you can carry, because museum cloakrooms queue in January',
      'Waterproof shoes for thirteen wet days on cold stone',
      'The official Eiffel Tower calendar checked before buying any summit ticket',
    ],
  },

  faqs: [
    {
      question: 'Is the Eiffel Tower summit open in January?',
      answer: 'Usually not, but we cannot confirm the specific dates. The tower has a long-standing pattern of taking the summit out of service for annual maintenance during the quiet winter months, and January is the usual window. The official Eiffel Tower calendar publishes dates once they are set, and it had not published them for that period when this page was written. Check before buying a summit upgrade, and take a second-floor ticket if in doubt.',
    },
    {
      question: 'How cold does Paris get in January?',
      answer: 'January is the coldest month of the year with average highs of 7.3C and average lows of 1.7C. Frost is common overnight but sustained sub-zero daytime temperatures are rare, because the Atlantic influence that keeps snow away also keeps the deep cold away. The cold is damp rather than dry, which makes 7.3C in river wind feel colder than the number suggests.',
    },
    {
      question: 'Is the Louvre open on 1 January?',
      answer: 'No. The Louvre, the Musee d\'Orsay and the Chateau de Versailles are all closed on 1 January, which in 2027 is a Friday. The Versailles gardens and park do stay open, as do the Seine cruise operators, the catacombs and the cabarets, so a New Year\'s Day in Paris works fine as long as it is not planned around a museum.',
    },
    {
      question: 'Is January a cheap time to visit Paris?',
      answer: 'Yes, from about the 5th. Once the New Year demand clears, hotel rates fall back to roughly the same floor as the first half of November, and January adds something November does not: the city is genuinely empty. Louvre slots are available same-day, Versailles has no forecourt queue and restaurants that will not answer the phone in October have tables.',
    },
    {
      question: 'Does Paris get much daylight in January?',
      answer: 'More than December, and it improves quickly. Mid-January daylight is 8 hours 46 minutes, twenty-five minutes longer than mid-December. Sunset moves from around 17:05 on the 1st to about 17:45 by the 31st, a gain of roughly forty minutes across the month. Sunrise stays stubbornly around 08:40 until mid-month, which is why the mornings feel darker than December\'s.',
    },
    {
      question: 'What is the galette des rois?',
      answer: 'A puff pastry and frangipane cake with a small charm hidden inside, sold by every boulangerie in Paris around Epiphany on 6 January and through much of the rest of the month. Whoever gets the charm wears the paper crown that comes with it. It costs a few euros, needs no booking, and is one of the more reliably good reasons to be in Paris in January.',
    },
  ],
};

export const february: MonthContent = {
  slug: 'paris-in-february',
  month: 'February',
  monthKey: 'february',
  yearOffset: 1,
  prevMonth: 'January',
  prevPath: '/paris-in-january',
  nextMonth: 'March',
  nextPath: '/paris-in-march',
  metaDescription:
    'Paris in February: the driest month of the winter at 54mm, with Paris school holidays running 6 to 21 February and the Salon de l\'Agriculture opening on the 27th. Weather, closures, events and ten ranked tours.',
  heroCapsule:
    'February is the driest month of the Paris winter at 54mm of rain, and the month daylight climbs back over ten hours. It is also school holiday season, running 6 to 21 February, which changes who is in the city and which attractions get busy without touching hotel prices much.',

  verdict: {
    capsule:
      'February is the best-value winter month, better than January on every measure except crowd levels. Rainfall drops to 54mm, the lowest of the winter half, daylight climbs to 10 hours 15 minutes, and average highs rise to 9.5C. Prices stay close to the January floor.',
    body: [
      'February quietly beats January at almost everything. It is two degrees warmer, ten millimetres drier, and it gives you an hour and a half more daylight per day, with sunset moving out to about 18:10 by mid-month. It costs roughly the same. The only thing January does better is emptiness, and February only loses that for the fortnight of the school holidays.',
      'Those school holidays, running 6 to 21 February for the Paris zone, are the month\'s defining feature. They fill Disneyland Paris, the science museum at La Villette and the zoo, and they put French families into the Louvre at the weekend. They do almost nothing to hotel prices, because families are largely coming in from elsewhere in France for the day rather than staying centrally. If you are not travelling with children, the weeks either side of that fortnight are better.',
      'The wider point about February is that it is the first month where the outdoor city starts working again. At 9.5C and eleven wet days you can plan a walk without expecting it to be ruined, and the ten-plus hours of daylight mean a full outdoor morning and an outdoor afternoon are both possible for the first time since October. It is not spring, but it is not the dead of winter either.',
    ],
  },

  weather: {
    capsule:
      'February averages 9.5C highs and 2.3C lows with just 54mm of rain across eleven wet days, making it the driest month of the Paris winter. Daylight passes ten hours for the first time since October, reaching 10 hours 15 minutes mid-month with sunset around 18:10.',
    body: [
      'Fifty-four millimetres is the lowest monthly rainfall between November and March, and it is a genuinely useful thing to know when choosing a winter date. December delivers 76mm, January 64mm and March 72mm; February delivers 54mm across eleven days rather than thirteen or fourteen. A February walking itinerary has materially better odds than a December or March one.',
      'The daylight change is the more dramatic shift. February gains around an hour and a half of daylight from start to finish, moving from about 9 hours 40 minutes on the 1st to around 11 hours 15 minutes by the 28th. Sunset goes from roughly 17:50 to about 18:35. That means the late-February evenings genuinely have usable light in them, which none of December or January did.',
      'The cold has not gone. February lows average 2.3C and the coldest snaps of the Paris winter often arrive in the first half of the month rather than in January. What has changed is the sun: on the clear days that a drier month provides, low February sun on limestone gives Paris the light that photographers come for, and it is not available under December\'s permanent cloud.',
    ],
  },

  crowds: {
    capsule:
      'February splits around the school holidays, 6 to 21 February for the Paris zone. Family attractions fill for that fortnight while the museums stay manageable. Hotel rates hold near the January floor for the whole month, which makes late February the best value in the guide after early November.',
    body: [
      'Book Disneyland Paris ahead if you are going during the school holidays, and consider not going during them if you are not. That fortnight from 6 to 21 February is the busiest the park gets in the first half of the year, and the same applies to the Cite des Sciences and the Jardin des Plantes. The Louvre, the Orsay and Versailles feel the effect only at weekends.',
      'For everything else, February needs about as little advance planning as January. Louvre timed slots are available within a day or two, and the Versailles forecourt queue is short enough that the guided skip-the-line option is a comfort rather than a necessity. February 2027 begins on a Monday, which gives the month four Mondays and four Tuesdays, so there are only eight days in twenty-eight affected by weekly closures.',
      'Two dates need a mention. Valentine\'s Day falls on Sunday 14 February 2027, which puts pressure on restaurant tables and on dinner cruises specifically, so book that weekend early if it matters. And the Salon de l\'Agriculture opens on Saturday 27 February at Porte de Versailles, which is a genuinely enormous French institution that fills hotels in the 15th arrondissement for its run.',
    ],
  },

  tours: {
    capsule:
      'Ranked for February: family-friendly and indoor experiences lead, because the school holidays run 6 to 21 February and eleven wet days still favour a roof. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'disneyland-paris-2-parks-ticket-1-2-3-4-5-day',
        bestFor: 'The February school holidays',
        why: 'Ranked first for one reason: the Paris school holidays run 6 to 21 February and this is the month\'s dominant family activity. Book ahead if you are going inside that fortnight and expect it to be full. If you are not travelling with children, go in the last week of the month instead, when it empties out.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'A guided route through a busy half-term weekend',
        why: 'The Louvre feels the school holidays at weekends but not midweek, so a guided reserved-access slot on a Wednesday or Thursday in February is close to the January experience. Closed Tuesdays: the 2nd, 9th, 16th and 23rd.',
      },
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'The best-rated tour we sell, still quiet',
        why: 'At 4.8 the highest-rated tour on this site, and unlike the Louvre the Orsay barely notices the school holidays. Its Thursday late opening to 21:45 is less essential now than in December, because February evenings have light in them until about 18:10 mid-month.',
      },
      {
        slug: 'moulin-rouge-show-with-champagne',
        bestFor: 'Valentine\'s weekend',
        why: 'Ranked up for a dated reason: Valentine\'s Day falls on Sunday 14 February 2027 and cabaret seats for that weekend go early. It is also simply a good February evening, since eleven wet days and 2.3C nights still make a fixed indoor show the safe call.',
      },
      {
        slug: 'bateaux-parisiens-dinner-cruise',
        bestFor: 'A heated dinner with a lit river',
        why: 'Sunset around 18:10 mid-month means an evening dinner cruise still sails against fully lit monuments, and the heated saloon still matters at 2.3C. Book the Valentine\'s weekend well ahead; this is the single most competitive dinner booking of a Paris February.',
      },
      {
        slug: 'paris-macaron-class-at-galeries-lafayette',
        bestFor: 'A half-term afternoon indoors',
        why: 'Ninety minutes of hands-on pastry that works for families and couples equally, under the Galeries Lafayette dome. It suits the school holidays specifically because it is a fixed-length indoor activity with something to take away at the end, which is exactly what a wet half-term afternoon needs.',
      },
      {
        slug: 'fragonard-paris-mini-perfume-workshop',
        bestFor: 'Forty-five minutes and a bottle to take home',
        why: 'Short, cheap at £27 and entirely indoors, which makes it a good filler between two other plans on one of February\'s eleven wet days. You blend and take away a 12ml eau de toilette, and it sits near the Opera so it slots into a central afternoon easily.',
      },
      {
        slug: 'paris-catacombs-entry-seine-river-cruise-with-audio-guide',
        bestFor: 'A stable 14C whatever February does',
        why: 'Twenty metres underground the temperature holds around 14C, which in February is warmer than the street. The paired Seine cruise means you get the river as well and can take whichever half of the day looks better, which matters more in a month with eleven wet days.',
      },
      {
        slug: 'paris-bateaux-mouches-evening-cruise-souvenir-postcard',
        bestFor: 'A lit river before dinner, for £15',
        why: 'Still cheap and still dark early enough to work: sunset around 18:10 mid-month means a 19:00 sailing is fully illuminated. By April this same booking has to move to 21:00 to get the same effect. Board at Pont de l\'Alma, Port de la Conference in the 8th.',
      },
      {
        slug: 'paris-eiffel-tower-entry-ticket-with-optional-summit-access',
        bestFor: 'Clear winter air, if the summit is running',
        why: 'February often gives the clearest long views of the winter on its dry days, so the summit upgrade is worth more here than in December. The caution from January still applies: annual summit maintenance normally happens somewhere in the winter and the 2027 dates had not been published, so check the official calendar first.',
      },
    ],
    note:
      'Not on the February list: Giverny, which stays shut until the spring; the Versailles Full Access passport, because the fountains do not run until April; the open-top sightseeing bus at 2.3C; and the fourteen-hour Mont-Saint-Michel coach day, which still loses too much of itself to the dark at 10 hours 15 minutes of daylight. Inventory gap worth naming: the Salon de l\'Agriculture opening on 27 February is one of the biggest events in the French calendar and we do not sell a ticket for it. It is at Porte de Versailles, it sells its own entry, and it is a genuinely strange and wonderful thing to walk around.',
  },

  events: {
    capsule:
      'Two dates shape February. The Paris zone school holidays run from Saturday 6 to Sunday 21 February, filling the family attractions for a fortnight, and the Salon de l\'Agriculture opens on Saturday 27 February at the Porte de Versailles exhibition centre.',
    rows: [
      { event: 'Paris zone school holidays', dates: 'Saturday 6 to Sunday 21 February', where: 'Family attractions citywide', free: 'Varies' },
      { event: 'Valentine\'s Day', dates: 'Sunday 14 February', where: 'Restaurants and dinner cruises citywide', free: 'Book ahead' },
      { event: 'Salon de l\'Agriculture opens', dates: 'From Saturday 27 February', where: 'Paris Expo, Porte de Versailles', free: 'Ticketed' },
      { event: 'Daylight passes ten hours', dates: 'Early February', where: 'Paris', free: 'Free' },
    ],
    body: [
      'French school holidays are staggered by region, and the dates that matter for Paris are the Paris zone ones, 6 to 21 February. That fortnight is when Disneyland Paris, the Cite des Sciences and the city\'s family attractions run at capacity. It has almost no effect on hotel prices, because much of the demand is day-trip rather than overnight, so it changes where the crowds are rather than what a trip costs.',
      'The Salon de l\'Agriculture is one of those events that no English-language Paris guide mentions and every French person knows. It is an agricultural show at Porte de Versailles that draws around six hundred thousand visitors, fills the exhibition halls with prize cattle and regional food producers, and is a genuine cultural fixture. Its practical effect on a visitor is that hotels in the 15th arrondissement fill up for its run.',
      'The quieter development is astronomical. Daylight in Paris crosses ten hours in the first days of February and reaches about 11 hours 15 minutes by the end of the month. Sunset moves from roughly 17:50 to about 18:35. That is the point in the year at which an outdoor afternoon becomes a real option again, and it is why February feels like a different season from January despite being only two degrees warmer.',
    ],
  },

  closures: {
    capsule:
      'February has no public holidays and no fixed annual closures at any of the major venues, which makes it the cleanest month after September. Giverny and the Versailles fountains remain shut for the winter and do not return until the spring.',
    rows: [
      { site: 'Musee du Louvre', closed: 'Tuesdays 2, 9, 16 and 23 February', note: 'No holiday closures this month. Late opening to 21:00 on Wednesdays and Fridays.' },
      { site: 'Musee d\'Orsay', closed: 'Mondays 1, 8, 15 and 22 February', note: 'Thursday late opening to 21:45. Barely affected by the school holidays.' },
      { site: 'Chateau de Versailles', closed: 'Mondays 1, 8, 15 and 22 February', note: 'Gardens and park open every day. Fountains still off for the winter.' },
      { site: 'Fondation Claude Monet, Giverny', closed: 'All February', note: 'Fourth of the five months in this guide with Giverny shut. Reopens for the spring season on a date the foundation sets each year.' },
      { site: 'Versailles Musical Fountains', closed: 'All February', note: 'Off since 1 November and not back until spring, so the Full Access passport upgrade is unusable this month.' },
      { site: 'Eiffel Tower summit', closed: 'Check before booking', note: 'Annual summit maintenance usually falls somewhere in the winter. The 2027 dates had not been published on the official calendar when this page was written.' },
    ],
    body: [
      'February is the quietest month of the ten for closures. There is no French public holiday in February at all, and none of the major venues carries a fixed annual closure date this month. February 2027 also opens on a Monday, giving four Mondays and four Tuesdays in a twenty-eight day month, so only eight days are touched by weekly closing days.',
      'The two seasonal absences are the familiar ones. Monet\'s garden at Giverny has been shut since 1 November and this is the fourth of the five consecutive months in this guide where the day trip does not run. The Versailles Musical Fountains are in the same position, which means the Full Access passport is the wrong Versailles ticket in February and the guided palace tour is the right one.',
      'The one thing to verify for yourself is the Eiffel Tower summit. The tower normally schedules its annual summit maintenance somewhere in the quiet winter, and the official calendar had not published the relevant 2027 dates when this page was written. That is a question of a minute on toureiffel.paris rather than an obstacle, but it is worth doing before you buy a summit upgrade you may not be able to use.',
    ],
  },

  packing: {
    capsule:
      'Pack for 9.5C days, 2.3C nights and the driest month of the Paris winter at 54mm. February rewards a warm coat over a heavy waterproof, because eleven wet days out of twenty-eight is the best rain ratio between October and April.',
    body: [
      'February is the month you can risk slightly lighter rain protection. With 54mm across eleven days you have roughly seventeen dry days in twenty-eight, which is better odds than October, November, December, January or March. A warm coat with a hood covers it; the full waterproof shell that November demands is more than February needs.',
      'What you do need is cold-weather kit for the clear days, which is counterintuitive. The driest February days are the coldest ones, because clear skies overnight let the heat go, and a bright 9.5C afternoon in Paris can follow a hard frost. Gloves and a hat live in the bag even though the daytime figure suggests otherwise.',
    ],
    list: [
      'A warm coat with a hood rather than a heavy waterproof shell',
      'Gloves and a hat for the clear, cold mornings after a frost',
      'Comfortable shoes; February is the first month walking itineraries work again',
      'Restaurant and dinner-cruise bookings for the Valentine\'s weekend',
      'Sunglasses for low, direct February light on limestone',
    ],
  },

  faqs: [
    {
      question: 'Is February a good time to visit Paris?',
      answer: 'It is the best-value winter month. February is the driest of the Paris winter at 54mm across eleven wet days, two degrees warmer than January at 9.5C, and it delivers an hour and a half more daylight per day. Hotel rates stay close to the January floor. The only drawback is the school holidays from 6 to 21 February, which fill the family attractions.',
    },
    {
      question: 'When are the February school holidays in Paris?',
      answer: 'The Paris zone holidays run from Saturday 6 to Sunday 21 February 2027. French school holidays are staggered by region and it is the Paris zone dates that matter here. That fortnight fills Disneyland Paris and the city\'s family attractions, and puts French families into the big museums at weekends, but it has little effect on hotel prices.',
    },
    {
      question: 'Is Paris rainy in February?',
      answer: 'Less than in any other winter month. February averages 54mm across eleven wet days, against 76mm in December, 64mm in January and 72mm in March. That works out at roughly seventeen dry days in twenty-eight, which is the best rain ratio between October and April, and it is a real argument for choosing February over the months either side.',
    },
    {
      question: 'Is Giverny open in February?',
      answer: 'No. Monet\'s garden at Giverny has been closed since 1 November and February is the fourth of five consecutive months in this guide where it does not open. It reopens for the spring season on a date the Fondation Claude Monet sets each year, and the 2027 date had not been published when this page was written, so check with the foundation before planning a spring trip around it.',
    },
    {
      question: 'How much daylight does Paris get in February?',
      answer: 'Mid-February daylight is 10 hours 15 minutes, the first month since October above ten hours, with sunset around 18:10. The month gains roughly an hour and a half from start to finish: sunset moves from about 17:50 on the 1st to around 18:35 by the 28th. That is when an outdoor afternoon becomes a realistic plan again.',
    },
    {
      question: 'What is the Salon de l\'Agriculture?',
      answer: 'A vast agricultural show at the Porte de Versailles exhibition centre, opening on Saturday 27 February 2027. It is one of the biggest events in the French calendar, drawing hundreds of thousands of visitors to see prize livestock and regional food producers. It sells its own tickets. Its practical effect on a visitor is that hotels in the 15th arrondissement fill up during its run.',
    },
  ],
};

export const march: MonthContent = {
  slug: 'paris-in-march',
  month: 'March',
  monthKey: 'march',
  yearOffset: 1,
  prevMonth: 'February',
  prevPath: '/paris-in-february',
  nextMonth: 'April',
  nextPath: '/paris-in-april',
  metaDescription:
    'Paris in March: fourteen wet days, the most of any month, with the whole of Holy Week and Easter Sunday on 28 March, the same day the clocks go forward. Weather, closures, events and ten ranked tours.',
  heroCapsule:
    'March is the wettest month by wet-day count in this guide, at fourteen, and it carries the whole of Holy Week. Easter Sunday is 28 March 2027, which is also the day the clocks go forward, so anyone planning an Easter trip to Paris needs to be looking at March and not April.',

  verdict: {
    capsule:
      'March is the awkward month, and also the one with the most going on. Fourteen wet days is the highest count of the ten, but 12.3C highs and 11 hours 54 minutes of daylight make it usable, and Easter falling on 28 March puts the whole of Holy Week inside it.',
    body: [
      'Get the Easter date right and everything else about March follows. Easter Sunday 2027 is 28 March, which means Palm Sunday is 21 March and the whole of Holy Week sits in the last full week of the month. An April 2027 trip misses Easter entirely. That is the opposite of most years and it is the single most common planning error we would expect people to make about this particular spring.',
      'The weather is genuinely the worst of the spring. Fourteen wet days is more than any other month covered here, more than November, more than December, and the 72mm arrives as the sort of blustery Atlantic weather that makes a walking day unpleasant without being dramatic enough to force you indoors. March in Paris is the month of the ruined afternoon rather than the ruined day.',
      'Against that, the light comes back fast. Daylight goes from about 11 hours 15 minutes at the start of the month to 12 hours 45 minutes at the end, and the clocks going forward on 28 March jumps sunset from around 19:15 on the Saturday to about 20:15 on the Monday. The last four days of March feel like a completely different season from the first four, and they are the best value in the month.',
    ],
  },

  weather: {
    capsule:
      'March averages 12.3C highs and 3.9C lows, with 72mm of rain falling across fourteen wet days, the highest wet-day count of the ten months covered here. Mid-month daylight is 11 hours 54 minutes, and the clocks go forward on Sunday 28 March, pushing sunset past 20:00.',
    body: [
      'Fourteen wet days out of thirty-one means roughly nine days in twenty have rain on them, which is the poorest ratio in the guide. What saves March is that the rain is showery and wind-driven rather than the settled all-day cloud of November: it will interrupt an afternoon rather than write off a day, and the gaps between showers in March are brighter than anything the winter offered.',
      'The temperature is transitional in an unhelpful way. Average highs of 12.3C with lows of 3.9C is a nearly nine-degree daily swing, so a March day can start at frost and reach shirt-sleeves by three, then drop away again. Layering matters more in March than in any other month here, and a single heavy coat is the wrong answer.',
      'The clock change on Sunday 28 March is the biggest single daylight event of the year, and in 2027 it lands on Easter Sunday. Sunset moves from around 19:15 on Saturday 27 March to about 20:15 on Monday 29 March. From that morning onwards, evening plans are possible again for the first time since October, and the entire shape of what is worth booking changes.',
    ],
  },

  crowds: {
    capsule:
      'The first three weeks are quiet and cheap. Holy Week from 21 March and the Easter weekend of 28 and 29 March bring the first real crowds of the year. Paris Fashion Week from 1 to 9 March affects hotel supply but not the monuments.',
    body: [
      'Paris Fashion Week runs from 1 to 9 March, and its effect is the same as it was in September and October: rooms in the central arrondissements get scarcer and pricier for the duration, while the museums and monuments carry on exactly as before. It is a trade event, not something to attend, and outside of the hotel market you will not notice it.',
      'The Easter weekend is a different matter. Easter Sunday on 28 March and Easter Monday on 29 March form a long weekend that is a public holiday in France, and it brings European short-break traffic to Paris for the first time since New Year. Book that weekend properly ahead. Note also that Easter Monday is a Monday, which means the Chateau de Versailles is closed, as it is on every Monday of the year.',
      'March 2027 begins on a Monday and contains five Mondays and five Tuesdays. That is the worst weekly-closure ratio of the ten months: ten of the thirty-one days are affected, five with no Versailles or Orsay and five with no Louvre. On a short March trip it is genuinely worth mapping your dates against those days before you book anything.',
    ],
  },

  tours: {
    capsule:
      'Ranked for March: covered experiences lead on fourteen wet days, and the cathedral rises for Holy Week. From the 28th, when the clocks go forward, the evening options become viable again. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'Fourteen wet days and the highest rating we sell',
        why: 'Ranked first on the numbers: fourteen wet days is the worst of the ten months, and this is the best-rated thing on the site at 4.8. The Orsay is closed on Mondays, and March 2027 has five of them, so check your dates carefully before assuming it is available.',
      },
      {
        slug: 'parisnotre-dame-cathedral-interior-and-exterior-guided-tour',
        bestFor: 'Holy Week, 21 to 28 March',
        why: 'Ranked up for a dated reason rather than a weather one. Holy Week runs from Palm Sunday on 21 March to Easter Sunday on 28 March, and it is the peak of the cathedral year. Be clear what £18 buys: general entry to Notre-Dame is free, this tour queues in the ordinary line with you and is not a skip-the-line ticket.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'A defined plan for a showery afternoon',
        why: 'March showers ruin afternoons rather than whole days, which makes a fixed three-hour guided route the right kind of booking. The Louvre is closed on Tuesdays and March 2027 contains five of them, on the 2nd, 9th, 16th, 23rd and 30th.',
      },
      {
        slug: 'louvre-museum-guided-tour-with-mona-lisa',
        bestFor: 'A shorter, cheaper Louvre option',
        why: 'The priority-access two to three hour version, and a sensible March choice because it leaves half a day free for whichever half the weather cooperates with. Same closing days apply: five Tuesdays with no Louvre this month.',
      },
      {
        slug: 'versailles-palace-tour-gardens-with-optional-full-access',
        bestFor: 'Versailles before the fountains return',
        why: 'The fountains do not run until April, so March remains a state-rooms trip and this guided tour is the right ticket rather than the Full Access passport. The critical detail: Versailles is closed on every Monday including Easter Monday on 29 March, and March 2027 has five Mondays in total.',
      },
      {
        slug: 'paris-catacombs-entry-seine-river-cruise-with-audio-guide',
        bestFor: 'The one thing March weather cannot touch',
        why: 'Twenty metres underground at a constant 14C, which in the wettest month of the guide is a genuine advantage. The paired Seine cruise gives you the flexibility to take the river half on whichever part of the day is not raining.',
      },
      {
        slug: 'paris-1-hour-seine-cruise-departing-from-the-eiffel-tower',
        bestFor: 'The month the river becomes a daylight trip again',
        why: 'At 11 hours 54 minutes of daylight mid-month, and more than twelve and a half hours by the end, a Seine cruise works as a daytime experience again for the first time since October. Covered seating means one of March\'s fourteen wet days does not spoil it.',
      },
      {
        slug: 'paris-macaron-class-at-galeries-lafayette',
        bestFor: 'A guaranteed dry ninety minutes',
        why: 'In a month where the odds of an interrupted afternoon are the highest of the ten, a fixed indoor ninety minutes under the Galeries Lafayette dome is worth more than usual. You leave with four macarons you made and two recipes to take home.',
      },
      {
        slug: 'moulin-rouge-show-with-champagne',
        bestFor: 'Evenings before the clocks change',
        why: 'For the first three weeks of March, sunset is still before 19:30 and an indoor evening remains the obvious plan. From the 28th, when the clocks go forward and sunset passes 20:00, the calculation shifts and outdoor evenings return, so this is more valuable early in the month than late.',
      },
      {
        slug: 'paris-bateaux-mouches-evening-cruise-souvenir-postcard',
        bestFor: 'The last month a lit cruise is easy',
        why: 'Before the clock change, a 19:30 departure puts you on a lit river for £15. After 28 March you need to sail closer to 21:00 for the same effect, and by May you need 22:00. March is the last comfortable month of the ten for an illuminated cruise at an ordinary hour. Board at Pont de l\'Alma, Port de la Conference in the 8th.',
      },
    ],
    note:
      'Still absent in March: the Giverny day trip, which is in the last of its five closed months, and the Versailles Full Access passport, whose fountain upgrade does not start again until April. Also off the list, the open-top sightseeing bus and the fourteen-hour Mont-Saint-Michel coach day; both come back in April when the rain drops to 51mm and the daylight passes thirteen hours. Gap we cannot fill and would like to: nothing we sell is tied to Holy Week or Easter, which is the biggest thing happening in Paris in March 2027. Notre-Dame is free to enter and its liturgical calendar is published by the cathedral itself.',
  },

  events: {
    capsule:
      'March 2027 carries the whole of Holy Week. Easter Sunday is 28 March, which is also the day the clocks go forward, and Easter Monday on 29 March is a French public holiday. Paris Fashion Week runs from 1 to 9 March.',
    rows: [
      { event: 'Paris Fashion Week', dates: 'Monday 1 to Tuesday 9 March', where: 'Venues citywide, closed to the public', free: 'Trade only' },
      { event: 'Palm Sunday, the start of Holy Week', dates: 'Sunday 21 March', where: 'Churches across Paris', free: 'Free' },
      { event: 'Easter Sunday', dates: 'Sunday 28 March', where: 'Churches across Paris', free: 'Free' },
      { event: 'Clocks go forward one hour', dates: 'Sunday 28 March', where: 'Nationwide', free: 'Free' },
      { event: 'Easter Monday, a national public holiday', dates: 'Monday 29 March', where: 'Nationwide', free: 'Public holiday' },
    ],
    body: [
      'The Easter date is the fact to take away from this page. Easter Sunday 2027 falls on 28 March, so Holy Week runs from Palm Sunday on 21 March through to the 28th and sits entirely within March. Anyone booking an Easter break to Paris for April 2027 will arrive after the whole thing is over. Notre-Dame is free to enter and holds the fullest liturgical programme of its year in that week; the cathedral publishes its own schedule.',
      'The clocks going forward on the same Sunday is a coincidence of the calendar and a useful one. The change happens overnight on 27 to 28 March, so Easter Sunday itself already has the longer evening, and sunset moves from about 19:15 on the Saturday to roughly 20:15 by the Monday. The Easter long weekend is therefore the first weekend of the year with a proper evening in it.',
      'Easter Monday on 29 March is a French public holiday, and it is worth pairing that with the weekly closure information: the Chateau de Versailles closes every Monday of the year, and Easter Monday is no exception. A long-weekend visitor planning Versailles for the bank holiday Monday will find it shut. The gardens and the park are open, as they are every day.',
    ],
  },

  closures: {
    capsule:
      'March 2027 has the worst weekly-closure ratio of the ten months: five Mondays with no Musee d\'Orsay and no Chateau de Versailles, including Easter Monday on 29 March, and five Tuesdays with no Louvre. Giverny stays shut for its final winter month.',
    rows: [
      { site: 'Chateau de Versailles', closed: 'Mondays 1, 8, 15, 22 and 29 March', note: 'Five Mondays, including Easter Monday on the 29th. The Monday closure is year-round and holidays are not an exception. Gardens and park open every day.' },
      { site: 'Musee d\'Orsay', closed: 'Mondays 1, 8, 15, 22 and 29 March', note: 'Same five Mondays. Thursday late opening to 21:45.' },
      { site: 'Musee du Louvre', closed: 'Tuesdays 2, 9, 16, 23 and 30 March', note: 'Five Tuesdays, because March 2027 begins on a Monday and has thirty-one days. Late opening to 21:00 on Wednesdays and Fridays.' },
      { site: 'Fondation Claude Monet, Giverny', closed: 'All March', note: 'The last of five consecutive closed months. Reopens for the spring season on a date the foundation sets each year and had not published for 2027 when this was written.' },
      { site: 'Versailles Musical Fountains', closed: 'All March', note: 'Off since 1 November. The season restarts in the spring, so the Full Access passport is still the wrong Versailles ticket in March.' },
    ],
    body: [
      'March 2027 is the month to check a calendar before booking. It opens on a Monday and runs thirty-one days, so it contains five Mondays and five Tuesdays. That means ten of the thirty-one days have one of the three biggest venues shut, five with no Musee d\'Orsay and no Versailles, five with no Louvre. On a three-night trip it is entirely possible to lose two of your three days to closing days without realising.',
      'The Easter Monday case is the one that catches people. Versailles closes every Monday of the year, and a public holiday does not change that, so Monday 29 March 2027 is not a Versailles day. It is a common assumption that a bank holiday means everything opens; at Versailles the reverse is true. The gardens and the park are open every day of the year, so an Easter Monday walk in the park is still on.',
      'March is the last of Giverny\'s five closed months in this guide. The Fondation Claude Monet reopens for the spring, and every subsequent page in this set, April and May, has the day trip back on the list. The exact 2027 opening date is set by the foundation and had not been published when this page was written, so if a late-March trip is close to the boundary, check with the foundation directly rather than assuming.',
    ],
  },

  packing: {
    capsule:
      'Pack for a nine-degree daily swing and fourteen wet days. March in Paris can start at frost and reach 12.3C by mid-afternoon, so layers beat a single heavy coat, and the showers are wind-driven enough that a hood beats an umbrella.',
    body: [
      'The March packing problem is variability rather than severity. A 3.9C morning and a 12.3C afternoon is a nine-degree range inside one day, and the wet days come with Atlantic wind behind them. That combination defeats both the heavy winter coat, which is too much by three o\'clock, and the light jacket, which is not enough at nine in the morning. A shell over a fleece or jumper solves it.',
      'From the 28th, when the clocks go forward, you will be outside later than you have been since October, and the evenings are still 3.9C. Anyone planning to make use of the new 20:15 sunsets should keep a warm layer in the bag rather than assuming the longer day means a warmer one; it does not.',
    ],
    list: [
      'A wind-resistant shell with a hood; March rain comes in sideways',
      'Layers rather than one heavy coat, for a nine-degree daily swing',
      'Waterproof shoes, for the highest wet-day count of the ten months',
      'A warm layer for the longer evenings after the clocks change on 28 March',
      'Your dates checked against five Louvre Tuesdays and five Versailles Mondays',
    ],
  },

  faqs: [
    {
      question: 'When is Easter in Paris in 2027?',
      answer: 'Easter Sunday is 28 March 2027, so the whole of Holy Week falls in March. Palm Sunday is 21 March and Easter Monday, a French public holiday, is 29 March. This is the opposite of most recent years, and it means an April 2027 trip to Paris will miss Easter entirely. If Easter is the reason for the trip, book March.',
    },
    {
      question: 'Is Versailles open on Easter Monday?',
      answer: 'No. The Chateau de Versailles closes every Monday of the year and a public holiday is not an exception, so Monday 29 March 2027 is not a Versailles day. The gardens and the park are open every day of the year including that Monday, so a walk in the park is still possible, but the palace, the Hall of Mirrors and the Trianon estate are all shut.',
    },
    {
      question: 'Is March a rainy month in Paris?',
      answer: 'It has the highest wet-day count of any month in this guide, at fourteen out of thirty-one, from a total of 72mm. That is more wet days than November or December. The rain is showery and wind-driven rather than settled all-day cloud, so it tends to interrupt an afternoon rather than write off a whole day, but the odds are the worst of the ten months.',
    },
    {
      question: 'When do the clocks change in Paris in March?',
      answer: 'On Sunday 28 March 2027, which is also Easter Sunday. The clocks go forward one hour overnight, so sunset moves from around 19:15 on Saturday 27 March to roughly 20:15 by Monday 29 March. It is the biggest single daylight event of the year, and it means the Easter long weekend is the first weekend of 2027 with a proper evening in it.',
    },
    {
      question: 'Is Giverny open in March?',
      answer: 'No. Monet\'s garden is in the last of five consecutive closed months, having shut on 1 November. The Fondation Claude Monet reopens for the spring season on a date it sets each year, and that 2027 date had not been published when this page was written. If your trip is late in March and Giverny matters, check with the foundation directly before booking travel.',
    },
    {
      question: 'How many days is the Louvre closed in March 2027?',
      answer: 'Five. March 2027 begins on a Monday and runs thirty-one days, so it contains five Tuesdays, on the 2nd, 9th, 16th, 23rd and 30th, and the Louvre closes every Tuesday. The Musee d\'Orsay and the Chateau de Versailles close on the five Mondays: the 1st, 8th, 15th, 22nd and 29th. That is ten of the thirty-one days affected by a weekly closure, the worst ratio in this guide.',
    },
  ],
};

export const april: MonthContent = {
  slug: 'paris-in-april',
  month: 'April',
  monthKey: 'april',
  yearOffset: 1,
  prevMonth: 'March',
  prevPath: '/paris-in-march',
  nextMonth: 'May',
  nextPath: '/paris-in-may',
  metaDescription:
    'Paris in April: the driest month of the year at 51mm, with Giverny and the Versailles fountains both back for the season. Note Easter 2027 already passed on 28 March. Weather, closures, events and ten ranked tours.',
  heroCapsule:
    'April is the driest month of the ten covered here, at 51mm of rain across ten wet days, and it is the month Paris switches back on: Monet\'s garden at Giverny reopens and the Versailles fountains start running again. One warning: Easter 2027 was 28 March, so April misses it entirely.',

  verdict: {
    capsule:
      'April is the best-value month of the spring and the driest of the ten, at 51mm. It is also the month the seasonal attractions return after five months away. The one thing April 2027 does not have is Easter, which fell on 28 March, so the usual Easter premium is not there either.',
    body: [
      'The rainfall number is the headline and it surprises people. Paris in April averages 51mm across ten wet days, less than any other month in this guide and well under May\'s 76mm or March\'s 72mm. The old idea that April is a showery month is a better fit for London than for Paris. Combined with 13 hours 45 minutes of daylight and 15.7C highs, April is a genuinely strong walking month.',
      'What changes April from a good month to a distinctive one is the reopening. Giverny and the Versailles fountains have both been unavailable since 1 November, which is five of the ten pages in this guide. In April they come back, and an April itinerary can suddenly include Monet\'s garden in tulip and wisteria season and Versailles with the water running. Neither is possible in a January or a February trip at any price.',
      'The unusual feature of April 2027 specifically is the absence of Easter. Because Easter Sunday fell on 28 March, the school-holiday and short-break demand that normally makes early April expensive has already come and gone in March. April 2027 therefore gets spring weather and the reopened attractions without the Easter premium, which makes it the best combination of price and conditions in the whole ten-month set.',
    ],
  },

  weather: {
    capsule:
      'April is the driest month in this guide at 51mm across ten wet days, with 15.7C average highs and 5.5C lows. Daylight reaches 13 hours 45 minutes mid-month and sunset moves past 20:40. The daily temperature swing is wide, so mornings are much colder than afternoons.',
    body: [
      'Fifty-one millimetres over ten wet days makes April the best weather bet of the ten months on both measures that matter to a walking trip. The next driest is February at 54mm and eleven days, and after that September at 60mm and nine days. If you want the highest chance of getting through a Paris itinerary without a soaking, April is where the numbers point.',
      'The catch is the swing. Average highs of 15.7C with lows of 5.5C is a ten-degree daily range, wider than any other month in this guide. An April morning in Paris can be genuinely cold and an April afternoon genuinely warm, sometimes on the same day at the same place. That makes April the classic layering month, and it means the packing advice differs from May\'s despite the months being adjacent.',
      'The evenings are the real prize. Sunset passes 20:40 by mid-month and reaches close to 21:00 by the 30th, which after a winter of 17:00 sunsets is transformative. It is the first month of the year where you can do a full day of sightseeing and still have three hours of light left for dinner outdoors, and it is what makes the reopened Versailles gardens worth a whole afternoon rather than an hour.',
    ],
  },

  crowds: {
    capsule:
      'Unusually quiet for a spring month, because Easter 2027 fell on 28 March and took its demand with it. Book Giverny and Versailles ahead, since both have just reopened after five months and their first weeks draw the people who have been waiting.',
    body: [
      'April 2027 gets a rare gift: spring conditions without the Easter surge. In a normal year, Easter and the school holidays around it make the first fortnight of April one of the most expensive stretches of the spring. With Easter on 28 March 2027, that demand lands in March instead, and April is left with good weather, long evenings and comparatively normal pricing.',
      'The two things to book early are the ones that have just reopened. Giverny sees a concentrated rush in its opening weeks from people who have had it on a list all winter, and the Versailles fountain days draw a distinct crowd of their own. Both are day-trip destinations rather than city sights, so weekends are much busier than weekdays and a Tuesday or Wednesday visit is a different experience from a Saturday.',
      'The Paris Marathon usually runs in April, traditionally on a Sunday early in the month, and it closes a substantial arc of central roads from the Champs-Elysees through to the Bois de Vincennes for most of that morning. We are not publishing a 2027 date because it had not been confirmed when this page was written. If your dates are in the first half of April, look it up: it is not a problem, but it will change how you cross the city on that one morning.',
    ],
  },

  tours: {
    capsule:
      'Ranked for April: the things that have been unavailable since 1 November come back to the top, and the outdoor experiences rise because 51mm is the lowest rainfall of the ten months. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'half-day-trip-to-giverny-from-paris',
        bestFor: 'The month Monet\'s garden comes back',
        why: 'Ranked first despite carrying the lowest rating of anything we sell in Paris, at 4.2, because in April it is the only thing on this list that was not available at all a month ago. Spring at Giverny is the tulip and wisteria phase, which is the version of the garden that appears in every photograph of it. Confirm the foundation\'s opening date before booking travel.',
      },
      {
        slug: 'paris-big-bus-hop-on-hop-off-tour-with-optional-cruise',
        bestFor: 'The best odds of the year for an open top deck',
        why: 'Ranked up hard on the numbers. April\'s 51mm across ten wet days is the lowest rainfall of the ten months, which makes it the single best month to buy a ticket whose entire value rests on an open upper deck. Take the 48-hour option and use the second day if the first is one of the ten.',
      },
      {
        slug: 'palace-of-versailles-full-access-passport-ticket',
        bestFor: 'The fountains running again',
        why: 'This passport becomes worth buying again in April. Its Musical Fountains and Musical Gardens upgrade restarts for the spring after five months off, and with sunset past 20:40 you can spend a whole afternoon and evening on the estate. The gardens and park are open every day even when the palace is closed on Mondays.',
      },
      {
        slug: 'paris-1-hour-seine-cruise-departing-from-the-eiffel-tower',
        bestFor: 'Thirteen and three-quarter hours of daylight',
        why: 'April is where the Seine cruise flips back to being a daylight experience. At £15 for an hour it is the cheapest way to see the whole monumental centre, and with the driest weather of the ten months the open sections of the boat are actually usable.',
      },
      {
        slug: 'from-paris-mont-st-michel-at-your-own-pace-by-coach',
        bestFor: 'A fourteen-hour day that finally fits',
        why: 'Back on the list after four months off. A fourteen-hour coach day needs a long day to sit inside, and 13 hours 45 minutes of daylight is the first point since October where it works. Spring light on the bay is also better than the flat haze of high summer.',
      },
      {
        slug: 'versailles-palace-tour-gardens-with-optional-full-access',
        bestFor: 'The state rooms before the May crowds',
        why: 'Versailles in April is busier than in February and much quieter than in May, and the forecourt queue at 15.7C is a far better prospect than at 25.4C in August. A guided skip-the-line slot removes it entirely. Closed Mondays: the 5th, 12th, 19th and 26th.',
      },
      {
        slug: 'paris-eiffel-tower-entry-ticket-with-optional-summit-access',
        bestFor: 'The summit, with the winter maintenance question behind you',
        why: 'April is well clear of the winter maintenance window that makes a January or February summit ticket a gamble, and the spring air on a dry April day gives long views without the summer haze. With sunset past 20:40 an early evening slot catches the light changing.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'Ten wet days of insurance',
        why: 'Still worth having in the plan even in the driest month, because ten wet days is not zero. A guided reserved-access route is the efficient way to do the Louvre when it is competing with good weather outside. Closed Tuesdays: the 6th, 13th, 20th and 27th.',
      },
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'Pairing the paintings with the garden',
        why: 'The highest-rated tour we sell, at 4.8, and April is the month to book it in the same trip as Giverny. Seeing the garden Monet built and the room where his contemporaries hang within a few days of each other is the best thing our Paris list can offer, and it is only possible from April to October.',
      },
      {
        slug: 'skip-the-line-versailles-palace-garden-tour-with-transport',
        bestFor: 'Versailles without organising the trains',
        why: 'A three to three and a half hour version with round-trip transport included, which suits April specifically: the days are now long enough that a half-day at Versailles still leaves a full Paris evening. Good value at £43 with the transport built in.',
      },
    ],
    note:
      'Two products return to the list this month after being absent since November: the Giverny day trip and the Versailles Full Access passport, both because their seasons restart. The fourteen-hour Mont-Saint-Michel day and the open-top bus also come back, on daylight and rainfall respectively. Nothing has dropped out. Honest gaps for April: we do not sell anything connected to the Paris Marathon, and we do not stock a cherry blossom or spring garden walk, which is the thing an April visitor most reasonably asks for. The blossom in the Jardin des Plantes and around Notre-Dame is free and needs no ticket.',
  },

  events: {
    capsule:
      'April 2027 has no Easter, because it fell on 28 March, and that is the most useful thing to know about the month. What it does have is the return of the Giverny season and the Versailles fountains, plus the Paris Marathon somewhere in the first half.',
    rows: [
      { event: 'Fondation Claude Monet, Giverny, reopens for the season', dates: 'Early April, date set by the foundation', where: 'Giverny, Normandy', free: 'Ticketed' },
      { event: 'Versailles Musical Fountains season restarts', dates: 'Early April, date set by the estate', where: 'Gardens of the Chateau de Versailles', free: 'Ticketed upgrade' },
      { event: 'Paris Marathon', dates: 'Usually a Sunday in the first half of April; 2027 date not yet confirmed', where: 'Champs-Elysees to the Bois de Vincennes', free: 'Free to watch' },
      { event: 'No Easter in April this year', dates: 'Easter Sunday was 28 March', where: 'See our March guide', free: 'Free advice' },
    ],
    body: [
      'The absence of Easter is worth stating twice because it is so easily missed. Easter Sunday 2027 is 28 March, which means the Easter weekend, the associated school holidays and the short-break demand that normally defines early April all happened in March. If you are booking an April 2027 trip expecting Easter markets, Easter services or a long weekend, you are a month late.',
      'The two seasonal restarts are the events that actually matter to an itinerary. Monet\'s garden at Giverny opens for the spring after five months shut, and the Versailles Musical Fountains begin their season. Both are set annually by the organisations that run them, and neither had published a confirmed 2027 date when this page was written, so we are describing the pattern rather than printing a date. Check both before booking travel that depends on them.',
      'The Paris Marathon is traditionally held on a Sunday early in April and closes a wide arc of central roads for the morning, from the Champs-Elysees through the Rue de Rivoli and out to the Bois de Vincennes. The 2027 date had not been confirmed when we wrote this. It is free to watch and genuinely good fun, but if you are moving across the city that morning it will take you longer than you expect.',
    ],
  },

  closures: {
    capsule:
      'April is the month the closures reverse. Giverny reopens after five months shut and the Versailles Musical Fountains restart, so an April itinerary can include things a March one could not. Only the ordinary weekly closing days remain.',
    rows: [
      { site: 'Fondation Claude Monet, Giverny', closed: 'Reopens in early April', note: 'The exact date is set by the foundation each year and had not been published for 2027 when this page was written. Confirm before booking travel around it.' },
      { site: 'Versailles Musical Fountains', closed: 'Season restarts in early April', note: 'Set annually by the estate. Once running, the Full Access passport regains the upgrade it has not been able to deliver since 1 November.' },
      { site: 'Musee du Louvre', closed: 'Tuesdays 6, 13, 20 and 27 April', note: 'No holiday closures in April. Late opening to 21:00 on Wednesdays and Fridays.' },
      { site: 'Musee d\'Orsay', closed: 'Mondays 5, 12, 19 and 26 April', note: 'Thursday late opening to 21:45. The 1 May closure falls in the following month.' },
      { site: 'Chateau de Versailles', closed: 'Mondays 5, 12, 19 and 26 April', note: 'Gardens and park open every day. Note the palace is also closed on 1 May, which is the first day of the following month.' },
    ],
    body: [
      'April is the only month in this guide where the closures section is mostly good news. Two things that have been unavailable for five consecutive months come back: Monet\'s garden at Giverny and the Versailles Musical Fountains. Everything else runs on the ordinary weekly rhythm, and April 2027 has a clean four Mondays and four Tuesdays with no public holiday at all.',
      'The caveat on both reopenings is the same and it is worth repeating. Neither the Fondation Claude Monet nor the Chateau de Versailles had published its confirmed 2027 seasonal dates when this page was written. Both operate a well-established pattern of opening in early April, but a pattern is not a date, and we are not going to print one we cannot source. If a trip depends on either, spend a minute on the organisation\'s own site.',
      'One forward-looking warning belongs here rather than on the May page alone. Saturday 1 May 2027 is Labour Day in France, and it is the single worst date in this entire ten-month guide: the Louvre, the Musee d\'Orsay, the Musee de l\'Orangerie, Sainte-Chapelle and the Chateau de Versailles are all closed on it. If your April trip runs to the end of the month, check whether your last day is the 30th or the 1st.',
    ],
  },

  packing: {
    capsule:
      'Pack for a ten-degree daily swing, the widest of the ten months: 15.7C afternoons against 5.5C mornings. April is the driest month at 51mm, so prioritise layers over waterproofing, and bring something for evenings that now run to 21:00.',
    body: [
      'The wide daily range is the whole April packing problem. Leaving a hotel at nine in the morning it can be 6C, and standing in the Versailles parterres at four it can be 17C. A single garment cannot cover that. Two thin layers plus a light jacket you can carry is the answer, and the jacket needs to fit in a day bag rather than being worn all day.',
      'With the lowest rainfall of the ten months you can genuinely deprioritise rain gear for the first time since September. Ten wet days out of thirty means two days in three are dry. Sunglasses matter more than an umbrella in April, and comfortable walking shoes matter most of all, because this is the month the outdoor city is fully available again.',
    ],
    list: [
      'Two thin layers plus a packable jacket, for a ten-degree daily swing',
      'Comfortable walking shoes; April has the best weather odds of the ten months',
      'Sunglasses; low spring sun is stronger than the temperature suggests',
      'A warm layer for evenings that now last until nearly 21:00',
      'The Giverny and Versailles fountain opening dates checked before you travel',
    ],
  },

  faqs: [
    {
      question: 'Is Easter in April in Paris in 2027?',
      answer: 'No. Easter Sunday 2027 is 28 March, so the entire Easter weekend, Holy Week and the associated short-break demand fall in March rather than April. An April 2027 trip to Paris misses Easter completely. The upside is that April 2027 gets spring weather and the reopened seasonal attractions without the usual Easter price premium.',
    },
    {
      question: 'Is April a rainy month in Paris?',
      answer: 'No, it is the driest month in this guide. Paris averages 51mm of rain in April across ten wet days, less than February at 54mm, September at 60mm or May at 76mm. The idea of April showers fits London better than Paris. Combined with 13 hours 45 minutes of daylight, it makes April the best month of the ten for a walking itinerary.',
    },
    {
      question: 'Is Giverny open in April?',
      answer: 'Yes, this is the month it reopens after five months shut. The Fondation Claude Monet runs a spring-to-autumn season and April is the start of it, with the garden in its tulip and wisteria phase. The exact opening date is set by the foundation each year and had not been published for 2027 when this page was written, so confirm it before booking travel that depends on it.',
    },
    {
      question: 'Do the Versailles fountains run in April?',
      answer: 'The season restarts in early April, after being off since 1 November. Once it does, the Versailles Full Access passport regains the Musical Fountains and Musical Gardens upgrade that made it worth buying. The estate sets the exact 2027 dates itself and had not published them when this page was written, so check before paying for the upgrade.',
    },
    {
      question: 'When is the Paris Marathon?',
      answer: 'Traditionally a Sunday in the first half of April, but the 2027 date had not been confirmed when this page was written so we are not printing one. It closes a wide arc of central roads for the morning, from the Champs-Elysees along the Rue de Rivoli and out to the Bois de Vincennes. It is free to watch. If you are travelling in early April, look up the date before planning to cross the city that morning.',
    },
    {
      question: 'How long are the evenings in Paris in April?',
      answer: 'Sunset passes 20:40 by mid-April and is close to 21:00 by the 30th, with 13 hours 45 minutes of daylight mid-month. After a winter of 17:00 sunsets that is transformative: April is the first month where a full day of sightseeing still leaves around three hours of light for an evening, which is what makes a whole afternoon at Versailles worth the trip.',
    },
  ],
};

export const may: MonthContent = {
  slug: 'paris-in-may',
  month: 'May',
  monthKey: 'may',
  yearOffset: 1,
  prevMonth: 'April',
  prevPath: '/paris-in-april',
  nextMonth: 'June',
  nextPath: '/best-time-to-visit-paris#june',
  metaDescription:
    'Paris in May: the longest days of the year at 15h 20m, but Saturday 1 May closes the Louvre, Orsay, Orangerie, Sainte-Chapelle and Versailles all at once. Weather, closures, events and ten ranked tours.',
  heroCapsule:
    'May has the longest days in this guide, at 15 hours 20 minutes with sunset near 21:25, and everything seasonal is running. It also contains the single worst date of the whole ten months: Saturday 1 May, when the Louvre, the Musee d\'Orsay, the Orangerie, Sainte-Chapelle and Versailles all close together.',

  verdict: {
    capsule:
      'May is the best month for daylight and the worst for a single bad date. You get 15 hours 20 minutes of light, Giverny at its peak and the Versailles fountains running. You also get 1 May, a Saturday in 2027, when five of the biggest sights in Paris are simultaneously shut.',
    body: [
      'On everything except one day, May is the strongest month in this guide. Sunset near 21:25 gives you the longest usable evenings of the year, 19.1C average highs are warm enough for outdoor dining and cool enough for a full day on foot, and every seasonal attraction, Giverny, the Versailles fountains, the open-top decks, the long day trips, is fully operational.',
      'Then there is 1 May. Labour Day in France is not a partial closure like Christmas or a weekly closing day. On 1 May the Musee du Louvre, the Musee d\'Orsay, the Musee de l\'Orangerie, Sainte-Chapelle and the Chateau de Versailles are all closed on the same day. In 2027 it falls on a Saturday, which is the worst possible day for it: a short-break visitor arriving Friday night for a weekend loses the whole of their first full day of museums.',
      'The other cost of May is rain, which is not what people expect from the best month. Paris averages 76mm in May, tied with December as the wettest month of the ten, across thirteen wet days. May rain arrives as heavy convective showers rather than winter drizzle and passes quickly, but it is a real amount of water and it is more than April, March or February deliver.',
    ],
  },

  weather: {
    capsule:
      'May averages 19.1C highs and 9.4C lows with the longest daylight of the ten months at 15 hours 20 minutes and sunset around 21:25. It is also the wettest month by volume, tied with December at 76mm, though that falls across thirteen days as heavy showers rather than settled cloud.',
    body: [
      'The daylight figure is the one that defines the month. Fifteen hours twenty minutes mid-May, with sunset moving from about 21:05 on the 1st to roughly 21:45 by the 31st, gives you a genuinely different day from anything else in this guide. It is nearly seven hours more usable light than December, and it means dinner outdoors before dark is possible for the first time since the previous September.',
      'The rainfall deserves an honest mention because it contradicts May\'s reputation. Seventy-six millimetres is the joint highest of the ten months, level with December and well above April\'s 51mm. The difference is character: May rain is convective, arriving as a sharp heavy shower in the afternoon and clearing within the hour, rather than the persistent low cloud of the winter. It interrupts rather than dominates, but it does interrupt.',
      'The temperature suits Paris well. At 19.1C average highs, May is warm enough to sit outside and cool enough to cross the city on foot without suffering, which is the combination August cannot quite offer at 25.4C. Lows of 9.4C mean the evenings still need a layer, and a 21:25 sunset means those evenings are long enough that you will notice.',
    ],
  },

  crowds: {
    capsule:
      'May is peak season on price. Four public holidays, the longest days of the year and the return of the seasonal attractions put demand at spring highs. Book Versailles and Giverny ahead, and plan around 1 May rather than hoping it works out.',
    body: [
      'The public holiday calendar is unusually heavy. Saturday 1 May is Labour Day, Thursday 6 May is Ascension, Saturday 8 May is Victory in Europe Day and Monday 17 May is Whit Monday. Two of those fall on Saturdays, which limits the long-weekend effect, but Ascension on a Thursday produces the classic French pont, with many people taking the Friday and travelling. The weekend of 6 to 9 May is the busiest domestic travel period of the month.',
      'Versailles is the specific booking pressure in May. The fountains are running, the gardens are at their best and the estate is at its most photographed, so the queue on the unsheltered forecourt is back to summer lengths. A guided skip-the-line slot is worth materially more in May than it was in February, when you could walk up.',
      'Roland-Garros, the French Open, begins in the second half of May at the Stade Roland-Garros in the 16th arrondissement and runs into June. We are not publishing the 2027 dates because they had not been confirmed when this page was written. Its effect on a general visitor is limited to hotel demand in the west of the city and to the Metro on line 10, but if you are staying near Porte d\'Auteuil it is worth checking.',
    ],
  },

  tours: {
    capsule:
      'Ranked for May: everything seasonal is running and the evenings are the longest of the year, so the outdoor and estate experiences lead. Prices, ratings and review counts were checked against live GetYourGuide listings on 28 July 2026.',
    picks: [
      {
        slug: 'palace-of-versailles-full-access-passport-ticket',
        bestFor: 'The full estate with the water running',
        why: 'Ranked first because May is the month this ticket delivers everything it promises: fountains running, gardens at their peak and a 21:25 sunset that lets you stay on the estate until the evening. Do not book it for Saturday 1 May, when the palace is closed. The gardens and park are open every day including Mondays.',
      },
      {
        slug: 'half-day-trip-to-giverny-from-paris',
        bestFor: 'The peak week of Monet\'s garden',
        why: 'Ranked second despite the lowest rating in our Paris list, at 4.2, because May is the month Giverny exists for. The wisteria over the Japanese bridge and the irises around the water garden are what the paintings are of, and they are a May phenomenon. Book ahead; this is the busiest month of its season.',
      },
      {
        slug: 'paris-1-hour-seine-cruise-departing-from-the-eiffel-tower',
        bestFor: 'Fifteen hours of daylight on the water',
        why: 'An hour on the Seine for £15 in the longest daylight of the year. One scheduling point specific to May: with sunset at 21:25 an illuminated cruise means a 22:00 departure, so if the lit version is what you want, book late. Any earlier sailing is a daylight trip, which is no bad thing in May.',
      },
      {
        slug: 'paris-eiffel-tower-entry-ticket-with-optional-summit-access',
        bestFor: 'Sunset from the summit at 21:25',
        why: 'The summit upgrade is worth the money in May. Spring air gives long clear views, the winter maintenance window is well behind you, and a 20:30 slot puts you at 276 metres for a 21:25 sunset over the whole city. That is the single best hour our Paris list can offer in this month.',
      },
      {
        slug: 'from-paris-mont-st-michel-at-your-own-pace-by-coach',
        bestFor: 'A fourteen-hour day inside a fifteen-hour one',
        why: 'The only month in this guide where a fourteen-hour coach day fits comfortably inside the daylight. You leave and return in the light, and the abbey in long May evening light is a completely different proposition from the same trip in October dusk.',
      },
      {
        slug: 'moulin-rouge-show-with-champagne',
        bestFor: 'The one indoor evening worth giving up the light for',
        why: 'Ranked lower than in the winter months and deliberately so: giving up a 21:25 sunset for a two-hour indoor show is a real trade in May in a way it never is in January. It earns its place because it is rated 4.7 and because a long May trip has enough evenings to spare one.',
      },
      {
        slug: 'versailles-palace-tour-gardens-with-optional-full-access',
        bestFor: 'Skipping a queue that is back to summer length',
        why: 'The Versailles forecourt queue in May is back to its warm-season length and it is completely unsheltered. A guided skip-the-line slot is worth considerably more this month than in the winter, when you could walk up. Closed Mondays: the 3rd, 10th, 17th, 24th and 31st, five of them this month.',
      },
      {
        slug: '2-hour-musee-d-orsay-guided-tour-with-skip-the-line-access',
        bestFor: 'Thirteen wet days of insurance, and the Monet pairing',
        why: 'The highest-rated tour we sell at 4.8, and worth booking for two May reasons: thirteen wet days means you will want an indoor afternoon, and pairing the Orsay with a Giverny day in the same trip is the best thing our list offers. Closed Mondays, and closed all day on Saturday 1 May.',
      },
      {
        slug: 'paris-big-bus-hop-on-hop-off-tour-with-optional-cruise',
        bestFor: 'Long days on an open top deck',
        why: 'Fifteen hours of daylight means a 24-hour ticket genuinely covers a full day rather than half of one. The caution is the rain: 76mm makes May the wettest month by volume in this guide, so take the 48-hour option if the forecast is mixed and use the better of the two days.',
      },
      {
        slug: 'quick-entrance-louvre-museum-3-hour-tour',
        bestFor: 'A defined three hours in a busy month',
        why: 'Ranked lower than in winter because May gives you every reason to be outside, but a reserved-access guided route is still the efficient way to do the Louvre when it is competing with a 21:25 sunset. Closed Tuesdays and closed all day on Saturday 1 May.',
      },
    ],
    note:
      'Dropped for May: the two Seine dinner cruises, the Bateaux-Mouches evening lights cruise and the Crazy Horse show. All four sell an evening, and in a month where the sun does not set until 21:25 an evening is the most valuable thing you have. They are all excellent in December and none of them is the right call in May. The single most important thing on this page is not a tour at all: do not plan Saturday 1 May around a museum, because the Louvre, the Orsay, the Orangerie, Sainte-Chapelle and Versailles are all shut. Inventory gap: we do not sell Roland-Garros tickets or anything tied to the Nuit Blanche arts festival, which now takes place in June rather than October.',
  },

  events: {
    capsule:
      'May 2027 has four public holidays, and the first of them is the problem: Saturday 1 May, Labour Day, closes the Louvre, the Musee d\'Orsay, the Orangerie, Sainte-Chapelle and Versailles simultaneously. Ascension on Thursday 6 May produces the month\'s busiest travel weekend.',
    rows: [
      { event: 'Labour Day, and the worst closure date of the year', dates: 'Saturday 1 May', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Ascension, a national public holiday', dates: 'Thursday 6 May', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Victory in Europe Day, a national public holiday', dates: 'Saturday 8 May', where: 'Ceremony at the Arc de Triomphe', free: 'Public holiday' },
      { event: 'Whit Monday, a national public holiday', dates: 'Monday 17 May', where: 'Nationwide', free: 'Public holiday' },
      { event: 'Roland-Garros, the French Open', dates: 'Second half of May into June; 2027 dates not yet confirmed', where: 'Stade Roland-Garros, 16th arrondissement', free: 'Ticketed' },
    ],
    body: [
      'Labour Day on 1 May is the most consequential single date in this entire guide and it deserves to be planned around rather than discovered. It closes the Louvre, the Musee d\'Orsay, the Musee de l\'Orangerie, Sainte-Chapelle and the Chateau de Versailles all at once. In 2027 it falls on a Saturday, which makes it worse than usual, because a Friday-night-to-Sunday city break loses its only full museum day. Public transport runs a reduced service and many shops close as well.',
      'What is open on 1 May is worth knowing, because the day is not lost. The Eiffel Tower runs, the Seine cruises run, the catacombs run, the cabarets run and the Versailles gardens and park are open even though the palace is not. It is also traditional to buy and give lily of the valley on 1 May, sold on street corners all over Paris, which is a genuinely charming thing to be around.',
      'Ascension on Thursday 6 May is the month\'s other significant date, because a Thursday public holiday in France produces a pont: a great many people take the Friday off and make a four-day weekend of it. That weekend, 6 to 9 May, is the busiest domestic travel period of the month and it runs straight into Victory in Europe Day on Saturday 8 May, which brings a ceremony at the Arc de Triomphe.',
    ],
  },

  closures: {
    capsule:
      'Saturday 1 May 2027 is the worst closure date in this guide. The Louvre, the Musee d\'Orsay, the Musee de l\'Orangerie, Sainte-Chapelle and the Chateau de Versailles are all closed on the same day. May also has five Mondays, so Orsay and Versailles lose six days in total.',
    rows: [
      { site: 'Musee du Louvre', closed: 'Saturday 1 May, plus Tuesdays 4, 11, 18 and 25 May', note: 'Labour Day is one of the Louvre\'s few fixed annual closures alongside 1 January and 25 December.' },
      { site: 'Musee d\'Orsay', closed: 'Saturday 1 May, plus Mondays 3, 10, 17, 24 and 31 May', note: 'The Orsay\'s three fixed annual closures are every Monday, 1 May and 25 December. Six lost days in May 2027.' },
      { site: 'Musee de l\'Orangerie', closed: 'Saturday 1 May', note: 'Which matters more than usual: the Orangerie holds Monet\'s Water Lilies, and it closes on the same day as the Orsay and the Louvre.' },
      { site: 'Sainte-Chapelle', closed: 'Saturday 1 May', note: 'Closed for Labour Day along with the four other major sites. Sainte-Chapelle sells its own timed entry; we do not stock it.' },
      { site: 'Chateau de Versailles', closed: 'Saturday 1 May, plus Mondays 3, 10, 17, 24 and 31 May', note: 'Five Mondays this month, including Whit Monday on the 17th. The gardens and park stay open every day, including 1 May.' },
      { site: 'Nothing seasonal', closed: 'No seasonal closures in May', note: 'Giverny and the Versailles fountains are both running. May and August are the only two months in this guide with the full estate available.' },
    ],
    body: [
      'This is the section to read before you book anything in May. Saturday 1 May 2027 closes five of the biggest sights in Paris at once: the Louvre, the Musee d\'Orsay, the Musee de l\'Orangerie, Sainte-Chapelle and the Chateau de Versailles. That is not a partial closure or an early finish, it is a full day with all five shut, and because it lands on a Saturday in 2027 it will take out the main day of a great many short breaks.',
      'The fix is straightforward once you know. Put the Eiffel Tower, a Seine cruise, the catacombs, Montmartre or the Versailles park on 1 May, and put the museums on any other day. All of those run normally. Public transport runs a reduced service and a good share of shops close, so it is not a day for errands, but it is a perfectly good day for the outdoor city, particularly with a 21:05 sunset.',
      'Beyond 1 May, the weekly pattern in May 2027 is unhelpful: the month begins on a Saturday and runs thirty-one days, giving five Mondays. Combined with 1 May that is six days on which the Musee d\'Orsay and the Chateau de Versailles are closed. The compensation is that nothing is shut for the season: Giverny and the Versailles fountains are both running, which makes May and August the only two months in this guide with the whole estate available.',
    ],
  },

  packing: {
    capsule:
      'Pack for 19.1C afternoons, 9.4C evenings and the wettest month by volume in this guide at 76mm. May rain is heavy and brief rather than persistent, so a packable shell beats an umbrella, and the 21:25 sunset means you will still be out when it cools.',
    body: [
      'The May rain pattern is the same as August\'s: sharp convective showers, often with wind, that dump a lot of water quickly and clear inside the hour. That makes an umbrella a poor choice and a packable waterproof a good one, and it means the right response to a May shower is usually to step into a cafe for twenty minutes rather than to change the plan.',
      'The evening drop catches people out because the afternoons feel like summer. A 19.1C day becomes a 9.4C night, and with sunset at 21:25 you will be outside for a great deal more of that cooling than you would be in November. Anyone planning a late dinner on a terrace or an evening at Versailles needs a proper layer in the bag, not just an optimistic one.',
    ],
    list: [
      'A packable waterproof shell; May is the wettest month by volume at 76mm',
      'A warm layer for 9.4C evenings that now run past 21:25',
      'Sunglasses and sun cream; May sun in the Versailles parterres is stronger than it feels',
      'Comfortable shoes for the longest sightseeing days of the year',
      'Your itinerary checked so that Saturday 1 May is not a museum day',
    ],
  },

  faqs: [
    {
      question: 'What is closed on 1 May in Paris?',
      answer: 'The Musee du Louvre, the Musee d\'Orsay, the Musee de l\'Orangerie, Sainte-Chapelle and the Chateau de Versailles are all closed on 1 May for Labour Day. In 2027 that falls on a Saturday. Public transport runs a reduced service and many shops close. The Eiffel Tower, the Seine cruises, the catacombs, the cabarets and the Versailles gardens and park all stay open.',
    },
    {
      question: 'Is May a good time to visit Paris?',
      answer: 'It is the best month for daylight and the worst for a single date. May gives 15 hours 20 minutes of light with sunset around 21:25, 19.1C highs, and every seasonal attraction running including Giverny and the Versailles fountains. Against that, it is the wettest month by volume at 76mm, it carries four public holidays, and 1 May closes five major sights at once.',
    },
    {
      question: 'Is Giverny at its best in May?',
      answer: 'Yes. May is the wisteria and iris phase at the Fondation Claude Monet, when the flowers over the Japanese bridge and around the water garden look most like the paintings they inspired. It is also the busiest month of the Giverny season for exactly that reason, so book ahead and prefer a weekday over a weekend if you can choose.',
    },
    {
      question: 'How many public holidays are there in Paris in May?',
      answer: 'Four in 2027: Labour Day on Saturday 1 May, Ascension on Thursday 6 May, Victory in Europe Day on Saturday 8 May and Whit Monday on Monday 17 May. Ascension falling on a Thursday produces the classic French pont, with many people taking the Friday off, which makes 6 to 9 May the busiest domestic travel period of the month.',
    },
    {
      question: 'Does it rain a lot in Paris in May?',
      answer: 'More than most people expect. May averages 76mm across thirteen wet days, which ties it with December as the wettest month in this guide and puts it well above April\'s 51mm. The difference is character: May rain comes as heavy convective showers that clear within the hour rather than the persistent low cloud of the winter, so it interrupts a day rather than defining it.',
    },
    {
      question: 'When does it get dark in Paris in May?',
      answer: 'Sunset moves from about 21:05 on 1 May to roughly 21:45 by the 31st, with 15 hours 20 minutes of daylight mid-month. That is the longest of the ten months covered here and nearly seven hours more than December. One practical consequence: an illuminated Seine cruise needs a departure around 22:00 in May, whereas in December a 17:30 sailing does the same job.',
    },
  ],
};
