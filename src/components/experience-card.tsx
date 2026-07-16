import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

import type { Experience } from '@/types/content';

import { TechnologyChip } from './technology-chip';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="experience-card">
      <div className="experience-header">
        <div className="experience-identity">
          {experience.logo.kind === 'image' ? (
            <Image
              className="company-logo"
              src={experience.logo.src}
              alt={`${experience.company} logo`}
              width={48}
              height={48}
            />
          ) : (
            <span className="company-mark" aria-hidden="true">
              {experience.logo.text}
            </span>
          )}
          <div>
            <div className="experience-company-line">
              <h3>{experience.company}</h3>
              {experience.website ? (
                <a
                  className="quiet-link"
                  href={experience.website}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Visit ${experience.company}`}
                >
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
              {experience.current ? (
                <span className="status-badge">
                  <span aria-hidden="true" /> Working
                </span>
              ) : null}
            </div>
            <p className="experience-role">{experience.role}</p>
          </div>
        </div>
        <div className="experience-meta">
          <p>
            {experience.startDate} — {experience.endDate}
          </p>
          <p>{experience.location}</p>
        </div>
      </div>
      <div className="experience-stack">
        <h4>Technologies</h4>
        <div className="experience-technologies">
          {experience.technologies.map((technology) => (
            <TechnologyChip key={technology.name} technology={technology} />
          ))}
        </div>
      </div>
      <ul className="experience-points">
        {experience.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
