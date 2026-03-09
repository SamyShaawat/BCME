import type { CoreValue } from '@app-types/company.types';
import { JSX } from 'react';

interface ValueBadgeProps { readonly value: CoreValue; }

export default function ValueBadge({ value }: ValueBadgeProps): JSX.Element {
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-white/5 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/8 hover:border-white/20 transition-all duration-200 min-w-0">
      <div className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br ${value.gradientClasses} flex items-center justify-center text-white`}>
        <div className="w-4 h-4 sm:w-5 sm:h-5">{value.icon}</div>
      </div>
      <span className="text-xs sm:text-sm font-medium text-navy-100 truncate">{value.label}</span>
    </div>
  );
}
