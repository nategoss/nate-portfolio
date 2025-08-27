'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ChevronDown, Zap, Atom, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  // Atomic orbital transforms for floating elements
  const floatX1 = useTransform(springX, [0, window?.innerWidth || 1000], [-60, 60])
  const floatY1 = useTransform(springY, [0, window?.innerHeight || 800], [-40, 40])
  const floatX2 = useTransform(springX, [0, window?.innerWidth || 1000], [40, -40])
  const floatY2 = useTransform(springY, [0, window?.innerHeight || 800], [30, -30])

  useEffect(() => {
    setIsClient(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-atomic theme-transition">
      
      {/* Atomic Orbital Animations */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 atomic-starburst bg-primary opacity-20"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ x: floatX1, y: floatY1 }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-32 h-32 atomic-kidney bg-secondary opacity-25"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -180, -360],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ x: floatX2, y: floatY2 }}
      />

      {/* Atomic Particles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-6 h-6 bg-atomic-yellow rounded-full"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 15, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-accent rounded-full"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Interactive atomic cursor follower */}
      {isClient && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 bg-primary/30 rounded-full blur-sm pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Atomic Age Text Layout */}
          <div className="relative">
            <motion.div
              className="absolute -top-12 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Atom className="w-12 h-12 text-primary atomic-rotate" />
            </motion.div>

            <motion.h1 className="relative">
              <motion.span
                className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-content-primary leading-none tracking-tight theme-transition"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              >
                NATE
              </motion.span>
              
              <motion.span
                className="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight relative"
                initial={{ opacity: 0, x: -100, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
              >
                <span className="text-primary relative">
                  GOSS
                  <motion.div
                    className="absolute -inset-4 atomic-starburst bg-atomic-yellow opacity-20 -z-10"
                    initial={{ scale: 0, rotate: 45 }}
                    animate={{ scale: 1, rotate: -15 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                </span>
              </motion.span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="space-y-6 relative"
          >
            {/* Atomic Age Subtitle */}
            <div className="relative max-w-4xl mx-auto">
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-content-secondary theme-transition"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-secondary">UX DESIGNER</span> & 
                <motion.span
                  className="block text-primary mt-2 font-bold"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  STRATEGIC THINKER
                </motion.span>
              </motion.h2>
            </div>
            
            {/* Fixed: Changed motion.p to motion.div to avoid nesting block elements inside paragraph */}
            <motion.div 
              className="text-lg md:text-xl lg:text-2xl text-content-secondary max-w-4xl mx-auto leading-relaxed theme-transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              I create digital experiences that connect brands with people through{' '}
              <span className="text-primary font-bold relative inline-block mx-2">
                UX DESIGN
                <motion.div
                  className="absolute -inset-2 atomic-kidney bg-atomic-yellow/30 -z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 }}
                />
              </span>
              {' '}and strategic thinking.
            </motion.div>
          </motion.div>

          {/* Atomic Age CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: 'easeOut' }}
            className="pt-12 relative"
          >
            <motion.button
              onClick={scrollToWork}
              className="group relative inline-flex items-center space-x-4 atomic-gradient-1 text-white px-16 py-8 rounded-full text-xl font-bold atomic-shadow-lg overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                y: -6,
                boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Atomic background effect */}
              <motion.div
                className="absolute inset-0 bg-secondary/30"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              
              <Zap className="w-6 h-6 relative z-10" />
              <span className="relative z-10 tracking-wide">VIEW MY UX WORK</span>
              <motion.div
                className="relative z-10"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>

              {/* Atomic particles effect */}
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-atomic-yellow rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-3 h-3 bg-accent rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Atomic Age Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center space-y-3"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-content-tertiary text-sm tracking-[0.3em] font-bold theme-transition">SCROLL DOWN</div>
          <motion.div 
            className="w-px h-12 atomic-gradient-2"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Atom className="w-6 h-6 text-primary atomic-pulse" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}