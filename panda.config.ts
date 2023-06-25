import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Files to exclude
  exclude: [],

  // Where to look for your css declarations
  include: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/app/**/*.{ts,tsx,js,jsx}'],

  // The output directory for your css system
  outdir: 'styled-system',

  // Whether to use css reset
  preflight: true,

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          body: { value: '#F2E7C5' },
          header: { value: '#504242' },
          primary: { value: '#EC906B' },
          secondary: { value: '#F4BC8B' },
          tertiary: { value: '#F3E2AA' },
        },
        fonts: {
          dancing: { value: 'var(--font-dancing-script), cursive' },
          raleway: { value: 'var(--font-raleway), sans-serif' },
        },
      },
    },
  },
});
