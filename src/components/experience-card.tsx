'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import type { Experience } from '@/types/content';

import { TechnologyChip } from './technology-chip';

export function ExperienceCard({
  experience,
  expandable = false,
}: {
  experience: Experience;
  expandable?: boolean;
}) {
  const [expanded, setExpanded] = useState(!expandable);
  const detailsId = `experience-${experience.company
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <article className={`experience-entry${expanded ? ' is-expanded' : ''}`}>
      <div className="experience-summary">
        <div className="experience-primary">
          <div className="experience-company-line">
            {experience.website ? (
              <a
                href={experience.website}
                target="_blank"
                rel="noreferrer noopener"
              >
                <h3>{experience.company}</h3>
              </a>
            ) : (
              <h3>{experience.company}</h3>
            )}
            {experience.current ? (
              <span className="status-badge">
                <span aria-hidden="true" /> Working
              </span>
            ) : null}
            {expandable ? (
              <button
                className="experience-toggle"
                type="button"
                aria-label={expanded ? 'Collapse details' : 'Expand details'}
                aria-expanded={expanded}
                aria-controls={detailsId}
                onClick={() => setExpanded((value) => !value)}
              >
                <ChevronDown size={13} aria-hidden="true" />
              </button>
            ) : null}
          </div>
          <p className="experience-role">{experience.role}</p>
        </div>
        <div className="experience-meta">
          <p>
            <span className="meta-full">{experience.dateRange.full}</span>
            <span className="meta-compact">{experience.dateRange.compact}</span>
          </p>
          <p>
            <span className="meta-full">{experience.location.full}</span>
            <span className="meta-compact">{experience.location.compact}</span>
          </p>
        </div>
      </div>

      <div
        className="experience-details"
        id={detailsId}
        aria-hidden={!expanded}
      >
        <div className="experience-details-inner">
          <div className="experience-stack">
            <h4>Technologies &amp; Tools</h4>
            <div className="experience-technologies">
              {experience.technologies.map((technology) => (
                <TechnologyChip
                  key={technology.name}
                  technology={technology}
                  interactive={expanded}
                />
              ))}
            </div>
          </div>
          <div className="experience-work">
            <h4>What I&apos;ve done</h4>
            <ul className="experience-points">
              {experience.description.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
