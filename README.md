# Atherious Labs Website

Premium one-page corporate website for Atherious Labs.

## Live Production
- Website: https://atheriouslabs.com
- Cloudflare Pages project: `atherious-labs-website`
- Production branch: `main`

## Stack
- Next.js
- React
- TypeScript
- Lucide icons
- Custom responsive CSS

## Sections
- Hero
- Flagship Products: LexGlobal BD, ReVector AI
- Coming Soon: Jersey OS, LexWork, Sunshot AI
- Services
- Order / contact CTA with email and social options
- Founder: Md. Nahid Alom — Founder & Director
- 5 board-member slots (intentionally no fake identities)
- Team / employees
- Footer and contact actions

## Run locally
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build
The site uses Next.js static export for Cloudflare Pages.

```bash
npm install
npm run build
```

The generated production site is written to:

```text
out/
```

## Deploy to Cloudflare Pages from CMD
```bash
npx -y wrangler@4.147.0 pages deploy out --project-name=atherious-labs-website --branch=main
```

Custom domain:

```text
atheriouslabs.com
```

### Content note
Board-member identities and company social handles should be replaced only with approved real details before public launch.
