import test, { expect } from "@playwright/test";

test("Test the AutoWaits ", async ({ page }) => {
  await page.goto("https://leafground.com/waits.xhtml");

  // Click the hidden button after 10 sec
  await page.locator("[id='j_idt87:j_idt89']").click();
  await page.locator("[id='j_idt87:j_idt90']").click();

  // Wait for 10sec to check the visibility of button.
  await page.locator("[id='j_idt87:j_idt92']").click();
  const isVisible = page.locator("[id='j_idt87:j_idt93']");
  expect(isVisible).not.toBeVisible({ timeout: 10000 });

  // Wait for text change
  await page.locator("[id='j_idt87:j_idt98']").click();
  await expect(page.locator("#j_idt87\\:j_idt99")).toContainText(
    "Did you notice?",
    { timeout: 10000 },
  );
});
