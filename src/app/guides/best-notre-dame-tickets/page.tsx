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
import NotreDameDatesWidget from './NotreDameDatesWidget';
import { TOP_THREE } from './products';

const SLUG = 'best-notre-dame-tickets';
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

export default function BestNotreDameTicketPage() {
  const top = TOP_THREE[0];
  const related = guides
    .filter((g) => g.slug !== SLUG)
    .filter((g) =>
      [
        'best-seine-river-cruise',
        'first-time-in-paris',
        'skip-the-line-paris',
        'best-guided-tours-in-paris',
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
              Ranked from live GetYourGuide Notre-Dame and Île de la Cité products, not from a made-up shortlist.
              Review counts, starting prices and product photos are taken from those listings. Prices below convert
              to your currency. The exact fare is confirmed on GetYourGuide at checkout.
            </p>
            <TopThreeCards />
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Which one should you book?</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-700">
              <li>
                <strong>Book the interior and exterior guided tour</strong> if it is your first visit. That is the
                ticket almost everyone should buy: a certified guide on the Parvis and inside, in a group of five,
                and a booking you can cancel.
              </li>
              <li>
                <strong>Book the Restored Masterpiece tour</strong> if you want the cheapest highly-reviewed guide.
                It has the most GetYourGuide reviews of the three.
              </li>
              <li>
                <strong>Book the reserved-access tour</strong> if you want a listing that sells a reserved or
                priority slot. Official cathedral entry is still free.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Entry is free. You are paying for a guide</h2>
            <p className="mb-4 text-gray-700">
              Since Notre-Dame reopened in December 2024, general entry is free. The cathedral is open to all,
              without charge. Free timed reservations, when offered, sit on the official notredamedeparis.fr
              website only. Nobody needs to buy a GetYourGuide product to walk in.
            </p>
            <p className="mb-4 text-gray-700">
              What you can pay for is commentary. The three products above are guided tours of the cathedral and
              the Parvis on Île de la Cité. They do not replace free entry. The interior-and-exterior tour states
              plainly that you queue in the general line with your guide, typically 10 to 20 minutes. Arriving at
              opening or in the last hour is still the most reliable way to shorten the wait.
            </p>
            <p className="text-gray-700">
              The tower climb is a separate ticketed visit run by the national monuments authority. It is not
              part of these tours. Sainte-Chapelle and the Conciergerie sit on the same island and need their
              own tickets if you want the interiors.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Île de la Cité, not a random Paris landmark</h2>
            <p className="mb-4 text-gray-700">
              Notre-Dame sits at 6 Parvis Notre-Dame, Place Jean-Paul II, on Île de la Cité in the 4th
              arrondissement, a two-minute walk from Cité metro on line 4. A Seine cruise that happens to pass
              the cathedral is a river ticket, not a Notre-Dame ticket. Those belong on{' '}
              <Link href="/guides/best-seine-river-cruise" className="font-semibold text-green-700 underline">
                which Seine cruise to book
              </Link>
              .
            </p>
            <p className="text-gray-700">
              For the shorter attraction listing we already publish, see{' '}
              <Link href="/attractions/notre-dame" className="font-semibold text-green-700 underline">
                Notre-Dame tickets and tours
              </Link>
              . This page is the which-to-book comparison.
            </p>
          </section>

          <section className="mb-12 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Top pick</p>
            <p className="mt-1 font-bold text-gray-900">{top.name}</p>
            <p className="mt-2 text-sm text-gray-700">
              Guided interior and exterior, {top.duration}, rated {top.rating.toFixed(1)} from{' '}
              {top.reviewCount.toLocaleString('en-GB')} reviews. From{' '}
              <LocalPrice amount={top.price} currency={top.currency} />.
            </p>
            <TrackedGYGLink
              href={top.href}
              tourName={top.shortName}
              section="notre-dame-which-ticket-cta"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-green-500"
            >
              Book the Notre-Dame guided tour
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </TrackedGYGLink>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">More Notre-Dame dates on GetYourGuide</h2>
            <p className="mb-4 text-sm text-gray-600">
              Live availability in your currency. This widget is not locked to euros. Widget clicks are not counted;
              use the Book buttons above to open the exact product.
            </p>
            <div className="rounded-xl border border-gray-200 bg-white p-4 sm:p-6">
              <NotreDameDatesWidget />
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
