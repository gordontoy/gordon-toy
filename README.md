# Gordon Toy — Personal Website & Blog

A Next.js (App Router) port of Gordon Toy's personal site, with a real
file-based blog. Same dark amber/gold aesthetic as the original single-page
design, now structured as a maintainable Next.js application.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript)
- **Markdown blog** parsed with `gray-matter` + `remark`/`rehype`
- **Plain CSS** in `app/globals.css` — no Tailwind, so the original design is
  preserved exactly. CSS variables drive the whole palette.
- Fonts (Rajdhani, JetBrains Mono, Sora) loaded from Google Fonts.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx            Root layout: fonts, nav, footer, <main>
  globals.css           All styles (ported from the original design)
  page.tsx              Home page (hero, about, services, blog preview, contact)
  not-found.tsx         Styled 404
  blog/
    page.tsx            /blog — lists every post
    [slug]/page.tsx     /blog/<slug> — a single rendered post
components/
  Nav.tsx, Footer.tsx, Reveal.tsx
  sections/             Hero, About, Services, BlogPreview, Contact
content/
  posts/*.md            Blog posts (Markdown + frontmatter)
lib/
  posts.ts              Reads/parses Markdown, renders to HTML
```

## Writing a new blog post

Drop a Markdown file into `content/posts/`. The filename becomes the URL slug
(`my-post.md` → `/blog/my-post`). Add frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-06-01"          # ISO date; controls ordering (newest first)
category: "Investment Analysis"
excerpt: "One or two sentences shown on cards and as the meta description."
readingTime: "7 min"        # optional — auto-estimated from word count if omitted
featured: true              # optional — promotes it to the home-page hero card
---

Your markdown body. **Bold**, *italics*, lists, > blockquotes,
`code`, and ## headings are all styled to match the site.
```

That's it — the home page, `/blog` index, static params, and metadata all
update automatically from the files in `content/posts/`.

## Adding images to a post

1. Put the image file in `public/images/` (e.g. `public/images/lithium-supply.jpg`).
   Anything in `public/` is served from the site root, so that file is reachable
   at `/images/lithium-supply.jpg`.

2. Reference it in the post's Markdown with standard image syntax — the text in
   the brackets is the alt text (used by screen readers and search engines, so
   describe the image):

   ```markdown
   ![Global lithium supply additions, 2020–2030](/images/lithium-supply.jpg)
   ```

Images are styled in `globals.css` (`.prose img`) to fill the column width with
a rounded border that matches the site.

### Best dimensions

The article column is **664px wide** (the 760px max-width minus 48px padding on
each side). To stay crisp on high-resolution screens, export images at **~2×**
that — roughly **1320–1400px wide** — and let the height follow the image's own
aspect ratio (e.g. 1400×788 for 16:9, 1400×933 for 3:2).

- **Photos:** WebP or AVIF, compressed to keep files under ~300–400 KB.
- **Charts / diagrams:** **SVG is ideal** — vector graphics stay perfectly sharp
  at any size and are tiny. PNG is the fallback for raster charts with text.

### Captions (optional)

Markdown has no caption syntax, and raw HTML in Markdown is stripped by default,
so `<figure>`/`<figcaption>` won't render as-is. To enable them, allow raw HTML
in the pipeline in `lib/posts.ts`:

```ts
// npm install rehype-raw
import rehypeRaw from "rehype-raw";

const processed = await unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSlug)
  .use(rehypeStringify)
  .process(content);
```

Then write a captioned image in the post:

```html
<figure>
  <img src="/images/lithium-supply.jpg" alt="Global lithium supply additions" />
  <figcaption>Source: author analysis, company filings.</figcaption>
</figure>
```

(`.prose figure` / `.prose figcaption` are already styled.) Since you author the
Markdown yourself, enabling raw HTML is safe here.

### A note on `next/image`

Markdown images render as plain `<img>` tags, so they don't get Next.js's
automatic optimization (responsive `srcset`, lazy loading, AVIF/WebP conversion).
For a portfolio blog that's perfectly fine — just export sensibly sized files as
above. If you later want automatic optimization, the path is to convert posts to
MDX (`@next/mdx` or `next-mdx-remote`) and map `img` to the `next/image`
component.

## Notes

- The blog is statically generated at build time (`generateStaticParams`),
  so it deploys cleanly to any static or Node host (Vercel, Netlify, etc.).
- Scroll-reveal animations are handled by the small `Reveal` client component
  using `IntersectionObserver`, so they work across client-side navigations.
