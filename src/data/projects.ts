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
    skills: ['javascript', 'scss', 'nunjucks', 'gulp', 'sitecore', 'csharp'],
    siteUrl: 'https://pennfoster.edu',
    imageUrl: '/images/pennfoster.png',
    mockupUrl: 'https://www.pennfoster.edu/',
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
    imageUrl: '/images/mindhues.png',
    detailContent:
      'Mindhues was established by licensed therapists with a primary mission to deliver top-tier, effective care. The organization ensures providers uphold rigorous standards through clinical supervision and training, earning the trust of influential partners like I Matter. This approach has driven significant impact, with Mindhues overseeing more than 1000 sessions monthly, underscoring its role in expanding youth access to mental health care and achieving high client satisfaction.\n\nIn collaboration with Blennd, the team utilized a custom-built WordPress theme as the content management system for Mindhues. They integrated customized provider filters to enhance user experience, while micro animations were strategically added to create a dynamic and visually captivating platform. This modern, scalable architecture has laid a solid foundation for Mindhues to extend its reach and effectively engage with youth beyond Colorado.',
  },
  {
    id: 'corjl',
    slug: 'corjl',
    title: 'Corjl',
    status: 'live',
    type: 'professional',
    layout: 'featured',
    description:
      'SaaS platform allowing designers and creators to sell customizable products online. Led the Corjl 2.0 redesign at Blennd — from strategy and UX to development for a creative entrepreneur audience.',
    skills: ['wordpress', 'javascript', 'scss'],
    siteUrl: 'https://www.corjl.com/',
    imageUrl: '/images/corjl.png',
    detailContent:
      'Corjl is a powerful software solution enabling designers to sell customizable products through various online marketplaces. In 2022, Corjl introduced Corjl 2.0, expanding its reach to asset creators, fulfillment partners, and small businesses.\n\nBlennd led the redesign with a thorough strategy and research phase — identifying key features, communication strategy, and reimagining a modern design system. The redesigned site was crafted to appeal to artists and creators, employing artistic design elements, vibrant colors, and thoughtful animations to highlight the platform\'s features and direct different user personas to the right areas of the site.',
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
    imageUrl: '/images/amicus.png',
    detailContent:
      'AMICUS Chemical Solutions stands at the forefront of the industry, celebrated for its exceptional polymer and bentonite products and additives essential to the construction and drilling sectors. With a robust portfolio encompassing a wide array of products, the company delivers superior technical expertise and specialized equipment tailored to diverse applications.\n\nAMICUS collaborates closely with contractors engaged in complex construction projects, ranging from foundation drilled shafts and diaphragm slurry walls to tunneling, soil mixing, horizontal directional drilling, and micropiles. Their comprehensive offerings and collaborative approach ensure sustainable, efficient, and high-performance solutions for complex infrastructure challenges.',
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
    imageUrl: '/images/inflowcx.png',
    detailContent:
      'As a prominent provider in the CaaS and CCaaS technology sector, Inflow Communications needed a significant web redesign to stay competitive. Their existing website comprised over 1,000 pages, many of which were un-nested orphan pages, significantly degrading the user experience. Despite high site traffic, poor navigation and unclear service descriptions led to low conversion rates.\n\nIn collaboration with Blennd, the team developed a comprehensive website strategy — conducting a thorough sitemap audit, cataloging every page, evaluating relevance, and grouping content to identify necessary templates. The result was a streamlined, user-friendly sitemap with organized breadcrumb systems and relevant content, enhancing user navigation and engagement.',
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
      'A location-aware event discovery app powered by the Ticketmaster API. Features IP-based geolocation, debounced search with city-variant matching, category filtering, and automatic pagination — all built with React 19, TypeScript, Material UI, and TanStack Query.',
    skills: ['react', 'typescript', 'rest-api'],
    siteUrl: 'https://raymondjosephsotto.github.io/event-explorer/',
    mockupUrl: 'raymondjosephsotto.github.io/event-explorer',
    imageUrl: '/images/event-explorer.png',
    detailContent:
      'Event Explorer is a responsive single-page application that surfaces upcoming live events near the user. On load, the app resolves the visitor\'s location through an IP-based geolocation service — no browser permissions required — and immediately fetches relevant events within a 50-mile radius from the Ticketmaster Discovery API. Users can also search by keyword or city name, with results merged, deduplicated, and sorted in real time.\n\nThe search system uses a dual-path strategy: keyword queries find matching artists and event names while city-variant matching broadens location results automatically — so searching "New York" also picks up events listed under "New York City." All searches are debounced and synced to the URL for easy sharing.\n\nBrowsing is organized into a hero carousel that highlights trending events, a masonry grid of upcoming shows, and a scrollable category chip bar for quick filtering by genre. Sorting options, skeleton loading states, and a scroll-to-top button round out the user experience.\n\nUnder the hood, TanStack Query handles server-state caching, background refetching, and automatic next-page prefetching so pagination feels instant. The entire front end is built with React 19, TypeScript, and Material UI, bundled with Vite, and deployed to GitHub Pages through a CI pipeline that runs tests before every deploy.',
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
    imageUrl: '/images/travelog.png',
    detailContent:
      'The Travelog project is a comprehensive fullstack web application enabling users to register accounts, upload images, and share textual content for personal travel documentation.\n\nBuilt with the MERN Stack — MongoDB for flexible data storage, ExpressJS for server-side operations, ReactJS for the frontend, and NodeJS for scalable backend functionality. Key features include file upload, authentication, and authorization. The frontend is hosted on Firebase for fast global access, and the backend runs on Heroku for stable, scalable data management.',
  },
  {
    id: 'fullstack-app',
    slug: 'fullstack-app',
    title: 'Full-Stack App — In Progress',
    status: 'wip',
    type: 'personal',
    layout: 'featured',
    description:
      'A personal project built to close the gap between front-end specialist and full-stack engineer. React front-end, Node/Express API, MongoDB. Going end-to-end.',
    skills: ['react', 'typescript', 'nodejs', 'mongodb', 'express'],
    mockupUrl: 'localhost:5173',
  },
  {
    id: 'project-b',
    slug: 'project-b',
    title: 'Project B — In Progress',
    status: 'wip',
    type: 'personal',
    layout: 'card',
    description:
      'Another personal build pushing toward full-stack competency. Focused on clean architecture and real-world patterns.',
    skills: ['firebase', 'javascript', 'rest-api'],
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
