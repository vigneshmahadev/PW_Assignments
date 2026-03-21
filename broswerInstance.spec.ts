import test, { chromium, firefox } from "@playwright/test";

test("Test the browser instance", async () => {
  const browser = await chromium.launch({ channel: "msedge" });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.redbus.in", { timeout: 2000 });

  console.log(`From Egde browser: Title: `, await page.title());
  console.log(`From Egde browser: URL: `, page.url());

  page.close();

  const firebox = await firefox.launch();
  const fireboxContext = await firebox.newContext();
  const firefoxPage = await fireboxContext.newPage();

  await firefoxPage.goto("https://www.flipkart.com", { timeout: 2000 });

  console.log(`From Firefox browser: Title: `, await firefoxPage.title());
  console.log(`From Firefox browser: URL: `, firefoxPage.url());

  firefoxPage.close();
});
