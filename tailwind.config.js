/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'andada': ['Andada Pro', 'serif'],
        'display': ['Andada Pro', 'serif'],
      },
      colors: {
        /* Modern Psychology-Based Palette */
        'primary': 'hsl(var(--primary))',
        'primary-dark': 'hsl(var(--primary-dark))',
        'primary-light': 'hsl(var(--primary-light))',
        'primary-foreground': 'hsl(var(--primary-foreground))',

        'accent': 'hsl(var(--accent))',
        'accent-dark': 'hsl(var(--accent-dark))',
        'accent-light': 'hsl(var(--accent-light))',
        'accent-foreground': 'hsl(var(--accent-foreground))',

        'success': 'hsl(var(--success))',
        'success-light': 'hsl(var(--success-light))',
        'warning': 'hsl(var(--warning))',
        'premium': 'hsl(var(--premium))',
        'premium-light': 'hsl(var(--premium-light))',

        'background': 'hsl(var(--background))',
        'background-alt': 'hsl(var(--background-alt))',
        'surface': 'hsl(var(--surface))',
        'foreground': 'hsl(var(--foreground))',
        'foreground-muted': 'hsl(var(--foreground-muted))',

        'secondary': 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',

        'border': 'hsl(var(--border))',
        'border-strong': 'hsl(var(--border-strong))',

        'muted': 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',

        /* Legacy OKLCH colors */
        'cream': 'oklch(92% 0.02 85)',
        'accentMauve': 'oklch(45% 0.12 340)',
        'accentBlue': 'oklch(75% 0.10 240)',
        'accentRose': 'oklch(70% 0.13 15)',
      },
    },
  },
  darkMode: 'class',
}
