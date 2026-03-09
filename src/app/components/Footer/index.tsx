import { COMPANY_NAME, COMPANY_VALUE_PROPS } from '@constants/company.constants';
import FooterBrand from '@components/Footer/FooterBrand';
import FooterNavLinks from '@components/Footer/FooterNavLinks';
import FooterContactInfo from '@components/Footer/FooterContactInfo';
import { JSX } from 'react';

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-[#060e22] border-t border-white/5 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <FooterBrand />
          <FooterNavLinks />
          <FooterContactInfo />
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-navy-600 text-xs text-center sm:text-left">© {year} {COMPANY_NAME}. All rights reserved.</p>
          <p className="text-navy-700 text-xs">{COMPANY_VALUE_PROPS.join(' · ')}</p>
        </div>
      </div>
    </footer>
  );
}
