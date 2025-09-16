import { test, expect } from "@playwright/test";

    test.describe("Waitlist Form", () => {
      test.beforeEach(async ({ page }) => {
        await page.goto("/waitlist");
      });

      test("allows a user to join the waitlist", async ({ page }) => {
        const email = `user-${Date.now()}@example.com`;
        await page.getByPlaceholder("you@example.com").fill(email);
        await page.getByRole("button", { name: /Join/i }).click();
        await expect(page.getByText(/Thanks — you’re on the list/i)).toBeVisible();
      });

      test("shows an error for an invalid email", async ({ page }) => {
        await page.getByPlaceholder("you@example.com").fill("invalid-email");
        await page.getByRole("button", { name: /Join/i }).click();
        await expect(page.getByText(/invalid email/i)).not.toBeVisible(); // Client-side validation should prevent submission
        const validationMessage = await page.getByPlaceholder("you@example.com").evaluate(e => (e as HTMLInputElement).validationMessage);
        expect(validationMessage).toContain("Please include an '@' in the email address.");
      });
    });