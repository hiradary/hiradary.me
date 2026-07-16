import type { MDXComponents } from 'mdx/types';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { Container } from '@/components/container';
import { getPublishedBlogPost, getPublishedBlogPosts } from '@/lib/blog';

type BlogPostPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);
  if (!post) return { title: 'Post not found' };

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: post.frontmatter.image
      ? { images: [post.frontmatter.image] }
      : undefined,
  };
}

const components: MDXComponents = {
  a: ({ href = '', children, ...props }) => {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  },
  img: ({ src = '', alt = '' }) => (
    <Image src={src} alt={alt} width={1200} height={675} />
  ),
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPublishedBlogPost(slug);
  if (!post) notFound();

  return (
    <main id="main-content" className="page-content">
      <Container className="article-shell page-shell">
        <Link className="back-link" href="/blog">
          <ArrowLeft size={15} aria-hidden="true" /> Back to Blog
        </Link>
        <article>
          <header className="article-header">
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.description}</p>
            <time dateTime={post.frontmatter.date}>
              {post.frontmatter.date}
            </time>
          </header>
          <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
            <MDXRemote
              source={post.content}
              components={components}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>
        </article>
      </Container>
    </main>
  );
}
