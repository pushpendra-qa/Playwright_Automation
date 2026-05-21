const{test, expect}=require('@playwright/test');

test("HardAssertion",async({page})=>{
/*
    //hard assertion 
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page.locator('#nava')).toBeVisible();
*/
/*
    //hard assertion 
    await page.goto('https://www.demoblaze.com/');
    await expect(page).toHaveTitle('STORE123')
    await expect(page).toHaveURL('https://www.demoblaze.com/');
    await expect(page.locator('#nava')).toBeVisible();
*/
    //soft Assertion
    await page.goto('https://www.demoblaze.com/');
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/');
    await expect.soft(page.locator('#nava')).toBeVisible();
})