/**
 * ThemeContext.tsx — Global theme state via React Context.
 * Provides current theme and toggle function to all components.
 * No external state library needed — Context handles this cleanly for a portfolio.
 */

/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { ReactNode } from 'react'
import { getInitialTheme, applyTheme } from '../utils/theme'
import type { Theme } from '../utils/theme'

/* Shape of the context value */
interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

/* Create context with undefined default — will be provided by ThemeProvider */
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

/* Provider component — wraps the app and manages theme state */
export function ThemeProvider({ children }: { children: ReactNode }) {
  /* Initialize theme from the priority chain (localStorage → system → time) */
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  /* Apply theme to DOM whenever it changes */
  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  /* Toggle between light and dark — persists automatically via applyTheme */
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/* Hook for consuming theme — throws if used outside provider */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
