import Image from 'next/image';
import { Link } from 'next-view-transitions';

import { siteConfig } from '@/data/site';
import type { BlogSearchEntry } from '@/types/content';

import { BlogSearch } from './blog-search';
import { Container } from './container';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader({ posts }: { posts: BlogSearchEntry[] }) {
  const hasBlog = posts.length > 0;

  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link className="brand-mark" href="/" aria-label="Home">
          <Image
            src={siteConfig.avatar}
            alt=""
            width={32}
            height={32}
            priority
          />
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <Link className="home-nav-link" href="/">
            Home
          </Link>
          <Link href="/work-experience">Work</Link>
          {hasBlog ? <Link href="/blog">Blog</Link> : null}
          {siteConfig.resumeUrl ? (
            <a href={siteConfig.resumeUrl}>Resume</a>
          ) : null}
        </nav>
        <div className="header-actions">
          {hasBlog ? <BlogSearch entries={posts} /> : null}
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
