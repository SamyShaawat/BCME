/**
 * Navigation link configuration.
 */
import { SectionId } from '@enums/section.enum';
import type { NavLink } from '@app-types/navigation.types';

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: `#${SectionId.Home}`, sectionId: SectionId.Home },
  { label: 'About', href: `#${SectionId.About}`, sectionId: SectionId.About },
  { label: 'Services', href: `#${SectionId.Services}`, sectionId: SectionId.Services },
  { label: 'Why Us', href: `#${SectionId.WhyUs}`, sectionId: SectionId.WhyUs },
  { label: 'Contact', href: `#${SectionId.Contact}`, sectionId: SectionId.Contact },
] as const;
