import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { hubMonths } from '@/data/paris-months';
import { parisClimate, MONTH_ORDER } from '@/data/paris-climate';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import {
  SEASON_BASE_YEAR,
  SEASON_PUBLISHED,
  SEASON_UPDATED,
  HUB_PATH,
  CLIMATE_SOURCE,
  DAYLIGHT_SOURCE,
  LOUVRE_SOURCE,
  ORSAY_SOURCE,
  VERSAILLES_SOURCE,
} from '@/lib/season';

const TITLE = `Best Time to Visit Paris: Month by Month Guide ${SEASON_BASE_YEAR} to ${SEASON_BASE_YEAR + 1}`;
const DESCRIPTION =
  'The best time to visit Paris, month by month, with ten-year climate figures, the closure dates that catch people out including 1 May, and a ranked tour list for every month. Sources cited throughout.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${HUB_PATH}` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}${HUB_PATH}`,
    type: 'article',
  },
};

const faqs = [
  {
    question: 'What is the best month to visit Paris?',
    answer:
      'September, on the numbers. Paris averages nine wet days in September, the fewest of any month, with 21.8C highs and no French public holiday or seasonal closure at all. April is the close second: it is the driest month by rainfall at 51mm, it has 13 hours 45 minutes of daylight, and both Giverny and the Versailles fountains have reopened by then.',
  },
  {
    question: 'What is the cheapest time to visit Paris?',
    answer:
      'The window from 1 to 18 November. The October trade fairs have finished and the Christmas market and lights demand has not begun, so central Paris briefly has more rooms than visitors. January from about the 5th is a close second and adds something November does not: the city is genuinely empty, with Louvre slots available same-day.',
  },
  {
    question: 'What is the worst time to visit Paris?',
    answer:
      'October on cost and congestion, and Saturday 1 May on closures. October carries Fashion Week, the Mondial de l\'Auto from 12 to 18 October, Art Basel Paris and SIAL, which together put hotel demand at its annual peak. On 1 May the Louvre, the Musee d\'Orsay, the Orangerie, Sainte-Chapelle and Versailles are all closed on the same day.',
  },
  {
    question: 'What is closed in Paris on 1 May?',
    answer:
      'Five of the biggest sights at once: the Musee du Louvre, the Musee d\'Orsay, the Musee de l\'Orangerie, Sainte-Chapelle and the Chateau de Versailles. In 2027 that falls on a Saturday. Public transport runs a reduced service and many shops close. The Eiffel Tower, the Seine cruises, the catacombs, the cabarets and the Versailles gardens and park all stay open.',
  },
  {
    question: 'When is Monet\'s garden at Giverny open?',
    answer:
      'For a spring-to-autumn season only. The Fondation Claude Monet closes on 1 November and stays shut through November, December, January, February and March, which is five of the ten months covered by this guide. It reopens in early April on a date the foundation sets each year, so check with the foundation directly before booking travel around it.',
  },
  {
    question: 'When do the Versailles Musical Fountains run?',
    answer:
      'In the warm half of the year only, finishing on 1 November and restarting in the spring. That matters because the Versailles Full Access passport includes the fountain and Musical Gardens upgrade, so from November to March that ticket cannot deliver its headline feature and a guided tour of the state rooms is the better winter purchase.',
  },
  {
    question: 'Is Nuit Blanche still in October?',
    answer:
      'No. The all-night contemporary arts festival has moved to June and is no longer an October event, although a large number of Paris guides still list it in early October. If an itinerary has you keeping an October Saturday night free for Nuit Blanche, it is working from out-of-date information.',
  },
  {
    question: 'When is Easter in Paris in 2027?',
    answer:
      'Easter Sunday is 28 March 2027, so the whole of Holy Week falls in March and an April 2027 trip misses Easter entirely. Easter Monday on 29 March is a French public holiday, and because the Chateau de Versailles closes every Monday of the year including public holidays, the palace is shut that day.',
  },
];

export default function BestTimeToVisitParisPage() {
  const pageUrl = `${SITE_URL}${HUB_PATH}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The best time to visit Paris, month by month',
    description: DESCRIPTION,
    url: pageUrl,
    inLanguage: 'en-GB',
    datePublished: SEASON_PUBLISHED,
    dateModified: SEASON_UPDATED,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Paris month by month',
    numberOfItems: hubMonths.length,
    itemListElement: hubMonths.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Paris in ${m.month}`,
      url: m.hasPage ? `${SITE_URL}${m.href}` : `${pageUrl}#${m.key}`,
    })),
  };

  return (
    <>
      {[articleSchema, faqPageSchema, itemListSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Best time to visit Paris' }]} />

        <article>
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              The best time to visit Paris, month by month
            </h1>
            <p className="mt-3 text-sm text-gray-500">
              Written and checked by the {SITE_NAME} editorial team.{' '}
              <time dateTime={SEASON_UPDATED}>
                Updated{' '}
                {new Date(SEASON_UPDATED).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              .
            </p>
            <p className="mt-3 text-[17px] leading-relaxed text-gray-800 bg-blue-50/60 border-l-4 border-blue-900/70 rounded-r-lg px-4 py-3">
              September is the best month to visit Paris, with nine wet days, the fewest of the year, and no public
              holiday or seasonal closure at all. April is the driest at 51mm. November is the cheapest. The date to
              avoid is 1 May, when five of the biggest sights in the city close together.
            </p>
          </header>

          <section aria-labelledby="at-a-glance" className="mt-8">
            <h2 id="at-a-glance" className="text-xl font-bold text-gray-900">
              Paris at a glance, all twelve months
            </h2>
            <div className="mt-3 overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[680px] text-left text-sm">
                <caption className="sr-only">Paris climate and verdict for each month of the year</caption>
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Month</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg high</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Avg low</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Rain</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Wet days</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Daylight</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {MONTH_ORDER.map((key) => {
                    const c = parisClimate[key];
                    const hub = hubMonths.find((h) => h.key === key)!;
                    return (
                      <tr key={key} className="align-top">
                        <th scope="row" className="px-3 py-2.5 font-medium">
                          <Link href={hub.href} className="text-blue-900 hover:underline">{c.month}</Link>
                        </th>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgHighC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.avgLowC}C</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.rainMm}mm</td>
                        <td className="px-3 py-2.5 text-gray-800">{c.rainDays}</td>
                        <td className="px-3 py-2.5 text-gray-800 whitespace-nowrap">{c.daylight}</td>
                        <td className="px-3 py-2.5 text-gray-700">{hub.verdict}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Temperature, rainfall and wet days:{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {CLIMATE_SOURCE.label}
              </a>
              . Daylight is the length of day on the 15th, from{' '}
              <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
                {DAYLIGHT_SOURCE.label}
              </a>
              .
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">The short answer</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you want the best odds of good weather, go in September. Paris averages nine wet days that month,
              fewer than any other, with 21.8C highs that suit a city you cross on foot. September is also the only
              month of the year with no French public holiday and nothing shut for the season, so nothing on your
              itinerary hits a closed door.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If you want the driest month outright, go in April: 51mm of rain across ten wet days, less than any
              other month, with sunset past 20:40 and both Giverny and the Versailles fountains back after five
              months off. April 2027 has an extra advantage, because Easter fell on 28 March and took its price
              premium with it.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              If price is the deciding factor, go between 1 and 18 November. The autumn trade fairs have finished
              and the Christmas market demand has not started, and for those eighteen days Paris is as cheap as it
              gets. From about 5 January the city is cheaper still and genuinely empty, at the cost of 7.3C days and
              thirteen wet ones.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">The three dates that decide a Paris trip</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">1 May.</span> Labour Day closes the Musee du Louvre, the
              Musee d&apos;Orsay, the Musee de l&apos;Orangerie, Sainte-Chapelle and the Chateau de Versailles on the
              same day. In 2027 it falls on a Saturday, which is the worst possible day for it. This is the single
              most consequential date in the Paris calendar and almost no general guide flags it.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">1 November.</span> Two things end on this day and neither
              returns until the spring: the season at the Fondation Claude Monet in Giverny, and the Versailles
              Musical Fountains. Between them they are the only genuinely seasonal attractions in the Paris region,
              and they are unavailable for five of the ten months in this guide.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900">28 March 2027.</span> Easter Sunday, which is also the
              day the clocks go forward. Holy Week therefore sits entirely in March, so an April Easter trip to
              Paris in 2027 arrives a month late. Easter Monday on 29 March is a public holiday, and Versailles is
              closed every Monday of the year including that one.
            </p>
          </section>

          {hubMonths.map((m) => {
            const c = parisClimate[m.key];
            return (
              <section key={m.key} id={m.key} className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-gray-900">Paris in {m.month}</h2>
                <p className="mt-2 text-sm text-gray-600">
                  {c.avgHighC}C average high, {c.avgLowC}C average low, {c.rainMm}mm across {c.rainDays} wet days,{' '}
                  {c.daylight} of daylight mid-month, sunset around {c.sunset}.
                </p>
                <p className="mt-3 text-gray-700 leading-relaxed">{m.capsule}</p>
                {m.hasPage ? (
                  <p className="mt-3">
                    <Link href={m.href} className="font-semibold text-blue-900 hover:underline">
                      Read the full guide to Paris in {m.month}
                    </Link>
                  </p>
                ) : (
                  <p className="mt-3 text-gray-600">
                    We publish full month guides for August through May. For {m.month}, the figures and the note
                    above are the essentials; the nearest full guides are{' '}
                    <Link href="/paris-in-may" className="text-blue-900 font-medium hover:underline">
                      Paris in May
                    </Link>{' '}
                    and{' '}
                    <Link href="/paris-in-august" className="text-blue-900 font-medium hover:underline">
                      Paris in August
                    </Link>
                    .
                  </p>
                )}
              </section>
            );
          })}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Where the numbers come from</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Average high, average low, monthly rainfall and wet-day counts are ten-year observed means for Paris,
              drawn from the{' '}
              <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                ERA5 reanalysis via the Open-Meteo historical weather API
              </a>
              . Daylight is the length of day on the 15th of each month, computed for Paris at 48.86N, 2.35E using the{' '}
              <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                standard NOAA solar position algorithm
              </a>
              , and the sunset times come from the same calculation. Nothing on this page is estimated.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Weekly closing days and fixed holiday closures were read directly from the{' '}
              <a href={LOUVRE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Musee du Louvre
              </a>
              ,{' '}
              <a href={ORSAY_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Musee d&apos;Orsay
              </a>{' '}
              and{' '}
              <a href={VERSAILLES_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="text-blue-900 underline">
                Chateau de Versailles
              </a>{' '}
              official sites, and every weekday quoted on these pages was calculated from the calendar rather than
              assumed.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Where we could not confirm something from a primary source, we say so on the page rather than filling
              the gap. That currently applies to the Fondation Claude Monet&apos;s 2027 opening date at Giverny, the
              2027 Versailles fountain season dates, whether the Eiffel Tower summit closes in January or February
              2027 specifically, and the 2027 dates for the Paris Marathon and Roland-Garros. Tour prices are shown
              in pounds; official French admission prices are quoted in euros as the venues publish them.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Best time to visit Paris: FAQs</h2>
            <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((f) => (
                <div key={f.question} className="py-4">
                  <h3 className="font-semibold text-gray-900">{f.question}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm font-semibold text-gray-900">Ready to book?</p>
            <p className="mt-2 text-sm text-gray-600">
              Browse{' '}
              <Link href="/tours" className="text-blue-900 font-medium hover:underline">
                all Paris tours
              </Link>
              , the{' '}
              <Link href="/attractions" className="text-blue-900 font-medium hover:underline">
                Paris attractions
              </Link>{' '}
              guide, or our{' '}
              <Link href="/blog/top-10-tours" className="text-blue-900 font-medium hover:underline">
                top ten Paris tours
              </Link>
              .
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
