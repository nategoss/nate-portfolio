import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Navigation } from './Navigation'
import { HeroSection } from './HeroSection'
import { WorkSection } from './WorkSection'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { CaseStudyPage } from './CaseStudyPage'
import { getProjectBySlug } from '../data/projects'

// Home page component that includes all sections
function HomePage() {
  const location = useLocation()

  useEffect(() => {
    // Handle hash navigation when coming from other routes
    if (location.hash) {
      // Wait for the DOM to render, then scroll to the section
      const timeoutId = setTimeout(() => {
        const sectionId = location.hash.replace('#', '')
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)

      return () => clearTimeout(timeoutId)
    }
  }, [location.hash])

  return (
    <main>
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

// Case study wrapper that gets project data based on slug
function CaseStudyWrapper() {
  const { slug } = useParams()

  // Scroll to top when loading case study
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Get project data from our projects database
  const project = getProjectBySlug(slug || '')

  // If no project found, redirect to home
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-atomic theme-transition">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-content-primary mb-4 theme-transition">Project Not Found</h1>
          <p className="text-content-secondary mb-8 theme-transition">The project you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="atomic-gradient-1 text-white px-6 py-3 rounded-full font-semibold atomic-shadow hover:atomic-shadow-lg transition-all duration-300 inline-block"
          >
            Return Home
          </a>
        </div>
      </div>
    )
  }

  return <CaseStudyPage project={project} />
}

// Layout component that includes navigation
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-atomic theme-transition">
      <Navigation />
      {children}
    </div>
  )
}

// Main router component with all routes
export function AppRouter() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <HomePage />
          </Layout>
        } 
      />
      <Route 
        path="/case-study/:slug" 
        element={
          <Layout>
            <CaseStudyWrapper />
          </Layout>
        } 
      />
      {/* Fallback route */}
      <Route 
        path="*" 
        element={
          <Layout>
            <HomePage />
          </Layout>
        } 
      />
    </Routes>
  )
}