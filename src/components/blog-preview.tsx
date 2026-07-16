import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import type { BlogPost } from '@/types/content';

import { SectionHeading } from './section-heading';

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="section" aria-labelledby="blog-preview-heading">
      <SectionHeading eyebrow="Latest">Writing</SectionHeading>
      <div className="post-list" id="blog-preview-heading">
        {posts.slice(0, 2).map((post) => (
          <Link key={post.slug} className="post-row" href={`/blog/${post.slug}`}>
            <div>
              <h3>{post.frontmatter.title}</h3>
              <p>{post.frontmatter.description}</p>
            </div>
            <time dateTime={post.frontmatter.date}>
              {new Intl.DateTimeFormat('en-CA', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }).format(new Date(`${post.frontmatter.date}T00:00:00`))}
            </time>
          </Link>
        ))}
      </div>
      <Link className="text-link section-link" href="/blog">
        All writing <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </section>
  );
}
