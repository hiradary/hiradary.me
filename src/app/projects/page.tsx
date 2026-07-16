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
          <h1>Projects</h1>
          <p>My projects and work across different technologies and domains.</p>
        </header>
        <hr className="page-separator" />
        <h2 className="list-heading">
          All Projects <span>({projects.length} projects)</span>
        </h2>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
