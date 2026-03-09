import { NAV_LINKS } from '@constants/navigation.constants';
import { scrollToSection } from '@utils/scroll.utils';
import { SectionId } from '@enums/section.enum';

interface NavLinksProps {
  readonly activeSection: SectionId;
}

export default function NavLinks({ activeSection }: NavLinksProps): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: SectionId): void => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <div className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => {
        const isActive = activeSection === link.sectionId;
        return (
          <a
            key={link.sectionId}
            href={link.href}
            onClick={(e) => handleClick(e, link.sectionId)}
            className={`nav-link py-1 ${isActive ? 'text-white [&::after]:w-full' : ''}`}
          >
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
