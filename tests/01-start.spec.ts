import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("first scenario", async ({ page }) => {
  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  await page.getByRole("link", { name: "About" }).click();
  await page.getByRole("link", { name: "Contact" }).click();

  await page.waitForURL("**/contact");

  // await page.getByRole("heading", { name: "Contact" }).click();
  await page.getByRole("link", { name: "Products", exact: true }).click();
  await page.getByRole("link", { name: "Create" }).click();
  await page.getByPlaceholder("Name").click();
  await page.getByPlaceholder("Name").fill("Produkt123");
  await page.getByPlaceholder("Name").press("Tab");
  await page.getByPlaceholder("Description").fill("Opis");
  await page.getByPlaceholder("Description").press("Tab");
  await page.getByPlaceholder("Price").fill("6789");
  await page.getByRole("button", { name: "Submit" }).click();

  await page.waitForTimeout(1000);
  await expect(page.getByText("Great success")).toBeVisible();
});
