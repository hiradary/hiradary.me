import { aboutSkills, siteConfig } from '@/data/site';

import { SectionHeading } from './section-heading';

export function About() {
  return (
    <section className="section" aria-labelledby="about-heading">
      <SectionHeading eyebrow="About">Me</SectionHeading>
      <div className="about-grid">
        <div>
          <h3 id="about-heading">Product engineering from UI to infrastructure.</h3>
          <p>
            I&apos;m a full-stack software engineer with 8+ years of experience
            building web and mobile products, generated-app systems, developer
            platforms, and backend APIs. I care about clear product thinking,
            polished interaction design, and systems that stay understandable as
            they grow.
          </p>
          <p className="about-location">Based in {siteConfig.location}.</p>
        </div>
        <div className="skill-cloud" aria-label="Skills">
          {aboutSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
