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
      'Built core parts of SLang, Sutro’s app-definition language and runtime, including imports, static type checking, control flow, event triggers, file handling, template strings, AST validation, and reliability fixes.',
      'Contributed to generated-app infrastructure across OpenAPI generation, REST endpoint documentation, versioned app snapshots, publish workflow tests, and deployment/runtime fixes.',
      'Built major parts of Sutro Studio across the app shell, builder chat, data views, authentication, app generation, preview/publish workflows, analytics, and generated-code debugging tools.',
      'Developed pieces of the generated-app component system and AI-addressable UI vocabulary, including tables, charts, tabs, forms, media, typography, Storybook coverage, and Tailwind runtime styling.',
      'Improved Console, onboarding, authentication, security, billing, and developer tooling, including member invites, API security headers, Stripe-backed PAYG billing, the Sutro CLI, and test infrastructure.',
    ],
  },
  {
    company: 'Genie.xyz',
    role: 'UI Engineer',
    dateRange: {
      full: 'April 2022 — June 2022',
      compact: 'Apr 22 — Jun 22',
    },
    location: {
      full: 'New York, New York, United States (Remote)',
      compact: 'NY · Remote',
    },
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
    company: 'Piqo Studio',
    role: 'Co-Founder',
    dateRange: {
      full: 'December 2020 — December 2021',
      compact: 'Dec 20 — Dec 21',
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
    company: 'riiha',
    role: 'Front-End Lead',
    dateRange: {
      full: 'July 2019 — June 2020',
      compact: 'Jul 19 — Jun 20',
    },
    location: {
      full: 'Tehran, Iran (Remote)',
      compact: 'Tehran · Remote',
    },
    website: 'https://www.linkedin.com/company/26500795/',
    technologies: technologies('JavaScript', 'React'),
    description: [
      'Coordinated collaboration between front-end, back-end, and product teams to keep projects moving smoothly.',
      'Introduced modern tools and development practices to improve engineering efficiency and product quality.',
      'Increased test coverage for key components to 95%, improving reliability and maintainability.',
    ],
  },
  {
    company: 'RibalTech',
    role: 'Front-End Web/Mobile Developer',
    dateRange: {
      full: 'January 2018 — July 2019',
      compact: 'Jan 18 — Jul 19',
    },
    location: { full: 'Sari, Iran', compact: 'Sari · Iran' },
    website: 'https://ribaltech.ir/',
    technologies: technologies(
      'JavaScript',
      'React',
      'React Native',
      'MongoDB',
    ),
    description: [
      'Built and maintained multiple B2C web and mobile applications using React and React Native.',
      'Helped grow one of Iran’s largest React communities on Telegram.',
    ],
  },
];
