# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

✨ **Modern Design** - Clean, minimalist aesthetic with smooth animations
🌙 **Dark Mode** - Toggle between light and dark themes with persistent preference
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
♿ **Accessible** - WCAG compliant with keyboard navigation support
⚡ **Fast Performance** - Built with Vite for lightning-fast builds
🎨 **Customizable** - Easy to update content through data files

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server

## Project Structure

```
Portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── layout/      # Navigation, Footer, Layout
│   │   ├── ui/          # Reusable UI components
│   │   └── sections/    # Page-specific sections
│   ├── pages/           # Page components
│   ├── data/            # Portfolio content (edit these!)
│   ├── types/           # TypeScript interfaces
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── styles/          # Global styles
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open http://localhost:5173/Portfolio/ in your browser

## Customization

### Update Your Information

Edit the data files in `src/data/`:

- **`personal.ts`** - Your name, title, bio, contact info
- **`projects.ts`** - Your projects with descriptions and links
- **`experience.ts`** - Work experience and achievements
- **`blog.ts`** - Blog posts with external links
- **`skills.ts`** - Technical skills organized by category

### Add Your Resume

Place your resume PDF in `public/resume.pdf`

### Add Profile Image

Place your profile image in `public/assets/images/profile.jpg` (or update the path in `personal.ts`)

### Update Social Links

Edit the `socialLinks` array in `src/data/personal.ts`

### Change Colors

Customize the theme in `tailwind.config.js`:
- Light mode: `background`, `foreground`, `accent`, etc.
- Dark mode: `dark-background`, `dark-foreground`, etc.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Deployment

### GitHub Pages

1. Update `vite.config.ts` with your repository name:
```typescript
base: '/your-repo-name/',
```

2. Deploy:
```bash
npm run deploy
```

3. Enable GitHub Pages in your repository settings (source: gh-pages branch)

### Vercel / Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set `base: '/'` in `vite.config.ts` for custom domains

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Performance

- ✅ Lighthouse Score: 90+ across all metrics
- ✅ Optimized bundle size
- ✅ Lazy loading for images
- ✅ Code splitting with React Router

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

Built with ❤️ using React, TypeScript, and Tailwind CSS
