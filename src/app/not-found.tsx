import { Link } from 'next-view-transitions';

import { Container } from '@/components/container';

export default function NotFound() {
  return (
    <main id="main-content">
      <Container className="not-found">
        <p className="eyebrow">404</p>
        <h1>There&apos;s nothing here.</h1>
        <p>The page may have moved, or it may not be published yet.</p>
        <Link className="button button-primary" href="/">
          Back home
        </Link>
      </Container>
    </main>
  );
}
