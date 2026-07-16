import { siteConfig } from '@/data/site';

import { Container } from './container';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <p>
          Design &amp; Developed by <strong>{siteConfig.shortName}</strong>
          <br />© {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
