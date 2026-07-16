import type { Technology } from '@/types/content';

import { TechnologyIcon } from './technology-icon';

export function TechnologyChip({
  technology,
  interactive = true,
}: {
  technology: Technology;
  interactive?: boolean;
}) {
  return (
    <a
      className="technology-chip"
      href={technology.href}
      target="_blank"
      rel="noreferrer noopener"
      tabIndex={interactive ? 0 : -1}
      aria-label={technology.name}
    >
      <TechnologyIcon className="technology-chip-icon" icon={technology.icon} />
      <span>{technology.name}</span>
    </a>
  );
}
