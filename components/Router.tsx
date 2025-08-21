import { Routes, Route, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Navigation } from './Navigation'
import { HeroSection } from './HeroSection'
import { WorkSection } from './WorkSection'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { CaseStudyPage } from './CaseStudyPage'
import { ProjectsPage } from './ProjectsPage'
import { getProjectBySlug, Project } from '../data/projects'

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
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  // Note: Scroll to top is now handled by the global ScrollToTop component

  // Load project data asynchronously
  useEffect(() => {
    const loadProject = async () => {
      if (!slug) {
        setNotFound(true)
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const projectData = await getProjectBySlug(slug)
        if (projectData) {
          setProject(projectData)
          setNotFound(false)
        } else {
          setNotFound(true)
        }
      } catch (error) {
        console.error('Failed to load project:', error)
        setNotFound(true)
      } finally {
        setLoading(false)
      }
    }

    loadProject()
  }, [slug])

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-atomic theme-transition">
        <div className="text-center">
          <div className="w-16 h-16 atomic-gradient-1 rounded-full animate-spin mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <h1 className="text-xl font-bold text-content-primary mb-2 theme-transition">Loading Case Study</h1>
          <p className="text-content-secondary theme-transition">Please wait while we load the project details...</p>
        </div>
      </div>
    )
  }

  // If no project found, show not found page
  if (notFound || !project) {
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
        path="/projects" 
        element={
          <Layout>
            <ProjectsPage />
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