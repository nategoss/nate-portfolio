'use client'

import { motion } from 'framer-motion'
import { Sun, Moon, Atom } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-16 bg-surface border-2 border-atomic rounded-full atomic-shadow hover:atomic-shadow-lg transition-all duration-300 flex items-center justify-center theme-transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      role="switch"
      aria-checked={theme === 'dark'}
    >
      {/* Background atomic animation */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: theme === 'light' 
            ? 'linear-gradient(135deg, #FFEB3B 0%, #FF6B35 100%)'
            : 'linear-gradient(135deg, #1E2328 0%, #37474F 100%)'
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Rotating atomic symbol background */}
      <motion.div
        className="absolute inset-2 rounded-full border border-primary/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Icon container */}
      <motion.div
        className="relative z-10 w-8 h-8 flex items-center justify-center"
        animate={{
          rotateY: theme === 'light' ? 0 : 180
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {theme === 'light' ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="text-gray-900 dark:text-gray-800"
            style={{ color: "var(--color-atomic-dark)" }}
          >
            <Sun className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="text-atomic-yellow"
          >
            <Moon className="w-6 h-6" />
          </motion.div>
        )}
      </motion.div>
      
      {/* Atomic particles */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary rounded-full"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.4, 0.8]
        }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      />
    </motion.button>
  )
}