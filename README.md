# raymondsotto.dev

Personal portfolio site for Raymond Sotto — Front-End Developer with 6 years of experience, growing into Full-Stack Software Engineering.

Built from the ground up with a scalability-first architecture: typed data layer, feature-based folder structure, CSS custom properties theming, and a clean deployment pipeline to GitHub Pages.

Live: **[raymondsotto.dev](https://raymondsotto.dev)**

---

## Features

- **Dark/Light theme** — Fixed toggle button with auto-detection priority chain: saved `localStorage` preference → system `prefers-color-scheme` → local time via `Intl` API
- **Scroll reveal animations** — CSS-only `IntersectionObserver` pattern, no Framer Motion
- **Projects section** — Tabbed Professional/Personal view with featured cards (browser mockup) and compact cards
- **Skills section** — List view with dot indicators + Grid pill view, togglable
- **Workflow timeline** — Vertical on mobile, horizontal on desktop
- **Project detail pages** — `React Router v6` `/projects/:slug` template, ready to expand
- **Typed data layer** — All projects and skills defined once in `.ts` files; adding new entries requires no component changes
- **GitHub Pages SPA routing** — `404.html` redirect trick handles deep-link reloads
- **Custom domain ready** — `CNAME` file included for `raymondsotto.dev`

---

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | React 18 + TypeScript | Fast HMR, first-class TS support |
| Build tool | Vite | Optimal dev/prod build output |
| Routing | React Router v6 | Project detail pages, future expansion |
| Data fetching | SWR | 4KB — ready for GitHub API stats component |
| Styling | CSS Modules + CSS Custom Properties | Scoped component styles, global token theming |
| Deployment | `gh-pages` | `npm run deploy` → published |

---

## File Structure

```
raymondsottodev/
├── public/
│   ├── 404.html              # GitHub Pages SPA redirect — handles deep-link reloads
│   └── CNAME                 # Custom domain: raymondsotto.dev
│
├── src/
│   ├── data/                 # Typed data layer — edit here to add projects/skills
│   │   ├── types.ts          # SkillId union, Project, Skill interfaces
│   │   ├── projects.ts       # All project entries + getProjectsByType/Skill/Slug helpers
│   │   └── skills.ts         # All skill entries + getSkillsByCategory helper
│   │
│   ├── context/
│   │   └── ThemeContext.tsx  # React Context for theme state (ThemeProvider + useTheme)
│   │
│   ├── utils/
│   │   └── theme.ts          # Auto light/dark detection via Intl API; applyTheme()
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts    # IntersectionObserver — adds .in to .reveal elements
│   │   └── useActiveSection.ts   # Tracks which section is in view for nav highlighting
│   │
│   ├── components/           # Shared layout components used across pages
│   │   ├── NavBar/           # Sticky section nav with active-state pill
│   │   ├── Footer/           # Site footer
│   │   └── ThemeToggle/      # Fixed bottom-right light/dark toggle button
│   │
│   ├── features/             # Self-contained section components
│   │   ├── hero/             # Name, role, tagline, social icon links
│   │   ├── about/            # About body text + Stats badges row
│   │   ├── projects/         # Tabs, featured cards, compact cards, browser mockup
│   │   ├── skills/           # List/Grid toggle, daily/familiar/learning categories
│   │   ├── workflow/         # Sprint-to-deploy numbered timeline
│   │   └── contact/          # CTA with email, résumé button, social icons
│   │
│   ├── pages/
│   │   ├── Home.tsx          # "/" — composes all feature sections
│   │   ├── ProjectDetail.tsx # "/projects/:slug" — single project page template
│   │   └── NotFound.tsx      # "*" — 404 fallback
│   │
│   ├── styles/
│   │   └── globals.css       # CSS reset, design tokens (:root + [data-theme="light"]), shared utilities
│   │
│   ├── App.tsx               # Router setup + global ThemeToggle
│   └── main.tsx              # Entry point — ThemeProvider + BrowserRouter
│
├── index.html                # SPA URL-restore script, meta tags, data-theme="dark" default
├── vite.config.ts
├── tsconfig.app.json
└── package.json
```

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/raymondjosephsotto/raymondsottodev.git
cd raymondsottodev

# Install dependencies
npm install

# Start development server (opens browser automatically)
npm run dev
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | TypeScript check + production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all `.ts` / `.tsx` files |
| `npm run deploy` | Build + publish `dist/` to the `gh-pages` branch |

---

## Deployment

The site deploys to GitHub Pages via the `gh-pages` package.

```bash
npm run deploy
```

`predeploy` runs `npm run build` automatically, then `gh-pages -d dist` publishes the output.

### Custom Domain Setup (raymondsotto.dev)

The `CNAME` file in `/public` is already set to `raymondsotto.dev`. To activate the custom domain:

1. **GitHub repo → Settings → Pages**
   - Source: Deploy from a branch → `gh-pages` / `/ (root)`
   - Custom domain: `raymondsotto.dev`
   - Enable **Enforce HTTPS**

2. **DNS records** at your domain registrar:

   | Type | Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | CNAME | `www` | `raymondjosephsotto.github.io` |

---

## Adding a New Project

Edit [`src/data/projects.ts`](src/data/projects.ts) — no component changes needed:

```ts
{
  id: 'my-new-project',
  slug: 'my-new-project',          // used in /projects/:slug URL
  title: 'My New Project',
  status: 'wip',                   // 'live' | 'wip'
  type: 'personal',                // 'professional' | 'personal'
  layout: 'card',                  // 'featured' (with mockup) | 'card' (compact)
  description: 'Project description...',
  skills: ['react', 'typescript'], // SkillId[] — links to skill pills
  repoUrl: 'https://github.com/...',
}
```

---

## Adding a New Skill

Edit [`src/data/skills.ts`](src/data/skills.ts):

```ts
{ id: 'my-skill', label: 'My Skill', category: 'familiar' }
// category: 'daily' | 'familiar' | 'learning'
```

Then add `'my-skill'` to the `SkillId` union in [`src/data/types.ts`](src/data/types.ts).

---

Built by [Raymond Sotto](https://raymondsotto.dev)

```
