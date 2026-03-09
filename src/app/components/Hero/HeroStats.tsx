import { HERO_STATS } from '@constants/company.constants';

export default function HeroStats(): JSX.Element {
  return (
    <div className="grid grid-cols-3 gap-4 mt-12 pt-10 border-t border-white/10">
      {HERO_STATS.map((stat) => (
        <div key={stat.label} className="text-center lg:text-left">
          <div className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-br from-crimson-400 via-crimson-500 to-crimson-600 bg-clip-text text-transparent drop-shadow-lg">
            {stat.value}
          </div>
          <div className="text-navy-300 text-sm sm:text-base mt-2 font-medium tracking-wide">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
