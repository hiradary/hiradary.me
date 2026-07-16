import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import localFont from 'next/font/local';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ThemeProvider } from '@/components/theme-provider';
import { siteConfig } from '@/data/site';
import { getPublishedBlogPosts } from '@/lib/blog';

import './globals.css';

const hankenGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/HankenGrotesk-Variable.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../../public/fonts/HankenGrotesk-Italic-Variable.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-hanken',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s — ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  keywords: [
    'Hirad Arshadi',
    'full-stack software engineer',
    'TypeScript',
    'React',
    'Node.js',
    'Vancouver software engineer',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    creator: '@hiradary',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = getPublishedBlogPosts();
  const searchEntries = posts.map((post) => ({
    slug: post.slug,
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    tags: post.frontmatter.tags,
    content: post.content,
  }));
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    jobTitle: siteConfig.title,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      addressCountry: 'CA',
    },
    sameAs: siteConfig.socialLinks
      .filter((link) => !link.href.startsWith('mailto:'))
      .map((link) => link.href),
  };

  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={hankenGrotesk.variable}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <a className="skip-link" href="#main-content">
              Skip to content
            </a>
            <SiteHeader posts={searchEntries} />
            {children}
            <div className="progressive-blur" aria-hidden="true" />
            <SiteFooter hasBlog={posts.length > 0} />
          </ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </body>
      </html>
    </ViewTransitions>
  );
}
