import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

import type { BlogPost } from '@/types/content';

import { SectionHeading } from './section-heading';

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="section" aria-labelledby="blog-preview-heading">
      <SectionHeading eyebrow="Latest">Writing</SectionHeading>
      <div className="post-grid" id="blog-preview-heading">
        {posts.slice(0, 2).map((post) => (
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
                <h3>{post.frontmatter.title}</h3>
              </Link>
              <p className="post-card-description">
                {post.frontmatter.description}
              </p>
              <div className="post-card-footer">
                <time dateTime={post.frontmatter.date}>
                  {new Intl.DateTimeFormat('en-CA', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  }).format(new Date(`${post.frontmatter.date}T00:00:00`))}
                </time>
                <Link className="text-link" href={`/blog/${post.slug}`}>
                  Read more <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Link className="text-link section-link" href="/blog">
        All writing <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </section>
  );
}
