/**
 * Environment utilities for reliable environment detection
 * Works in both development and production builds
 */

// Safely access import.meta.env with fallbacks
export const getEnvironment = () => {
  // Try to access Vite's import.meta.env
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return {
        mode: import.meta.env.MODE || 'development',
        prod: import.meta.env.PROD === true,
        dev: import.meta.env.DEV === true,
        baseUrl: import.meta.env.BASE_URL || '/'
      }
    }
  } catch (error) {
    // Fallback if import.meta is not available
    console.warn('import.meta.env not available, using fallback detection')
  }

  // Fallback environment detection
  const isProduction = 
    window.location.hostname.includes('github.io') ||
    window.location.hostname.includes('netlify.app') ||
    window.location.hostname.includes('vercel.app') ||
    process.env.NODE_ENV === 'production'

  return {
    mode: isProduction ? 'production' : 'development',
    prod: isProduction,
    dev: !isProduction,
    baseUrl: '/'
  }
}

// Get the correct basename for routing
export const getBasename = () => {
  const env = getEnvironment()
  
  // For GitHub Pages specifically
  if (env.prod && window.location.hostname.includes('github.io')) {
    return '/nate-portfolio'
  }
  
  // For other production environments or development
  return ''
}

// Check if we're in production
export const isProduction = () => getEnvironment().prod

// Check if we're in development
export const isDevelopment = () => getEnvironment().dev

// Get the current mode
export const getMode = () => getEnvironment().mode