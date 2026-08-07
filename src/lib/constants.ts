export const SITE_NAME = 'Best Paris Tours';
export const SITE_CITY = 'Paris';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://best-paris-tours.com';
export const SITE_DESCRIPTION = 'Discover the best tours, attractions, and experiences in Paris. Book skip-the-line tickets and guided tours with instant confirmation and free cancellation.';
export const GYG_PARTNER_ID = 'LPT26IL';
export const GYG_CAMPAIGN = 'best_paris_tours';
export const GYG_LOCATION_ID = '16';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-PFC4ZBBZDG';
export const CONTENT_DATE = '2026-08-07';
// The date every tour price, rating and review count was last re-verified
// against live GetYourGuide data. Only move this when that check is actually rerun.
export const DATA_CHECKED = '2026-08-07';

// Direct link to this city's full tour catalogue on GetYourGuide (partner-attributed).
export const GYG_CITY_URL = `https://www.getyourguide.com/${SITE_CITY.toLowerCase().replace(/\s+/g, '-')}-l${GYG_LOCATION_ID}/?partner_id=${GYG_PARTNER_ID}&utm_medium=online_publisher&cmp=${GYG_CAMPAIGN}`;
