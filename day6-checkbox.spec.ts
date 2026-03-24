import test, { expect } from "@playwright/test";

test("Test a checkbox", async ({ page }) => {
  await page.goto("https://leafground.com/checkbox.xhtml");

  await page.locator("//span[text()='Basic']").click();

  await page.locator("//span[text()='Ajax']").click();

  const checkedMessage = await page
    .locator("[class='ui-growl-title']")
    .innerText();
  expect(checkedMessage).toBe("Checked");

  await page.locator("//label[text()='Javascript']").click();

  await page.locator("[id='j_idt87:ajaxTriState']").click();

  const status = await page
    .locator("//span[text()='State has been changed.']/following-sibling::p")
    .innerText();
  await expect(status).toBe("State = 1");

  const toggler = page.locator("//div[@class='ui-toggleswitch-slider']");
  await toggler.click();
  const toggleStatus = await page
    .locator("//span[text()='Checked']")
    .innerText();
  expect(toggleStatus).toBe("Checked");

  const isDisable = await page
    .locator("[id='j_idt87:j_idt102_input']")
    .isDisabled();

  expect(isDisable).toBe(true);

  await page.locator("[data-label='Cities']").click();

  // await page.locator("[id='11cf5881-39e5-4e6f-8e75-6d27d4ac751d']").check();

  await page.locator("(//label[text()='Miami'])[2]").check();
  await page.locator("(//label[text()='Berlin'])[2]").check();
  await page.locator("(//label[text()='Amsterdam'])[2]").check();
  await page.getByRole("link", { name: "Close" }).click();
});
