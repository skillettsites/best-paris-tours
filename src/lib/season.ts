// Single build-time constant for the seasonal month pages.
//
// The month pages run August of SEASON_BASE_YEAR through May of the following
// year. The year is rendered in the <title> tag and in the events section
// heading only. It never appears in a URL or in an H1, so rolling the whole set
// forward is a one-line edit here plus a content refresh.
export const SEASON_BASE_YEAR = 2026;

// Article datePublished / dateModified for the seasonal set.
export const SEASON_PUBLISHED = '2026-07-29';
export const SEASON_UPDATED = '2026-07-29';

// Months from August of the base year carry offset 0, January onwards carry 1.
export function seasonYear(yearOffset: 0 | 1): number {
  return SEASON_BASE_YEAR + yearOffset;
}

export const HUB_PATH = '/best-time-to-visit-paris';

// Sources cited on the month pages. Every one was read directly for this build.
export const CLIMATE_SOURCE = {
  label: 'Open-Meteo ERA5 reanalysis for Paris, ten-year observed means',
  url: 'https://open-meteo.com/en/docs/historical-weather-api',
};

export const DAYLIGHT_SOURCE = {
  label: 'day length computed for Paris (48.86N, 2.35E) on the 15th of each month',
  url: 'https://gml.noaa.gov/grad/solcalc/',
};

export const LOUVRE_SOURCE = {
  label: 'Musee du Louvre official opening hours',
  url: 'https://www.louvre.fr/en/visit',
};

export const ORSAY_SOURCE = {
  label: 'Musee d’Orsay official visit information',
  url: 'https://www.musee-orsay.fr/en/visit',
};

export const VERSAILLES_SOURCE = {
  label: 'Chateau de Versailles official practical information',
  url: 'https://www.chateauversailles.fr/en',
};
