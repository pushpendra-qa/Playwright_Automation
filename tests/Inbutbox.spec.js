const{test,expect}=require('@playwright/test');

test('handle inputbox',async({page})=>{
await page.goto('https://qa-automation-practice.netlify.app/auth_ecommerce')
//inputbox
await expect(page.locator('#email')).toBeVisible();  //input box visible or not
await expect(page.locator('#email')).toBeEmpty();    //input box empty or not
await expect(page.locator('#email')).toBeEditable();  //editable or not
await expect(page.locator('#email')).toBeEnabled();   //enabled or not


await page.locator('#email').fill('admin@admin.com');
await page.waitForTimeout(5000);         //passing code

})