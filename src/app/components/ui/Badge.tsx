import type { ReactNode } from 'react';

interface BadgeProps {
  readonly children: ReactNode;
  readonly variant?: 'crimson' | 'gold';
}

export default function Badge({
  children,
  variant = 'crimson',
}: BadgeProps): JSX.Element {
  const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
    crimson: 'bg-crimson-600/10 border-crimson-500/20 text-crimson-300',
    gold: 'bg-gold-400/10 border-gold-400/20 text-gold-400',
  };

  return (
    <div
      className={`inline-flex items-center gap-2 border rounded-full px-5 py-2 ${variantClasses[variant]}`}
    >
      <span className="text-[13px] font-semibold tracking-wide uppercase">{children}</span>
    </div>
  );
}
