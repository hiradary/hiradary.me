import { Plus } from 'lucide-react';
import Image from 'next/image';

import { siteConfig } from '@/data/site';

export function ContactCta() {
  return (
    <section className="contact-cta" aria-labelledby="contact-heading">
      <p id="contact-heading">Hey, you scrolled this far, let&apos;s talk.</p>
      <a className="contact-chip" href={`mailto:${siteConfig.email}`}>
        <span className="contact-chip-avatar">
          <Image src={siteConfig.avatar} alt="" width={20} height={20} />
        </span>
        <span className="contact-chip-reveal" aria-hidden="true">
          <Plus size={12} />
          <span>You</span>
        </span>
        <strong>Get in touch</strong>
      </a>
    </section>
  );
}
