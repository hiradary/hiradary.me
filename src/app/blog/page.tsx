import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
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
          <h1>Blog</h1>
          <p>Thoughts on engineering, products, and the craft around them.</p>
        </header>
        <hr className="page-separator" />
        <h2 className="list-heading">
          All Posts <span>({posts.length} posts)</span>
        </h2>
        <div className="post-grid">
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              {post.frontmatter.image ? (
                <Link className="post-card-media" href={`/blog/${post.slug}`}>
                  <Image
                    src={post.frontmatter.image}
                    alt=""
                    fill
                    sizes="(max-width: 720px) 100vw, 50vw"
                  />
                </Link>
              ) : null}
              <div className="post-card-body">
                <Link href={`/blog/${post.slug}`}>
                  <h2>{post.frontmatter.title}</h2>
                </Link>
                <p className="post-card-description">
                  {post.frontmatter.description}
                </p>
                <div className="post-tags">
                  {post.frontmatter.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="post-card-footer">
                  <time dateTime={post.frontmatter.date}>
                    {post.frontmatter.date}
                  </time>
                  <Link className="text-link" href={`/blog/${post.slug}`}>
                    Read more <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
