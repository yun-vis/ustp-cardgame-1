// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts', // We will create this next
    reporters: ['default', 'junit'],   // <--- IMPORTANT: Generates the XML report for the AI task
    outputFile: 'test-results.xml',    // <--- Where the report is saved
  },
})