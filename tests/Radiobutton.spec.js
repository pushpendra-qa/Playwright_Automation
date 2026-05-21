const{test,expect}=require('@playwright/test');

test('checkbox',async({page})=>{
   await page.goto('https://qa-automation-practice.netlify.app/');
   await page.locator('#buttons').first().click();
   await page.locator('#checkboxes').click();
   
   //single checkbox
   await page.locator('#checkbox1').check();
   //to verify whether checked or not we will do assertion
   await expect(page.locator('#checkbox1')).toBeChecked();

   await page.waitForTimeout(5000);   //pausing code
})