# Portfolio Website

A modern, responsive portfolio website for a software engineer, built with React, TypeScript, Vite, and Node.js.

## Features

- ⚡ Fast development with Vite
- ⚛️ React 19 with TypeScript
- 🎨 Modern, responsive design
- 📱 Mobile-friendly navigation
- 🎯 Smooth scroll navigation
- 💼 Project showcase
- 🛠️ Skills section
- 📧 Contact section

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Runtime**: Node.js
- **Styling**: CSS Modules
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd abbi-website
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
src/
├── components/        # React components
│   ├── Header.tsx    # Navigation header
│   ├── Hero.tsx      # Hero section
│   ├── About.tsx     # About section
│   ├── Projects.tsx  # Projects showcase
│   ├── Skills.tsx    # Skills section
│   ├── Contact.tsx   # Contact section
│   └── Footer.tsx    # Footer
├── App.tsx           # Main app component
├── main.tsx          # App entry point
└── index.css         # Global styles
```

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx` to update your name and tagline
2. **About**: Modify `src/components/About.tsx` to add your bio
3. **Projects**: Update `src/components/Projects.tsx` with your actual projects
4. **Skills**: Edit `src/components/Skills.tsx` to reflect your skill set
5. **Contact**: Update links in `src/components/Contact.tsx` with your email and social profiles

### Styling

Each component has its own CSS file for easy customization:
- Global styles: `src/index.css`
- Component-specific styles: `src/components/*.css`

## License

This project is open source and available for personal and commercial use.
