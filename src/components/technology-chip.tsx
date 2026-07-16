import { Code2 } from 'lucide-react';

import type { Technology } from '@/types/content';

export function TechnologyChip({ technology }: { technology: Technology }) {
  return (
    <a
      className="technology-chip"
      href={technology.href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Code2 size={15} aria-hidden="true" />
      {technology.name}
    </a>
  );
}
