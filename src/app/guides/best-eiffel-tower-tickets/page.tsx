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
import EiffelDatesWidget from './EiffelDatesWidget';
import { TOP_THREE } from './products';

const SLUG = 'best-eiffel-tower-tickets';
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

export default function BestEiffelTowerTicketPage() {
  const top = TOP_THREE[0];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'first-time-in-paris',
        'skip-the-line-paris',
        'best-notre-dame-tickets',
        'best-versailles-tickets',
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
              Ranked from live GetYourGuide Eiffel Tower products, not from a made-up shortlist. Review counts,
              starting prices and product photos are taken from those listings. Prices below convert to your
              currency. The exact fare is confirmed on GetYourGuide at checkout.
            </p>
            <TopThreeCards />
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Which one should you book?</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>
                <strong>Book the entry ticket with optional summit access</strong> if it is your first visit. That is
                the ticket almost everyone should buy: elevator to the first and second floors, a summit upgrade if
                you want the top, and a host to the second floor.
              </li>
              <li>
                <strong>Book the dedicated reserved-access ticket</strong> if you want a reserved entrance and a
                guided visit. It has the second-highest review count of the three. It is non-refundable.
              </li>
              <li>
                <strong>Book the summit or second-floor ticket</strong> if you want a short briefing beside the
                tower, then free time on the second floor, and you will decide the summit upgrade at checkout.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">The summit is an upgrade. Security is not skippable</h2>
            <p className="mb-4 text-gray-700">
              Official timed tickets also sit on toureiffel.paris. The three GetYourGuide products above are the
              ones people book for a hosted meeting point, a reserved or timed elevator slot, and mobile
              confirmation. None of them erase the security line at the base, and none of them give a reserved lift
              from the second floor to the summit.
            </p>
            <p className="mb-4 text-gray-700">
              Second-floor access is the default on all three. The summit is an option you choose when you book. If
              the summit is closed for weather or maintenance, you still get the lower floors. Stairs tickets to the
              second floor are a different official product and are not one of these three elevator listings.
            </p>
            <p className="text-gray-700">
              Cancellation is stricter than on most Paris tours. Two of the three refund only half if you cancel a
              day ahead. The reserved-access listing is non-refundable. Check the option before you pay.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">The tower itself, not a river ticket</h2>
            <p className="mb-4 text-gray-700">
              The Eiffel Tower sits on Champ de Mars in the 7th arrondissement, a short walk from Bir-Hakeim on
              line 6 or from RER C Champ de Mars–Tour Eiffel. A Seine cruise that departs at the foot of the tower
              is a river ticket, not an Eiffel Tower ticket. Those belong on{' '}
              <Link href="/guides/best-seine-river-cruise" className="font-semibold text-green-700 underline">
                which Seine cruise to book
              </Link>
              .
            </p>
            <p className="text-gray-700">
              For the shorter attraction listing we already publish, see{' '}
              <Link href="/attractions/eiffel-tower" className="font-semibold text-green-700 underline">
                Eiffel Tower tickets and tours
              </Link>
              . For whether the top is worth the extra wait, see{' '}
              <Link
                href="/blog/is-the-eiffel-tower-summit-worth-it"
                className="font-semibold text-green-700 underline"
              >
                is the Eiffel Tower summit worth it
              </Link>
              . This page is the which-to-book comparison.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Elevator entry with optional summit, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From{' '}
              <LocalPrice amount={top.price} currency={top.currency} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="eiffel-which-ticket-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book the Eiffel Tower entry ticket
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Eiffel Tower dates on GetYourGuide</h2>
            <p className="mb-4 text-sm text-gray-600">
              Live availability in your currency. This widget is not locked to euros. Widget clicks are not counted;
              use the Book buttons above to open the exact product.
            </p>
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
              <EiffelDatesWidget />
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
