import Link from 'next/link';

import { siteConfig } from '@/data/site';

import { Container } from './container';
import { SocialLinks } from './social-links';

export function SiteFooter({ hasBlog }: { hasBlog: boolean }) {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div>
          <p className="footer-name">{siteConfig.name}</p>
          <p className="muted">Building thoughtful products from Vancouver.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/work-experience">Work</Link>
          <Link href="/projects">Projects</Link>
          {hasBlog ? <Link href="/blog">Blog</Link> : null}
        </nav>
        <SocialLinks />
        <p className="footer-copyright">
          © {new Date().getFullYear()} {siteConfig.shortName}.
        </p>
      </Container>
    </footer>
  );
}
