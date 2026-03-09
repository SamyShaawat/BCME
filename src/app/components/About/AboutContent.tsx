import { COMPANY_NAME, COMPANY_ADDRESS } from '@constants/company.constants';
import Badge from '@ui/Badge';
import { JSX } from 'react';

export default function AboutContent(): JSX.Element {
  return (
    <div className="order-1 lg:order-2 w-full px-2 sm:px-0">
      <div className="w-full overflow-hidden">
        <Badge variant="crimson">Who We Are</Badge>
      </div>
      <h2 className="section-title mt-4 sm:mt-6 mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl leading-tight break-words">
        A Trusted Name in <span className="text-crimson-400">Maritime</span> Electronics
      </h2>
      <div className="divider-line mb-6 sm:mb-8" />
      <div className="space-y-4 sm:space-y-5 text-navy-200 leading-relaxed text-sm sm:text-base">
        <p className="break-words hyphens-auto">
          <strong className="text-white break-words">{COMPANY_NAME}</strong> is a Canadian maritime technical service provider specializing in <span className="text-gold-400 font-medium break-words">NAVCOM and marine electronic solutions</span> for the global shipping industry.
        </p>
        <p className="break-words hyphens-auto">
          We deliver class-compliant, reliable, and efficient services with a strong commitment to vessel safety, regulatory compliance, and operational performance.
        </p>
        <p className="break-words hyphens-auto">
          Our approach is straightforward — to deliver dependable marine electronic services with precision, transparency, and accountability.
        </p>
      </div>
      <div className="mt-6 sm:mt-8 p-4 sm:p-5 glass-card border-l-2 border-crimson-500 w-full">
        <div className="flex items-start gap-2 sm:gap-3">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-crimson-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <address className="not-italic w-full min-w-0">
            <div className="text-white font-semibold mb-1 text-sm sm:text-base">Head Office</div>
            <div className="text-navy-300 text-xs sm:text-sm leading-relaxed break-words">
              {COMPANY_ADDRESS.street}<br />
              {COMPANY_ADDRESS.city}, {COMPANY_ADDRESS.province} {COMPANY_ADDRESS.postalCode}<br />
              {COMPANY_ADDRESS.country} {COMPANY_ADDRESS.countryFlag}
            </div>
          </address>
        </div>
      </div>
    </div>
  );
}
