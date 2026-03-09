import { FOOTER_NAV_ITEMS } from '@constants/contact.constants';
import { scrollToSection } from '@utils/scroll.utils';
import { SectionId } from '@enums/section.enum';
import { JSX } from 'react';

export default function FooterNavLinks(): JSX.Element {
  return (
    <div>
      <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Navigation</h4>
      <ul className="space-y-3">
        {FOOTER_NAV_ITEMS.map((item) => (
          <li key={item.sectionId}>
            <button onClick={() => scrollToSection(item.sectionId as SectionId)} className="text-navy-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2 group">
              <span className="w-1 h-1 bg-crimson-600 rounded-full group-hover:w-3 transition-all duration-200" />
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
