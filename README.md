# hiradary.me

Hirad Arshadi’s portfolio, built with Next.js, TypeScript, Tailwind CSS, and
MDX. The site contains a résumé-backed work history, selected projects, an
optional writing system, light/dark themes, and generated SEO metadata.

## Development

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Content

Portfolio content lives in `src/data`. Project images are stored locally in
`public/projects`; the profile image is stored in `public/profile`.

### Blog posts

Add `.mdx` files to `src/content/blog` using the frontmatter documented in
that directory’s README. The Blog navigation, listing page, sitemap entries,
and homepage section are hidden until at least one post has
`published: true`.

### Résumé

`siteConfig.resumeUrl` is currently `null`, so no résumé link or sitemap entry
is rendered. Add a PDF under `public` and set the value to its public path to
enable the hero CTA.

## Attribution

The visual foundation and portions of the implementation were adapted from
[ramxcodes/sleek-portfolio](https://github.com/ramxcodes/sleek-portfolio) at
commit `22d78c827830c7800ee6283442b8a5985d18573e`. That project is MIT-licensed;
its copyright and permission notice are retained in `LICENSE`.

Hanken Grotesk is distributed under the SIL Open Font License.
