# PRNTFRM

A modern React + TypeScript + Tailwind CSS website for PRNTFRM, a small print farm based in Australia.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. When changes are pushed to the `main` branch, the workflow will:

1. Install dependencies
2. Build the project
3. Deploy the `dist` folder to GitHub Pages

The site is accessible at [prntfrm.com](https://prntfrm.com).

### Preview Production Build

```bash
npm run preview
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## Project Structure

```
prntfrm/
├── src/
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Products.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── tailwind.config.js  # Tailwind config
└── vite.config.ts      # Vite config
```

## Features

- Responsive design
- Modern UI with dark theme
- Mobile-friendly navigation
- Contact form
- Accessibility features 
