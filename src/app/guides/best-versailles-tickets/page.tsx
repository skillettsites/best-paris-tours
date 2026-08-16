import { Metadata } from 'next';
import Link from 'next/link';
import { getGuideBySlug, guides } from '@/data/guides';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';
import TrackedGYGLink from '@/components/TrackedGYGLink';
import LocalPrice from '@/components/LocalPrice';
import DisplayCopy from '@/components/DisplayCopy';
import TopThreeCards from './TopThreeCards';
import VersaillesDatesWidget from './VersaillesDatesWidget';
import { TOP_THREE } from './products';

const SLUG = 'best-versailles-tickets';
const PAGE_URL = `${SITE_URL}/guides/${SLUG}`;

const guide = getGuideBySlug(SLUG)!;

export const metadata: Metadata = {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: PAGE_URL,
    type: 'article',
  },
};

export default function BestVersaillesTicketPage() {
  const top = TOP_THREE[0];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'first-time-in-paris',
        'skip-the-line-paris',
        'best-notre-dame-tickets',
        'best-paris-tours-2026',
      ].includes(g.slug)
    );

  return (
    <>
      {[
        articleSchema(guide),
        breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Guides', url: `${SITE_URL}/guides` },
          { name: guide.title, url: PAGE_URL },
        ]),
        faqSchema(guide.faqs),
      ]
        .filter(Boolean)
        .map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Guides', href: '/guides' },
            { label: guide.title },
          ]}
        />

        <article>
          <header className="mb-10">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">{guide.title}</h1>
            <div className="mt-5 rounded-xl border-l-4 border-green-600 bg-green-50 px-4 py-3 sm:px-5 sm:py-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-wide text-green-700">Quick answer</p>
              <DisplayCopy
                as="p"
                className="text-base leading-snug text-gray-800 sm:text-lg"
                text={guide.excerpt.replace(/^Quick answer:\s*/i, '')}
              />
            </div>
            <time className="mt-3 block text-sm text-gray-500" dateTime={guide.updatedDate}>
              Updated:{' '}
              {new Date(guide.updatedDate).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </header>

          <AffiliateDisclosure />

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">The top 3 tickets people actually book</h2>
            <p className="mb-6 text-gray-700">
              Ranked from live GetYourGuide Palace of Versailles products, not from a made-up shortlist.
              Review counts, starting prices and product photos are taken from those listings. Prices below convert
              to your currency. The exact fare is confirmed on GetYourGuide at checkout.
            </p>
            <TopThreeCards />
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Which one should you book?</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>
                <strong>Book the skip-the-line palace and gardens tour</strong> if it is your first visit. That is the
                ticket almost everyone should buy: a licensed guide through the Hall of Mirrors, reserved palace
                entry, garden access, and a booking you can cancel.
              </li>
              <li>
                <strong>Book the full access ticket</strong> if you want the cheapest highly-reviewed way onto the
                whole estate. It has the most GetYourGuide reviews of the three. There is no guide, and it is
                non-refundable.
              </li>
              <li>
                <strong>Book the tour with transport</strong> if you want a half-day from Paris without planning the
                RER. The listing includes round-trip transport, a guide, and skip-the-line palace entry.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Palace entry is ticketed. The gardens are not always free</h2>
            <p className="mb-4 text-gray-700">
              Unlike Notre-Dame, you cannot walk into the Palace of Versailles for free. You need a timed palace
              ticket, or a guided tour that includes one. Official tickets also sit on chateauversailles.fr. The
              three GetYourGuide products above are the ones people book when they want mobile confirmation and,
              on two of the three, free cancellation.
            </p>
            <p className="mb-4 text-gray-700">
              The park around the estate is free. The formal gardens are free from November to March and ticketed
              on Musical Gardens and Fountain Show days in the warmer months. The full-access passport covers the
              palace, the Trianon, Marie Antoinette’s Estate and the gardens. The two guided tours include palace
              entry and garden access; Marie Antoinette’s Estate is an optional upgrade on the first-visit tour,
              not a default.
            </p>
            <p className="text-gray-700">
              The palace is closed on Mondays. Arrive for an early slot. The worst queue is the security line at
              the gates, which a skip-the-line tour shortens but does not erase.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Versailles, not a random Paris landmark</h2>
            <p className="mb-4 text-gray-700">
              The palace sits in Versailles, about 40 minutes west of central Paris on RER C to Versailles Château
              Rive Gauche. A Seine cruise or an Eiffel Tower ticket is a different product. Those belong on their
              own pages, not here.
            </p>
            <p className="text-gray-700">
              For the shorter attraction listing we already publish, see{' '}
              <Link href="/attractions/palace-of-versailles" className="font-semibold text-green-700 underline">
                Palace of Versailles tickets and tours
              </Link>
              . For whether the day trip is worth a day of your Paris trip, see{' '}
              <Link
                href="/blog/is-a-versailles-day-trip-from-paris-worth-it"
                className="font-semibold text-green-700 underline"
              >
                is a Versailles day trip from Paris worth it
              </Link>
              . This page is the which-to-book comparison.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Guided skip-the-line palace and gardens, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From{' '}
              <LocalPrice amount={top.price} currency={top.currency} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="versailles-which-ticket-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book the Versailles skip-the-line tour
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Versailles dates on GetYourGuide</h2>
            <p className="mb-4 text-sm text-gray-600">
              Live availability in your currency. This widget is not locked to euros. Widget clicks are not counted;
              use the Book buttons above to open the exact product.
            </p>
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
              <VersaillesDatesWidget />
            </div>
          </section>

          <FAQ faqs={guide.faqs} />

          {related.length > 0 && (
            <section className="mt-12 rounded-xl bg-gray-50 p-6">
              <h2 className="mb-4 text-xl font-bold text-gray-900">More Paris guides</h2>
              <ul className="space-y-3">
                {related.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="font-medium text-green-700 hover:underline">
                      {g.title}
                    </Link>
                    <DisplayCopy
                      as="p"
                      className="mt-0.5 text-sm text-gray-500"
                      text={g.excerpt.replace(/^Quick answer:\s*/i, '')}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-12 border-t border-gray-200 pt-8">
            <Link href="/guides" className="inline-flex items-center text-sm font-semibold text-blue-900 hover:underline">
              <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all guides
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
