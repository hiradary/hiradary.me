export type SocialLink = {
  label: 'GitHub' | 'LinkedIn' | 'X' | 'CodePen' | 'Email';
  href: string;
};

export type TechnologyIconKey =
  | 'typescript'
  | 'javascript'
  | 'react'
  | 'react-native'
  | 'node'
  | 'postgresql'
  | 'mongodb'
  | 'openapi'
  | 'storybook'
  | 'tailwind'
  | 'stripe'
  | 'vitest'
  | 'gsap'
  | 'tsup'
  | 'product-design'
  | 'web-app'
  | 'ai'
  | 'canvas'
  | 'developer-tooling';

export type Technology = {
  name: string;
  href: string;
  icon: TechnologyIconKey;
};

export type DisplayTechnology = {
  name: string;
  icon: TechnologyIconKey;
};

export type HeroDescriptionSegment =
  | { type: 'text'; text: string }
  | { type: 'technology'; technology: Technology };

export type CompanyLogo =
  { kind: 'image'; src: string } | { kind: 'initials'; text: string };

export type ProjectTechnology = {
  name: string;
  icon: TechnologyIconKey;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  logo: CompanyLogo;
  website?: string;
  description: string[];
  technologies: Technology[];
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: 'website' | 'github' | 'product-hunt';
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: ProjectTechnology[];
  links: ProjectLink[];
  status: string;
  isWorking: boolean;
  caseStudySlug?: string;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  published: boolean;
};

export type BlogPost = {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
};
