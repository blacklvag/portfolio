# Krisztián Náhol — Portfolio

Premium personal portfolio website — a **static, frontend-only** SPA built with React, TypeScript, Tailwind CSS, Framer Motion, and Vite.

No backend, no API keys, and no environment variables required.

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

Contact is handled via native `mailto:` links and GitHub — no form submission service.

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

Open [http://localhost:5173](http://localhost:5173) in your browser.

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

## Customization

Update your personal information in `src/data/portfolio.ts`:

- Contact details (email, GitHub)
- Projects, skills, experience
- Hero content and achievements
