import { test, expect } from "@playwright/test";

test("filterJobSearch.test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page
    .locator("div")
    .filter({ hasText: /^FrontendSeniorHTMLCSSJavaScript$/ })
    .getByTestId("tags")
    .first()
    .click();
  await page.getByText("Senior", { exact: true }).click();
  await expect(page.getByTestId("filterTag")).toHaveCount(2);
  await page.getByText("Clear").click();
  await expect(page.getByTestId("filterTag")).toHaveCount(0);
});
