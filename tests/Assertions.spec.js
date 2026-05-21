const{test, expect}= require('@playwright/test');

test('AssertionsTest', async({page})=>{
    //open url
    await page.goto('https://demo.nopcommerce.com/');

    //1)to check url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/');

    //2)to verify title 
    await expect(page).toHaveTitle('nopCommerce demo store. Home page title');

    //3)to check element is visible or not 
    const logoelement = page.locator('.header-logo');
    await expect(logoelement).toBeVisible();
    
})