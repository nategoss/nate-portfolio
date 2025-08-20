'use client'

import { motion } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Brain, Layers, Target, Map, Users, Palette, Atom, Zap } from 'lucide-react'

const competencies = [
  { 
    icon: Brain, 
    title: "UX STRATEGY", 
    description: "Aligning user needs with business objectives to create cohesive digital experiences that drive engagement and growth.",
    percentage: 95
  },
  { 
    icon: Layers, 
    title: "SYSTEMS THINKING", 
    description: "Understanding complex relationships between users, technology, and business to design holistic solutions.",
    percentage: 92
  },
  { 
    icon: Target, 
    title: "PRODUCT DESIGN", 
    description: "Crafting intuitive desktop and mobile experiences that balance functionality with delightful user interactions.",
    percentage: 90
  },
  { 
    icon: Map, 
    title: "INFORMATION ARCHITECTURE", 
    description: "Structuring content and navigation systems that help users find what they need efficiently and intuitively.",
    percentage: 88
  },
  { 
    icon: Users, 
    title: "USER RESEARCH", 
    description: "Conducting research to understand user behaviors, needs, and pain points across diverse technology platforms.",
    percentage: 82
  },
  { 
    icon: Palette, 
    title: "DESIGN SYSTEMS", 
    description: "Building scalable design systems that maintain consistency across complex software and brand experiences.",
    percentage: 85
  }
]

const tools = [
  "FIGMA", "SKETCH", "ADOBE CREATIVE SUITE", "MIRO", "PRINCIPLE", "INVISION", 
  "MAZE", "USERTESTING", "HOTJAR", "AMPLITUDE", "FRAMER", "ZEPLIN"
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-atomic relative overflow-hidden theme-transition">
      {/* Atomic Background Pattern */}
      <div className="absolute inset-0 atomic-pattern-dots opacity-5" />
      
      {/* Floating Atomic Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 atomic-kidney bg-secondary/20"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 atomic-starburst bg-primary/20"
        animate={{ 
          rotate: [360, 180, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Atom className="w-12 h-12 text-primary atomic-rotate" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-content-primary mb-6 leading-tight tracking-tight theme-transition">
            ABOUT <span className="text-primary">ME</span>
          </h2>
          <p className="text-xl text-content-secondary max-w-2xl mx-auto font-medium tracking-wide theme-transition">
            BRIDGING STRATEGY AND DESIGN ACROSS TECHNOLOGY AND BRAND EXPERIENCES
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-content-primary tracking-tight theme-transition">
                STRATEGIC THINKING MEETS <span className="text-secondary">THOUGHTFUL UX</span>
              </h3>
              
              <div className="space-y-5 text-lg text-content-secondary leading-relaxed theme-transition">
                <p>
                  I am a <strong className="text-content-primary theme-transition text-base font-semibold">UX design leader</strong> with <strong className="text-content-primary theme-transition text-base font-semibold">two decades</strong> of experience crafting intuitive and impactful user experiences. I have a proven ability to spearhead <strong className="text-content-primary theme-transition text-base font-semibold">UX strategy and design</strong> for complex projects, as demonstrated by my work at HP, where I led the consolidation of software support into a unified app, resulting in a <strong className="text-content-primary theme-transition text-base font-semibold">3% reduction in support calls</strong>.
                </p>
                <p>
                  I am passionate about <strong className="text-content-primary theme-transition text-base font-semibold">mentoring and growing design talent</strong>, having successfully trained and mentored junior designers in user-centered design principles and Figma best practices.
                </p>
                <p>
                  My experience at Autodesk and Intel further honed my skills in <strong className="text-content-primary theme-transition text-base font-semibold">leading design teams</strong>, shaping project strategy, and conducting <strong className="text-content-primary theme-transition text-base font-semibold">user research</strong> to deliver innovative solutions. I am adept at collaborating with product managers, engineers, and data scientists to create user experiences that are not only beautiful but also drive business goals.
                </p>
              </div>

              {/* Atomic Tools */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-6"
              >
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-surface rounded-full text-sm font-bold text-content-secondary border-2 border-atomic hover:border-primary hover:text-primary hover:atomic-shadow transition-all duration-200 cursor-default tracking-wide theme-transition"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden atomic-gradient-bg p-8 atomic-shadow-lg">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full rounded-2xl overflow-hidden atomic-shadow-lg"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXQlMjBtYW4lMjBzbWlsaW5nJTIwY29uZmlkZW50fGVufDF8fHx8MTc1NTE5MDI1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nate Goss - UX Designer and Strategist"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Atomic floating elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-20 h-20 atomic-starburst bg-atomic-yellow opacity-60"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent rounded-full opacity-40"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </div>

        {/* UX Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-10"
        >
          <div className="text-center">
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
            >
              <Zap className="w-10 h-10 text-secondary atomic-pulse" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-content-primary mb-12 tracking-tight theme-transition">
              CORE <span className="text-primary">COMPETENCIES</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competencies.map((competency, index) => (
              <motion.div
                key={competency.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-surface rounded-2xl p-8 space-y-6 atomic-shadow hover:atomic-shadow-lg transition-all duration-300 group relative overflow-hidden theme-transition"
              >
                {/* Atomic background effect */}
                <motion.div
                  className="absolute inset-0 atomic-pattern-dots opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                
                <div className="flex items-start space-x-4 mb-6 relative z-10">
                  <motion.div 
                    className="w-16 h-16 atomic-gradient-1 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 atomic-shadow"
                    whileHover={{ rotate: 15 }}
                  >
                    <competency.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    {/* FIXED: Removed problematic hover color change that caused contrast issues */}
                    <h4 className="text-lg font-bold text-content-primary mb-3 transition-colors duration-300 tracking-wide theme-transition">
                      {competency.title}
                    </h4>
                    <p className="text-content-secondary text-sm leading-relaxed theme-transition">{competency.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between text-sm">
                    <span className="text-content-tertiary font-bold tracking-wide theme-transition">EXPERTISE LEVEL</span>
                    <span className="text-primary font-bold text-lg">{competency.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden theme-transition">
                    <motion.div
                      className="atomic-gradient-1 h-3 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${competency.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute right-0 top-0 w-3 h-3 bg-atomic-yellow rounded-full"
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}