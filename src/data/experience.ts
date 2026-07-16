import type { Experience, Technology } from '@/types/content';

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

const technologies = (...names: string[]): Technology[] =>
  names.map((name) => ({ name, href: technologyLinks[name] ?? '#' }));

export const experiences: Experience[] = [
  {
    company: 'Sutro Software',
    role: 'Software Engineer',
    location: 'US · Remote',
    startDate: 'August 2022',
    endDate: 'Present',
    current: true,
    initials: 'SU',
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
    location: 'US · Remote',
    startDate: 'April 2022',
    endDate: 'June 2022',
    initials: 'GE',
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
    location: 'Contract',
    startDate: 'February 2022',
    endDate: 'March 2022',
    initials: 'DK',
    website: 'https://digikala.com/',
    technologies: technologies('TypeScript', 'React', 'JavaScript'),
    description: [
      'Designed and built an internal dashboard from scratch for senior stakeholders at one of the largest e-commerce companies in the Middle East.',
    ],
  },
  {
    company: 'Piqo Design',
    role: 'Co-Founder',
    location: 'Remote',
    startDate: 'December 2020',
    endDate: 'August 2021',
    initials: 'PQ',
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
    location: 'Iran',
    startDate: 'January 2018',
    endDate: 'June 2020',
    initials: 'RT',
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
