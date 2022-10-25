import { test, expect } from '@playwright/test';

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

test('Opens the Airkit app, checks that a label exists, clicks a button and verifies result', async ({ page }) => {
  await page.goto('https://app.airkit.com/elliots-basic-tdd');

  // Test a label
  const label = page.getByText('Hello World');
  await expect(label).toBeVisible();

  // Click the button.
  const button = page.getByText("Click me!")
  await button.click();

  // Verify that the second page text appears
  await expect(page.getByText("Second page!")).toBeVisible()

  // wait 3 seconds, because otherwise the test ends too fast!
  await delay(3000)
})


test('This test fails on purpose!', async ({ page }) => {
  await page.goto('https://app.airkit.com/elliots-basic-tdd');

   // Test a label, incorrectly!
   const label = page.getByText('This text is not on the page!');
   await expect(label).toBeVisible(); 
})