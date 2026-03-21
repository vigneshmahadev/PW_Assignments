import test from "@playwright/test";
test("Test a lead generation page", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator("#username").fill("Demosalesmanager");
  await page.locator("#password").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.locator("#label > a").click();
  await page.locator("[href='/crmsfa/control/leadsMain']").click();
  await page.locator("[href='/crmsfa/control/createLeadForm']").click();
  await page.locator("[id='createLeadForm_companyName']").fill("ABC.pvt.ltd");
  await page.locator("[id='createLeadForm_firstName']").fill("emma");
  await page.locator("[id='createLeadForm_lastName']").fill("watson");
  await page.locator("[id='createLeadForm_personalTitle']").fill("Dear");
  await page.locator("[id='createLeadForm_generalProfTitle']").fill("Actress");
  await page.locator("[id='createLeadForm_annualRevenue']").fill("500k");
  await page.locator("[name='departmentName']").fill("Acting");
  await page
    .locator("[id='createLeadForm_primaryPhoneNumber']")
    .fill("9843780254");
  await page.locator(".smallSubmit").click();
  await page.waitForTimeout(2000);
  let title = await page.title();
  console.log(title);
});
