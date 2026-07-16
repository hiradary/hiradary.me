import {
  Codepen,
  Github,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from 'lucide-react';

import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

const icons: Record<
  (typeof siteConfig.socialLinks)[number]['label'],
  LucideIcon
> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  X: Twitter,
  CodePen: Codepen,
  Email: Mail,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('social-links', className)} aria-label="Social links">
      {siteConfig.socialLinks.map((link) => {
        const Icon = icons[link.label];
        const external = !link.href.startsWith('mailto:');

        return (
          <a
            key={link.label}
            className="social-link"
            href={link.href}
            aria-label={link.label}
            title={link.label}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer noopener' : undefined}
          >
            <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}
