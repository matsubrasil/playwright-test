import { test, expect } from '@playwright/test'

// test.use({ storageState: './NoAuth.json' })
test('Basic Test 2', async ({ page, context }) => {
  // await context.clearCookies()
  await page.goto('https://demoblaze.com')
  await expect(page.locator('#logout2')).toBeVisible()
})
