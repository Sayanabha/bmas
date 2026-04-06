// src/components/Navbar.jsx

import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import { Sun, Moon, Droplets } from 'lucide-react'
import styles from '../styles/Navbar.module.css'

const NAV_LINKS = [
  { label: 'About',      href: '#about'  },
  { label: 'Why Shorbot', href: '#why'   },
  { label: 'Donate',     href: '#donate' },
  { label: 'Socials',    href: '#socials'},
]

function ThemeIcon({ theme }) {
  if (theme === 'light') {
    return <Moon size={18} strokeWidth={2} />
  }
  return <Sun size={18} strokeWidth={2} />
}

function ThemeTitle({ theme }) {
  if (theme === 'light') {
    return 'Switch to dark mode'
  }
  return 'Switch to light mode'
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function handleNavClick(e, href) {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const offset = 80
    const top = target.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const navbarClass = [
    styles.navbar,
    scrolled ? styles.scrolled : ''
  ].join(' ')

  const hamburgerClass = [
    styles.hamburger,
    menuOpen ? styles.open : ''
  ].join(' ')

  const mobileMenuClass = [
    styles.mobileMenu,
    menuOpen ? styles.open : ''
  ].join(' ')

  return (
    <div>
      <nav className={navbarClass}>
        <div className={styles.inner}>

          
          <a
            href="#hero"
            className={styles.logo}
            onClick={function(e) { handleNavClick(e, '#hero') }}
          >
            <span className={styles.logoEmoji}>🥤</span>
            <span className={styles.logoText}>
              BM<span>A</span>S
            </span>
          </a>

          <ul className={styles.navLinks}>
            {NAV_LINKS.map(function(link) {
              return (
                <li key={link.href}>
                  
                  <a
                    href={link.href}
                    onClick={function(e) { handleNavClick(e, link.href) }}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className={styles.controls}>

            <button
              className={styles.themeBtn}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              title={ThemeTitle({ theme })}
            >
              <ThemeIcon theme={theme} />
            </button>

            
            <a
              href="#donate"
              className={styles.ctaBtn}
              onClick={function(e) { handleNavClick(e, '#donate') }}
            >
              <Droplets size={15} strokeWidth={2.5} />
              Buy a Shorbot
            </a>

            <button
              className={hamburgerClass}
              onClick={function() { setMenuOpen(function(prev) { return !prev }) }}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>
      </nav>

      <div className={mobileMenuClass}>
        {NAV_LINKS.map(function(link) {
          return (
            
            <a
              key={link.href}
              href={link.href}
              onClick={function(e) { handleNavClick(e, link.href) }}
            >
              {link.label}
            </a>
          )
        })}
        
        <a
          href="#donate"
          onClick={function(e) { handleNavClick(e, '#donate') }}
          style={{ color: 'var(--color-primary)' }}
        >
          🥤 Buy a Shorbot
        </a>
      </div>
    </div>
  )
}