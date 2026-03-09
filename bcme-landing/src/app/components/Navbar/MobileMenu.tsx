import { NAV_LINKS } from '@constants/navigation.constants';
import { scrollToSection } from '@utils/scroll.utils';
import { SectionId } from '@enums/section.enum';
import Button from '@ui/Button';

interface MobileMenuProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps): JSX.Element {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId): void => {
    e.preventDefault();
    onClose();
    scrollToSection(sectionId);
  };

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    onClose();
    scrollToSection(SectionId.Contact);
  };

  return (
    <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
      <div className="pb-4 pt-2 space-y-1 border-t border-white/10 mt-2">
        {NAV_LINKS.map((link) => (
          <a
            key={link.sectionId}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.sectionId)}
            className="block px-4 py-3 text-navy-200 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm font-medium"
          >
            {link.label}
          </a>
        ))}
        <div className="pt-2 px-4">
          <Button id="mobile-cta-btn" href={`#${SectionId.Contact}`} onClick={handleCTAClick} size="md" fullWidth>
            Get in Touch
          </Button>
        </div>
      </div>
    </div>
  );
}
