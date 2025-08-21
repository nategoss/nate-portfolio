'use client'

import { motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Target, ExternalLink, TrendingUp, Award, Building, Atom, Zap, Sparkles } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Project } from '../data/projects'

interface CaseStudyPageProps {
  project: Project
}

export function CaseStudyPage({ project }: CaseStudyPageProps) {
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-atomic pt-20 relative overflow-hidden theme-transition">
      {/* Atomic Background Elements */}
      <div className="absolute inset-0 atomic-pattern-starburst opacity-5" />
      
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
            // Use browser history to go back to wherever the user came from
            navigate(-1)
          }}
          className="inline-flex items-center space-x-3 text-content-primary hover:text-primary transition-colors bg-surface/80 backdrop-blur-sm px-6 py-3 rounded-full atomic-shadow font-bold tracking-wide theme-transition"
          whileHover={{ x: -8, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>BACK TO PORTFOLIO</span>
        </motion.button>
      </motion.div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 relative"
            >
              {/* Floating atomic symbol */}
              <motion.div
                className="absolute -top-8 -left-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Atom className="w-8 h-8 text-secondary atomic-rotate" />
              </motion.div>

              <div className="text-sm font-bold text-primary uppercase tracking-[0.2em] bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-full inline-block theme-transition">
                {project.category}
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-content-primary leading-none tracking-tight theme-transition">
                {project.title}
                <motion.div
                  className="inline-block ml-4 w-16 h-16 atomic-starburst bg-atomic-yellow opacity-60"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </h1>
              
              <p className="text-xl md:text-2xl text-content-secondary leading-relaxed max-w-2xl font-medium theme-transition">
                {project.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-video rounded-3xl overflow-hidden atomic-gradient-bg p-4 atomic-shadow-lg relative"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden atomic-shadow">
                <ImageWithFallback
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Atomic decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full opacity-80"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>

          {/* Project Metadata with Atomic Styling */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-surface rounded-3xl p-8 space-y-8 atomic-shadow-lg relative overflow-hidden theme-transition">
              {/* Background pattern */}
              <div className="absolute inset-0 atomic-pattern-dots opacity-5" />
              
              <div className="relative z-10">
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-content-primary tracking-wide theme-transition">PROJECT DETAILS</h3>
                </motion.div>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-2xl theme-transition"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 atomic-gradient-1 rounded-2xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-content-tertiary font-bold uppercase tracking-wide theme-transition">Year</div>
                      <div className="font-bold text-content-primary text-lg theme-transition">{project.year}</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-2xl theme-transition"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 atomic-gradient-2 rounded-2xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-content-tertiary font-bold uppercase tracking-wide theme-transition">Duration</div>
                      <div className="font-bold text-content-primary text-lg theme-transition">{project.duration}</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl theme-transition"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 atomic-gradient-3 rounded-2xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-content-tertiary font-bold uppercase tracking-wide theme-transition">Team Size</div>
                      <div className="font-bold text-content-primary text-lg theme-transition">{project.team}</div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center space-x-4 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-2xl theme-transition"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-12 h-12 bg-atomic-pink rounded-2xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-content-tertiary font-bold uppercase tracking-wide theme-transition">My Role</div>
                      <div className="font-bold text-content-primary text-lg theme-transition">{project.role}</div>
                    </div>
                  </motion.div>

                  {project.client && (
                    <motion.div 
                      className="flex items-center space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl theme-transition"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-12 h-12 bg-atomic-yellow rounded-2xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-gray-900 dark:text-gray-900" />
                      </div>
                      <div>
                        <div className="text-sm text-content-tertiary font-bold uppercase tracking-wide theme-transition">Client</div>
                        <div className="font-bold text-content-primary text-lg theme-transition">{project.client}</div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {project.tools && project.tools.length > 0 && (
                  <div className="pt-8 border-t-2 border-atomic theme-transition">
                    <div className="text-sm text-content-tertiary mb-4 font-bold uppercase tracking-wide theme-transition">Atomic Tools</div>
                    <div className="flex flex-wrap gap-3">
                      {project.tools.map((tool, index) => (
                        <motion.span
                          key={tool}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-atomic-yellow text-gray-900 dark:text-gray-900 rounded-full text-sm font-bold border-2 border-atomic-yellow/50 hover:border-primary transition-all duration-200 cursor-default tracking-wide"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}

                {(project.liveUrl || project.prototypeUrl) && (
                  <div className="pt-8 border-t-2 border-atomic theme-transition space-y-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 atomic-gradient-1 text-white px-6 py-4 rounded-full font-bold atomic-shadow hover:atomic-shadow-lg transition-all duration-300 tracking-wide"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>VIEW LIVE SITE</span>
                      </motion.a>
                    )}
                    
                    {project.prototypeUrl && (
                      <motion.a
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-3 atomic-gradient-2 text-white px-6 py-4 rounded-full font-bold atomic-shadow hover:atomic-shadow-lg transition-all duration-300 block tracking-wide"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>VIEW PROTOTYPE</span>
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      {project.overview && (
        <section className="py-24 atomic-gradient-bg relative theme-transition">
          <div className="absolute inset-0 atomic-pattern-dots opacity-10" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                className="flex justify-center mb-8"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
              >
                <Zap className="w-12 h-12 text-secondary atomic-pulse" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-8 tracking-tight theme-transition">
                PROJECT <span className="text-primary">OVERVIEW</span>
              </h2>
              <p className="text-xl md:text-2xl text-content-secondary leading-relaxed font-medium theme-transition">
                {project.overview}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Problem Statement */}
      {project.problem && (
        <section className="py-24 bg-surface relative overflow-hidden theme-transition">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 atomic-kidney bg-primary/10"
            animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-8 tracking-tight theme-transition">
                THE <span className="text-atomic-pink">CHALLENGE</span>
              </h2>
              <p className="text-xl md:text-2xl text-content-secondary leading-relaxed font-medium theme-transition">
                {project.problem}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Solution */}
      {project.solution && (
        <section className="py-24 bg-green-50 dark:bg-green-900/10 relative theme-transition">
          <div className="absolute inset-0 atomic-pattern-starburst opacity-5" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-8 tracking-tight theme-transition">
                THE <span className="text-accent">SOLUTION</span>
              </h2>
              <p className="text-xl md:text-2xl text-content-secondary leading-relaxed font-medium theme-transition">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Process */}
      {project.process && project.process.length > 0 && (
        <section className="py-24 bg-surface theme-transition">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-8 tracking-tight theme-transition">
                DESIGN <span className="text-electric">PROCESS</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-atomic-gradient-bg rounded-3xl p-8 text-center atomic-shadow hover:atomic-shadow-lg transition-all duration-300 relative overflow-hidden theme-transition"
                >
                  <div className="absolute inset-0 atomic-pattern-dots opacity-5" />
                  <motion.div 
                    className="w-16 h-16 atomic-gradient-1 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-6 atomic-shadow relative z-10"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="font-bold text-content-primary mb-2 text-lg tracking-wide relative z-10 theme-transition">{step}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <section className="py-24 atomic-gradient-bg relative theme-transition">
          <div className="absolute inset-0 atomic-pattern-starburst opacity-10" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-content-primary mb-8 tracking-tight theme-transition">
                IMPACT & <span className="text-primary">RESULTS</span>
              </h2>
              <p className="text-xl text-content-secondary max-w-2xl mx-auto font-medium theme-transition">
                The project delivered significant improvements across key metrics, 
                validating our user-centered approach.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.results.map((result, index) => (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="text-center bg-surface rounded-3xl p-8 atomic-shadow hover:atomic-shadow-lg transition-all duration-300 relative overflow-hidden theme-transition"
                >
                  <div className="absolute inset-0 atomic-pattern-dots opacity-5" />
                  <div className="text-5xl md:text-6xl font-black text-primary mb-4 relative z-10">
                    {result.value}
                  </div>
                  <h3 className="font-bold text-content-primary mb-3 text-lg tracking-wide relative z-10 theme-transition">{result.metric}</h3>
                  <p className="text-content-secondary text-sm font-medium relative z-10 theme-transition">{result.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project Navigation */}
      <section className="py-24 bg-surface border-t-4 border-primary relative overflow-hidden theme-transition">
        <motion.div
          className="absolute bottom-20 right-20 w-28 h-28 atomic-starburst bg-atomic-yellow/20"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-0 text-center md:text-left"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-content-primary mb-4 tracking-tight theme-transition">
                INTERESTED IN LEARNING MORE?
              </h3>
              <p className="text-xl text-content-secondary font-medium theme-transition">Let's discuss how I can help with your next project.</p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onClick={() => {
                navigate('/#contact')
                // Wait a moment for navigation, then scroll to contact section
                setTimeout(() => {
                  const contactElement = document.getElementById('contact')
                  if (contactElement) {
                    contactElement.scrollIntoView({ behavior: 'smooth' })
                  }
                }, 100)
              }}
              className="inline-flex items-center space-x-4 atomic-gradient-1 text-white px-12 py-6 rounded-full font-bold atomic-shadow-lg hover:atomic-shadow-electric transition-all duration-300 tracking-wide text-lg relative overflow-hidden"
              whileHover={{ scale: 1.05, x: 8 }}
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
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  )
}