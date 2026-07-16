import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'zod';

import type { BlogPost } from '@/types/content';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD'),
  tags: z.array(z.string().min(1)).default([]),
  image: z.string().min(1).optional(),
  published: z.boolean(),
});

function getMdxFilenames() {
  if (!fs.existsSync(blogDirectory)) return [];

  return fs
    .readdirSync(blogDirectory)
    .filter((filename) => filename.endsWith('.mdx'));
}

function readPost(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx$/, '');
  const source = fs.readFileSync(path.join(blogDirectory, filename), 'utf8');
  const { data, content } = matter(source);
  const frontmatter = blogFrontmatterSchema.parse(data);

  return { slug, frontmatter, content };
}

export function getAllBlogPosts() {
  return getMdxFilenames()
    .map(readPost)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    );
}

export function getPublishedBlogPosts() {
  return getAllBlogPosts().filter((post) => post.frontmatter.published);
}

export function hasPublishedPosts() {
  return getPublishedBlogPosts().length > 0;
}

export function getPublishedBlogPost(slug: string) {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  const filename = `${slug}.mdx`;
  if (!getMdxFilenames().includes(filename)) return null;

  const post = readPost(filename);
  return post.frontmatter.published ? post : null;
}
