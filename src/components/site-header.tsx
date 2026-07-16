import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/data/site';

import { Container } from './container';
import { ThemeToggle } from './theme-toggle';

export function SiteHeader({ hasBlog }: { hasBlog: boolean }) {
  const navigation = [
    { label: 'Work', href: '/work-experience' },
    { label: 'Projects', href: '/projects' },
    ...(hasBlog ? [{ label: 'Blog', href: '/blog' }] : []),
  ];

  return (
    <header className="site-header">
      <Container className="header-inner">
        <div className="header-primary">
          <Link className="brand-mark" href="/" aria-label="Home">
            <Image
              src={siteConfig.avatar}
              alt=""
              width={48}
              height={48}
              priority
            />
          </Link>
          <nav className="primary-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <ThemeToggle />
      </Container>
    </header>
  );
}
