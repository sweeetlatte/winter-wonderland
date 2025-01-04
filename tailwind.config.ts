import type { Config } from 'tailwindcss';

export default {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: '#EFEFEF',
        'text-70': 'rgba(239,239,239,0.7)',
      },
      fontFamily: {
        ralewayDots: ['"Raleway Dots"', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
