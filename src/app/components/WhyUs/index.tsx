import { SectionId } from '@enums/section.enum';
import { COMPANY_SHORT_NAME } from '@constants/company.constants';
import { STRENGTHS } from '@constants/company-values.constants';
import SectionHeader from '@ui/SectionHeader';
import StrengthCard from '@components/WhyUs/StrengthCard';
import PartnerCTA from '@components/WhyUs/PartnerCTA';

export default function WhyUs(): JSX.Element {
  return (
    <section id={SectionId.WhyUs} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1e47] via-navy-900 to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-white/[0.02] select-none pointer-events-none whitespace-nowrap" aria-hidden="true">{COMPANY_SHORT_NAME}</div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Our Operational Strength" badgeVariant="gold" title={<>Why Choose <span className="text-gradient-gold">BC Marine</span>?</>} subtitle="We combine technical expertise with operational excellence to be your most trusted partner in maritime electronics." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRENGTHS.map((strength, i) => (<StrengthCard key={strength.id} strength={strength} index={i} />))}
        </div>
        <PartnerCTA />
      </div>
    </section>
  );
}
