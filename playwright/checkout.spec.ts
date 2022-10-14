import { expect, test } from '@playwright/test';

test('checkout flow test', async ({ page }) => {
  // go to single plant page
  await page.goto('http://localhost:3000/shop/2');

  // accept cookie terms
  await page.locator('button', { hasText: 'Ok' }).click({ clickCount: 1 });

  // set count to 4 & add product to cart
  await page.locator('button', { hasText: '+' }).click({ clickCount: 1 });
  await page
    .locator('button', { hasText: 'ADD TO CART' })
    .click({ clickCount: 1 });

  // go to Cart page
  await page.click('text=CART');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // expect chosen product to be in cart, with quantity 4
  await expect(page.locator('[data-test-id="cart-product-2"]')).toBeVisible;
  await expect(
    page.locator('[data-test-id="cart-product-quantity-2"]'),
  ).toHaveText('Quantity: 2');

  // go to checkout page
  await page.locator('a:has-text("checkout")').click();
  await expect(page).toHaveURL('http://localhost:3000/payment');

  // fill out the form
  await page.locator('[data-test-id="checkout-first-name"]').fill('Ute');
  await page.locator('[data-test-id="checkout-last-name"]').fill('Greiner');
  await page
    .locator('[data-test-id="checkout-email"]')
    .fill('myemail@gmail.com');
  await page
    .locator('[data-test-id="checkout-address"]')
    .fill('Fiction Street 23');
  await page.locator('[data-test-id="checkout-city"]').fill('Vienna');
  await page.locator('[data-test-id="checkout-postal-code"]').fill('1010');
  await page.locator('[data-test-id="checkout-country"]').fill('Austria');
  await page
    .locator('[data-test-id="checkout-credit-card"]')
    .fill('1234567812345622');
  await page.locator('[data-test-id="checkout-expiration-date"]').fill('23/45');
  await page.locator('[data-test-id="checkout-security-code"]').fill('998');

  // confirm order & go to 'thank you' page
  await page
    .locator('button', { hasText: 'CONFIRM ORDER' })
    .click({ clickCount: 1 });
  await expect(page).toHaveURL('http://localhost:3000/thankyou');
});
