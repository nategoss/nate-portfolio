# Content Management System

This directory contains all the content for the portfolio website, organized in a structured, maintainable way.

## Directory Structure

```
/content/
├── README.md              # This file - content management documentation
├── index.json            # Content index - controls which projects are featured/published
└── case-studies/         # Individual case study markdown files
    ├── ecommerce-platform.md
    ├── healthtech-app.md
    ├── fintech-brand.md
    ├── mobile-banking.md
    ├── saas-dashboard.md
    └── travel-app.md
```

## How It Works

### 1. Content Index (`index.json`)

This file controls which case studies are featured on the homepage and which are published (visible) on the portfolio:

```json
{
  "featured": ["ecommerce-platform", "healthtech-app", "fintech-brand"],
  "published": ["ecommerce-platform", "healthtech-app", "fintech-brand", "mobile-banking", "saas-dashboard", "travel-app"],
  "categories": ["UX Strategy & Design", "Product Design", "Brand Strategy", "Mobile Design", "Web Development"]
}
```

- **featured**: Projects shown in the "Featured Work" section on the homepage (max 3 recommended)
- **published**: All projects visible in the "All Projects" gallery
- **categories**: Available project categories for filtering

### 2. Case Study Files (`/case-studies/*.md`)

Each case study is a markdown file with frontmatter metadata. The filename (without .md) becomes the project slug used in URLs.

#### Frontmatter Structure

Every case study file starts with YAML frontmatter containing project metadata:

```yaml
---
slug: "project-slug"
title: "Project Title"
subtitle: "Brief project description"
category: "UX Strategy & Design"
description: "Longer description for project cards"
year: "2024"
duration: "6 months"
team: "4 people"
role: "Lead UX Designer"
client: "Client Name"
heroImage: "https://example.com/hero-image.jpg"
thumbnailImage: "https://example.com/thumbnail.jpg"
tools: ["Figma", "Miro", "Hotjar"]
technologies: ["React", "TypeScript"]
liveUrl: "https://example.com"
prototypeUrl: "https://figma.com/proto/example"
featured: true
published: true
results:
  - metric: "Conversion Rate"
    value: "+40%"
    description: "Increase in completed purchases"
process:
  - "User Research & Competitive Analysis"
  - "Information Architecture Redesign"
---
```

#### Content Structure

After the frontmatter, write the case study content in markdown:

```markdown
## Overview

Project overview content here...

## The Challenge

Describe the problems that needed to be solved...

## The Solution

Explain your design solution...

## Design Process

Detail your design process...

## Results & Impact

Show the outcomes and business impact...
```

## Adding New Case Studies

### 1. Create the Markdown File

1. Create a new file in `/content/case-studies/` with a descriptive slug name (e.g., `new-project.md`)
2. Add the frontmatter with all required fields
3. Write the case study content in markdown

### 2. Update the Content Index

1. Open `/content/index.json`
2. Add the new project slug to the `published` array
3. Optionally add it to the `featured` array if it should appear on the homepage
4. Add any new categories to the `categories` array if needed

### 3. Required Images

Each project needs:
- **heroImage**: Large banner image for the case study page (recommended: 1200x600px)
- **thumbnailImage**: Square/rectangular image for project cards (recommended: 600x400px)

Use the Unsplash tool for images or provide URLs to your own hosted images.

## Content Guidelines

### Project Categories

Use these standardized categories:
- **UX Strategy & Design**: Strategic UX work, research-heavy projects
- **Product Design**: Digital product design (web/mobile apps)
- **Brand Strategy**: Brand identity, visual design systems
- **Mobile Design**: Mobile-specific projects
- **Web Development**: Development-focused projects

### Writing Style

- **Clear and Concise**: Use straightforward language that explains complex design decisions
- **Results-Focused**: Include specific metrics and business outcomes when possible
- **Visual Storytelling**: Describe what users see and experience
- **Professional Tone**: Confident but not boastful

### Required Content Sections

Every case study should include:
1. **Overview**: Context and project goals
2. **The Challenge**: Problems that needed solving
3. **The Solution**: Your design approach
4. **Design Process**: Step-by-step methodology
5. **Results & Impact**: Outcomes and metrics

### Image Best Practices

- Use high-quality images (minimum 1200px wide for heroes)
- Ensure images are relevant to the project
- Include alt text considerations in your descriptions
- Use consistent aspect ratios when possible

## Technical Implementation

The content loading system simulates a real markdown-based CMS:

### Content Loader (`/utils/contentLoader.ts`)

Handles:
- Loading and parsing frontmatter metadata
- Converting markdown to Project objects
- Filtering featured vs. published projects
- Error handling for missing content

### Project Interface (`/data/projects.ts`)

Defines the TypeScript interface for project data and provides helper functions for loading content.

### Component Integration

Components that use this system:
- **WorkSection**: Loads featured projects for homepage
- **ProjectsPage**: Loads all published projects for gallery
- **CaseStudyPage**: Loads individual project details
- **ProjectCard**: Displays project metadata

## Future Enhancements

To implement a real CMS, you would:

1. **Add Markdown Parsing**: Use libraries like `gray-matter` and `marked`
2. **File System Integration**: Read actual files from the content directory
3. **Image Processing**: Optimize and resize images automatically
4. **Content Validation**: Validate frontmatter structure and required fields
5. **Search and Filtering**: Add search functionality and category filters
6. **Content Preview**: Add preview mode for draft content

## Troubleshooting

### Project Not Appearing

1. Check that the slug is added to `published` array in `index.json`
2. Verify the markdown file exists in `/content/case-studies/`
3. Ensure frontmatter is valid YAML
4. Check browser console for loading errors

### Images Not Loading

1. Verify image URLs are accessible
2. Check for HTTPS vs HTTP issues
3. Ensure images are publicly accessible
4. Use the Unsplash tool for reliable stock images

### Deployment Issues

1. Ensure all content files are committed to git
2. Check that build process includes content directory
3. Verify content loader handles missing files gracefully

## Content Backup

To backup content:
1. The entire `/content/` directory contains all portfolio content
2. `index.json` contains the project configuration
3. Individual markdown files are self-contained with all metadata

This system provides a robust foundation for content management while remaining simple to use and maintain.