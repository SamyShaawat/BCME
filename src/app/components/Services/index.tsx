import { SectionId } from '@enums/section.enum';
import { SERVICES } from '@constants/services.constants';
import SectionHeader from '@ui/SectionHeader';
import ServiceCard from '@components/Services/ServiceCard';

export default function Services(): JSX.Element {
  return (
    <section id={SectionId.Services} className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#0b1635] to-navy-950" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader badge="Our Services & Capabilities" title={<>Comprehensive <span className="text-crimson-400">Maritime</span> Solutions</>} subtitle="From routine surveys to complex retrofit projects, we deliver the full spectrum of marine electronics services with precision and reliability." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (<ServiceCard key={service.id} service={service} index={i} />))}
        </div>
      </div>
    </section>
  );
}
