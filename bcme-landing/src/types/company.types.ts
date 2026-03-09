import type { JSX } from 'react';

/**
 * Represents a single operational strength item displayed in "Why Us".
 */
export interface Strength {
  readonly id: string;
  readonly icon: JSX.Element;
  readonly title: string;
  readonly description: string;
}

/**
 * Represents a company core value (Professionalism, Integrity, etc.).
 */
export interface CoreValue {
  readonly id: string;
  readonly icon: JSX.Element;
  readonly label: string;
  readonly gradientClasses: string;
}

/**
 * Represents a stat item shown in the Hero section.
 */
export interface HeroStat {
  readonly value: string;
  readonly label: string;
}
