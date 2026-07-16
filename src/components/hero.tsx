'use client';

import { Check, Copy } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { siteConfig } from '@/data/site';

import { SocialLinks } from './social-links';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-identity">
        <Image
          className="hero-avatar"
          src={siteConfig.avatar}
          alt="Portrait of Hirad Arshadi"
          width={96}
          height={96}
          priority
        />
        <div className="hero-heading-group">
          <h1 id="hero-heading">{siteConfig.name}</h1>
          <p className="hero-meta">
            <span>{siteConfig.title}</span>
            <span aria-hidden="true">·</span>
            <span>{siteConfig.location}</span>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={copyEmail} aria-live="polite">
              <span>{copied ? 'Copied' : siteConfig.email}</span>
              {copied ? (
                <Check size={13} aria-hidden="true" />
              ) : (
                <Copy size={13} aria-hidden="true" />
              )}
            </button>
          </p>
        </div>
      </div>
      <p className="hero-description">{siteConfig.description}</p>
      <SocialLinks className="hero-socials" />
    </section>
  );
}
