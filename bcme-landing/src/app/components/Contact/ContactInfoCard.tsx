import type { ContactItem } from '@app-types/contact.types';
import { COMPANY_EMAILS } from '@constants/company.constants';
import { JSX } from 'react';

interface ContactInfoCardProps { readonly item: ContactItem; }

export default function ContactInfoCard({ item }: ContactInfoCardProps): JSX.Element {
  return (
    <div className="group relative">
      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md rounded-2xl p-6 border border-white/10 group-hover:border-crimson-500/30 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson-600/0 via-crimson-600/0 to-crimson-600/0 group-hover:from-crimson-600/5 group-hover:via-crimson-600/5 group-hover:to-crimson-600/10 transition-all duration-500" />
        <div className="relative flex items-start gap-5">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-crimson-600/20 to-crimson-700/10 border border-crimson-500/30 flex items-center justify-center text-crimson-400 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-500">
            {item.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs text-crimson-300 uppercase tracking-[0.15em] font-bold mb-2">{item.label}</div>
            {item.type === 'email' ? (
              <div className="space-y-2">
                <a href={`mailto:${COMPANY_EMAILS.management}`} className="flex items-center gap-2 text-white text-sm font-medium hover:text-crimson-300 transition-colors duration-200 group/link">
                  <svg className="w-4 h-4 flex-shrink-0 text-crimson-600 group-hover/link:text-crimson-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {COMPANY_EMAILS.management}
                </a>
                <a href={`mailto:${COMPANY_EMAILS.service}`} className="flex items-center gap-2 text-white text-sm font-medium hover:text-crimson-300 transition-colors duration-200 group/link">
                  <svg className="w-4 h-4 flex-shrink-0 text-crimson-600 group-hover/link:text-crimson-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {COMPANY_EMAILS.service}
                </a>
                <a href={`mailto:${COMPANY_EMAILS.sales}`} className="flex items-center gap-2 text-white text-sm font-medium hover:text-crimson-300 transition-colors duration-200 group/link">
                  <svg className="w-4 h-4 flex-shrink-0 text-crimson-600 group-hover/link:text-crimson-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  {COMPANY_EMAILS.sales}
                </a>
              </div>
            ) : (
              item.lines.map((line, index) => (<div key={index} className="text-white text-sm font-medium leading-relaxed">{line}</div>))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
