import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'reoverlay',
    title: 'Reoverlay',
    description:
      'A tiny, typed modal manager for React with one top-level container and a small imperative API for opening, stacking, and closing modals from anywhere.',
    image: '/projects/reoverlay.svg',
    imageAlt: 'Reoverlay modal management API illustration',
    technologies: ['TypeScript', 'React', 'Vitest', 'tsup'],
    status: 'Open source · 150+ GitHub stars',
    caseStudySlug: 'reoverlay',
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/hiradary/reoverlay',
        kind: 'github',
      },
      {
        label: 'Live demo',
        href: 'https://hiradary.github.io/reoverlay/',
        kind: 'website',
      },
    ],
  },
  {
    slug: 'todopal',
    title: 'TodoPal',
    description:
      'A task-planning product designed to make capturing and organizing everyday work feel quick and frictionless.',
    image: '/projects/todopal.webp',
    imageAlt: 'TodoPal task management interface',
    technologies: ['Product design', 'Web app', 'AI'],
    status: 'Product Hunt · #7 product of the day',
    links: [
      {
        label: 'Product Hunt',
        href: 'https://www.producthunt.com/products/todopal-2',
        kind: 'product-hunt',
      },
    ],
  },
  {
    slug: 'snapcover',
    title: 'SnapCover',
    description:
      'A fast, template-driven way to create polished X profile banners without needing dedicated design software or design experience.',
    image: '/projects/snapcover.webp',
    imageAlt: 'SnapCover banner design interface',
    technologies: ['Product design', 'React', 'Canvas'],
    status: 'Product Hunt · launched in 2024',
    links: [
      {
        label: 'Product Hunt',
        href: 'https://www.producthunt.com/products/snapcover',
        kind: 'product-hunt',
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
