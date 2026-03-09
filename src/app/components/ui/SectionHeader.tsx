import type { ReactNode } from 'react';
import Badge from '@ui/Badge';

interface SectionHeaderProps {
  readonly badge: string;
  readonly badgeVariant?: 'crimson' | 'gold';
  readonly title: ReactNode;
  readonly subtitle?: string;
  readonly centered?: boolean;
}

export default function SectionHeader({
  badge,
  badgeVariant = 'crimson',
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps): JSX.Element {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <Badge variant={badgeVariant}>{badge}</Badge>
      <h2 className={`section-title mt-6 mb-4 ${centered ? '' : 'text-left'}`}>
        {title}
      </h2>
      <div className={`divider-line ${centered ? 'mx-auto' : ''} mb-6`} />
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
