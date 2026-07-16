import { ImageResponse } from 'next/og';

import { siteConfig } from '@/data/site';

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          color: '#f4f4f5',
          background: '#0b0b0c',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: 76,
            height: 76,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            border: '1px solid #3f3f46',
            color: '#a99aff',
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          HA
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: '-3px' }}>
            {siteConfig.name}
          </div>
          <div style={{ color: '#a1a1aa', display: 'flex', fontSize: 36 }}>
            {`${siteConfig.title} · Vancouver, BC`}
          </div>
        </div>
        <div style={{ color: '#71717a', fontSize: 24 }}>{siteConfig.url}</div>
      </div>
    ),
    size,
  );
}
