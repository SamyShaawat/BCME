import { ASSETS, COMPANY_NAME } from '@constants/company.constants';
import { scrollToSection } from '@utils/scroll.utils';
import { SectionId } from '@enums/section.enum';

export default function NavLogo(): JSX.Element {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    scrollToSection(SectionId.Home);
  };

  return (
    <a
      href={`#${SectionId.Home}`}
      onClick={handleClick}
      className="flex items-center gap-4 group mt-2"
      aria-label={COMPANY_NAME}
    >
      <img
        src={ASSETS.logoShield}
        alt="BC Marine Electronics Shield Logo"
        className="h-16 sm:h-20 w-auto rounded-full border-2 border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:border-crimson-400/50"
      />
      <div className="hidden sm:block mt-1">
        <div className="font-display font-bold text-white text-[22px] sm:text-[28px] leading-none tracking-tight">
          BC Marine
        </div>
        <div className="font-display text-crimson-400 text-[13px] tracking-[0.2em] uppercase leading-tight mt-2">
          Electronics Inc.
        </div>
      </div>
    </a>
  );
}
