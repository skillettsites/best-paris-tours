import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog-posts';
import { getTourBySlug } from '@/data/tours';
import { attractions } from '@/data/attractions';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SITE_URL, SITE_NAME } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQ from '@/components/ui/FAQ';
import TourCard from '@/components/ui/TourCard';
import AffiliateDisclosure from '@/components/ui/AffiliateDisclosure';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.heroImage, alt: post.heroImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedTours = post.relatedTourSlugs
    .map((s) => getTourBySlug(s))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  // Attraction ticket pages named in this post, matched on the attraction name
  // appearing in the post title or body. Keeps attraction pages inside the link
  // mesh instead of leaking every mention straight out to GetYourGuide.
  const postText = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
  const namedAttractions = attractions
    .filter((a) => {
      const needle = a.name.toLowerCase().replace(/[’']/g, "'");
      return postText.replace(/[’']/g, "'").includes(needle);
    })
    .slice(0, 4);

  const relatedPosts = post.relatedBlogSlugs
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: post.heroImage,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  const schemas = [
    articleSchema,
    faqSchema(post.faqs),
    breadcrumbSchema([
      { name: 'Home', url: SITE_URL },
      { name: 'Blog', url: `${SITE_URL}/blog` },
      { name: post.title, url: `${SITE_URL}/blog/${post.slug}` },
    ]),
  ].filter(Boolean);

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        <header className="mt-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
          <time className="mt-3 block text-sm text-gray-500" dateTime={post.updatedDate}>
            Updated: {new Date(post.updatedDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <div className="mt-4"><AffiliateDisclosure /></div>
        </header>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl mb-8">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="guide-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <FAQ faqs={post.faqs} />

        {relatedTours.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tours Mentioned in This Guide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedTours.slice(0, 4).map((tour) => (
                <TourCard key={tour.slug} tour={tour} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Compare tickets and prices</h2>
          <p className="text-gray-600 mb-4">
            Still deciding? The{' '}
            <Link href="/guides/best-paris-tours-2026" className="text-green-700 font-semibold hover:underline">
              best Paris tours 2026
            </Link>{' '}
            ranking puts every experience in order by verified reviews, with live prices.
          </p>
          {namedAttractions.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {namedAttractions.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/attractions/${a.slug}`}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:border-green-300 hover:bg-green-50 transition-colors"
                  >
                    {a.name} tickets
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {relatedPosts.length > 0 && (
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-xl overflow-hidden border border-gray-100 bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.heroImage}
                      alt={p.heroImageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-green-700 transition-colors line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-800 p-6 sm:p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to book your Paris experience?</h2>
          <p className="text-green-100 mb-6 max-w-lg mx-auto">
            Browse every Paris tour and ticket with live prices, free cancellation on most options and instant confirmation.
          </p>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold text-base px-8 py-3 rounded-xl hover:bg-green-50 transition-colors"
          >
            Browse all Paris tours
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-green-700 hover:underline">
            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to all articles
          </Link>
        </div>
      </article>
    </>
  );
}
