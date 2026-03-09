/**
 * Company-wide static information for BC Marine Electronics Inc.
 */
import { AssetPaths, ExternalUrls } from '@enums/routes.enum';

export const COMPANY_NAME = 'BC Marine Electronics Inc.' as const;
export const COMPANY_SHORT_NAME = 'BCME' as const;
export const COMPANY_TAGLINE = 'Maritime NAVCOM Specialists' as const;

export const COMPANY_VALUE_PROPS = [
  'Professionalism',
  'Integrity',
  'Accountability',
  'Technical Excellence',
] as const;

export const COMPANY_ADDRESS = {
  street: '409–232 6th Street',
  city: 'New Westminster',
  province: 'BC',
  postalCode: 'V3L 0K9',
  country: 'Canada',
  countryFlag: '🇨🇦',
  full: '409–232 6th Street\nNew Westminster, BC V3L 0K9\nCanada',
  googleMapsUrl: ExternalUrls.GoogleMaps,
} as const;

export const COMPANY_PHONE = {
  display: '+1 (647) 923-7444',
  tel: 'tel:+16479237444',
} as const;

export const COMPANY_EMAILS = {
  management: 'md@img-bcme.com',
  service: 'service@img-bcme.com',
  sales: 'sales@img-bcme.com',
} as const;

export const COMPANY_AVAILABILITY = '24/7 Support Across All Time Zones' as const;

export const ASSETS = {
  logoShield: AssetPaths.LogoShield,
  logoBanner: AssetPaths.LogoBanner,
} as const;

export const HERO_STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '24/7', label: 'Global Reach' },
  { value: '500+', label: 'Fleet Served' },
] as const;
