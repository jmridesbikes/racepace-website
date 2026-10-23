# RacePace Website

A modern, responsive website for RacePace Sportswear built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive
- ⚡ Fast and optimized
- 🚀 Deployed on GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the static site for GitHub Pages:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Push to the `main` branch - the GitHub Actions workflow will automatically build and deploy

### Option 2: Manual Deployment

1. Build the site: `npm run build`
2. Go to repository Settings → Pages
3. Under "Source", select "Deploy from a branch"
4. Select the `main` branch and `/out` folder
5. Save

### Important: If deploying to a subdirectory

If your repository name is not `racepace-website` or you're deploying to a subdirectory, update `next.config.js`:

```javascript
basePath: '/your-repo-name',
trailingSlash: true,
```

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
├── public/          # Static assets
└── styles/          # Global styles
```

## Technologies Used

- **Next.js 15** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **TypeScript** - Type safety
- **React Icons** - Icon library

## License

Private project for RacePace Sportswear

