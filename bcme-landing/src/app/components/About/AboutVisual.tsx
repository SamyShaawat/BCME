import { ASSETS, COMPANY_NAME } from '@constants/company.constants';
import { CORE_VALUES } from '@constants/company-values.constants';
import ValueBadge from '@components/About/ValueBadge';
import { JSX } from 'react';

export default function AboutVisual(): JSX.Element {
  return (
    <div className="relative order-2 lg:order-1">
      <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-gradient-to-br from-crimson-600/15 via-navy-700/10 to-transparent border border-white/10" />
      <div className="relative glass-card p-8 sm:p-10">
        <div className="mb-8">
          <img src={ASSETS.logoBanner} alt={`${COMPANY_NAME} Banner Logo`} className="w-full object-contain rounded-xl" loading="lazy" />
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
        <div className="grid grid-cols-2 gap-3">
          {CORE_VALUES.map((value) => (<ValueBadge key={value.id} value={value} />))}
        </div>
      </div>
    </div>
  );
}
