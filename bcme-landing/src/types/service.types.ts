import type { ServiceCategory } from '@enums/service-category.enum';
import type { JSX } from 'react';

/**
 * Represents a single service offering of BC Marine Electronics.
 */
export interface Service {
  readonly id: string;
  readonly icon: JSX.Element;
  readonly title: string;
  readonly description: string;
  readonly category: ServiceCategory;
  readonly gradientClasses: string;
  readonly glowClass: string;
}
