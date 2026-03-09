import type { Strength } from '@app-types/company.types';

interface StrengthCardProps { readonly strength: Strength; readonly index: number; }

export default function StrengthCard({ strength, index }: StrengthCardProps): JSX.Element {
  return (
    <article id={`strength-${strength.id}`} className="group relative glass-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-crimson-500/30 cursor-default" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="relative w-16 h-16 mb-5">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 to-crimson-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-110" />
        <div className="relative w-full h-full flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:border-crimson-500/30 transition-all duration-300 text-crimson-400 group-hover:text-crimson-300">{strength.icon}</div>
      </div>
      <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-crimson-100 transition-colors duration-200">{strength.title}</h3>
      <p className="text-navy-300 text-sm leading-relaxed group-hover:text-navy-200 transition-colors duration-200">{strength.description}</p>
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-crimson-500 to-transparent group-hover:w-full transition-all duration-500 rounded-b-2xl" />
    </article>
  );
}
