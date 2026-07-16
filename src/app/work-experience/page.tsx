import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { ExperienceCard } from '@/components/experience-card';
import { Reveal } from '@/components/reveal';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Work experience',
  description:
    'Hirad Arshadi’s professional experience across product engineering, developer platforms, web, and mobile applications.',
  alternates: { canonical: '/work-experience' },
};

export default function WorkExperiencePage() {
  return (
    <main id="main-content" className="page-content">
      <Container className="page-shell">
        <header className="page-header">
          <h1>Work Experience</h1>
          <p>My work experiences across different companies and roles.</p>
        </header>
        <div className="experience-list experience-list-full">
          {experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={Math.min(index, 4) * 50}>
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>
        <Reveal>
          <section className="education" aria-labelledby="education-heading">
            <h2 id="education-heading">Douglas College</h2>
            <div className="education-meta">
              <p>Diploma, Computing Studies and Information Systems</p>
              <p>May 2022 — April 2024 · New Westminster, BC</p>
            </div>
          </section>
        </Reveal>
      </Container>
    </main>
  );
}
