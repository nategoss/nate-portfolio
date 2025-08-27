# 🚀 Nate Goss Portfolio

A modern portfolio website for UX Designer and Strategist Nate Goss, featuring a bold 1950s atomic age aesthetic with vibrant colors, Space Grotesk and Orbitron fonts, and atomic orbital motifs.

## ✨ Features

- **Atomic Age Design System** - Bold 1950s aesthetic with electric blue, atomic orange, and mint green
- **Full Dark/Light Mode** - WCAG compliant theme switching
- **Responsive Design** - Optimized for all devices
- **Case Study System** - Markdown-based content management
- **Smooth Animations** - Modern micro-interactions
- **Accessibility First** - Full WCAG 2.1 AA compliance

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/nategoss/nate-portfolio.git
cd nate-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
nate-portfolio/
├── .github/workflows/     # GitHub Actions for deployment
├── src/                   # Source code
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── components/           # React components
├── content/             # Markdown case studies
├── data/               # Project data
├── public/             # Static assets
├── styles/             # Global CSS and theme system
├── package.json        # Dependencies and scripts
├── vite.config.ts     # Vite configuration
└── index.html         # HTML template
```

## 🌐 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment
1. Push code to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site is live at: `https://nategoss.github.io/nate-portfolio/`

### Manual Deployment Check
```bash
# Run deployment verification
node deploy-check.js

# Clean up project structure (if needed)
node cleanup-final.js
```

### GitHub Pages Setup
1. Go to repository **Settings** → **Pages**
2. Set **Source** to: **"GitHub Actions"**
3. The workflow will handle the rest automatically

## 🎨 Design System

### Colors
- **Primary**: Atomic Orange (#FF6B35)
- **Secondary**: Electric Cyan (#00BCD4) 
- **Accent**: Mint Green (#4ECDC4)
- **Electric**: Electric Blue (#2196F3)

### Typography
- **Headings**: Orbitron (futuristic, atomic-age)
- **Body**: Space Grotesk (modern, readable)

### Components
- Atomic patterns and shapes
- Starburst animations
- Boomerang and kidney shapes
- Orbital motion effects

## 📝 Content Management

### Adding New Case Studies
1. Create a new `.md` file in `/content/case-studies/`
2. Add frontmatter with project metadata
3. Update `/data/projects.ts` with project details
4. Images go in `/public/` directory

### Case Study Template
```markdown
---
title: "Project Title"
client: "Client Name"
year: "2024"
tags: ["UX Design", "Strategy"]
hero: "/path/to/hero-image.jpg"
---

# Your case study content here...
```

## 🔧 Configuration

### Vite Configuration
The project uses dynamic base path configuration:
- **Development**: `/` (local development)
- **Production**: `/nate-portfolio/` (GitHub Pages)

### Theme System
Comprehensive CSS variables support both light and dark modes with full WCAG compliance.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Contact

**Nate Goss** - UX Designer & Strategist
- Portfolio: [https://nategoss.github.io/nate-portfolio/](https://nategoss.github.io/nate-portfolio/)
- Email: nate@example.com
- LinkedIn: [@nategoss](https://linkedin.com/in/nategoss)

---

Built with ⚛️ atomic energy and modern web technologies