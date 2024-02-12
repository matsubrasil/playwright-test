import { test, expect } from '@playwright/test'

test('Basic Test 2', async ({ page }) => {
  await page.goto('https://demoblaze.com')
  await expect(page.locator('#logout2')).toBeVisible()
})
