import Button from '@ui/Button';
import { scrollToSection } from '@utils/scroll.utils';
import { SectionId } from '@enums/section.enum';

export default function PartnerCTA(): JSX.Element {
  return (
    <div className="mt-20 glass-card p-8 sm:p-12 text-center">
      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">Ready to Partner with the Best?</h3>
      <p className="text-navy-300 mb-8 max-w-xl mx-auto">Contact our team today to discuss your vessel's electronic needs. We're available 24/7 across all time zones.</p>
      <Button id="whyus-cta-btn" href={`#${SectionId.Contact}`} onClick={(e) => { e.preventDefault(); scrollToSection(SectionId.Contact); }} size="lg">
        <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
        Get in Touch Now
      </Button>
    </div>
  );
}
