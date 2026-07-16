import type { Metadata } from 'next';

import { Container } from '@/components/container';
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected open-source work and independent product launches by Hirad Arshadi.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <Container className="page-shell">
        <header className="page-header">
          <p className="eyebrow">Selected work</p>
          <h1>Projects</h1>
          <p>
            Open-source infrastructure and small products built to make everyday
            work feel simpler.
          </p>
        </header>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
