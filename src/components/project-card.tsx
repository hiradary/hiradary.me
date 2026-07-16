import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

import type { Project } from '@/types/content';

import { TechnologyIcon } from './technology-icon';
import { Tooltip } from './tooltip';

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
        <Link
          className="project-media-overlay"
          href={
            project.caseStudySlug
              ? `/projects/${project.caseStudySlug}`
              : project.links[0].href
          }
          target={project.caseStudySlug ? undefined : '_blank'}
          rel={project.caseStudySlug ? undefined : 'noreferrer noopener'}
        >
          {project.caseStudySlug ? 'View details' : 'Visit project'}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="project-body">
        <div className="project-title-row">
          {project.caseStudySlug ? (
            <Link href={`/projects/${project.caseStudySlug}`}>
              <h3>{project.title}</h3>
            </Link>
          ) : (
            <a
              href={project.links[0].href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <h3>{project.title}</h3>
            </a>
          )}
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
        <div className="project-stack">
          <h4>Technologies</h4>
          <div className="project-technologies" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <Tooltip key={technology.name} content={technology.name}>
                <button
                  className="project-technology"
                  type="button"
                  aria-label={technology.name}
                >
                  <TechnologyIcon icon={technology.icon} />
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="project-footer">
          <span
            className={
              project.isWorking
                ? 'project-status is-working'
                : 'project-status is-building'
            }
          >
            <span aria-hidden="true" />
            {project.status}
          </span>
          {project.caseStudySlug ? (
            <Link
              className="text-link"
              href={`/projects/${project.caseStudySlug}`}
            >
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
