import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("the home page helps a visitor start planning an application", async ({
  page,
}, testInfo) => {
  const runtimeErrors: string[] = [];
  page.on("pageerror", (error) => runtimeErrors.push(error.message));
  const response = await page.goto("/");

  expect(response?.status()).toBe(200);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Your next idea starts here.",
    }),
  ).toBeVisible();
  const planLink = page.getByRole("link", {
    name: "Plan your app",
    exact: true,
  });
  await expect(planLink).toHaveAttribute("href", "#getting-started");
  await planLink.click();
  await expect(page).toHaveURL(/\/#getting-started$/);
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "Start with one useful workflow",
    }),
  ).toBeInViewport();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);

  await page.screenshot({
    path: testInfo.outputPath("home.png"),
    fullPage: true,
  });
  expect(runtimeErrors).toEqual([]);
});

test("the home page passes automated accessibility checks", async ({
  page,
}) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze();

  expect(results.violations).toEqual([]);
});

test("an unknown URL returns 404 and lets the visitor return home", async ({
  page,
}) => {
  const response = await page.goto("/this-page-does-not-exist");

  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { level: 1, name: "Page not found" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Back to home", exact: true }).click();
  await expect(page).toHaveURL("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Your next idea starts here.",
    }),
  ).toBeVisible();
});
