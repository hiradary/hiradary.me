import { ArrowUpRight, Mail } from 'lucide-react';
import Image from 'next/image';

import { featuredTechnologies, siteConfig } from '@/data/site';

import { SocialLinks } from './social-links';
import { TechnologyChip } from './technology-chip';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <Image
        className="hero-avatar"
        src={siteConfig.avatar}
        alt="Portrait of Hirad Arshadi"
        width={112}
        height={112}
        priority
      />
      <div className="hero-copy">
        <h1 id="hero-heading">
          Hi, I&apos;m {siteConfig.shortName}{' '}
          <span>— {siteConfig.title}.</span>
        </h1>
        <div className="hero-description">
          <p>
            I build product-focused web and mobile applications with a focus on
            polished interfaces, capable platforms, and reliable infrastructure.
          </p>
          <div className="hero-technologies" aria-label="Core technologies">
            {featuredTechnologies.map((technology) => (
              <TechnologyChip key={technology.name} technology={technology} />
            ))}
          </div>
        </div>
      </div>
      <div className="hero-actions">
        {siteConfig.resumeUrl ? (
          <a className="button button-secondary" href={siteConfig.resumeUrl}>
            Résumé
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        ) : null}
        <a className="button button-primary" href={`mailto:${siteConfig.email}`}>
          <Mail size={17} aria-hidden="true" />
          Get in touch
        </a>
      </div>
      <SocialLinks className="hero-socials" />
    </section>
  );
}
