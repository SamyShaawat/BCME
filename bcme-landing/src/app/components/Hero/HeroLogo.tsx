import { ASSETS, COMPANY_NAME } from '@constants/company.constants';

export default function HeroLogo(): JSX.Element {
  const RING_DOTS = [0, 90, 180, 270] as const;

  return (
    <div className="flex items-center justify-center relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-gradient-to-r from-navy-700/30 to-crimson-700/20 blur-2xl animate-[pulse_3s_ease-in-out_infinite]" />
      </div>
      <div className="absolute w-[26rem] h-[26rem] sm:w-[34rem] sm:h-[34rem] rounded-full border border-white/10" style={{ animation: 'spin 20s linear infinite' }} aria-hidden="true">
        {RING_DOTS.map((deg) => (
          <div key={deg} className="absolute w-3 h-3 bg-crimson-500 rounded-full" style={{ top: '50%', left: '50%', transform: `rotate(${deg}deg) translateY(-200px) rotate(-${deg}deg) translate(-50%, -50%)` }} />
        ))}
      </div>
      <div className="relative z-10 p-6 rounded-full glass-card shadow-[0_8px_32px_rgba(0,0,0,0.3)] animate-[float_6s_ease-in-out_infinite]">
        <img src={ASSETS.logoShield} alt={`${COMPANY_NAME} Shield Logo`} className="w-60 h-60 sm:w-80 sm:h-80 object-contain drop-shadow-2xl rounded-full" loading="eager" />
      </div>
      <div className="absolute inset-0" style={{ zIndex: 50 }} aria-hidden="true">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/80 rounded-full animate-[float_4s_ease-in-out_infinite] shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        <div className="absolute top-20 right-16 w-2.5 h-2.5 bg-crimson-400/90 rounded-full animate-[float_5s_ease-in-out_infinite] [animation-delay:0.5s] shadow-[0_0_12px_rgba(220,38,38,0.6)]" />
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-3 h-3 bg-white/70 rounded-full animate-[float_6s_ease-in-out_infinite] [animation-delay:1s] shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-crimson-300/90 rounded-full animate-[float_5s_ease-in-out_infinite] [animation-delay:1.5s] shadow-[0_0_12px_rgba(220,38,38,0.4)]" />
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-white/60 rounded-full animate-[float_6s_ease-in-out_infinite] [animation-delay:1s] shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-crimson-400/80 rounded-full animate-[float_4s_ease-in-out_infinite] [animation-delay:0.3s] shadow-[0_0_12px_rgba(220,38,38,0.5)]" />
      </div>
    </div>
  );
}
