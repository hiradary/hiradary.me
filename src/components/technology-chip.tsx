import type { Technology } from '@/types/content';

import { TechnologyIcon } from './technology-icon';

export function TechnologyChip({ technology }: { technology: Technology }) {
  return (
    <a
      className="technology-chip"
      href={technology.href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <TechnologyIcon className="technology-chip-icon" icon={technology.icon} />
      {technology.name}
    </a>
  );
}
