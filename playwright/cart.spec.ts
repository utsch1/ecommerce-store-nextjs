import { expect, test } from '@playwright/test';

test('add to cart, change quantity, remove product test', async ({ page }) => {
  // go to single plant page
  await page.goto('http://localhost:3000/shop/1');

  // accept cookie terms
  await page.locator('button', { hasText: 'Ok' }).click({ clickCount: 1 });

  // set count to 4 & add product to cart
  await page.locator('button', { hasText: '+' }).click({ clickCount: 3 });
  await page
    .locator('button', { hasText: 'ADD TO CART' })
    .click({ clickCount: 1 });

  // go to Cart page
  await page.click('text=CART');
  await expect(page).toHaveURL('http://localhost:3000/cart');

  // expect chosen product to be in cart, with quantity 4
  await expect(page.locator('[data-test-id="cart-product-1"]')).toBeVisible;
  await expect(
    page.locator('[data-test-id="cart-product-quantity-1"]'),
  ).toHaveText('Quantity: 4');

  // remove product, expect 'Your cart is empty!'
  await page.locator('button', { hasText: 'X' }).click({ clickCount: 1 });
  await expect(page.locator('Your cart is empty!')).toBeVisible;
  await expect(page.locator('[data-test-id="cart-product-1"]')).not.toBeVisible;
});
