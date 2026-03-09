import { SectionId } from '@enums/section.enum';
import AboutVisual from '@components/About/AboutVisual';
import AboutContent from '@components/About/AboutContent';
import { JSX } from 'react';

export default function About(): JSX.Element {
  return (
    <section id={SectionId.About} className="relative py-24 lg:py-32 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AboutVisual />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
