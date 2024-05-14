/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      muted: 'hsl(var(--muted))',
      mutedforeground: 'hsl(var(--muted-foreground))',
      popover: 'hsl(var(--popover))',
      popoverforeground: 'hsl(var(--popover-foreground))',
      card: 'hsl(var(--card))',
      cardforeground: 'hsl(var(--card-foreground))',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      primary: 'hsl(var(--primary))',
      primaryforeground: 'hsl(var(--primary-foreground))',
      secondary: 'hsl(var(--secondary))',
      secondaryforeground: 'hsl(var(--secondary-foreground))',
      accent: 'hsl(var(--accent))',
      accentforeground: 'hsl(var(--accent-foreground))',
      destructive: 'hsl(var(--destructive))',
      destructiveforeground: 'hsl(var(--destructive-foreground))',
      ring: 'hsl(var(--ring))',
      white: 'hsl(182, 0%, 100%)',
      black: 'hsl(182, 0%, 0%)',
    },

    fontFamily: {
      title: ['Poppins', 'sans-serif'],
      text: ['inherit', 'monospace'],
    },
    extend: {},
  },
  plugins: [],
}
