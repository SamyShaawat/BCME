/**
 * SEO metadata constants — drives react-helmet-async tags.
 */
import { AssetPaths, ExternalUrls } from '@enums/routes.enum';

export const SEO_TITLE = 'BCME | BC Marine Electronics Inc. - NAVCOM & Marine Electronics Canada' as const;

export const SEO_DESCRIPTION = 'BCME (BC Marine Electronics Inc.) - Canadian maritime NAVCOM specialists. Class-approved radio surveys, VDR/SVDR APT, GMDSS, satellite communications. 24/7 global support.' as const;

export const SEO_KEYWORDS = 'BCME, BC Marine Electronics, BCME Canada, NAVCOM, marine electronics, GMDSS, VDR SVDR, radio survey, maritime services, ship electronics, vessel safety, BCME NAVCOM, BCME marine, BCME services' as const;

export const SEO_CANONICAL_URL = ExternalUrls.Website as const;

export const SEO_OG = {
  title: 'BCME | BC Marine Electronics Inc. - NAVCOM Specialists',
  description: 'BCME - Canadian maritime NAVCOM specialists. Class-approved radio surveys, VDR/SVDR APT, GMDSS installation, satellite comms. 24/7 support.',
  image: AssetPaths.LogoBanner,
  imageAlt: 'BCME BC Marine Electronics Inc. Banner Logo',
  type: 'website',
  locale: 'en_CA',
} as const;

export const SEO_TWITTER = {
  card: 'summary_large_image',
  title: 'BCME | BC Marine Electronics Inc.',
  description: 'BCME - Canadian maritime NAVCOM specialists. 24/7 global support for vessels worldwide.',
} as const;

export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BCME',
  alternateName: 'BC Marine Electronics Inc.',
  description: 'BCME (BC Marine Electronics Inc.) - Canadian maritime technical service provider specializing in NAVCOM and marine electronic solutions for the global shipping industry.',
  url: ExternalUrls.Website,
  telephone: '+16479237444',
  email: 'service@img-bcme.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '409-232 6th Street',
    addressLocality: 'New Westminster',
    addressRegion: 'BC',
    postalCode: 'V3L 0K9',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '49.2057',
    longitude: '-122.9114',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [],
  brand: {
    '@type': 'Brand',
    name: 'BCME',
    alternateName: 'BC Marine Electronics',
  },
  serviceType: [
    'Radio Survey',
    'NAVCOM Equipment Supply',
    'VDR APT',
    'GMDSS Maintenance',
    'Bridge Equipment Repair',
    'Gyrocompass Service',
    'Satellite Communication',
    'Newbuilding Supervision',
  ],
  knowsAbout: [
    'BCME',
    'BC Marine Electronics',
    'NAVCOM',
    'GMDSS',
    'VDR',
    'SVDR',
    'Marine Electronics',
    'Radio Survey',
  ],
} as const;
