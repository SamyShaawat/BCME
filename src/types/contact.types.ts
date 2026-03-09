import type { JSX } from 'react';
import type { ContactType } from '@enums/contact.enum';

/**
 * Represents a single contact information card.
 */
export interface ContactItem {
  readonly type: ContactType;
  readonly icon: JSX.Element;
  readonly label: string;
  readonly lines: readonly string[];
  readonly href: string | null;
  readonly linkLabel: string | null;
  readonly isExternal: boolean;
}

/**
 * Represents a named email address entry used in the Footer.
 */
export interface EmailEntry {
  readonly label: string;
  readonly address: string;
}

/**
 * Represents a quick navigation link in the Footer.
 */
export interface FooterNavItem {
  readonly label: string;
  readonly sectionId: string;
}

/**
 * Form data shape for the contact form.
 */
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}
