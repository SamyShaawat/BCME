import type { ReactNode, MouseEventHandler } from 'react';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps {
  readonly children: ReactNode;
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly href?: string;
  readonly onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  readonly id?: string;
  readonly disabled?: boolean;
  readonly type?: 'button' | 'submit';
  readonly className?: string;
  readonly 'aria-label'?: string;
  readonly fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  id,
  disabled = false,
  type = 'button',
  className = '',
  'aria-label': ariaLabel,
  fullWidth = false,
}: ButtonProps): JSX.Element {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const sizeClass = `btn-${size}`;
  const widthClass = fullWidth ? 'w-full justify-center' : 'w-fit';
  const combinedClass = `${baseClass} ${sizeClass} ${widthClass} ${className}`.trim();

  if (href) {
    return (
      <a
        id={id}
        href={href}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        className={combinedClass}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={disabled}
      className={`${combinedClass} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
