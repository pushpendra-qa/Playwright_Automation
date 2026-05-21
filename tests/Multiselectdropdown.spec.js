const{test,expect}=require('playwright/test');

test('dropdown',async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/');

        //select multiple options from multi select dropdown
        //await page.selectOption('#colors',['Blue','Red','Yellow']);

        //Assertions 
        //check no of options 
        //const options = await page.locator('#colors option');
        //await expect(options).toHaveCount(7);

        //by using javascript array
        //const options =await page.$$('#colors option');
        //console.log("number of options:" +options.length);
        //await expect(options.length).toBe(7);

        //presence of option in the dropdown
        const content=await page.locator('#colors').textContent();
        await expect(content.includes('Red')).toBeTruthy();
        
        await page.waitForTimeout(5000);
    })