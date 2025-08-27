'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowUpRight, Eye, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  category: string
  description: string
  image: string
  index: number
  slug?: string
}

// Generate URL-friendly slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim()
}

export function ProjectCard({ title, category, description, image, index, slug }: ProjectCardProps) {
  const projectSlug = slug || generateSlug(title)
  const [isHovered, setIsHovered] = useState(false)
  const [likes, setLikes] = useState(0)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // All cards use consistent layout
  const isLarge = false

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={`group h-full flex flex-col ${isLarge ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
      }}
    >
      <Link to={`/case-study/${projectSlug}`} className="block h-full">
        <motion.div
          className="relative overflow-hidden bg-surface atomic-shadow hover:atomic-shadow-lg cursor-pointer rounded-2xl h-full flex flex-col theme-transition"
          whileHover={{ 
            y: -16,
            transition: { duration: 0.4, ease: 'easeOut' }
          }}
          style={{
            transform: isHovered ? 'perspective(1000px)' : 'none'
          }}
        >
          {/* Creative background effects */}
          <motion.div
            className={`absolute inset-0 ${
              index % 4 === 0 ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10 dark:from-orange-400/5 dark:to-red-400/5' :
              index % 4 === 1 ? 'bg-gradient-to-br from-green-500/10 to-teal-500/10 dark:from-green-400/5 dark:to-teal-400/5' :
              index % 4 === 2 ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 dark:from-yellow-400/5 dark:to-orange-400/5' :
              'bg-gradient-to-br from-blue-500/10 to-indigo-500/10 dark:from-blue-400/5 dark:to-indigo-400/5'
            } opacity-0 group-hover:opacity-100 transition-opacity duration-500 theme-transition`}
          />
          
          {/* Dynamic shadow overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${50}% ${50}%, rgba(203, 111, 71, 0.1) 0%, transparent 70%)`
            }}
          />

          {/* Image section with consistent layout */}
          <div className="relative overflow-hidden aspect-[4/3]">
            
            {/* Image container */}
            <div className="absolute inset-0 z-10 overflow-hidden">
              <div
                className="w-full h-full overflow-hidden"
              >
                <ImageWithFallback
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            {/* Creative overlay elements */}
            <motion.div
              className="absolute top-4 right-4 z-20"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <motion.div
                className="bg-surface/90 backdrop-blur-sm rounded-full p-2 atomic-shadow"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Eye className="w-4 h-4 text-secondary" />
              </motion.div>
            </motion.div>

            {/* Category badge with consistent positioning */}
            <motion.div
              className="absolute top-4 left-4 z-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.div
                className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold atomic-shadow"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                {category}
              </motion.div>
            </motion.div>
          </div>

          {/* Content section with consistent layout */}
          <motion.div 
            className="p-6 relative z-20 flex-1 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <div className="flex-1 flex flex-col">
              {/* FIXED: Removed problematic hover color change that caused contrast issues */}
              <motion.h3 
                className="text-xl font-bold text-content-primary mb-3 transition-colors duration-300 theme-transition"
                whileHover={{ scale: 1.02 }}
              >
                {title}
              </motion.h3>
              
              <motion.p 
                className="text-content-secondary leading-relaxed mb-4 flex-1 theme-transition"
              >
                {description}
              </motion.p>

              {/* Creative interaction elements */}
              <div className="flex items-center justify-between mt-auto">
                <motion.div 
                  className="flex items-center space-x-4 text-sm text-content-tertiary theme-transition"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {/* FIXED: Enhanced hover state with better contrast */}
                  <motion.button
                    className="flex items-center space-x-1 text-content-tertiary hover:text-red-600 dark:hover:text-red-400 transition-colors theme-transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.preventDefault()
                      setLikes(likes + 1)
                    }}
                  >
                    <Heart className="w-4 h-4" />
                    <span>{likes}</span>
                  </motion.button>
                  
                  <span className="text-xs">·</span>
                  <span className="text-xs">View Project</span>
                </motion.div>

                {/* Animated CTA */}
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ scale: 0.8, rotate: -45 }}
                  whileHover={{ scale: 1.2, rotate: 0 }}
                  animate={{ scale: isHovered ? 1 : 0.8, rotate: isHovered ? 0 : -45 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                >
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white atomic-shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Creative border glow effect */}
          <motion.div
            className="absolute inset-0 rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(45deg, 
                rgba(203, 111, 71, 0.1) 0%, 
                transparent 25%, 
                transparent 75%, 
                rgba(203, 111, 71, 0.1) 100%)`
            }}
          />
        </motion.div>
      </Link>
    </motion.div>
  )
}