import type { MetadataRoute } from 'next';

import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { getPublishedBlogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/work-experience', '/projects'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  const projectRoutes = projects
    .filter((project) => project.caseStudySlug)
    .map((project) => ({
      url: `${siteConfig.url}/projects/${project.caseStudySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  const posts = getPublishedBlogPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.length
    ? [
        {
          url: `${siteConfig.url}/blog`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        },
        ...posts.map((post) => ({
          url: `${siteConfig.url}/blog/${post.slug}`,
          lastModified: new Date(`${post.frontmatter.date}T00:00:00`),
          changeFrequency: 'yearly' as const,
          priority: 0.6,
        })),
      ]
    : [];
  const resumeRoute: MetadataRoute.Sitemap = siteConfig.resumeUrl
    ? [
        {
          url: `${siteConfig.url}${siteConfig.resumeUrl}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.5,
        },
      ]
    : [];

  return [...staticRoutes, ...projectRoutes, ...blogRoutes, ...resumeRoute];
}
