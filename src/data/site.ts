import type { SocialLink } from '@/types/content';

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
