/**
 * SEO metadata constants — drives react-helmet-async tags.
 */
import { AssetPaths, ExternalUrls } from '@enums/routes.enum';

export const SEO_TITLE = 'BC Marine Electronics Inc. | NAVCOM & Marine Electronics – Canada' as const;

export const SEO_DESCRIPTION = 'BC Marine Electronics Inc. is a Canadian maritime technical service provider specializing in NAVCOM and marine electronic solutions. Class-approved radio surveys, VDR/SVDR APT, GMDSS, satellite communications, and more.' as const;

export const SEO_KEYWORDS = 'BC Marine Electronics, NAVCOM, marine electronics, GMDSS, VDR SVDR, radio survey, maritime services, Canada, New Westminster, ship electronics, vessel safety' as const;

export const SEO_CANONICAL_URL = ExternalUrls.Website as const;

export const SEO_OG = {
  title: 'BC Marine Electronics Inc. | NAVCOM Specialists',
  description: 'Canadian maritime technical service provider. Class-approved radio surveys, VDR/SVDR APT, GMDSS installation, satellite comms and more.',
  image: AssetPaths.LogoBanner,
  imageAlt: 'BC Marine Electronics Inc. Banner Logo',
  type: 'website',
  locale: 'en_CA',
} as const;

export const SEO_TWITTER = {
  card: 'summary_large_image',
  title: 'BC Marine Electronics Inc.',
  description: 'Canadian maritime NAVCOM specialists. 24/7 global support for vessels worldwide.',
} as const;

export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BC Marine Electronics Inc.',
  description: 'Canadian maritime technical service provider specializing in NAVCOM and marine electronic solutions for the global shipping industry.',
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
} as const;
