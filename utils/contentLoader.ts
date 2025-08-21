import { Project } from '../data/projects'

// This implementation simulates reading from markdown files
// In a real implementation with a backend, you would use libraries like:
// - gray-matter for parsing frontmatter
// - marked or remark for parsing markdown content
// - fs for reading files (Node.js backend)

interface CaseStudyIndex {
  featured: string[]
  published: string[]
  categories: string[]
}

// Simulated content index - in real implementation, this would be fetched from /content/index.json
const loadContentIndex = async (): Promise<CaseStudyIndex> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 100))
  
  return {
    featured: ["ecommerce-platform", "healthtech-app", "fintech-brand"],
    published: ["ecommerce-platform", "healthtech-app", "fintech-brand", "mobile-banking", "saas-dashboard", "travel-app"],
    categories: ["UX Strategy & Design", "Product Design", "Brand Strategy", "Mobile Design", "Web Development"]
  }
}

// Simulated markdown content - in real implementation, this would parse actual .md files
const markdownContent = new Map<string, any>([
  ['ecommerce-platform', {
    frontmatter: {
      slug: "ecommerce-platform",
      title: "EcoCommerce Platform",
      subtitle: "Redesigning sustainable shopping for the digital age",
      category: "UX Strategy & Design",
      description: "Complete redesign of an e-commerce platform focused on sustainable products, resulting in 40% increase in conversions and improved user satisfaction.",
      year: "2024",
      duration: "6 months",
      team: "4 people",
      role: "Lead UX Designer",
      client: "GreenTech Solutions",
      heroImage: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1MDMxNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailImage: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1MDMxNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tools: ["Figma", "Miro", "Hotjar", "Maze"],
      technologies: ["React", "TypeScript", "Shopify Plus"],
      liveUrl: "https://example.com",
      prototypeUrl: "https://figma.com/proto/example",
      featured: true,
      published: true,
      results: [
        { metric: "Conversion Rate", value: "+40%", description: "Increase in completed purchases" },
        { metric: "User Satisfaction", value: "+65%", description: "Improvement in NPS scores" },
        { metric: "Time on Site", value: "+25%", description: "Increase in average session duration" }
      ],
      process: [
        "User Research & Competitive Analysis",
        "Information Architecture Redesign", 
        "Wireframing & Prototyping",
        "Visual Design System Creation",
        "Usability Testing & Iteration",
        "Development Handoff & QA"
      ]
    }
  }],
  
  ['healthtech-app', {
    frontmatter: {
      slug: "healthtech-app",
      title: "HealthTech Mobile App",
      subtitle: "Connecting patients with healthcare providers",
      category: "Product Design",
      description: "Mobile application designed to connect patients with healthcare providers, focusing on accessibility and seamless appointment booking.",
      year: "2024",
      duration: "4 months",
      team: "3 people",
      role: "Senior UX Designer",
      client: "MedConnect",
      heroImage: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU1MDM0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailImage: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU1MDM0NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tools: ["Figma", "Principle", "UserTesting", "Accessibility Inspector"],
      technologies: ["React Native", "Firebase", "HL7 FHIR"],
      prototypeUrl: "https://figma.com/proto/healthtech-example",
      featured: true,
      published: true,
      results: [
        { metric: "Appointment Booking", value: "+75%", description: "Faster booking completion" },
        { metric: "Patient Satisfaction", value: "4.8/5", description: "App store rating" },
        { metric: "Provider Efficiency", value: "+30%", description: "Time saved on scheduling" }
      ],
      process: [
        "Healthcare Industry Research",
        "Patient & Provider Interviews",
        "Journey Mapping",
        "Mobile-First Design System",
        "Accessibility Testing",
        "HIPAA Compliance Review"
      ]
    }
  }],
  
  ['fintech-brand', {
    frontmatter: {
      slug: "fintech-brand",
      title: "Fintech Brand Identity",
      subtitle: "Complete brand system for a fintech startup",
      category: "Brand Strategy",
      description: "Comprehensive brand identity system including logo design, visual guidelines, and digital assets for a financial technology startup.",
      year: "2024",
      duration: "3 months",
      team: "2 people",
      role: "Brand Designer",
      client: "PayFlow Innovations",
      heroImage: "https://images.unsplash.com/photo-1728467459756-211f3c738697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU1MDk5NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailImage: "https://images.unsplash.com/photo-1728467459756-211f3c738697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhicmFuZCUyMGlkZW50aXR5JTIwZGVzaWduJTIwY29sb3JmdWx8ZW58MXx8fHwxNzU1MDk5NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tools: ["Adobe Creative Suite", "Figma", "Brand.ai"],
      featured: true,
      published: true,
      results: [
        { metric: "Brand Recognition", value: "+85%", description: "Increase in brand recall" },
        { metric: "Investment Interest", value: "+200%", description: "Increase in investor inquiries" },
        { metric: "User Trust", value: "+60%", description: "Improvement in trust metrics" }
      ],
      process: [
        "Brand Strategy Workshop",
        "Competitor Brand Analysis",
        "Logo Design & Iterations",
        "Color & Typography System",
        "Brand Guidelines Creation",
        "Asset Library Development"
      ]
    }
  }],

  ['mobile-banking', {
    frontmatter: {
      slug: "mobile-banking",
      title: "Mobile Banking Revolution",
      subtitle: "Next-gen banking for digital natives",
      category: "Mobile Design",
      description: "Complete mobile banking app redesign targeting Gen Z users, featuring innovative financial management tools and gamified savings features.",
      year: "2024",
      duration: "7 months",
      team: "8 people",
      role: "Lead Mobile Designer",
      client: "NextGen Bank",
      heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc1NTAzMTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDF8fHx8MTc1NTAzMTQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      tools: ["Figma", "Principle", "Maze", "Hotjar"],
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      featured: false,
      published: true,
      results: [
        { metric: "Young User Adoption", value: "+150%", description: "Increase in users under 25" },
        { metric: "Daily Active Users", value: "+85%", description: "More frequent app usage" },
        { metric: "Savings Goals Completed", value: "+120%", description: "Success with gamified savings" }
      ],
      process: [
        "Gen Z User Research",
        "Banking Industry Analysis",
        "Mobile-First Design System",
        "Gamification Strategy",
        "Security UX Design",
        "Regulatory Compliance Review"
      ]
    }
  }],

  ['saas-dashboard', {
    frontmatter: {
      slug: "saas-dashboard",
      title: "Enterprise Analytics Dashboard",
      subtitle: "Simplifying complex data visualization",
      category: "Product Design",
      description: "Complete redesign of a SaaS analytics platform, transforming complex data into actionable insights for enterprise teams.",
      year: "2024",
      duration: "5 months",
      team: "5 people",
      role: "Senior Product Designer",
      client: "DataViz Pro",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU1MDMxNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU1MDMxNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tools: ["Figma", "D3.js", "Tableau", "UserTesting"],
      technologies: ["React", "TypeScript", "D3.js"],
      featured: false,
      published: true,
      results: [
        { metric: "User Adoption", value: "+90%", description: "More teams using the platform" },
        { metric: "Time to Insight", value: "-60%", description: "Faster decision making" },
        { metric: "Customer Satisfaction", value: "+45%", description: "Higher NPS scores" }
      ],
      process: [
        "Enterprise User Interviews",
        "Data Architecture Review",
        "Information Architecture",
        "Progressive Disclosure Design",
        "Data Visualization Testing",
        "Accessibility Optimization"
      ]
    }
  }],

  ['travel-app', {
    frontmatter: {
      slug: "travel-app",
      title: "Adventure Travel Companion",
      subtitle: "Connecting travelers with local experiences",
      category: "UX Strategy & Design",
      description: "Mobile travel app focused on authentic local experiences, featuring community-driven recommendations and offline-first design.",
      year: "2023",
      duration: "6 months",
      team: "4 people",
      role: "UX Strategist & Designer",
      client: "Wanderlust Co.",
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBtb2JpbGV8ZW58MXx8fHwxNzU1MDMxNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      thumbnailImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBtb2JpbGV8ZW58MXx8fHwxNzU1MDMxNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tools: ["Figma", "InVision", "Miro", "Lookback"],
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      featured: false,
      published: true,
      results: [
        { metric: "Local Engagement", value: "+200%", description: "Growth in local guide signups" },
        { metric: "Trip Satisfaction", value: "4.7/5", description: "Average trip rating" },
        { metric: "Repeat Usage", value: "+110%", description: "Users planning multiple trips" }
      ],
      process: [
        "Traveler Journey Mapping",
        "Local Community Research",
        "Offline-First Strategy",
        "Social Features Design",
        "Location-Based Services",
        "Content Curation System"
      ]
    }
  }]
])

// Content loading functions
export const loadCaseStudyIndex = async (): Promise<CaseStudyIndex> => {
  // In a real implementation, this would fetch from /content/index.json
  return await loadContentIndex()
}

export const loadCaseStudy = async (slug: string): Promise<Project | null> => {
  // In a real implementation, this would:
  // 1. Read the markdown file from /content/case-studies/{slug}.md
  // 2. Parse frontmatter for metadata using gray-matter
  // 3. Parse markdown content for detailed content using marked/remark
  // 4. Combine into Project object
  
  const content = markdownContent.get(slug)
  if (!content) return null

  // Transform frontmatter into Project format
  const frontmatter = content.frontmatter
  
  return {
    slug: frontmatter.slug,
    title: frontmatter.title,
    subtitle: frontmatter.subtitle,
    category: frontmatter.category,
    description: frontmatter.description,
    year: frontmatter.year,
    duration: frontmatter.duration,
    team: frontmatter.team,
    role: frontmatter.role,
    client: frontmatter.client,
    heroImage: frontmatter.heroImage,
    thumbnailImage: frontmatter.thumbnailImage,
    overview: `${frontmatter.title} overview would be parsed from markdown content.`,
    problem: `Problem statement would be parsed from markdown content.`,
    solution: `Solution description would be parsed from markdown content.`,
    process: frontmatter.process,
    results: frontmatter.results,
    tools: frontmatter.tools,
    technologies: frontmatter.technologies,
    liveUrl: frontmatter.liveUrl,
    prototypeUrl: frontmatter.prototypeUrl,
    featured: frontmatter.featured,
    published: frontmatter.published
  }
}

export const loadAllCaseStudies = async (): Promise<Project[]> => {
  // In a real implementation, this would scan the /content/case-studies/ directory
  // and load all published case studies
  
  const index = await loadCaseStudyIndex()
  const caseStudies: Project[] = []
  
  for (const slug of index.published) {
    const caseStudy = await loadCaseStudy(slug)
    if (caseStudy) {
      caseStudies.push(caseStudy)
    }
  }
  
  return caseStudies
}

export const loadFeaturedCaseStudies = async (): Promise<Project[]> => {
  const index = await loadCaseStudyIndex()
  const featuredCaseStudies: Project[] = []
  
  for (const slug of index.featured) {
    const caseStudy = await loadCaseStudy(slug)
    if (caseStudy) {
      featuredCaseStudies.push(caseStudy)
    }
  }
  
  return featuredCaseStudies
}