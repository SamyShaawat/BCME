import type { Service } from '@app-types/service.types';
import { JSX } from 'react';

interface ServiceCardProps { readonly service: Service; readonly index: number; }

export default function ServiceCard({ service, index }: ServiceCardProps): JSX.Element {
  return (
    <article 
      id={`service-${service.id}`} 
      className="group relative glass-card-hover p-5 sm:p-6 cursor-default transition-all duration-500 hover:scale-[1.02] ${service.glowClass}" 
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-crimson-600/0 via-crimson-600/0 to-crimson-600/0 group-hover:from-crimson-600/5 group-hover:via-crimson-600/10 group-hover:to-crimson-600/5 rounded-2xl transition-all duration-500" />
      
      {/* Icon with enhanced hover effect */}
      <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.gradientClasses} flex items-center justify-center text-white mb-4 sm:mb-5 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}>
        <div className="w-6 h-6 sm:w-8 sm:h-8">{service.icon}</div>
      </div>

      {/* Category tag */}
      <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-wide text-crimson-300 uppercase mb-2 sm:mb-3 bg-crimson-600/20 px-2 py-1 rounded-full">
        {service.category}
      </span>

      {/* Title */}
      <h3 className="text-white font-display font-semibold text-base sm:text-lg leading-snug mb-2 sm:mb-3 group-hover:text-crimson-200 transition-colors duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-navy-300 text-xs sm:text-sm leading-relaxed group-hover:text-navy-200 transition-colors duration-300">
        {service.description}
      </p>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-crimson-500 via-crimson-400 to-transparent group-hover:w-full transition-all duration-700 rounded-b-2xl" />
    </article>
  );
}
