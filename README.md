# Krisztián Náhol — Portfolio

Premium personal portfolio website — a **static, frontend-only** SPA built with React, TypeScript, Tailwind CSS, Framer Motion, and Vite.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** for fast development and static builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations

## Architecture

This is a **static single-page application**. All content lives in `src/data/portfolio.ts` and is bundled at build time.

| Layer | Role |
| --- | --- |
| `src/data/` | Static portfolio content |
| `src/components/` | UI and page sections |
| `src/lib/navigation.ts` | Client-side hash scroll, mailto, and external links |
| `dist/` | Production output (HTML, CSS, JS) for static hosting |


## Features

- Modern SaaS-style dark mode design
- Glassmorphism effects and animated backgrounds
- Fully responsive layout
- SEO-friendly meta tags
- Command palette (`Ctrl+K`)
- Terminal-style `whoami` section
- Smooth scroll animations

## Getting Started

```bash
npm install
npm run dev
```


## Build

```bash
npm run build
npm run preview
```

The `dist/` folder contains everything needed to deploy.

## Deploy

Deploy `dist/` to any static host — no server configuration required:

- **Vercel** — `vercel.json` included; connect repo or run `vercel`
- **Netlify** — `public/_redirects` included for SPA routing
- **GitHub Pages** — upload `dist/` contents or use a CI workflow
- **Cloudflare Pages** — set build command to `npm run build`, output `dist`

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, CommandPalette
│   ├── sections/     # Page sections
│   └── ui/           # Reusable UI components
├── data/             # Static portfolio content
├── lib/              # Client-side utilities (navigation)
├── hooks/            # Custom React hooks
└── types/            # Shared TypeScript types
```
