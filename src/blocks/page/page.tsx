import styled from '@emotion/styled';
import Head from 'next/head';

import { Toolbar } from '~/blocks/toolbar';
import { Component } from '~/elements/fc';
import { PageProps } from '~/types/page';

const defaultSiteDescription =
  'Passionate and creative full-stack software engineer from Colombia ' +
  '\uD83C\uDDE8\uD83C\uDDF4.\n' +
  'This website contains information about me, my skills and my projects.';

const fonts = [
  'inter/inter-v3-latin-regular.woff2',
  'inter/inter-v3-latin-500.woff2',
  'manrope/manrope-v4-latin-500.woff2',
  'manrope/manrope-v4-latin-600.woff2',
  'manrope/manrope-v4-latin-700.woff2',
  'fira-code/fira-code-v10-latin-regular.woff2',
  'fira-code/fira-code-v10-latin-500.woff2',
];

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: var(--max-site-width);
  margin: 0 auto;
  min-height: calc(100vh - var(--toolbar-height) - 1.6rem);
  padding: calc(var(--toolbar-height) + 1.6rem) 1rem 0;
  
  @media (min-width: 960px) {
    padding: calc(var(--toolbar-height) + 1.6rem) 0 0;
  }
`;

export const Page: Component<PageProps> = (props) => {
  const {
    children,
    title = 'Jahir Fiquitiva 💎',
    description = defaultSiteDescription,
    keywords = [],
    image,
    exactUrl,
    siteType,
    metaImageStyle,
  } = props;

  return (
    <>
      {/*
      <MetaTags
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        exactUrl={exactUrl}
        siteType={siteType}
        metaImageStyle={metaImageStyle}
      />
      */}

      <Head>
        {fonts.map((it, i) => {
          return (
            <link
              rel={'preload'}
              href={`/static/fonts/${it}`}
              as={'font'}
              crossOrigin={'anonymous'}
              key={`font-${i}`}
            />
          );
        })}
      </Head>

      <header>
        <Toolbar />
      </header>
      <PageContainer>{children}</PageContainer>
    </>
  );
};