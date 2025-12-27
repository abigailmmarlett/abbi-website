# Abbi Website

A modern web application built with Vite, React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Node.js** - Runtime environment

## Project Structure

```
abbi-website/
├── public/           # Static assets
├── src/              # Source code
│   ├── App.tsx       # Main App component
│   ├── main.tsx      # Application entry point
│   ├── index.css     # Global styles with Tailwind directives
│   └── vite-env.d.ts # Vite type definitions
├── index.html        # HTML entry point
├── package.json      # Dependencies and scripts
├── tsconfig.json     # TypeScript configuration
├── vite.config.ts    # Vite configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the project for production:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Features

- ⚡️ Lightning fast HMR with Vite
- ⚛️ React 19 with hooks
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📦 Optimized production builds

## License

ISC