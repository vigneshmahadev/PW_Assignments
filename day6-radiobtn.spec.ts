import test, { expect } from "@playwright/test";
test("Test a radio buttons", async ({ page }) => {
  await page.goto("https://leafground.com/radio.xhtml");

  //check the default selected one.
  for (let i = 0; i < 3; i++) {
    if (await page.locator("[for='j_idt87:console2:" + i + "']").isChecked()) {
      switch (i) {
        case 0:
          console.log("Chrome is selected.");
          break;
        case 1:
          console.log("Firefox is selected.");
          break;
        case 2:
          console.log("Safari is selected.");
          break;
        case 3:
          console.log("Edge is selected.");
          break;
        default:
          console.log("nothing is selected.");
          break;
      }
    }
  }

  const favBrowser = page.locator("(//label[text()='Firefox'])[1]");

  await favBrowser.click();
  await favBrowser.isChecked();

  await page.locator("[for='j_idt87:city2:1']").click();

  for (let i = 0; i < 3; i++) {
    if (await page.locator("[for='j_idt87:age:" + i + "']").isChecked()) {
      console.log(`age group ${i + 1} is checked.`);
    }
  }
});
