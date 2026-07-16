'use client';

import { ArrowRight, CalendarDays } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { useMemo, useState } from 'react';

import type { BlogPost } from '@/types/content';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [activeTag, setActiveTag] = useState('All');
  const tags = useMemo(
    () => Array.from(new Set(posts.flatMap((post) => post.frontmatter.tags))),
    [posts],
  );
  const visiblePosts =
    activeTag === 'All'
      ? posts
      : posts.filter((post) => post.frontmatter.tags.includes(activeTag));

  return (
    <>
      {tags.length ? (
        <div className="blog-filters" aria-label="Filter posts by tag">
          {['All', ...tags].map((tag) => (
            <button
              key={tag}
              type="button"
              className={tag === activeTag ? 'is-active' : ''}
              aria-pressed={tag === activeTag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
              <span>
                {tag === 'All'
                  ? posts.length
                  : posts.filter((post) => post.frontmatter.tags.includes(tag))
                      .length}
              </span>
            </button>
          ))}
        </div>
      ) : null}
      <div className="blog-list blog-list--page">
        {visiblePosts.map((post) => (
          <article className="blog-list-item" key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <div>
                <h2>{post.frontmatter.title}</h2>
                <p>{post.frontmatter.description}</p>
                <div className="blog-item-meta">
                  {post.frontmatter.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                  <time dateTime={post.frontmatter.date}>
                    <CalendarDays size={13} aria-hidden="true" />
                    {formatDate(post.frontmatter.date)}
                  </time>
                </div>
              </div>
              <span className="read-more">
                Read more <ArrowRight size={15} aria-hidden="true" />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
