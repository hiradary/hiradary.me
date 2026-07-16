import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Link } from 'next-view-transitions';

import { Container } from '@/components/container';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected open-source work and independent product launches by Hirad Arshadi.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <main id="main-content" className="page-content">
      <Container className="page-shell">
        <header className="page-header">
          <h1>Projects</h1>
          <p>My projects and work across different technologies and domains.</p>
        </header>
        <div className="project-list">
          {projects.map((project) => {
            const href = project.caseStudySlug
              ? `/projects/${project.caseStudySlug}`
              : project.links[0].href;
            const external = !project.caseStudySlug;
            const content = (
              <>
                <span>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </span>
                <ArrowUpRight
                  className="project-list-arrow"
                  size={16}
                  aria-hidden="true"
                />
              </>
            );

            return (
              <article key={project.slug}>
                {external ? (
                  <a href={href} target="_blank" rel="noreferrer noopener">
                    {content}
                  </a>
                ) : (
                  <Link href={href}>{content}</Link>
                )}
              </article>
            );
          })}
        </div>
      </Container>
    </main>
  );
}
