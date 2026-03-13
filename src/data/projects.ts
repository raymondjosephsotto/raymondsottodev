/**
 * projects.ts — All project data for the portfolio.
 * Adding a new project is just adding an entry here — no component changes needed.
 * The `skills` array links each project to skill pills for cross-filtering.
 */

import type { Project } from './types'

/* Master list of all projects, ordered by display priority */
export const projects: Project[] = [
  /* ── Professional projects ── */
  {
    id: 'penn-foster',
    slug: 'penn-foster',
    title: 'Penn Foster Web Platform',
    status: 'live',
    type: 'professional',
    layout: 'featured',
    description:
      "Front-end development for Penn Foster's student-facing platform. Built reusable UI components, maintained the design system, improved Core Web Vitals, and contributed SEO enhancements across a Sitecore CMS environment.",
    skills: ['javascript', 'scss', 'nunjucks', 'npm', 'sitecore', 'csharp'],
    siteUrl: 'https://pennfoster.edu',
    imageUrl: 'images/pennfoster.png',
    mockupUrl: 'https://www.pennfoster.edu/',
    detailContent:
      'Penn Foster is a production environment with real scale: a live student-facing platform where performance, accessibility, and cross-browser consistency aren\'t optional. I\'ve been the front-end developer on this platform since January 2023, building and maintaining the UI layer that hundreds of thousands of students interact with every day.\n\nMy workflow follows a two-week Agile sprint cycle. I analyze incoming designs, break them into components, assess what can be extended from the existing system versus what needs to be built new, and estimate effort before any code is written. When a sprint is active, I build in a custom Nunjucks boilerplate: semantic HTML, modular SCSS, and Vanilla JS compiled to production assets via Gulp. Every component I ship becomes the reference markup that back-end engineers use to wire into Sitecore MVC templates. Clean, readable front-end code isn\'t just good practice here. It directly determines how smooth the back-end integration goes.\n\nBeyond component work, I\'ve contributed meaningfully to Core Web Vitals performance improvements, maintained and extended the team\'s design system, and implemented SEO enhancements aligned to content strategy. I also handle code reviews for front-end PRs and contribute to accessibility audits across the platform.',
  },
  {
    id: 'mindhues',
    slug: 'mindhues',
    title: 'Mindhues',
    status: 'live',
    type: 'professional',
    layout: 'featured',
    description:
      'Mental health platform built for licensed therapists, overseeing 1,000+ sessions monthly. Collaborated with Blennd to build a custom WordPress theme with provider filters and micro-animations for a scalable, youth-focused platform.',
    skills: ['wordpress', 'javascript', 'scss', 'gsap'],
    siteUrl: 'https://mindhues.com',
    mockupUrl: 'mindhues.com',
    imageUrl: 'images/mindhues.png',
    screenshots: [
      'images/mindhues/mindhues-6.png',
      'images/mindhues/mindhues-7.png',
      'images/mindhues/mindhues-1.png',
      'images/mindhues/mindhues-2.png',
      'images/mindhues/mindhues-3.png',
      'images/mindhues/mindhues-4.png',
      'images/mindhues/mindhues-5.png',
    ],
    detailContent:
      'Mindhues needed a platform that could carry both the emotional weight of the brand and the practical complexity of connecting youth with licensed therapists. Working with the Blennd team, I built a custom WordPress theme from the ground up. No off-the-shelf parent theme, just a clean, intentional architecture built to match the design system and scale with the platform.\n\nThe most technically demanding piece was the provider filter system. Therapists needed to be surfaced dynamically based on specialty, location, and availability, so I built a custom filtering UI in Vanilla JavaScript, keeping filter state in the URL for shareable and bookmarkable results. The filter connected to custom post type data registered in WordPress, with AJAX-driven updates to avoid full-page reloads.\n\nMicro-animations throughout the site were built with GSAP: scroll-triggered entrance transitions, hover states on provider cards, and a hero sequence that establishes the brand tone without distracting from the content. Every animation was profiled for performance: anything that degraded Largest Contentful Paint was cut or deferred. The result is a platform that feels alive and intentional without costing the user anything in load time.',
  },
  {
    id: 'corjl',
    slug: 'corjl',
    title: 'Corjl',
    status: 'live',
    type: 'professional',
    layout: 'featured',
    description:
      'SaaS platform allowing designers and creators to sell customizable products online. Led the Corjl 2.0 redesign at Blennd, from strategy and UX to development for a creative entrepreneur audience.',
    skills: ['wordpress', 'javascript', 'scss'],
    siteUrl: 'https://www.corjl.com/',
    imageUrl: 'images/corjl.png',
    screenshots: [
      'images/corjl/corjl-1.png',
      'images/corjl/corjl-2.png',
      'images/corjl/corjl-3.png',
      'images/corjl/corjl-4.png',
    ],
    detailContent:
      'Corjl 2.0 was a full redesign effort at Blennd. I led front-end development from kickoff to launch. The brief was to build a site that could speak to three distinct audiences: designers, fulfillment partners, and small businesses, without diluting the message for any of them.\n\nI built the entire front-end on a custom WordPress theme. The central challenge was persona routing: different user types needed to quickly identify where they belonged and find relevant content without friction. I implemented a landing section with distinct entry points per persona, backed by clear content hierarchy and IA decisions shaped during the strategy phase. Custom post types and ACF fields gave the marketing team editorial control without touching templates.\n\nVisually, the design leaned hard into creator aesthetics: bold typography, vibrant color use, and layered motion. I used GSAP for key transitions and scroll-driven animations, keeping things fluid without adding unnecessary JavaScript overhead to routes where it wasn\'t needed. The full build, from blank theme to production deploy, came in under the sprint timeline.',
  },
  {
    id: 'inflowcx',
    slug: 'inflowcx',
    title: 'InflowCX',
    status: 'live',
    type: 'professional',
    layout: 'card',
    description:
      'Web redesign for a leading CaaS/CCaaS provider. Audited 1,000+ pages to eliminate orphan content, restructured information architecture, and built a conversion-focused site with clear service navigation.',
    skills: ['wordpress', 'javascript', 'scss'],
    siteUrl: 'https://inflowcx.com',
    imageUrl: 'images/inflowcx.png',
    screenshots: [
      'images/inflowcx/inflowcx-1.png',
      'images/inflowcx/inflowcx-2.png',
      'images/inflowcx/inflowcx-3.png',
      'images/inflowcx/inflowcx-4.png',
    ],
    detailContent:
      'InflowCX had grown into a site of over 1,000 pages, many of them orphaned, duplicated, or buried without navigation access. High traffic was landing on dead-end pages with no clear path forward, and conversion was suffering despite strong inbound volume. My work started before any design did: a full sitemap audit, cataloging every URL, evaluating relevance, flagging redundancies, and grouping content into a coherent architecture that the new templates could be built around.\n\nOnce the IA was locked, I built the new site in WordPress, using a custom theme with purpose-built templates for services, solutions, and industry verticals. The front-end was engineered specifically for a B2B conversion journey: clear service navigation, strong and strategically placed CTAs, and a content hierarchy that matched how CaaS and CCaaS buyers actually evaluate vendors. Every page had an answer to "what does this user do next?"\n\nI also implemented schema markup and on-page SEO enhancements across the rebuilt page set, aligned to the restructured content architecture. The final site was a fraction of the original page count, with a navigation structure that consistently surfaced the right content to the right visitor.',
  },
  {
    id: 'amicus',
    slug: 'amicus',
    title: 'Amicus Chemical Solutions',
    status: 'live',
    type: 'professional',
    layout: 'card',
    description:
      'Corporate web presence for a leading provider of polymer and bentonite products for the construction and drilling sectors. Highlights a broad product portfolio and contractor partnerships.',
    skills: ['wordpress', 'javascript', 'scss'],
    siteUrl: 'https://amicuscdp.com',
    imageUrl: 'images/amicus.png',
    detailContent:
      'Amicus had a dense product catalog spanning multiple application areas, including foundation drilling, tunneling, horizontal directional drilling, and soil mixing, and needed a web presence that made that complexity navigable for contractor audiences evaluating vendors quickly in the field.\n\nBuilt on WordPress with a custom theme, I structured the site around a clear product taxonomy. Categories, subcategories, and application-specific groupings were registered as custom post types, letting the site surface the right polymer or bentonite product for a given job type without requiring the user to dig. Each template, covering product pages, application guides, and contractor resources, was built from scratch and optimized for the kind of no-frills, fast decision-making that characterizes B2B procurement.\n\nSCSS was organized in a modular BEM structure for long-term maintainability. All JavaScript was written in Vanilla ES6+, with no framework overhead on a site where performance and simplicity were the right call. The build went through thorough cross-browser QA before handoff, including testing on the older browsers common in industrial contractor environments.',
  },

  /* ── Personal projects ── */
  {
    id: 'event-explorer',
    slug: 'event-explorer',
    title: 'Event Explorer',
    status: 'live',
    type: 'personal',
    layout: 'featured',
    description:
      'A location-aware event discovery app powered by the Ticketmaster API. Features IP-based geolocation, debounced search with city-variant matching, category filtering, and automatic pagination, all built with React 19, TypeScript, Material UI, and TanStack Query.',
    skills: ['react', 'typescript', 'rest-api'],
    siteUrl: 'https://raymondjosephsotto.github.io/event-explorer/',
    mockupUrl: 'raymondjosephsotto.github.io/event-explorer',
    imageUrl: 'images/event-explorer.png',
    detailContent:
      'Event Explorer is a responsive single-page application that surfaces upcoming live events near the user. On load, the app resolves the visitor\'s location through an IP-based geolocation service, with no browser permissions required, and immediately fetches relevant events within a 50-mile radius from the Ticketmaster Discovery API. Users can also search by keyword or city name, with results merged, deduplicated, and sorted in real time.\n\nThe search system uses a dual-path strategy: keyword queries find matching artists and event names while city-variant matching broadens location results automatically. Searching "New York" also picks up events listed under "New York City." All searches are debounced and synced to the URL for easy sharing.\n\nBrowsing is organized into a hero carousel that highlights trending events, a masonry grid of upcoming shows, and a scrollable category chip bar for quick filtering by genre. Sorting options, skeleton loading states, and a scroll-to-top button round out the user experience.\n\nUnder the hood, TanStack Query handles server-state caching, background refetching, and automatic next-page prefetching so pagination feels instant. The entire front end is built with React 19, TypeScript, and Material UI, bundled with Vite, and deployed to GitHub Pages through a CI pipeline that runs tests before every deploy.',
  },
  {
    id: 'travelog',
    slug: 'travelog',
    title: 'Travelog',
    status: 'live',
    type: 'personal',
    layout: 'featured',
    description:
      'A full-stack MERN travel journal app. Users register, upload images, and share travel posts. React frontend deployed on Firebase, Node/Express API on Heroku, MongoDB for data storage.',
    skills: ['react', 'nodejs', 'express', 'mongodb', 'firebase'],
    siteUrl: 'https://travelog-mern.web.app',
    mockupUrl: 'travelog-mern.web.app',
    imageUrl: 'images/travelog.png',
    detailContent:
      'Travelog was my first deliberate push into full-stack territory, built to own the entire application layer, not just the front end. The goal was to understand how authentication, file handling, and data persistence actually work at the server level, then build a front end that accounts for all of it.\n\nThe back end is a Node/Express REST API with JWT-based authentication. Users register, receive a signed token, and every protected route validates that token before touching the database. Image uploads are handled on the server using Multer, with files stored and served from the back-end layer. MongoDB manages the data model: user accounts, posts, and image references, structured with Mongoose schemas for type consistency.\n\nThe React front end handles auth state globally, persists the JWT in local storage, and conditionally renders UI based on the user\'s session. Protected routes redirect unauthenticated users without server round-trips. The front end is deployed on Firebase Hosting; the API runs on Heroku. Two environments, one coherent system, and I built both sides.',
  },
  {
    id: 'pebble',
    slug: 'pebble',
    title: 'Pebble',
    status: 'wip',
    type: 'personal',
    layout: 'featured',
    description:
      'A Budgeting app made to simplify money management. A full-stack build designed to own the entire application layer, not just the UI. React 19 front-end, Express REST API, MongoDB data layer, and JWT authentication from scratch. The goal is to internalize what back-end engineers deal with and write front-end code that genuinely accounts for it.',
    skills: ['react', 'typescript', 'nodejs', 'tanstack-query', 'vite'],
    mockupUrl: 'localhost:5173',
  },
]

/* Helper: filter projects by type (used by project tabs) */
export const getProjectsByType = (type: Project['type']): Project[] =>
  projects.filter((p) => p.type === type)

/* Helper: filter projects that use a specific skill (used by skill pill linking) */
export const getProjectsBySkill = (skillId: Project['skills'][number]): Project[] =>
  projects.filter((p) => p.skills.includes(skillId))

/* Helper: find a single project by its URL slug (used by project detail page) */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)
