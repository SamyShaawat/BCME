import { useState, useEffect } from 'react';
import { SectionId } from '@enums/section.enum';
import { resolveActiveSection } from '@utils/scroll.utils';

/**
 * Custom hook: tracks scroll position and returns the currently active section.
 */
export function useActiveSection(): [boolean, SectionId] {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Home);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
      setActiveSection(resolveActiveSection(scrollY));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [scrolled, activeSection];
}
