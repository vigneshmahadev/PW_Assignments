import test, { expect } from "@playwright/test";
test("Test a alert from W3Schools editor", async ({ page }) => {
  page.on("dialog", (alert) => {
    if (alert.type().includes("confirm")) {
      console.log(alert.message());
      alert.accept();
    } else {
      alert.dismiss();
    }
  });
  await page.goto(
    "https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm",
  );
  const alertFrame = page.frame({ name: "iframeResult" });
  await alertFrame?.getByRole("button", { name: "Try it" }).click();
  const message = await alertFrame?.locator("[id='demo']").textContent();
  expect(message).toMatch("You pressed OK!");
});
