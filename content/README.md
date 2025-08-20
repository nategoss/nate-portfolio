# Case Study Content Management

This directory contains all case study content for the portfolio. You can easily add, edit, or remove case studies without touching any code.

## Directory Structure

```
/content/
├── case-studies.json          # Index file controlling which studies are featured/published
├── case-studies/              # Individual case study markdown files
│   ├── ecommerce-platform.md
│   ├── healthtech-app.md
│   ├── fintech-brand.md
│   └── [your-new-study].md
└── README.md                  # This file
```

## Adding a New Case Study

1. **Create a new markdown file** in `/content/case-studies/` with a descriptive filename (e.g., `mobile-banking-app.md`)

2. **Add frontmatter** at the top of the file with project metadata:

```markdown
---
slug: "mobile-banking-app"
title: "Mobile Banking App"
subtitle: "Reimagining digital banking for Gen Z"
category: "Mobile Design"
description: "Complete mobile app redesign focused on young users, resulting in 50% increase in user engagement."
year: "2024"
duration: "5 months"
team: "6 people"
role: "Lead Product Designer"
client: "NextGen Bank"
heroImage: "https://your-image-url.com/hero.jpg"
thumbnailImage: "https://your-image-url.com/thumb.jpg"
tools: ["Figma", "Principle", "Hotjar"]
technologies: ["React Native", "Node.js"]
liveUrl: "https://app.nextgenbank.com"
prototypeUrl: "https://figma.com/proto/example"
featured: true
published: true
results:
  - metric: "User Engagement"
    value: "+50%"
    description: "Increase in daily active users"
  - metric: "Task Completion"
    value: "+35%"
    description: "Faster transaction completion"
process:
  - "User Research & Interviews"
  - "Competitive Analysis"
  - "Wireframing & Prototyping"
  - "Visual Design"
  - "Usability Testing"
  - "Development Handoff"
---
```

3. **Write your case study content** below the frontmatter using standard markdown:

```markdown
## Project Overview

Your project overview here...

## The Challenge

Describe the problems you were solving...

## The Solution

Explain your approach and solutions...

## Results & Impact

Detail the outcomes and metrics...
```

4. **Update the index file** `/content/case-studies.json` to include your new case study:

```json
{
  "featured": [
    "ecommerce-platform",
    "healthtech-app", 
    "fintech-brand",
    "mobile-banking-app"
  ],
  "published": [
    "ecommerce-platform",
    "healthtech-app",
    "fintech-brand",
    "mobile-banking-app"
  ]
}
```

## Editing Existing Case Studies

1. **Find the markdown file** in `/content/case-studies/` that corresponds to the case study you want to edit
2. **Edit the frontmatter** to update project metadata (title, description, results, etc.)
3. **Edit the markdown content** to update the case study narrative
4. **Save the file** - changes will appear immediately on the website

## Removing a Case Study

1. **Option 1 - Hide temporarily**: Set `published: false` in the frontmatter
2. **Option 2 - Remove completely**: Delete the markdown file and remove the slug from `/content/case-studies.json`

## Controlling Featured Projects

Edit `/content/case-studies.json` to control which projects appear in the "Featured Work" section:

- **Add to featured**: Include the slug in the `featured` array
- **Remove from featured**: Remove the slug from the `featured` array
- **Control order**: Reorder slugs in the arrays to change display order

## Frontmatter Reference

### Required Fields
- `slug`: Unique identifier (used in URLs)
- `title`: Project title
- `subtitle`: Short description
- `category`: Project category
- `description`: Brief project summary
- `year`: Project year
- `duration`: How long the project took
- `team`: Team size
- `role`: Your role on the project
- `heroImage`: Large image for case study header
- `thumbnailImage`: Small image for project cards
- `featured`: Whether to show in featured section (true/false)
- `published`: Whether the case study is live (true/false)

### Optional Fields
- `client`: Client name
- `overview`: Project overview text
- `problem`: Problem statement
- `solution`: Solution description
- `tools`: Array of tools used
- `technologies`: Array of technologies used
- `liveUrl`: Link to live project
- `prototypeUrl`: Link to prototype
- `gallery`: Array of additional image URLs
- `results`: Array of metric objects with `metric`, `value`, and `description`
- `process`: Array of process steps

## Best Practices

### Images
- Use high-quality images (at least 1080px wide)
- Consider using a consistent aspect ratio
- Use Unsplash or similar for placeholder images
- Store your own images in a CDN or image hosting service

### Content
- Keep descriptions under 200 characters for better display
- Use action-oriented language for metrics ("increase", "improvement", etc.)
- Include specific, quantifiable results when possible
- Write in active voice and focus on your contributions

### Organization
- Use descriptive, URL-friendly slugs (`mobile-banking-app` not `project-1`)
- Organize by recency (most recent projects first in featured array)
- Group similar project types with consistent categories

## Content Guidelines

### Writing Style
- **Be specific**: Instead of "improved user experience", say "reduced task completion time by 35%"
- **Show impact**: Always include measurable results when possible
- **Tell a story**: Structure as Problem → Solution → Results
- **Use active voice**: "I designed" not "was designed"

### Project Categories
Consistent categories help with filtering and organization:
- UX Strategy & Design
- Product Design
- Mobile Design
- Brand Strategy
- Web Development
- User Research

## Troubleshooting

### Case Study Not Appearing
1. Check that `published: true` in frontmatter
2. Verify the slug is included in `/content/case-studies.json`
3. Ensure markdown file is in `/content/case-studies/` directory
4. Clear browser cache and refresh

### Formatting Issues
1. Verify frontmatter is properly formatted YAML
2. Check that frontmatter is enclosed in `---` lines
3. Ensure arrays use proper YAML syntax with hyphens
4. Validate JSON syntax in `case-studies.json`

### Images Not Loading
1. Verify image URLs are publicly accessible
2. Check that URLs use HTTPS
3. Test image URLs in a browser
4. Consider using a CDN for better performance

---

This content management system allows you to maintain your portfolio easily while keeping code and content separate. Simply edit markdown files to update your case studies!
</parameter>

<figma type="work">
Now I need to update the components that use the project data to work with the new async loading system.