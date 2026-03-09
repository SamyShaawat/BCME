import type { SectionId } from '@enums/section.enum';

/**
 * Represents a single navigation link item.
 */
export interface NavLink {
  readonly label: string;
  readonly href: `#${SectionId}`;
  readonly sectionId: SectionId;
}
