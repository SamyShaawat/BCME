import { ASSETS, COMPANY_NAME } from '@constants/company.constants';
import { CORE_VALUES } from '@constants/company-values.constants';
import ValueBadge from '@components/About/ValueBadge';
import { JSX } from 'react';

export default function AboutVisual(): JSX.Element {
  return (
    <div className="relative order-2 lg:order-1 w-full px-2 sm:px-0">
      <div className="absolute -top-2 -left-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] rounded-2xl bg-gradient-to-br from-crimson-600/15 via-navy-700/10 to-transparent border border-white/10 hidden lg:block" />
      <div className="relative glass-card p-4 sm:p-6 lg:p-8 w-full">
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <img src={ASSETS.logoBanner} alt={`${COMPANY_NAME} Banner Logo`} className="w-full h-auto max-h-[150px] sm:max-h-[200px] lg:max-h-[250px] object-contain rounded-lg sm:rounded-xl" loading="lazy" />
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4 sm:mb-6 lg:mb-8" />
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {CORE_VALUES.map((value) => (<ValueBadge key={value.id} value={value} />))}
        </div>
      </div>
    </div>
  );
}
