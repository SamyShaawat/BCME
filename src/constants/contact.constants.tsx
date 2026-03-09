import { ContactType, ContactEmail } from '@enums/contact.enum';
import type { ContactItem, EmailEntry, FooterNavItem } from '@app-types/contact.types';
import { SectionId } from '@enums/section.enum';
import { COMPANY_ADDRESS, COMPANY_PHONE, COMPANY_EMAILS } from '@constants/company.constants';

export const CONTACT_ITEMS: readonly ContactItem[] = [
  {
    type: ContactType.Address,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    label: 'Head Office',
    lines: [COMPANY_ADDRESS.street, `${COMPANY_ADDRESS.city}, ${COMPANY_ADDRESS.province} ${COMPANY_ADDRESS.postalCode}`, `${COMPANY_ADDRESS.country} ${COMPANY_ADDRESS.countryFlag}`],
    href: COMPANY_ADDRESS.googleMapsUrl,
    linkLabel: 'View on Map',
    isExternal: true,
  },
  {
    type: ContactType.Phone,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>),
    label: 'Phone',
    lines: [COMPANY_PHONE.display],
    href: COMPANY_PHONE.tel,
    linkLabel: 'Call Now',
    isExternal: false,
  },
  {
    type: ContactType.Email,
    icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
    label: 'Email',
    lines: [`Management: ${COMPANY_EMAILS.management}`, `Service: ${COMPANY_EMAILS.service}`, `Sales: ${COMPANY_EMAILS.sales}`],
    href: `mailto:${ContactEmail.Service}`,
    linkLabel: 'Send Email',
    isExternal: false,
  },
] as const;

export const FOOTER_EMAILS: readonly EmailEntry[] = [
  { label: 'Management', address: COMPANY_EMAILS.management },
  { label: 'Service', address: COMPANY_EMAILS.service },
  { label: 'Sales', address: COMPANY_EMAILS.sales },
] as const;

export const FOOTER_NAV_ITEMS: readonly FooterNavItem[] = [
  { label: 'Home', sectionId: SectionId.Home },
  { label: 'About Us', sectionId: SectionId.About },
  { label: 'Our Services', sectionId: SectionId.Services },
  { label: 'Why Choose Us', sectionId: SectionId.WhyUs },
  { label: 'Contact', sectionId: SectionId.Contact },
] as const;
