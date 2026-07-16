export type SocialLink = {
  label: 'GitHub' | 'LinkedIn' | 'X' | 'CodePen' | 'Email';
  href: string;
};

export type Technology = {
  name: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  initials: string;
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
  technologies: string[];
  links: ProjectLink[];
  status: string;
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
