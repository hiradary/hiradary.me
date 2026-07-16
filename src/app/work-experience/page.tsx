import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { ExperienceCard } from '@/components/experience-card';
import { experiences } from '@/data/experience';

export const metadata: Metadata = {
  title: 'Work experience',
  description:
    'Hirad Arshadi’s professional experience across product engineering, developer platforms, web, and mobile applications.',
  alternates: { canonical: '/work-experience' },
};

export default function WorkExperiencePage() {
  return (
    <main id="main-content">
      <Container className="page-shell">
        <header className="page-header">
          <p className="eyebrow">2018 — Present</p>
          <h1>Work experience</h1>
          <p>
            Eight years of building product interfaces, developer platforms,
            generated-app systems, and web and mobile applications.
          </p>
        </header>
        <div className="experience-list experience-list-full">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.company} experience={experience} />
          ))}
        </div>
        <section className="education" aria-labelledby="education-heading">
          <p className="eyebrow">Education</p>
          <h2 id="education-heading">Douglas College</h2>
          <div className="education-meta">
            <p>Diploma, Computing Studies and Information Systems</p>
            <p>May 2022 — April 2024 · New Westminster, BC</p>
          </div>
        </section>
      </Container>
    </main>
  );
}
