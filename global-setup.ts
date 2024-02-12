import {
  Browser,
  BrowserContext,
  Page,
  chromium,
  expect,
} from '@playwright/test'

export default async function globalSetup() {
  const browser: Browser = await chromium.launch({ headless: false })
  const context: BrowserContext = await browser.newContext()
  const page: Page = await context.newPage()

  await page.goto('https://demoblaze.com')
  await page.locator('#login2').click()
  await page.locator('#loginusername').fill('test')
  await page.locator('#loginpassword').fill('test')
  await page.locator('[onclick="logIn()"]').click()
  await expect(page.locator('#logout2')).toBeVisible({ timeout: 30_000 })

  // Save the state on the webpage - means we are logged in
  await page.context().storageState({ path: './LoginAuth.json' })

  await browser.close()
}
