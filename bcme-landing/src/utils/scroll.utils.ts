import { SectionId } from '@enums/section.enum';
import { NAV_LINKS } from '@constants/navigation.constants';

/**
 * Smoothly scrolls to the element with the given section ID.
 */
export function scrollToSection(sectionId: SectionId): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  window.history.pushState(null, '', window.location.pathname);
}

/**
 * Resolves the currently visible section based on scroll position.
 */
export function resolveActiveSection(scrollY: number): SectionId {
  const sectionIds = NAV_LINKS.map((link) => link.sectionId);
  let active: SectionId = SectionId.Home;

  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (element && scrollY >= element.offsetTop - 120) {
      active = id;
    }
  }

  return active;
}
