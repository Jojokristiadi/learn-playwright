import {test, expect} from '@playwright/test';

test('Simulasi gagal untuk cek fitur retries', async ()=> {
    console.log('-----Melakukan pengujian-----')

    //Membuat pernyataan yang salah
    //kita memaksa user percaya 1 + 1 = 3
    //user akan menolak dan Playwright akan menganggap gagal
    expect(1 + 1).toBe(3);
});