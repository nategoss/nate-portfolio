'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { getFeaturedProjects } from '../data/projects'
import { Sparkles, Zap } from 'lucide-react'

export function WorkSection() {
  const featuredProjects = getFeaturedProjects()

  return (
    <section id="work" className="py-24 atomic-gradient-bg relative overflow-hidden theme-transition">
      {/* Creative background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-red-200/20 dark:from-orange-400/10 dark:to-red-400/10 rounded-full blur-3xl theme-transition"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-32 left-10 w-48 h-48 bg-gradient-to-br from-green-200/20 to-teal-200/20 dark:from-green-400/10 dark:to-teal-400/10 rounded-full blur-2xl theme-transition"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Creative header with asymmetrical layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <div className="relative">
            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Sparkles className="w-8 h-8 text-accent" />
            </motion.div>

            <div className="text-center max-w-4xl mx-auto">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-6 leading-tight theme-transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Featured{' '}
                <motion.span
                  className="text-primary relative inline-block"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Work
                  <motion.div
                    className="absolute -inset-2 bg-orange-100 dark:bg-orange-900/30 rounded-2xl -z-10 theme-transition"
                    initial={{ scale: 0, rotate: -3 }}
                    whileInView={{ scale: 1, rotate: 2 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  />
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-xl md:text-2xl text-content-secondary leading-relaxed theme-transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A selection of projects that showcase my approach to solving complex design challenges{' '}
                <motion.span className="text-secondary font-semibold relative inline-block">
                  through research, strategy, and thoughtful execution.
                  <motion.div
                    className="absolute -inset-1 bg-blue-200/50 dark:bg-blue-800/30 rounded-lg -z-10 theme-transition"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  />
                </motion.span>
              </motion.p>
            </div>

            {/* Creative subtitle */}
            <motion.div
              className="flex items-center justify-center space-x-3 mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm text-content-tertiary font-medium tracking-wider uppercase theme-transition">
                Design meets Strategy
              </span>
              <Zap className="w-5 h-5 text-accent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced grid with masonry-like layout */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
          ))}
        </motion.div>

        {/* Enhanced CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="text-center mt-20 relative"
        >
          {/* Creative background for CTA */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-50 to-green-50 dark:from-orange-900/20 dark:to-green-900/20 rounded-3xl theme-transition"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 0.8 }}
          />
          
          <div className="relative z-10 py-12">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            >
              <div className="w-16 h-16 bg-primary rounded-2xl mx-auto flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-content-primary mb-2 theme-transition">
                Want to see more?
              </h3>
              <p className="text-content-secondary theme-transition">
                Explore my complete portfolio of design solutions
              </p>
            </motion.div>

            {/* FIXED: Enhanced button with proper contrast in all states */}
            <motion.button
              className="group relative inline-flex items-center space-x-3 border-2 border-primary bg-surface rounded-full font-semibold transition-all duration-300 overflow-hidden atomic-shadow hover:atomic-shadow-lg theme-transition px-10 py-5"
              whileHover={{ 
                scale: 1.05, 
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background fill */}
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.4 }}
              />
              
              {/* FIXED: Text with proper contrast states */}
              <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">
                View All Projects
              </span>
              
              <motion.div
                className="relative z-10 text-primary group-hover:text-white transition-colors duration-300"
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>

              {/* Floating particles effect */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100"
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}