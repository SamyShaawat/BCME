import { useState } from 'react';
import { useActiveSection } from '@hooks/useActiveSection';
import NavLogo from '@components/Navbar/NavLogo';
import NavLinks from '@components/Navbar/NavLinks';
import NavCTAButton from '@components/Navbar/NavCTAButton';
import MobileMenu from '@components/Navbar/MobileMenu';

export default function Navbar(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, activeSection] = useActiveSection();

  const toggleMobile = (): void => setMobileOpen((prev) => !prev);
  const closeMobile = (): void => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-xl shadow-2xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-24 sm:h-28 py-3">
          <NavLogo />
          <NavLinks activeSection={activeSection} />
          <NavCTAButton />
          <button
            id="mobile-menu-toggle"
            onClick={toggleMobile}
            className="md:hidden p-2 rounded-lg text-navy-200 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between" aria-hidden="true">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
        <div id="mobile-menu">
          <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
        </div>
      </nav>
    </header>
  );
}
