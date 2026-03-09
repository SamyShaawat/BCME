import { COMPANY_ADDRESS, COMPANY_PHONE } from '@constants/company.constants';
import { JSX } from 'react';

export default function FooterContactInfo(): JSX.Element {
  return (
    <div>
      <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
      <ul className="space-y-4">
        <li className="flex items-start gap-3 text-sm text-navy-400">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-crimson-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <address className="not-italic leading-relaxed">{COMPANY_ADDRESS.street}<br />{COMPANY_ADDRESS.city}, {COMPANY_ADDRESS.province} {COMPANY_ADDRESS.postalCode}<br />{COMPANY_ADDRESS.country}</address>
        </li>
        <li>
          <a href={COMPANY_PHONE.tel} className="flex items-center gap-3 text-sm text-navy-400 hover:text-white transition-colors duration-200">
            <svg className="w-4 h-4 flex-shrink-0 text-crimson-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            {COMPANY_PHONE.display}
          </a>
        </li>
        <li className="flex items-center gap-3 text-xs text-navy-500">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          24/7 Support Available
        </li>
      </ul>
    </div>
  );
}
