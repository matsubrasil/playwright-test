import { test, expect } from '@playwright/test'

test('Basic Test', async ({ page }) => {
  await page.goto('https://demoblaze.com')
  // await page.locator('#login2').click()
  // await page.locator('#loginusername').fill('test')
  // await page.locator('#loginpassword').fill('test')
  // await page.locator('[onclick="logIn()"]').click()
  await expect(page.locator('#logout2')).toBeVisible()
})

test('Basic Test 2', async ({ page }) => {
  await page.goto('https://demoblaze.com')
  await expect(page.locator('#logout2')).toBeVisible()
})
