# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview built site locally |
| `npm run astro` | Run Astro CLI commands |

## Architecture

This is an Astro-powered personal website featuring a photo gallery system and blog. The site is built with TypeScript, Tailwind CSS, and deployed to GitHub Pages.

### Content System
- **Albums**: Photo galleries organized by location/trip in `src/data/albums/`
  - Each album has a `.md` file with metadata (slug, title, year, thumbnails)
  - Photos are stored in subdirectories matching the album structure
  - Albums can have sub-albums (e.g., countries within a bike trip)
- **Posts**: Blog posts in `src/data/posts/` with frontmatter (title, pubDate, description)

### Photo Gallery Logic
The photo system (`src/lib/albums.ts`) handles:
- Loading photos from filesystem using Vite's `import.meta.glob`
- Organizing photos into albums and sub-albums
- Navigation between photos (previous/next with wraparound)
- Static path generation for dynamic routes

### Key Components
- **Gallery components**: `src/components/Gallery/` for photo display and navigation
- **Layout system**: Single main layout in `src/layouts/Layout.astro`
- **Navigation**: NavBar with logo and dark mode toggle
- **Footer**: Tech links and social media connections

### Routing
- `/` - Homepage
- `/albums/` - Album grid view
- `/albums/[album]/` - Individual album view
- `/albums/[album]/[photo]` - Individual photo view with prev/next navigation
- `/posts/` - Blog post list
- `/posts/[id]` - Individual post view
- `/now` - Current status page

### Styling
- Tailwind CSS v4 with custom Vite plugin for unused variable removal
- Dark/light theme support with theme toggle
- Responsive design optimized for photo galleries

### Image Handling
- Photos are imported as Astro ImageMetadata objects
- Thumbnails are specified in album frontmatter
- Images are optimized by Astro's built-in image processing