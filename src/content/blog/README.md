# Blog content

Add original posts as `.mdx` files in this directory. The filename becomes the
URL slug. Blog navigation and routes remain hidden until at least one post has
`published: true`.

```mdx
---
title: 'A useful title'
description: 'A concise summary for cards and search results.'
date: '2026-07-16'
tags:
  - engineering
  - react
image: '/blog/example.webp'
published: false
---

Write the post here.
```

The build fails when a post has missing or invalid frontmatter.
