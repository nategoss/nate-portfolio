'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { getPublishedProjects, Project } from '../data/projects'
import { ArrowLeft, Grid, Sparkles, Atom, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const allProjects = await getPublishedProjects()
        setProjects(allProjects)
      } catch (error) {
        console.error('Failed to load projects:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadProjects()
  }, [])

  return (
    <div className="min-h-screen bg-atomic pt-20 relative overflow-hidden theme-transition">
      {/* Atomic Background Elements */}
      <div className="absolute inset-0 atomic-pattern-dots opacity-5" />
      
      <motion.div
        className="absolute top-40 right-20 w-32 h-32 atomic-kidney bg-accent/20"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 atomic-starburst bg-atomic-yellow/30"
        animate={{ 
          rotate: [360, 180, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-6 relative z-10"
      >
        <motion.button
          onClick={() => {
            navigate('/#work')
            // Wait a moment for navigation, then scroll to work section
            setTimeout(() => {
              const workElement = document.getElementById('work')
              if (workElement) {
                workElement.scrollIntoView({ behavior: 'smooth' })
              }
            }, 100)
          }}
          className="inline-flex items-center space-x-3 text-content-primary hover:text-primary transition-colors bg-surface/80 backdrop-blur-sm px-6 py-3 rounded-full atomic-shadow font-bold tracking-wide theme-transition"
          whileHover={{ x: -8, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>BACK TO HOME</span>
        </motion.button>
      </motion.div>

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Floating atomic symbol */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Grid className="w-12 h-12 text-secondary atomic-rotate" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-content-primary leading-none tracking-tight mb-8 theme-transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            ALL{' '}
            <motion.span
              className="text-primary relative inline-block"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              PROJECTS
              <motion.div
                className="absolute -inset-4 atomic-starburst bg-atomic-yellow opacity-20 -z-10"
                initial={{ scale: 0, rotate: 45 }}
                animate={{ scale: 1, rotate: -15 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-content-secondary leading-relaxed max-w-3xl mx-auto font-medium theme-transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive view of my design work, showcasing projects across{' '}
            <span className="text-primary font-bold">UX strategy</span>,{' '}
            <span className="text-secondary font-bold">product design</span>, and{' '}
            <span className="text-accent font-bold">brand development</span>.
          </motion.p>

          {/* Statistics */}
          <motion.div
            className="flex items-center justify-center space-x-8 mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-1">
                {loading ? '...' : projects.length}
              </div>
              <div className="text-sm text-content-tertiary font-medium tracking-wider uppercase theme-transition">
                Total Projects
              </div>
            </div>
            <div className="w-px h-12 bg-atomic-gradient-2" />
            <div className="text-center">
              <div className="text-3xl font-black text-secondary mb-1">
                {loading ? '...' : new Set(projects.map(p => p.category)).size}
              </div>
              <div className="text-sm text-content-tertiary font-medium tracking-wider uppercase theme-transition">
                Categories
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 grid-cards-equal"
          style={{ gridAutoRows: 'minmax(0, 1fr)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {loading ? (
            // Loading skeleton - show 6 skeletons for a full grid
            [...Array(6)].map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                className="bg-surface rounded-3xl p-6 atomic-shadow theme-transition"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="aspect-video bg-neutral rounded-2xl mb-4 animate-pulse" />
                <div className="h-4 bg-neutral rounded mb-2 animate-pulse" />
                <div className="h-3 bg-neutral rounded w-2/3 mb-4 animate-pulse" />
                <div className="h-3 bg-neutral rounded w-full mb-2 animate-pulse" />
                <div className="h-3 bg-neutral rounded w-3/4 animate-pulse" />
              </motion.div>
            ))
          ) : projects.length === 0 ? (
            // Empty state
            <motion.div
              className="col-span-full text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Atom className="w-16 h-16 text-content-tertiary mx-auto mb-6 atomic-rotate" />
              <h3 className="text-2xl font-bold text-content-primary mb-4 theme-transition">
                No Projects Found
              </h3>
              <p className="text-content-secondary theme-transition">
                Projects are being loaded from the content management system.
              </p>
            </motion.div>
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="h-full flex flex-col"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <ProjectCard
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  image={project.thumbnailImage}
                  slug={project.slug}
                  index={index}
                />
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-24 relative"
        >
          {/* Creative background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-100/60 to-green-100/60 dark:from-orange-900/20 dark:to-green-900/20 rounded-3xl theme-transition"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.8 }}
          />
          
          <div className="relative z-10 py-16">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            >
              <div className="w-20 h-20 bg-primary rounded-2xl mx-auto flex items-center justify-center mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-content-primary mb-4 tracking-tight theme-transition">
                READY TO CREATE SOMETHING AMAZING?
              </h3>
              <p className="text-xl text-content-secondary max-w-2xl mx-auto font-medium theme-transition">
                Let's discuss how I can help bring your next project to life through strategic UX design.
              </p>
            </motion.div>

            <motion.button
              onClick={() => {
                navigate('/#contact')
                setTimeout(() => {
                  const contactElement = document.getElementById('contact')
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' })
                  }
                }, 100)
              }}
              className="inline-flex items-center space-x-4 atomic-gradient-1 text-white px-12 py-6 rounded-full font-bold atomic-shadow-lg hover:atomic-shadow-electric transition-all duration-300 tracking-wide text-lg relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-secondary/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">GET IN TOUCH</span>
              <motion.div
                className="relative z-10"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}