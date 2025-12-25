import { test, expect } from '@playwright/test';

test('Berhasil login ke Swag Labs', async ({ page }) => {
//   // 1. Buka website
//   await page.goto('https://www.saucedemo.com/');

//   // 2. Isi username 'standard_user'
//   // Tips: Gunakan inspect element di browser chrome-mu untuk cari tahu locator-nya
//   // atau gunakan fitur "Pick Locator" di VS Code
//   await page.locator('[data-test="username"]').fill('standard_user');

//   // 3. Isi password 'secret_sauce'
//   await page.locator('[data-test="password"]').fill('secret_sauce');

//   // 4. Klik tombol Login
//   await page.locator('[data-test="login-button"]').click();


// Ritual Persiapan: Dijalankan OTOMATIS sebelum SETIAP tes dimulai
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
});

  // 5. Pastikan berhasil masuk
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

  // 6. Mencoba melakukan add to cart 2 barang
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

  // 6. Klik menu shopping cart
  await page.locator('[data-test="shopping-cart-link"]').click();

  // 7. Periksa apakah sudah berpindah laman
  await expect(page.locator('[data-test="title"]')).toHaveText('Your Cart');

  // 8. Lakukan checkout
  await page.locator('[data-test="checkout"]').click();

  //9. Isi First name, last name, dan kode pos
  await page.locator('[data-test="firstName"]').fill('John');
  await page.locator('[data-test="lastName"]').fill('Doe');
  await page.locator('[data-test="postalCode"]').fill('1230473');

  // 10. Klik continue
  await page.locator('[data-test="continue"]').click();
  
  // 10. Klik Finish
  await page.locator('[data-test="finish"]').click();

  //11. Pastikan transaksi sudah berhasil
  await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Complete!');
});