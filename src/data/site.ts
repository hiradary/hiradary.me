import type {
  DisplayTechnology,
  HeroDescriptionSegment,
  SocialLink,
  Technology,
} from '@/types/content';

export const siteConfig = {
  name: 'Hirad Arshadi Yarahmadi',
  shortName: 'Hirad',
  title: 'Full-Stack Software Engineer',
  description:
    'Full-stack software engineer building product-focused web and mobile applications, developer platforms, and backend infrastructure.',
  url: 'https://hiradary.me',
  email: 'hey@hiradary.me',
  avatar: '/profile/hirad.jpg',
  location: 'Vancouver, BC',
  resumeUrl: null as string | null,
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/hiradary' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hiradarshadi/',
    },
    { label: 'X', href: 'https://x.com/hiradary' },
    { label: 'CodePen', href: 'https://codepen.io/hiradary' },
    { label: 'Email', href: 'mailto:hey@hiradary.me' },
  ] satisfies SocialLink[],
};

export const featuredTechnologies: Technology[] = [
  {
    name: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    icon: 'typescript',
  },
  { name: 'React', href: 'https://react.dev/', icon: 'react' },
  { name: 'Node.js', href: 'https://nodejs.org/', icon: 'node' },
];

export const heroDescription: HeroDescriptionSegment[] = [
  {
    type: 'text',
    text: 'Full-Stack Software Engineer with 8+ years of experience building product-focused web and mobile applications, developer platforms, and backend/API infrastructure with ',
  },
  { type: 'technology', technology: featuredTechnologies[0] },
  { type: 'text', text: ', ' },
  { type: 'technology', technology: featuredTechnologies[1] },
  { type: 'text', text: ', and ' },
  { type: 'technology', technology: featuredTechnologies[2] },
  {
    type: 'text',
    text: '. Strong across generated-app systems, DSL/runtime development, polished product UI, authentication, billing, testing, and developer tooling.',
  },
];

export const aboutSkills: DisplayTechnology[] = [
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'React', icon: 'react' },
  { name: 'Node.js', icon: 'node' },
  { name: 'React Native', icon: 'react-native' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'OpenAPI', icon: 'openapi' },
  { name: 'Storybook', icon: 'storybook' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'Vitest', icon: 'vitest' },
  { name: 'Stripe', icon: 'stripe' },
  { name: 'Developer tooling', icon: 'developer-tooling' },
];
