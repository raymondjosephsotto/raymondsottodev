/**
 * theme.ts — Auto light/dark mode detection using the Browser Intl API.
 * No external API calls, no IP geolocation — works offline.
 * Priority: localStorage preference → system prefers-color-scheme → time-based fallback.
 */

/* Storage key for persisted theme preference */
const STORAGE_KEY = 'rs-theme'

/* Valid theme values */
export type Theme = 'light' | 'dark'

/**
 * Detect whether it's daytime based on user's local timezone.
 * Uses Intl API to get the local hour — 6am to 8pm is "day".
 */
export function isDaytime(): boolean {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
  const hour = Number(
    new Date().toLocaleString('en-US', { timeZone: tz, hour: 'numeric', hour12: false })
  )
  return hour >= 6 && hour < 20
}

/**
 * Resolve the initial theme using the priority chain:
 * 1. Saved localStorage preference (user's manual toggle always wins)
 * 2. System prefers-color-scheme media query
 * 3. Time-based fallback via Intl API
 */
export function getInitialTheme(): Theme {
  /* Check localStorage for a persisted preference */
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved

  /* Check system preference via media query */
  if (typeof window !== 'undefined' && window.matchMedia) {
    if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  }

  /* Fallback: use local time to decide */
  return isDaytime() ? 'light' : 'dark'
}

/**
 * Apply theme to the document root and persist to localStorage.
 * Toggles the `data-theme` attribute that drives CSS custom properties.
 */
export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(STORAGE_KEY, theme)
}
