import { aboutSkills, siteConfig } from '@/data/site';
import Image from 'next/image';

import { SectionHeading } from './section-heading';
import { TechnologyIcon } from './technology-icon';
import { Tooltip } from './tooltip';

export function About() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <SectionHeading eyebrow="About">Me</SectionHeading>
      <div className="about-grid">
        <Image
          className="about-image"
          src={siteConfig.avatar}
          alt="Portrait of Hirad Arshadi"
          width={240}
          height={240}
        />
        <div className="about-copy">
          <h3 id="about-heading">{siteConfig.name}</h3>
          <p>
            Full-Stack Software Engineer with 8+ years of experience building
            product-focused web and mobile applications, developer platforms,
            and backend/API infrastructure with TypeScript, React, and Node.js.
            Strong across generated-app systems, DSL/runtime development,
            polished product UI, authentication, billing, testing, and developer
            tooling.
          </p>
          <p className="about-location">Based in {siteConfig.location}.</p>
          <p className="about-skills-label">Skills</p>
          <div className="skill-cloud" aria-label="Skills">
            {aboutSkills.map((skill) => (
              <Tooltip key={skill.name} content={skill.name}>
                <button type="button" aria-label={skill.name}>
                  <TechnologyIcon icon={skill.icon} />
                </button>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
