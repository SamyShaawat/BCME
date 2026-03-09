import { SectionId } from '@enums/section.enum';
import { scrollToSection } from '@utils/scroll.utils';
import Badge from '@ui/Badge';
import ContactInfoPanel from '@components/Contact/ContactInfoPanel';

export default function Contact(): JSX.Element {
  return (
    <section id={SectionId.Contact} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#0a1628] to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-crimson-700/15 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-blue-800/15 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite] [animation-delay:1s]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-crimson-600/20 via-crimson-600/10 to-crimson-600/20 border border-crimson-500/40 rounded-full px-7 py-3 mb-8 shadow-[0_0_30px_rgba(220,38,38,0.3)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-crimson-500 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
            </span>
            <span className="text-crimson-200 text-sm font-bold tracking-[0.15em] uppercase">Contact Information</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Let's{' '}
            <span className="bg-gradient-to-r from-crimson-400 via-crimson-500 to-crimson-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
              Navigate
            </span>{' '}
            Together
          </h2>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-crimson-500 to-crimson-500/50" />
            <div className="w-2.5 h-2.5 bg-crimson-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(220,38,38,1)]" />
            <div className="w-2 h-2 bg-crimson-500 rounded-full animate-pulse [animation-delay:0.2s] shadow-[0_0_12px_rgba(220,38,38,0.9)]" />
            <div className="w-1.5 h-1.5 bg-crimson-600 rounded-full animate-pulse [animation-delay:0.4s] shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent via-crimson-500 to-crimson-500/50" />
          </div>
          <p className="text-navy-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Reach out to our expert team. We're ready to support your vessel's electronic needs{' '}
            <span className="inline-block bg-crimson-600/20 text-crimson-300 px-3 py-1 rounded-full font-semibold">anytime, anywhere</span>.
          </p>
        </div>
        <ContactInfoPanel />
      </div>
    </section>
  );
}
