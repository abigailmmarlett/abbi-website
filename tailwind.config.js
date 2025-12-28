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
        'primary': 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        'secondary': 'hsl(var(--secondary))',
        'secondary-foreground': 'hsl(var(--secondary-foreground))',
        'foreground': 'hsl(var(--foreground))',
        'background': 'hsl(var(--background))',
        'muted': 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        'accent': '#06b6d4',
        'accent-foreground': '#ffffff',
        /* Legacy OKLCH colors */
        'cream': 'oklch(86.9% 0.005 56.366)',         /* warm beige */
        'accentMauve': 'oklch(28.4% 0.109 3.907)',    /* dark reddish/mauve */
        'accentBlue': 'oklch(90.1% 0.058 230.902)',   /* light cool blue */
        'accentRose': 'oklch(60% 0.1 15)',            /* rose */
        'accentNew': 'oklch(60.9% 0.126 221.723)',   /* new accent color */
      },
    },
  },
  darkMode: 'class',
}
