import { test, expect } from "@playwright/test"

test("landing renders and CTA visible", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  await expect(page.getByRole("link", { name: /Join waitlist/i })).toBeVisible()
})
