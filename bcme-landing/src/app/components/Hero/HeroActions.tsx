import Button from '@ui/Button';
import { scrollToSection } from '@utils/scroll.utils';
import { SectionId } from '@enums/section.enum';

export default function HeroActions(): JSX.Element {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:items-start lg:justify-start">
      <Button id="hero-services-btn" href={`#${SectionId.Services}`} onClick={(e) => { e.preventDefault(); scrollToSection(SectionId.Services); }} variant="primary" size="lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        Our Services
      </Button>
      <Button id="hero-contact-btn" href={`#${SectionId.Contact}`} onClick={(e) => { e.preventDefault(); scrollToSection(SectionId.Contact); }} variant="outline" size="lg">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
        24/7 Support
      </Button>
    </div>
  );
}
