# How to Add Your Real Project Content

This guide shows you exactly how to replace the mock project data with your real portfolio content.

## Quick Start

1. **Edit `/data/projects.ts`** - This is where all your project data lives
2. **Replace images** - Add your real project images (see Image Guidelines below)  
3. **Update project details** - Fill in your actual project information
4. **Test your changes** - The site will automatically use your new data

## Project Data Structure

Each project in `/data/projects.ts` has this structure:

```typescript
{
  // Basic Info (Required)
  slug: "your-project-url-slug",
  title: "Your Project Title", 
  subtitle: "Brief project description",
  category: "UX Design", // or "Product Design", "Brand Strategy", etc.
  description: "Longer description for project cards",
  
  // Project Details (Required)
  year: "2024",
  duration: "3 months", 
  team: "4 people",
  role: "Lead UX Designer",
  client: "Client Name", // Optional
  
  // Images (Required)
  heroImage: "https://your-image-url.com/hero.jpg",
  thumbnailImage: "https://your-image-url.com/thumbnail.jpg", 
  
  // Case Study Content (Optional but recommended)
  overview: "What the project was about...",
  problem: "What challenges you were solving...",
  solution: "How you solved them...",
  process: ["Step 1", "Step 2", "Step 3"], // Array of process steps
  results: [
    {
      metric: "Conversion Rate",
      value: "+40%", 
      description: "Increase in completed purchases"
    }
  ],
  
  // Tools & Tech (Optional)
  tools: ["Figma", "Miro", "Principle"],
  technologies: ["React", "TypeScript"], // If applicable
  
  // Links (Optional) 
  liveUrl: "https://live-project.com",
  prototypeUrl: "https://figma.com/proto/...",
  
  // Visibility (Required)
  featured: true, // Show on homepage
  published: true // Show on site
}
```

## Step-by-Step Replacement

### 1. Replace Project Basics
Open `/data/projects.ts` and for each project, replace:

```typescript
// OLD (example)
title: "EcoCommerce Platform",
subtitle: "Redesigning sustainable shopping for the digital age",
category: "UX Strategy & Design",

// NEW (your content)
title: "Your Actual Project Name",
subtitle: "What you actually built/designed",
category: "Your Design Category",
```

### 2. Update Project Details
Replace the project metadata:

```typescript
// OLD
year: "2024",
duration: "6 months",
team: "4 people", 
role: "Lead UX Designer",
client: "GreenTech Solutions",

// NEW  
year: "2023", // When you worked on it
duration: "4 months", // How long it took
team: "2 people", // Team size or "Solo project"
role: "Product Designer", // Your actual role
client: "Real Client Name", // Actual client or remove if NDA
```

### 3. Add Your Images

**Option A: Use Your Own Images**
```typescript
heroImage: "https://your-portfolio-site.com/images/project-hero.jpg",
thumbnailImage: "https://your-portfolio-site.com/images/project-thumb.jpg",
```

**Option B: Use Unsplash (for now)**  
Go to [unsplash.com](https://unsplash.com), find relevant images, and use their URLs:
```typescript
heroImage: "https://images.unsplash.com/photo-XXXXXXX",
thumbnailImage: "https://images.unsplash.com/photo-YYYYYYY", 
```

### 4. Write Your Case Study Content

Replace the mock content with your actual project story:

```typescript
overview: "This project involved redesigning our mobile app to improve user onboarding. The existing flow had a 60% drop-off rate...",

problem: "Users were abandoning the signup process because it was too long and asked for too much information upfront. We also discovered through user testing that...",

solution: "I redesigned the onboarding flow using progressive disclosure, reducing the initial form to 3 essential fields and moving additional information to later steps...",

process: [
  "User Research & Analytics Review",
  "Competitive Analysis", 
  "User Flow Mapping",
  "Wireframing & Prototyping",
  "Usability Testing",
  "Final Design & Handoff"
],

results: [
  {
    metric: "Signup Completion", 
    value: "+75%",
    description: "Increase in completed registrations"
  },
  {
    metric: "Time to Complete",
    value: "-40%", 
    description: "Reduction in signup time"
  }
]
```

### 5. Control Project Visibility

```typescript
featured: true,  // Shows on homepage (only set true for your best 3 projects)
published: true  // Shows on site (set false to hide projects)
```

## Image Guidelines

**Recommended Image Sizes:**
- Hero images: 1920x1080px (16:9 ratio)
- Thumbnail images: 800x600px (4:3 ratio)
- High quality (at least 1MB file size)

**Image Sources:**
1. **Screenshots** of your actual work (best option)
2. **Mockups** showing your designs on devices  
3. **Process photos** of sketches, workshops, etc.
4. **Unsplash** as temporary placeholders

## Adding New Projects

To add a completely new project:

1. Copy an existing project object in `/data/projects.ts`
2. Change the `slug` to a unique URL-friendly name (e.g., "mobile-banking-app")
3. Replace all the content with your project details  
4. Set `featured: true` if you want it on the homepage

## Testing Your Changes

After editing `/data/projects.ts`:

1. Save the file
2. Refresh your browser
3. Check the Work section on your homepage
4. Click through to case study pages
5. Make sure all images load and content displays correctly

## Common Mistakes to Avoid

❌ **Don't** use spaces in slugs (use "mobile-app" not "mobile app")  
❌ **Don't** forget to set `published: true`  
❌ **Don't** use the same slug twice  
❌ **Don't** leave required fields empty  
✅ **Do** use consistent image ratios  
✅ **Do** write in your own voice  
✅ **Do** include real metrics when possible  
✅ **Do** proofread your content

## Need Help?

If you get stuck:
1. Check the browser console for errors
2. Make sure your JSON syntax is correct (commas, quotes, etc.)
3. Verify all required fields are filled in
4. Test with one project first before adding multiple

Your portfolio will automatically update to use your real content as soon as you save the changes to `/data/projects.ts`!
```

<figma type="summary">
**Created a comprehensive system for adding real project content!** I've transformed the hardcoded mock data into a flexible, structured system that makes it easy to add and manage your actual portfolio projects.

**Here's what I built:**

📁 **`/data/projects.ts`** - Centralized project database with rich data structure  
🔄 **Updated Components** - WorkSection, Router, and CaseStudyPage now use real data  
📖 **`/CONTENT_GUIDE.md`** - Step-by-step guide for replacing mock content  
🎨 **Enhanced Case Studies** - Support for client info, tools, links, and detailed metrics  

**To add your real content:**
1. **Edit `/data/projects.ts`** - Replace the 3 mock projects with your real ones
2. **Add your images** - Use your actual project screenshots/mockups  
3. **Write your stories** - Fill in the problem, solution, process, and results
4. **Set visibility** - Mark your best projects as `featured: true`

**The system now supports:**
• Rich case study content (overview, problem, solution, process, results)
• Project metadata (client, tools, duration, team size)  
• External links (live sites, prototypes)
• Flexible image handling
• Featured/published project controls

Your portfolio will automatically update as soon as you modify the projects data!