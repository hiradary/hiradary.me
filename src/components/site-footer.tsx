import { Link } from 'next-view-transitions';

import { siteConfig } from '@/data/site';

import { Container } from './container';
import { SocialLinks } from './social-links';

export function SiteFooter({ hasBlog }: { hasBlog: boolean }) {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <div className="footer-group">
          <p className="footer-label">Navigate</p>
          <nav className="footer-navigation" aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/work-experience">Work</Link>
            {hasBlog ? <Link href="/blog">Blog</Link> : null}
            {siteConfig.resumeUrl ? (
              <a href={siteConfig.resumeUrl}>Resume</a>
            ) : null}
            <Link href="/projects">Projects</Link>
          </nav>
        </div>
        <div className="footer-group footer-connect">
          <p className="footer-label">Connect</p>
          <SocialLinks />
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
