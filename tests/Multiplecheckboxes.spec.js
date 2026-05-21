const{test,expect}=require('@playwright/test');

test('multiplecheckboxes',async({page})=>{

   await page.goto('https://qa-automation-practice.netlify.app/');
   await page.locator('#buttons').first().click();
   await page.locator('#checkboxes').click();

   const checkboxlocators=["#checkbox1","#checkbox2","#checkbox3"]; //array storing locator of checkboxes
   for(const locator of checkboxlocators) //select multiple checkboxes
   {
    await page.locator(locator).check();
   }

   //for unselecting these
   for(const locator of checkboxlocators)
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();
        }    
    }

   await page.waitForTimeout(5000);
})