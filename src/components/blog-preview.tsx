import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'next-view-transitions';

import type { BlogPost } from '@/types/content';

import { Reveal } from './reveal';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}

export function BlogPreview({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="home-section" aria-labelledby="blog-preview-heading">
      <Reveal>
        <h2 id="blog-preview-heading">Blog</h2>
      </Reveal>
      <div className="blog-list">
        {posts.slice(0, 3).map((post, index) => (
          <Reveal key={post.slug} delay={(index + 1) * 50}>
            <article className="blog-list-item">
              <Link href={`/blog/${post.slug}`}>
                <div>
                  <h3>{post.frontmatter.title}</h3>
                  <p>{post.frontmatter.description}</p>
                  <time dateTime={post.frontmatter.date}>
                    <CalendarDays size={13} aria-hidden="true" />
                    {formatDate(post.frontmatter.date)}
                  </time>
                </div>
                <span className="read-more">
                  Read more <ArrowRight size={15} aria-hidden="true" />
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="section-action" delay={200}>
        <Link className="button" href="/blog">
          Show all blogs
        </Link>
      </Reveal>
    </section>
  );
}
