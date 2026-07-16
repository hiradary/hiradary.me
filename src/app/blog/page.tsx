import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

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
    <main id="main-content">
      <Container className="page-shell">
        <header className="page-header">
          <p className="eyebrow">Notes and essays</p>
          <h1>Writing</h1>
          <p>Thoughts on engineering, products, and the craft around them.</p>
        </header>
        <div className="post-list">
          {posts.map((post) => (
            <Link key={post.slug} className="post-row" href={`/blog/${post.slug}`}>
              <div>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.description}</p>
                <div className="post-tags">
                  {post.frontmatter.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <time dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
