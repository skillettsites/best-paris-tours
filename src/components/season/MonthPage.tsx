import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import LocalPrice from '@/components/LocalPrice';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import { getTourBySlug } from '@/data/tours';
import { getMonthBySlug, monthStrip } from '@/data/paris-months';
import { parisClimate } from '@/data/paris-climate';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import {
  seasonYear,
  SEASON_PUBLISHED,
  SEASON_UPDATED,
  HUB_PATH,
  CLIMATE_SOURCE,
  DAYLIGHT_SOURCE,
  LOUVRE_SOURCE,
  ORSAY_SOURCE,
  VERSAILLES_SOURCE,
} from '@/lib/season';

function Capsule({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 text-[17px] leading-relaxed text-gray-800 bg-blue-50/60 border-l-4 border-blue-900/70 rounded-r-lg px-4 py-3">
      {children}
    </p>
  );
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 mt-12 text-2xl sm:text-3xl font-bold text-gray-900">
      {children}
    </h2>
  );
}

export function buildMonthPage(slug: string) {
  const data = getMonthBySlug(slug);
  if (!data) notFound();

  const year = seasonYear(data.yearOffset);
  const climate = parisClimate[data.monthKey];
  const picks = data.tours.picks
    .map((p) => ({ pick: p, tour: getTourBySlug(p.slug) }))
    .filter((x): x is { pick: typeof x.pick; tour: NonNullable<typeof x.tour> } => Boolean(x.tour));

  const pageUrl = `${SITE_URL}/${data.slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Paris in ${data.month}: Weather, Events and the Best Tours`,
    description: data.metaDescription,
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
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  // Every rating, review count and price below was verified against the live
  // GetYourGuide listing on 28 July 2026. Nothing here is estimated.
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `The best tours in Paris in ${data.month}`,
    numberOfItems: picks.length,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    itemListElement: picks.map(({ tour }, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: tour.title,
        url: `${SITE_URL}/tours/${tour.slug}`,
        image: tour.imageUrl,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: tour.rating,
          reviewCount: tour.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        offers: {
          '@type': 'Offer',
          price: tour.price,
          priceCurrency: tour.currency,
          availability: 'https://schema.org/InStock',
          url: tour.affiliateUrl,
        },
      },
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
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Best time to visit Paris', href: HUB_PATH },
            { label: `Paris in ${data.month}` },
          ]}
        />

        <article>
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Paris in {data.month}: Weather, Events and the Best Tours
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
            <Capsule>{data.heroCapsule}</Capsule>
          </header>

          {/* Quick-pick table, placed high because it is the most extractable block on the page */}
          <section aria-labelledby="quick-pick" className="mt-8">
            <h2 id="quick-pick" className="text-xl font-bold text-gray-900">
              Quick pick: the best Paris tours in {data.month}
            </h2>
            <div className="mt-3 overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th scope="col" className="px-3 py-2.5 font-semibold">#</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Tour</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Best for</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Duration</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">From</th>
                    <th scope="col" className="px-3 py-2.5 font-semibold">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {picks.map(({ pick, tour }, i) => (
                    <tr key={tour.slug} className="align-top">
                      <td className="px-3 py-2.5 font-bold text-gray-500">{i + 1}</td>
                      <td className="px-3 py-2.5">
                        <a href={`#tour-${i + 1}`} className="font-medium text-blue-900 hover:underline">
                          {tour.shortTitle}
                        </a>
                      </td>
                      <td className="px-3 py-2.5 text-gray-700">{pick.bestFor}</td>
                      <td className="px-3 py-2.5 text-gray-700">{tour.duration}</td>
                      <td className="px-3 py-2.5 font-semibold text-gray-900">
                        <LocalPrice gbp={tour.price} />
                      </td>
                      <td className="px-3 py-2.5 text-gray-700 whitespace-nowrap">
                        {tour.rating} ({tour.reviewCount.toLocaleString('en-GB')})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              Prices, ratings and review counts verified against live GetYourGuide listings on 28 July 2026 and
              shown in pounds. Official French admission prices quoted elsewhere on this page are in euros, as
              published by the sites themselves. Duration varies by the option you choose at checkout.
            </p>
          </section>

          {/* 1. Verdict */}
          <H2 id="is-it-good">Is {data.month} a good time to visit Paris?</H2>
          <Capsule>{data.verdict.capsule}</Capsule>
          {data.verdict.body.map((p, i) => (
            <p key={i} className="mt-4 text-gray-700 leading-relaxed">{p}</p>
          ))}

          {/* 2. Weather */}
          <H2 id="weather">Paris weather in {data.month}</H2>
          <Capsule>{data.weather.capsule}</Capsule>
          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">Paris climate averages for {data.month}</caption>
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Measure</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">{data.month}</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">How that compares</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <th scope="row" className="px-3 py-2.5 font-medium text-gray-900">Average high</th>
                  <td className="px-3 py-2.5 text-gray-800">{climate.avgHighC}C</td>
                  <td className="px-3 py-2.5 text-gray-600">Warmest is August at 25.4C, coldest January at 7.3C</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2.5 font-medium text-gray-900">Average low</th>
                  <td className="px-3 py-2.5 text-gray-800">{climate.avgLowC}C</td>
                  <td className="px-3 py-2.5 text-gray-600">From 1.7C in January to 15.2C in August</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2.5 font-medium text-gray-900">Rainfall</th>
                  <td className="px-3 py-2.5 text-gray-800">{climate.rainMm}mm across the month</td>
                  <td className="px-3 py-2.5 text-gray-600">Driest is April at 51mm, wettest May and December at 76mm</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2.5 font-medium text-gray-900">Wet days</th>
                  <td className="px-3 py-2.5 text-gray-800">{climate.rainDays} days</td>
                  <td className="px-3 py-2.5 text-gray-600">Fewest is September at 9, most is March at 14</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2.5 font-medium text-gray-900">Daylight, mid-month</th>
                  <td className="px-3 py-2.5 text-gray-800">{climate.daylight}</td>
                  <td className="px-3 py-2.5 text-gray-600">From 8h 21m in December to 15h 20m in May</td>
                </tr>
                <tr>
                  <th scope="row" className="px-3 py-2.5 font-medium text-gray-900">Sunset on the 15th</th>
                  <td className="px-3 py-2.5 text-gray-800">About {climate.sunset}</td>
                  <td className="px-3 py-2.5 text-gray-600">Local Paris time, summer time included where it applies</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Temperature, rainfall and wet days:{' '}
            <a href={CLIMATE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
              {CLIMATE_SOURCE.label}
            </a>
            . Daylight and sunset:{' '}
            <a href={DAYLIGHT_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
              {DAYLIGHT_SOURCE.label}
            </a>
            .
          </p>
          {data.weather.body.map((p, i) => (
            <p key={i} className="mt-4 text-gray-700 leading-relaxed">{p}</p>
          ))}

          {/* 3. Crowds */}
          <H2 id="crowds">Crowds, prices and what to book ahead</H2>
          <Capsule>{data.crowds.capsule}</Capsule>
          {data.crowds.body.map((p, i) => (
            <p key={i} className="mt-4 text-gray-700 leading-relaxed">{p}</p>
          ))}

          {/* 4. Tours */}
          <H2 id="best-tours">The best tours in Paris in {data.month}</H2>
          <Capsule>{data.tours.capsule}</Capsule>

          <div className="mt-6 space-y-8">
            {picks.map(({ pick, tour }, i) => (
              <section key={tour.slug} id={`tour-${i + 1}`} className="scroll-mt-24 rounded-xl border border-gray-200 overflow-hidden">
                <div className="grid sm:grid-cols-[220px_1fr]">
                  <TrackedGYGLink
                    href={tour.affiliateUrl}
                    tourName={tour.shortTitle}
                    section={`month-${data.monthKey}-image`}
                    className="block relative aspect-[16/10] sm:aspect-auto sm:h-full min-h-[150px]"
                  >
                    <Image
                      src={tour.imageUrl}
                      alt={tour.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 220px"
                    />
                  </TrackedGYGLink>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg font-bold text-gray-900">
                      {i + 1}. {tour.shortTitle}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">
                        {tour.rating} out of 5
                      </span>{' '}
                      from {tour.reviewCount.toLocaleString('en-GB')} verified GetYourGuide reviews
                      {' '}&bull;{' '}
                      from <LocalPrice gbp={tour.price} className="font-semibold text-gray-900" />
                      {' '}&bull;{' '}
                      {tour.duration}
                    </p>
                    <p className="mt-3 text-gray-700 leading-relaxed">{pick.why}</p>
                    <p className="mt-2 text-sm text-gray-600">
                      <span className="font-semibold text-gray-900">Best for in {data.month}:</span>{' '}
                      {pick.bestFor}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <TrackedGYGLink
                        href={tour.affiliateUrl}
                        tourName={tour.shortTitle}
                        section={`month-${data.monthKey}-cta`}
                        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-green-500 transition-colors"
                      >
                        Check availability
                      </TrackedGYGLink>
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="text-sm font-medium text-blue-900 hover:underline"
                      >
                        Read our full review
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">{data.tours.note}</p>

          {/* 5. Events */}
          <H2 id="events">Events and festivals in {data.month} {year}</H2>
          <Capsule>{data.events.capsule}</Capsule>
          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Dated events in Paris in {data.month} {year}</caption>
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Event</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Dates</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Where</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Free?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.events.rows.map((r) => (
                  <tr key={r.event + r.dates} className="align-top">
                    <th scope="row" className="px-3 py-2.5 font-medium text-gray-900">{r.event}</th>
                    <td className="px-3 py-2.5 text-gray-800">{r.dates}</td>
                    <td className="px-3 py-2.5 text-gray-700">{r.where}</td>
                    <td className="px-3 py-2.5 text-gray-700">{r.free}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {data.events.body.map((p, i) => (
            <p key={i} className="mt-4 text-gray-700 leading-relaxed">{p}</p>
          ))}

          {/* 6. Closures, the differentiator */}
          <H2 id="closures">What is closed in {data.month}</H2>
          <Capsule>{data.closures.capsule}</Capsule>
          <div className="mt-4 overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <caption className="sr-only">Closures affecting Paris sights in {data.month}</caption>
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Site</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Closed</th>
                  <th scope="col" className="px-3 py-2.5 font-semibold">Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.closures.rows.map((r) => (
                  <tr key={r.site + r.closed} className="align-top">
                    <th scope="row" className="px-3 py-2.5 font-medium text-gray-900">{r.site}</th>
                    <td className="px-3 py-2.5 text-gray-800">{r.closed}</td>
                    <td className="px-3 py-2.5 text-gray-700">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            Weekly closing days and fixed holiday closures read directly from the{' '}
            <a href={LOUVRE_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Louvre
            </a>
            ,{' '}
            <a href={ORSAY_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Musee d&apos;Orsay
            </a>{' '}
            and{' '}
            <a href={VERSAILLES_SOURCE.url} target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Chateau de Versailles
            </a>{' '}
            official sites on 29 July 2026. Seasonal opening dates for {year} are set by each site and can move,
            so confirm before you book a non-refundable trip around one.
          </p>
          {data.closures.body.map((p, i) => (
            <p key={i} className="mt-4 text-gray-700 leading-relaxed">{p}</p>
          ))}

          {/* 7. Packing */}
          <H2 id="what-to-pack">What to wear and pack for Paris in {data.month}</H2>
          <Capsule>{data.packing.capsule}</Capsule>
          {data.packing.body.map((p, i) => (
            <p key={i} className="mt-4 text-gray-700 leading-relaxed">{p}</p>
          ))}
          <ul className="mt-4 space-y-2">
            {data.packing.list.map((item) => (
              <li key={item} className="flex gap-2 text-gray-700">
                <span aria-hidden="true" className="text-blue-900 font-bold">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* 8. Methodology */}
          <H2 id="how-we-chose">How we chose these tours</H2>
          <Capsule>
            We rank on seasonal fit first and verified GetYourGuide rating second, so the experiences that
            actually work in {data.month}&apos;s daylight, rainfall and opening calendar sit highest. Every price,
            rating and review count on this page was checked against the live listing on 28 July 2026.
          </Capsule>
          <ol className="mt-4 space-y-3 text-gray-700 leading-relaxed list-decimal pl-5">
            <li>
              <span className="font-semibold text-gray-900">Seasonal fit first.</span> Each of the 26 tours we
              stock is scored against {data.month} on daylight hours, sunset time, wet days, temperature and
              whether the thing it visits is actually open. A tour that cannot deliver its own selling point
              this month drops out, and we say which ones and why.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Then rating, then review volume.</span> Where two
              tours fit the month equally well, the higher verified GetYourGuide rating wins, and review count
              breaks any remaining tie. Both numbers are public and you can check them against the listing.
            </li>
            <li>
              <span className="font-semibold text-gray-900">Nothing is invented.</span> Prices, star ratings and
              review counts come from the live product page. We do not publish an opening date, closure or
              festival date we could not confirm from the venue itself, and where a {year} date has not been
              published yet we say so instead of guessing.
            </li>
            <li>
              <span className="font-semibold text-gray-900">We say what we do not sell.</span> Where the obvious
              thing to do in {data.month} is not something we can book you onto, it goes in the text as advice
              rather than being quietly left out or replaced with a product that does not fit.
            </li>
            <li>
              <span className="font-semibold text-gray-900">We earn a commission.</span> Booking links go to
              GetYourGuide and pay us if you book. That does not change the ranking, and it is why the reasoning
              on every entry is written out rather than left implied.
            </li>
          </ol>

          {/* 9. FAQs */}
          <H2 id="faqs">FAQs about Paris in {data.month}</H2>
          <div className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
            {data.faqs.map((f) => (
              <div key={f.question} className="py-4">
                <h3 className="font-semibold text-gray-900">{f.question}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>

          {/* Prev / next and month strip */}
          <nav aria-label="Other months" className="mt-12">
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
              <Link
                href={data.prevPath}
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-900 transition-colors"
              >
                <span className="block text-xs uppercase tracking-wide text-gray-500">Previous month</span>
                <span className="block font-semibold text-blue-900">Paris in {data.prevMonth}</span>
              </Link>
              <Link
                href={data.nextPath}
                className="flex-1 rounded-lg border border-gray-200 px-4 py-3 hover:border-blue-900 transition-colors sm:text-right"
              >
                <span className="block text-xs uppercase tracking-wide text-gray-500">Next month</span>
                <span className="block font-semibold text-blue-900">Paris in {data.nextMonth}</span>
              </Link>
            </div>

            <div className="mt-6 rounded-lg bg-gray-50 border border-gray-200 p-4">
              <p className="text-sm font-semibold text-gray-900">Paris month by month</p>
              <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {monthStrip.map((m) => (
                  <li key={m.href}>
                    {m.href === `/${data.slug}` ? (
                      <span className="font-semibold text-gray-900">{m.month}</span>
                    ) : (
                      <Link href={m.href} className="text-blue-900 hover:underline">{m.month}</Link>
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Comparing months? Start with{' '}
                <Link href={HUB_PATH} className="text-blue-900 font-medium hover:underline">
                  the best time to visit Paris
                </Link>
                , or go straight to{' '}
                <Link href="/tours" className="text-blue-900 font-medium hover:underline">
                  all Paris tours
                </Link>{' '}
                and{' '}
                <Link href="/attractions" className="text-blue-900 font-medium hover:underline">
                  Paris attractions
                </Link>
                .
              </p>
            </div>
          </nav>
        </article>
      </div>
    </>
  );
}

export function buildMonthMetadata(slug: string) {
  const data = getMonthBySlug(slug);
  if (!data) return {};
  const year = seasonYear(data.yearOffset);
  const title = `Paris in ${data.month} ${year}: Weather, Events and the Best Tours`;
  return {
    title: { absolute: title },
    description: data.metaDescription,
    alternates: { canonical: `${SITE_URL}/${data.slug}` },
    openGraph: {
      title,
      description: data.metaDescription,
      url: `${SITE_URL}/${data.slug}`,
      type: 'article' as const,
    },
  };
}
