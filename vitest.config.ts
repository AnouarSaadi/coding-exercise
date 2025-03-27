import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    globals: true,
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['e2e/**/*', 'node_modules/**/*'],
    deps: {
      optimizer: {
        web: {
          include: ['@testing-library/jest-dom']
        }
      }
    }
  },
});
