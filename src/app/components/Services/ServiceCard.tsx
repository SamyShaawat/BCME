import type { Service } from '@app-types/service.types';

interface ServiceCardProps { readonly service: Service; readonly index: number; }

export default function ServiceCard({ service, index }: ServiceCardProps): JSX.Element {
  return (
    <article id={`service-${service.id}`} className={`glass-card-hover p-6 cursor-default ${service.glowClass}`} style={{ animationDelay: `${index * 80}ms` }}>
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradientClasses} flex items-center justify-center text-white mb-5 shadow-lg`}>{service.icon}</div>
      <span className="inline-block text-xs font-semibold tracking-wide text-navy-400 uppercase mb-3">{service.category}</span>
      <h3 className="text-white font-display font-semibold text-lg leading-snug mb-3">{service.title}</h3>
      <p className="text-navy-300 text-sm leading-relaxed">{service.description}</p>
    </article>
  );
}
