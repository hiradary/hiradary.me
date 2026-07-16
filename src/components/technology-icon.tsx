import { Bot, Brush, CodeXml, Frame, Globe2, Wrench } from 'lucide-react';

import type { TechnologyIconKey } from '@/types/content';

type IconProps = { className?: string };

function ReactMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" aria-hidden="true">
      <g fill="none" stroke="#61dafb" strokeWidth="7">
        <ellipse cx="64" cy="64" rx="58" ry="22" />
        <ellipse cx="64" cy="64" rx="58" ry="22" transform="rotate(60 64 64)" />
        <ellipse
          cx="64"
          cy="64"
          rx="58"
          ry="22"
          transform="rotate(120 64 64)"
        />
      </g>
      <circle cx="64" cy="64" r="10" fill="#61dafb" />
    </svg>
  );
}

function TailwindMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" aria-hidden="true">
      <path
        fill="#38bdf8"
        d="M64 25c-17 0-28 8-34 24 8-8 18-11 29-8 6 2 10 6 15 10 8 7 17 15 34 15 17 0 28-8 34-24-8 8-18 11-29 8-6-2-10-6-15-10-8-7-17-15-34-15ZM30 63C13 63 2 71-4 87c8-8 18-11 29-8 6 2 10 6 15 10 8 7 17 15 34 15 17 0 28-8 34-24-8 8-18 11-29 8-6-2-10-6-15-10-8-7-17-15-34-15Z"
      />
    </svg>
  );
}

function MongoMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" aria-hidden="true">
      <path
        fill="#47a248"
        d="M65 3C58 16 34 36 34 67c0 25 14 43 29 49l1-34 4 34c15-7 27-25 27-48C95 39 73 17 65 3Z"
      />
      <path fill="#31572c" d="m63 75 2 50 5-1-3-49Z" />
    </svg>
  );
}

function PostgreSqlMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 128 128" aria-hidden="true">
      <path
        fill="#336791"
        d="M94 19c-13-14-37-12-51-3C27 27 24 50 30 73c3 13 9 30 20 29 6-1 9-9 13-15 5 2 10 2 15 0-1 8-1 18 1 27 2 9 10 13 19 9 11-5 9-24 12-34 8-2 18-6 18-13 0-6-9-5-15-4 9-20 6-40-19-53Z"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        d="M49 73c11 8 29 8 40-2 8-7 7-20-2-23-8-3-15 5-12 12 3 8 13 11 22 13 8 2 16 3 21 2-6 6-15 7-24 7-5 0-8 2-9 8-2 9 0 24 7 26 8 2 10-10 10-19 0-8 2-14 9-16"
      />
    </svg>
  );
}

function LetterMark({
  className,
  label,
  background,
  color = '#fff',
  round = false,
}: IconProps & {
  label: string;
  background: string;
  color?: string;
  round?: boolean;
}) {
  return (
    <svg className={className} viewBox="0 0 128 128" aria-hidden="true">
      <rect width="128" height="128" rx={round ? 64 : 12} fill={background} />
      <text
        x="64"
        y="72"
        fill={color}
        fontFamily="Arial, sans-serif"
        fontSize={label.length > 2 ? 38 : 52}
        fontWeight="700"
        textAnchor="middle"
      >
        {label}
      </text>
    </svg>
  );
}

export function TechnologyIcon({
  icon,
  className,
}: {
  icon: TechnologyIconKey;
  className?: string;
}) {
  switch (icon) {
    case 'typescript':
      return (
        <LetterMark className={className} label="TS" background="#3178c6" />
      );
    case 'javascript':
      return (
        <LetterMark
          className={className}
          label="JS"
          background="#f7df1e"
          color="#111"
        />
      );
    case 'react':
      return <ReactMark className={className} />;
    case 'react-native':
      return <ReactMark className={className} />;
    case 'node':
      return (
        <LetterMark
          className={className}
          label="N"
          background="#5fa04e"
          round
        />
      );
    case 'postgresql':
      return <PostgreSqlMark className={className} />;
    case 'mongodb':
      return <MongoMark className={className} />;
    case 'openapi':
      return (
        <LetterMark
          className={className}
          label="OA"
          background="#6ba539"
          round
        />
      );
    case 'storybook':
      return (
        <LetterMark className={className} label="S" background="#ff4785" />
      );
    case 'tailwind':
      return <TailwindMark className={className} />;
    case 'stripe':
      return (
        <LetterMark className={className} label="S" background="#635bff" />
      );
    case 'vitest':
      return (
        <LetterMark
          className={className}
          label="V"
          background="#729b1b"
          round
        />
      );
    case 'gsap':
      return (
        <LetterMark
          className={className}
          label="G"
          background="#0ae448"
          color="#071a10"
        />
      );
    case 'tsup':
      return (
        <LetterMark
          className={className}
          label="tsup"
          background="#ffcf00"
          color="#111"
        />
      );
    case 'product-design':
      return <Brush className={className} color="#f97316" />;
    case 'web-app':
      return <Globe2 className={className} color="#3b82f6" />;
    case 'ai':
      return <Bot className={className} color="#8b5cf6" />;
    case 'canvas':
      return <Frame className={className} color="#ec4899" />;
    case 'developer-tooling':
      return <Wrench className={className} color="#64748b" />;
    default:
      return <CodeXml className={className} />;
  }
}
