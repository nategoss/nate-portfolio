'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Atom, Zap } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { id: 'home', label: 'HOME', section: 'home' },
  { id: 'work', label: 'WORK', section: 'work' },
  { id: 'about', label: 'ABOUT', section: 'about' },
  { id: 'contact', label: 'CONTACT', section: 'contact' }
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHomePage = location.pathname === '/'
  const isWorkPage = location.pathname === '/projects' || location.pathname.startsWith('/case-study/')

  // Enhanced scroll detection
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY
    setIsScrolled(scrollY > 50)
    
    if (!isHomePage) return

    // Get all sections with their positions
    const sections = navItems.map(item => {
      const element = document.getElementById(item.section)
      return {
        id: item.id,
        element,
        offsetTop: element ? element.offsetTop : 0,
        offsetBottom: element ? element.offsetTop + element.offsetHeight : 0
      }
    }).filter(item => item.element)

    if (sections.length === 0) return

    // Calculate which section is currently in view
    const viewportCenter = scrollY + window.innerHeight / 2
    let currentSection = 'home'

    // Handle the top of the page (hero section)
    if (scrollY < 100) {
      currentSection = 'home'
    } else {
      // Find the section that contains the center of the viewport
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.offsetTop <= viewportCenter) {
          currentSection = section.id
          break
        }
      }
    }

    if (currentSection !== activeSection) {
      setActiveSection(currentSection)
    }
  }, [isHomePage, activeSection])

  useEffect(() => {
    if (!isHomePage) {
      // Set active section based on current page
      if (isWorkPage) {
        setActiveSection('work')
      } else {
        setActiveSection('home')
      }
      return
    }

    // Call handleScroll immediately to set initial state
    handleScroll()
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage, isWorkPage, handleScroll])

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveSection(item.id)
    setIsMobileMenuOpen(false)

    if (!isHomePage) {
      // Navigate to home with hash, let Router handle the scrolling
      navigate(`/#${item.section}`)
      return
    }

    // If we're on home page, scroll directly
    const element = document.getElementById(item.section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoClick = () => {
    if (!isHomePage) {
      navigate('/')
    } else {
      setActiveSection('home')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Skip to content link for screen readers */}
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      
      <motion.nav
        role="banner"
        aria-label="Main navigation"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 theme-transition ${
          isScrolled 
            ? 'bg-surface/80 backdrop-blur-xl border-b border-atomic atomic-shadow-lg' 
            : 'bg-surface/60 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Atomic Logo */}
            <motion.button
              className="relative group cursor-pointer"
              onClick={handleLogoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Navigate to home page"
            >
              <motion.div
                className="absolute -inset-3 atomic-starburst bg-atomic-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="logoBackground"
              />
              <motion.div className="relative flex items-center space-x-2">
                <motion.div
                  className="w-10 h-10 atomic-gradient-1 rounded-full flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  aria-hidden="true"
                >
                  <Atom className="w-6 h-6 text-white" aria-hidden="true" />
                </motion.div>
                <div>
                  <span className="text-xl font-bold text-primary">NATE</span>
                  <motion.span 
                    className="text-xl font-bold text-secondary ml-2"
                    animate={{ 
                      textShadow: [
                        "0 0 0px rgba(0, 188, 212, 0)",
                        "0 0 10px rgba(0, 188, 212, 0.5)",
                        "0 0 0px rgba(0, 188, 212, 0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    GOSS
                  </motion.span>
                </div>
              </motion.div>
            </motion.button>
            
            {/* Desktop Navigation with Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-surface/80 backdrop-blur-sm rounded-full p-3 atomic-shadow theme-transition">
                {navItems.map((item, index) => {
                  const isActive = isHomePage 
                    ? activeSection === item.id 
                    : isWorkPage 
                      ? item.id === 'work' 
                      : item.id === 'home'
                  
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`relative px-6 py-3 text-sm font-bold transition-all duration-300 rounded-full tracking-wide theme-transition ${
                        isActive
                          ? 'text-white'
                          : 'text-content-primary hover:text-primary'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavBackground"
                          className="absolute inset-0 atomic-gradient-1 rounded-full atomic-shadow"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        />
                      )}
                      
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Atomic hover indicator */}
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full opacity-0"
                        animate={{ 
                          opacity: isActive ? 0 : 0,
                          scale: isActive ? 0 : 1
                        }}
                        whileHover={{ opacity: 1, scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                    </motion.button>
                  )
                })}
              </div>
              
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              
              {/* Mobile menu button */}
              <motion.button 
                className="p-3 text-content-primary hover:text-primary transition-colors bg-surface rounded-full atomic-shadow theme-transition"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Atomic Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <motion.div
              id="mobile-menu"
              role="navigation"
              aria-label="Mobile navigation menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
              className="absolute right-0 top-0 h-full w-80 bg-surface/95 backdrop-blur-xl atomic-shadow-lg border-l border-atomic theme-transition"
            >
              <div className="p-8 space-y-8 mt-20">
                {/* Menu header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 atomic-gradient-1 rounded-full mx-auto mb-6 flex items-center justify-center atomic-shadow-lg">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Atom className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  <h3 className="font-bold text-content-primary text-lg tracking-wide theme-transition">UX PORTFOLIO</h3>
                </motion.div>

                {/* Menu items */}
                <div className="space-y-3">
                  {navItems.map((item, index) => {
                    const isActive = isHomePage 
                      ? activeSection === item.id 
                      : isWorkPage 
                        ? item.id === 'work' 
                        : item.id === 'home'
                    
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => handleNavClick(item)}
                        className={`w-full text-left p-5 rounded-2xl transition-all duration-300 relative group font-bold tracking-wide theme-transition ${
                          isActive
                            ? 'atomic-gradient-1 text-white atomic-shadow-lg'
                            : 'text-content-primary hover:bg-gray-50 hover:text-primary dark:hover:bg-gray-800 dark:hover:text-primary'
                        }`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-4">
                          <motion.div 
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              isActive ? 'bg-white' : 'bg-primary group-hover:bg-secondary'
                            }`}
                            animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-lg">{item.label}</span>
                        </div>
                        
                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="absolute right-5 top-1/2 transform -translate-y-1/2"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                          >
                            <Zap className="w-5 h-5 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-center pt-8 border-t border-atomic theme-transition"
                >
                  <p className="text-sm text-content-tertiary font-bold tracking-wide theme-transition">
                    UX DESIGN EXPERIENCE
                  </p>
                  <div className="flex justify-center space-x-3 mt-3">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 bg-primary rounded-full"
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          delay: i * 0.3 
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}