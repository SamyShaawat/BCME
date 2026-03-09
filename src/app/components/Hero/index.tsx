import { SectionId } from '@enums/section.enum';
import Badge from '@ui/Badge';
import HeroStats from '@components/Hero/HeroStats';
import HeroLogo from '@components/Hero/HeroLogo';
import HeroActions from '@components/Hero/HeroActions';

export default function Hero(): JSX.Element {
  return (
    <section id={SectionId.Home} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0a1628]" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-crimson-700/10 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-800/15 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite] [animation-delay:300ms]" />

      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 53.3C120 46.7 240 33.3 360 36.7C480 40 600 60 720 66.7C840 73.3 960 66.7 1080 56.7C1200 46.7 1320 33.3 1380 26.7L1440 20V120H0V60Z" fill="oklch(0.12 0.04 245)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-10">
              <Badge variant="crimson">
                <span className="w-2 h-2 bg-crimson-400 rounded-full animate-pulse mr-2" />
                Canadian Maritime Specialists
              </Badge>
            </div>
            <h1 className="section-title mb-8">
              <span className="block text-white">Navigating the</span>
              <span className="block text-gradient">Future of</span>
              <span className="block">Maritime Electronics</span>
            </h1>
            <p className="section-subtitle mb-10 max-w-xl mx-auto lg:mx-0">
              Class-compliant, reliable, and efficient NAVCOM solutions for the global shipping industry.
            </p>
            <HeroActions />
            <HeroStats />
          </div>
          <HeroLogo />
        </div>
      </div>
    </section>
  );
}
