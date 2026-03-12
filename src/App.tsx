/**
 * App.tsx — Root application component.
 * Sets up React Router with routes for the home page,
 * individual project detail pages, and a 404 fallback.
 */

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

const App = () => {
  return (
    <>
      {/* Theme toggle — fixed bottom-right, visible on all pages */}
      <ThemeToggle />

      <Routes>
        {/* Home page — all sections composed together */}
        <Route path="/" element={<Home />} />

        {/* Project detail page — dynamic slug from data layer */}
        <Route path="/projects/:slug" element={<ProjectDetail />} />

        {/* Résumé page */}
        <Route path="/resume" element={<Resume />} />

        {/* 404 catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
