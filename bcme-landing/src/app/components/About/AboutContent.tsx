import { COMPANY_NAME, COMPANY_ADDRESS } from '@constants/company.constants';
import Badge from '@ui/Badge';
import { JSX } from 'react';

export default function AboutContent(): JSX.Element {
  return (
    <div className="order-1 lg:order-2">
      <Badge variant="crimson">Who We Are</Badge>
      <h2 className="section-title mt-6 mb-6">A Trusted Name in <span className="text-crimson-400">Maritime</span> Electronics</h2>
      <div className="divider-line mb-8" />
      <div className="space-y-5 text-navy-200 leading-relaxed">
        <p><strong className="text-white">{COMPANY_NAME}</strong> is a Canadian maritime technical service provider specializing in <span className="text-gold-400 font-medium">NAVCOM and marine electronic solutions</span> for the global shipping industry.</p>
        <p>We deliver class-compliant, reliable, and efficient services with a strong commitment to vessel safety, regulatory compliance, and operational performance.</p>
        <p>Our approach is straightforward — to deliver dependable marine electronic services with precision, transparency, and accountability.</p>
      </div>
      <div className="mt-8 p-5 glass-card border-l-2 border-crimson-500">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-crimson-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <address className="not-italic">
            <div className="text-white font-semibold mb-1">Head Office</div>
            <div className="text-navy-300 text-sm leading-relaxed">{COMPANY_ADDRESS.street}<br />{COMPANY_ADDRESS.city}, {COMPANY_ADDRESS.province} {COMPANY_ADDRESS.postalCode}<br />{COMPANY_ADDRESS.country} {COMPANY_ADDRESS.countryFlag}</div>
          </address>
        </div>
      </div>
    </div>
  );
}
