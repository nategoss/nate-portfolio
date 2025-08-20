'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, Phone, Atom, Sparkles } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@nategoss.com",
    href: "mailto:hello@nategoss.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/nategoss",
    href: "https://linkedin.com/in/nategoss"
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@nategoss",
    href: "https://twitter.com/nategoss"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-surface theme-transition relative overflow-hidden">
      {/* Atomic Background Elements */}
      <div className="absolute inset-0 atomic-pattern-dots opacity-5" />
      
      <motion.div
        className="absolute top-32 right-16 w-24 h-24 atomic-kidney bg-accent/20"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 atomic-starburst bg-atomic-yellow/30"
        animate={{ 
          rotate: [360, 180, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 mb-16"
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Atom className="w-12 h-12 text-primary atomic-rotate" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-content-primary theme-transition">
            Have a project in mind?
          </h2>
          <h3 className="text-2xl md:text-3xl text-primary font-medium">
            Let's create something amazing.
          </h3>
          <p className="text-xl text-content-secondary max-w-2xl mx-auto leading-relaxed theme-transition">
            I'm always excited to work on new challenges and collaborate with passionate teams. 
            Whether you need UX strategy, product design, or brand development, let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-atomic p-6 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-primary border border-atomic transition-all duration-300 group atomic-shadow hover:atomic-shadow-lg theme-transition"
            >
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50 transition-colors duration-300 theme-transition">
                <method.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium text-content-primary mb-2 theme-transition">{method.label}</h4>
              <p className="text-sm text-content-secondary group-hover:text-primary transition-colors duration-300 theme-transition">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="space-y-6"
        >
          <motion.button
            className="inline-flex items-center space-x-3 atomic-gradient-1 text-white px-12 py-6 rounded-full font-medium atomic-shadow-lg hover:atomic-shadow-electric transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 bg-secondary/30"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Start a Conversation</span>
          </motion.button>

          <p className="text-content-tertiary theme-transition">
            Typically respond within 24 hours
          </p>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-24 pt-12 border-t border-atomic theme-transition"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-content-tertiary theme-transition">
              © 2025 Nate Goss. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-content-tertiary hover:text-primary transition-colors theme-transition">
                Privacy Policy
              </a>
              <a href="#" className="text-content-tertiary hover:text-primary transition-colors theme-transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}