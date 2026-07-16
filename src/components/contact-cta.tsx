import { ArrowUpRight, Mail } from 'lucide-react';

import { siteConfig } from '@/data/site';

export function ContactCta() {
  return (
    <section className="contact-cta" aria-labelledby="contact-heading">
      <div>
        <p className="eyebrow">Let&apos;s work together</p>
        <h2 id="contact-heading">Have something thoughtful to build?</h2>
        <p>
          I&apos;m always interested in ambitious products, careful engineering,
          and good conversations.
        </p>
      </div>
      <a className="button button-primary" href={`mailto:${siteConfig.email}`}>
        <Mail size={17} aria-hidden="true" />
        {siteConfig.email}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </section>
  );
}
