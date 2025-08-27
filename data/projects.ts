// Project data structure for portfolio content
// This now loads from markdown files in /content/case-studies/

export interface Project {
  // Basic information
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  
  // Project details
  year: string;
  duration: string;
  team: string;
  role: string;
  client?: string;
  
  // Images
  heroImage: string;
  thumbnailImage: string;
  gallery?: string[];
  
  // Case study content
  overview?: string;
  problem?: string;
  solution?: string;
  process?: string[];
  results?: {
    metric: string;
    value: string;
    description: string;
  }[];
  
  // Technical details
  tools?: string[];
  technologies?: string[];
  
  // Links
  liveUrl?: string;
  prototypeUrl?: string;
  
  // Status and visibility
  featured: boolean;
  published: boolean;
}

import { loadAllCaseStudies, loadFeaturedCaseStudies, loadCaseStudy } from '../utils/contentLoader'

// Projects are now loaded dynamically from markdown files
// To add/edit projects, modify files in /content/case-studies/
export let projects: Project[] = []

// Initialize projects from content files
const initializeProjects = async () => {
  try {
    projects = await loadAllCaseStudies()
  } catch (error) {
    console.error('Failed to load case studies:', error)
    // Fallback to empty array if loading fails
    projects = []
  }
}

// Initialize on module load
initializeProjects()

// Helper functions - now use content loading system
export const getFeaturedProjects = async (): Promise<Project[]> => {
  try {
    return await loadFeaturedCaseStudies()
  } catch (error) {
    console.error('Failed to load featured projects:', error)
    return []
  }
}

export const getPublishedProjects = async (): Promise<Project[]> => {
  try {
    return await loadAllCaseStudies()
  } catch (error) {
    console.error('Failed to load published projects:', error)
    return []
  }
}

export const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
  try {
    const project = await loadCaseStudy(slug)
    return project || undefined
  } catch (error) {
    console.error(`Failed to load project ${slug}:`, error)
    return undefined
  }
}