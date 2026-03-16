/**
 * components.ts — Notable UI components built across projects.
 * Add a new entry here to have it appear in the Components tab.
 */

import type { ComponentItem } from './types'

/* Master list of all component showcase entries */
export const components: ComponentItem[] = [
    {
        id: 'github-stats-widget',
        title: 'GitHub Stats Widget',
        description: 'A published npm React component that displays live GitHub profile stats — repos, commits, PRs, stars, a contribution heatmap, and top languages. Plug-and-play: point it at your own API endpoint and drop it into any portfolio.',
        skills: ['react', 'typescript', 'vite', 'rest-api'],
        url: 'https://github.com/raymondjosephsotto/github-stats-widget',
        imageUrl: 'images/component-showcase/github-stats-widget.png',
    },
    {
        id: 'pf-tuition-calculator',
        title: 'Tuition Calculator',
        description: "Built for Penn Foster's student-facing platform. Students select a program of interest and project their total cost under monthly or pay-in-full plans — including potential savings. Backed by a custom range input that required precise logic to keep the UI value, calculated totals, and payment breakdowns in sync.",
        skills: ['javascript', 'scss', 'html'],
        url: 'https://www.pennfoster.edu/tuition-calculator',
        imageUrl: 'images/component-showcase/pf-tuition-calculator.png',
    },
    {
        id: 'pf-video-carousel',
        title: 'Video Carousel',
        description: "Built for Penn Foster's high school diploma page, showcasing real graduate stories via embedded YouTube Shorts. Features left/right swipe navigation modeled after the gesture-driven interactions common in mobile social media — bringing a familiar, engaging UX pattern to a web context.",
        skills: ['javascript', 'scss', 'html'],
        url: 'https://www.pennfoster.edu/high-school/diploma',
        imageUrl: 'images/component-showcase/pf-video-carousel.png',
    },

]

/* Helper: get all components (used by the Components tab) */
export const getAllComponents = (): ComponentItem[] => components
