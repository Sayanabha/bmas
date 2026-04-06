// src/context/ThemeContext.jsx
// ─────────────────────────────────────────────────────────────
// Dark mode engine for BMAS.
// - Reads saved preference from localStorage on first load
// - Falls back to the user's OS preference (prefers-color-scheme)
// - Saves preference to localStorage on every toggle
// - Sets data-theme attribute on <html> so CSS variables kick in
// ─────────────────────────────────────────────────────────────

import { createContext, useContext, useEffect, useState } from 'react'

// 1. Create the context object
//    This is the "radio station" other components will tune into
const ThemeContext = createContext()

// 2. Helper — figure out what theme to start with
function getInitialTheme() {
  // Check if user has visited before and saved a preference
  const saved = localStorage.getItem('bmas-theme')
  if (saved) return saved  // 'light' or 'dark'

  // First visit — respect their OS dark mode setting
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

// 3. ThemeProvider — wraps the whole app and provides theme state
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // Every time theme changes → update <html> attribute + save to localStorage
  useEffect(() => {
    const root = document.documentElement  // that's the <html> element
    root.setAttribute('data-theme', theme)
    localStorage.setItem('bmas-theme', theme)
  }, [theme])

  // Toggle between light and dark
  function toggleTheme() {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  // 4. Broadcast { theme, toggleTheme } to all children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 5. Custom hook — makes consuming the context clean and easy
//    Usage in any component: const { theme, toggleTheme } = useTheme()
export function useTheme() {
  const context = useContext(ThemeContext)

  // Safety check — if someone uses useTheme() outside ThemeProvider, tell them
  if (!context) {
    throw new Error('useTheme() must be used inside a <ThemeProvider>.')
  }

  return context
}