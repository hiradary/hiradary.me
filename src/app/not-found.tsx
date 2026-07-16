import { ArrowLeft } from 'lucide-react';
import { Link } from 'next-view-transitions';

import { Container } from '@/components/container';

export default function NotFound() {
  return (
    <main id="main-content" className="page-content">
      <Container className="not-found">
        <p>404</p>
        <h1>There&apos;s nothing here.</h1>
        <p>The page may have moved, or it may not be published yet.</p>
        <Link className="button" href="/">
          <ArrowLeft size={15} aria-hidden="true" /> Back home
        </Link>
      </Container>
    </main>
  );
}
