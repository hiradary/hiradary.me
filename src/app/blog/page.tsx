import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { BlogIndex } from '@/components/blog-index';
import { Container } from '@/components/container';
import { getPublishedBlogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing about product engineering, interfaces, and software.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const posts = getPublishedBlogPosts();
  if (posts.length === 0) notFound();

  return (
    <main id="main-content" className="page-content">
      <Container className="page-shell">
        <header className="page-header">
          <h1>Blog</h1>
          <p>Thoughts on engineering, products, and the craft around them.</p>
        </header>
        <BlogIndex posts={posts} />
      </Container>
    </main>
  );
}
