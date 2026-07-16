import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import type { Project } from '@/types/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 720px) 100vw, 50vw"
        />
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <div className="project-links">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title}: ${link.label}`}
                title={link.label}
              >
                {link.kind === 'github' ? (
                  <Github size={18} aria-hidden="true" />
                ) : (
                  <ArrowUpRight size={18} aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-technologies" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
        <div className="project-footer">
          <span className="project-status">{project.status}</span>
          {project.caseStudySlug ? (
            <Link className="text-link" href={`/projects/${project.caseStudySlug}`}>
              View details <ArrowRight size={15} aria-hidden="true" />
            </Link>
          ) : (
            <a
              className="text-link"
              href={project.links[0].href}
              target="_blank"
              rel="noreferrer noopener"
            >
              View launch <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
