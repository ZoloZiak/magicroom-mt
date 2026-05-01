import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './3-tests/02-e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
   use: {
     baseURL: process.env.BASE_URL || 'http://localhost:4321',
     trace: 'on-first-retry',
     screenshot: 'only-on-failure',
     actionTimeout: 15000,
     navigationTimeout: 30000,
   },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});