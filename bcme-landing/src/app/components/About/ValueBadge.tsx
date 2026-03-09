import type { CoreValue } from '@app-types/company.types';
import { JSX } from 'react';

interface ValueBadgeProps { readonly value: CoreValue; }

export default function ValueBadge({ value }: ValueBadgeProps): JSX.Element {
  return (
    <div className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/8 hover:border-white/20 transition-all duration-200">
      <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${value.gradientClasses} flex items-center justify-center text-white`}>{value.icon}</div>
      <span className="text-sm font-medium text-navy-100">{value.label}</span>
    </div>
  );
}
