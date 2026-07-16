'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => void;
};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === 'dark';

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    const root = document.documentElement;
    root.style.setProperty('--theme-x', `${window.innerWidth - 40}px`);
    root.style.setProperty('--theme-y', '40px');
    root.style.setProperty(
      '--theme-radius',
      `${Math.hypot(window.innerWidth, window.innerHeight)}px`,
    );

    const viewTransitionDocument = document as ViewTransitionDocument;
    if (
      !viewTransitionDocument.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setTheme(nextTheme);
      return;
    }

    viewTransitionDocument.startViewTransition(() => setTheme(nextTheme));
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggleTheme}
    >
      <span aria-hidden="true">
        {isDark ? <Moon size={17} /> : <Sun size={17} />}
      </span>
    </button>
  );
}
