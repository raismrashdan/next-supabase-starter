import { test, expect } from "@playwright/test"

test("redirects unauthenticated users away from /app/dashboard", async ({ page }) => {
  const res = await page.goto("/app/dashboard")
  expect(res?.status()).toBeLessThan(400)
  await expect(page).toHaveURL(/\/login/)
})
