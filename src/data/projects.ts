import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'reoverlay',
    title: 'Reoverlay',
    description:
      'A tiny, typed modal manager for React with one top-level container and a small imperative API for opening, stacking, and closing modals from anywhere.',
    image: '/projects/reoverlay.svg',
    imageAlt: 'Reoverlay modal management API illustration',
    technologies: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Vitest', icon: 'vitest' },
      { name: 'tsup', icon: 'tsup' },
    ],
    status: 'Open source · 150+ GitHub stars',
    isWorking: true,
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
    technologies: [
      { name: 'Product design', icon: 'product-design' },
      { name: 'Web app', icon: 'web-app' },
      { name: 'AI', icon: 'ai' },
    ],
    status: 'Product Hunt · #7 product of the day',
    isWorking: true,
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
    technologies: [
      { name: 'Product design', icon: 'product-design' },
      { name: 'React', icon: 'react' },
      { name: 'Canvas', icon: 'canvas' },
    ],
    status: 'Product Hunt · launched in 2024',
    isWorking: true,
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
