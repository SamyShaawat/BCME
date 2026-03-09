import Button from '@ui/Button';
import { scrollToSection } from '@utils/scroll.utils';
import { SectionId } from '@enums/section.enum';

export default function NavCTAButton(): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    scrollToSection(SectionId.Contact);
  };

  return (
    <div className="hidden md:flex items-center gap-4">
      <Button
        id="navbar-cta-btn"
        href={`#${SectionId.Contact}`}
        onClick={handleClick}
        size="md"
        aria-label="Contact BC Marine Electronics"
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Get in Touch
      </Button>
    </div>
  );
}
