// Project data structure for real portfolio content
// Replace this mock data with your actual project information

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

// Your real projects - replace with actual content
export const projects: Project[] = [
  {
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
    
    overview: "EcoCommerce needed a complete UX overhaul to better showcase sustainable products and improve the shopping experience. The existing platform had a high bounce rate and poor conversion metrics.",
    
    problem: "The original platform suffered from poor navigation, unclear product categorization, and a complex checkout process. Users struggled to find sustainable alternatives and often abandoned their carts.",
    
    solution: "I redesigned the entire user experience with a focus on sustainability messaging, simplified navigation, and a streamlined checkout process that highlights environmental impact.",
    
    process: [
      "User Research & Competitive Analysis",
      "Information Architecture Redesign", 
      "Wireframing & Prototyping",
      "Visual Design System Creation",
      "Usability Testing & Iteration",
      "Development Handoff & QA"
    ],
    
    results: [
      {
        metric: "Conversion Rate",
        value: "+40%",
        description: "Increase in completed purchases"
      },
      {
        metric: "User Satisfaction", 
        value: "+65%",
        description: "Improvement in NPS scores"
      },
      {
        metric: "Time on Site",
        value: "+25%",
        description: "Increase in average session duration"
      }
    ],
    
    tools: ["Figma", "Miro", "Hotjar", "Maze"],
    technologies: ["React", "TypeScript", "Shopify Plus"],
    
    liveUrl: "https://example.com",
    prototypeUrl: "https://figma.com/proto/example",
    
    featured: true,
    published: true
  },
  
  {
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
    
    overview: "MedConnect wanted to create a mobile app that would simplify healthcare access for patients while providing efficient tools for healthcare providers.",
    
    problem: "Patients struggled with complex healthcare systems, long wait times, and difficulty accessing their medical information. Providers needed better tools for managing appointments and patient communication.",
    
    solution: "I designed an intuitive mobile app that streamlines appointment booking, provides secure messaging between patients and providers, and offers easy access to medical records.",
    
    process: [
      "Healthcare Industry Research",
      "Patient & Provider Interviews", 
      "Journey Mapping",
      "Mobile-First Design System",
      "Accessibility Testing",
      "HIPAA Compliance Review"
    ],
    
    results: [
      {
        metric: "Appointment Booking",
        value: "+75%",
        description: "Faster booking completion"
      },
      {
        metric: "Patient Satisfaction",
        value: "4.8/5",
        description: "App store rating"
      },
      {
        metric: "Provider Efficiency",
        value: "+30%",
        description: "Time saved on scheduling"
      }
    ],
    
    tools: ["Figma", "Principle", "UserTesting", "Accessibility Inspector"],
    technologies: ["React Native", "Firebase", "HL7 FHIR"],
    
    prototypeUrl: "https://figma.com/proto/healthtech-example",
    
    featured: true,
    published: true
  },
  
  {
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
    
    overview: "PayFlow Innovations needed a complete brand identity that would establish trust in the financial sector while appearing innovative and approachable.",
    
    problem: "The startup lacked a cohesive brand identity, making it difficult to establish credibility with potential customers and investors in the competitive fintech space.",
    
    solution: "I created a comprehensive brand system that balances professionalism with innovation, featuring a modern logo, trustworthy color palette, and flexible visual guidelines.",
    
    process: [
      "Brand Strategy Workshop",
      "Competitor Brand Analysis",
      "Logo Design & Iterations", 
      "Color & Typography System",
      "Brand Guidelines Creation",
      "Asset Library Development"
    ],
    
    results: [
      {
        metric: "Brand Recognition",
        value: "+85%",
        description: "Increase in brand recall"
      },
      {
        metric: "Investment Interest", 
        value: "+200%",
        description: "Increase in investor inquiries"
      },
      {
        metric: "User Trust",
        value: "+60%",
        description: "Improvement in trust metrics"
      }
    ],
    
    tools: ["Adobe Creative Suite", "Figma", "Brand.ai"],
    
    featured: true,
    published: true
  }
]

// Helper functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured && project.published)
}

export const getPublishedProjects = (): Project[] => {
  return projects.filter(project => project.published)
}

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug && project.published)
}