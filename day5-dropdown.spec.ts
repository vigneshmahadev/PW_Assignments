import test, { expect } from "@playwright/test";

test("Test a dropdown in Leafground", async ({ page }) => {
  await page.goto("https://leafground.com/select.xhtml");

  await page.selectOption("[class='ui-selectonemenu']", {
    value: "Playwright",
  });

  const UIcount = await page
    .locator("//select[@class='ui-selectonemenu']/option")
    .count();

  expect(UIcount).toBe(5);

  // To select country
  await page.locator("[id='j_idt87:country_label']").click();
  await page.locator("[id='j_idt87:country_3']").click();

  // To select cities
  await page.locator("[id='j_idt87:city_label']").click();

  // Check the cities are loaded..
  let cities = page.locator(`//ul[@id='j_idt87:city_items']/li`);
  let cityCount = await cities.count();
  expect(cityCount).toBe(4);

  // select the city
  await page.locator("[id='j_idt87:city_2']").click();

  // select the three course
  await page.getByRole("button", { name: "Show Options" }).click();
  //course 1
  await page.locator("[data-item-label='AWS']").click();
  // course-2
  await page.getByRole("button", { name: "Show Options" }).click();
  await page.locator("[data-item-label='Playwright']").click();
  //course-3
  await page.getByRole("button", { name: "Show Options" }).click();
  await page.locator("[data-item-label='ReactJs']").click();

  await page.locator("[id='j_idt87:lang_label']").click();

  let languages = page.locator("//ul[@id='j_idt87:lang_items']/li");

  // let langCount = await languages.count();

  // for (let i = 1; i <= langCount; i++) {
  //   console.log(await languages.nth(i).innerText());
  // }

  await languages.nth(2).click();

  await page.locator("[id='j_idt87:value_label']").click();

  await page.locator("[data-label='இரண்டு']").click();

  await page.waitForTimeout(3000);
});
