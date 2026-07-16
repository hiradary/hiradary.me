'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Command } from 'cmdk';
import { ArrowRight, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { BlogSearchEntry } from '@/types/content';

export function BlogSearch({ entries }: { entries: BlogSearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const visitPost = (slug: string) => {
    setOpen(false);
    router.push(`/blog/${slug}`);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="search-trigger"
          aria-label="Open blog search (⌘K)"
        >
          <Search size={15} aria-hidden="true" />
          <span className="search-shortcut">
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="search-overlay" />
        <Dialog.Content className="search-dialog">
          <Dialog.Title className="sr-only">Search Blog</Dialog.Title>
          <Dialog.Description className="sr-only">
            Full-text search across blog titles, headings, and paragraphs
          </Dialog.Description>
          <Command label="Search blog posts">
            <div className="search-input-row">
              <Search size={19} aria-hidden="true" />
              <Command.Input autoFocus placeholder="Search blog posts" />
              <Dialog.Close className="search-escape">ESC</Dialog.Close>
            </div>
            <Command.List className="search-results">
              <Command.Empty>No posts found.</Command.Empty>
              {entries.map((entry) => (
                <Command.Item
                  key={entry.slug}
                  value={`${entry.title} ${entry.description} ${entry.tags.join(' ')} ${entry.content}`}
                  onSelect={() => visitPost(entry.slug)}
                >
                  <span>
                    <strong>{entry.title}</strong>
                    <small>{entry.description}</small>
                  </span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Command.Item>
              ))}
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
