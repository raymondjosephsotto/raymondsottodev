/**
 * main.tsx — Application entry point.
 * Wraps the app with ThemeProvider (React Context) and BrowserRouter.
 * Imports global CSS tokens and base styles.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import App from './App'
import './styles/globals.css'

/* Mount the React app into the #root element */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* ThemeProvider manages light/dark state via React Context */}
    <ThemeProvider>
      {/* BrowserRouter enables client-side routing */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
