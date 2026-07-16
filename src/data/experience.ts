import type {
  Experience,
  Technology,
  TechnologyIconKey,
} from '@/types/content';

const technologyLinks: Record<string, string> = {
  TypeScript: 'https://www.typescriptlang.org/',
  JavaScript: 'https://developer.mozilla.org/docs/Web/JavaScript',
  React: 'https://react.dev/',
  'React Native': 'https://reactnative.dev/',
  'Node.js': 'https://nodejs.org/',
  PostgreSQL: 'https://www.postgresql.org/',
  MongoDB: 'https://www.mongodb.com/',
  OpenAPI: 'https://www.openapis.org/',
  Storybook: 'https://storybook.js.org/',
  Tailwind: 'https://tailwindcss.com/',
  Stripe: 'https://stripe.com/',
  Vitest: 'https://vitest.dev/',
  GSAP: 'https://gsap.com/',
};

const technologyIcons: Record<string, TechnologyIconKey> = {
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  React: 'react',
  'React Native': 'react-native',
  'Node.js': 'node',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  OpenAPI: 'openapi',
  Storybook: 'storybook',
  Tailwind: 'tailwind',
  Stripe: 'stripe',
  Vitest: 'vitest',
  GSAP: 'gsap',
};

const technologies = (...names: string[]): Technology[] =>
  names.map((name) => ({
    name,
    href: technologyLinks[name] ?? '#',
    icon: technologyIcons[name] ?? 'developer-tooling',
  }));

export const experiences: Experience[] = [
  {
    company: 'Sutro Software',
    role: 'Software Engineer',
    dateRange: {
      full: 'August 2022 — Present',
      compact: 'Aug 22 — Present',
    },
    location: { full: 'United States (Remote)', compact: 'US · Remote' },
    current: true,
    website: 'https://withsutro.com/',
    technologies: technologies(
      'TypeScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'OpenAPI',
      'Storybook',
      'Tailwind',
      'Stripe',
      'Vitest',
    ),
    description: [
      'Built core language and runtime systems for defining production-ready backends, including imports, static type checking, control flow, event triggers, and AST validation.',
      'Developed generated-app infrastructure for creating, documenting, versioning, testing, and publishing production-ready backends.',
      'Shipped major product surfaces across builder chat, data views, authentication, app generation, previews, publishing, analytics, and debugging.',
      'Improved onboarding, security, billing, CLI tooling, test infrastructure, and repository-wide developer workflows.',
    ],
  },
  {
    company: 'Genie.xyz',
    role: 'UI Engineer',
    dateRange: {
      full: 'April 2022 — June 2022',
      compact: 'Apr 22 — Jun 22',
    },
    location: { full: 'United States (Remote)', compact: 'US · Remote' },
    website: 'https://www.linkedin.com/company/genielabs',
    technologies: technologies('TypeScript', 'React', 'JavaScript'),
    description: [
      'Rebuilt the NFT sweeping flow with clearer options, stronger interaction states, and a smoother path from collection selection to transaction review.',
      'Fixed interface issues and added polished animations across high-visibility product surfaces before Genie was acquired by Uniswap.',
    ],
  },
  {
    company: 'Digikala',
    role: 'Front-End Developer · Contract',
    dateRange: {
      full: 'February 2022 — March 2022',
      compact: 'Feb 22 — Mar 22',
    },
    location: { full: 'Contract', compact: 'Contract' },
    website: 'https://digikala.com/',
    technologies: technologies('TypeScript', 'React', 'JavaScript'),
    description: [
      'Designed and built an internal dashboard from scratch for senior stakeholders at one of the largest e-commerce companies in the Middle East.',
    ],
  },
  {
    company: 'Piqo Design',
    role: 'Co-Founder',
    dateRange: {
      full: 'December 2020 — August 2021',
      compact: 'Dec 20 — Aug 21',
    },
    location: { full: 'Remote', compact: 'Remote' },
    website: 'https://piqo.design/',
    technologies: technologies('React', 'JavaScript', 'GSAP'),
    description: [
      'Created a new service model that increased revenue by 300%.',
      'Built conversion-focused landing pages for product teams while balancing implementation speed and visual polish.',
      'Managed client projects from kickoff to delivery, including designer onboarding, communication, scope, and cost discussions.',
    ],
  },
  {
    company: 'RibalTech',
    role: 'Front-End Web/Mobile Developer',
    dateRange: {
      full: 'January 2018 — June 2020',
      compact: 'Jan 18 — Jun 20',
    },
    location: { full: 'Iran', compact: 'Iran' },
    website: 'https://ribaltech.ir/',
    technologies: technologies(
      'JavaScript',
      'React',
      'React Native',
      'MongoDB',
    ),
    description: [
      'Led front-end delivery for Riiha, coordinating with backend engineers and product stakeholders across web and mobile releases.',
      'Modernized front-end tooling and practices while raising test coverage for key components to 95%.',
      'Built and maintained B2C web and mobile applications and helped grow one of Iran’s largest React communities.',
    ],
  },
];
