const{test, expect,chromium}=require('@playwright/test');

test('handling pages/window',async()=>
    {
        const browser=await chromium.launch();
        const context=await browser.newContext();
 
        const page1=await context.newPage();
        const page2=await context.newPage();

        const allpages=await context.pages();
        console.log("number of pages created: " +allpages.length);

        await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page1).toHaveTitle('OrangeHRM');

        await page2.goto('https://orangehrm.com/');
        await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses');

    })

    test.only('handling multiple pages',async()=>
    {
        const browser=await chromium.launch();
        const context=await browser.newContext();
 
        const page1=await context.newPage();

        await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await expect(page1).toHaveTitle('OrangeHRM');

        const pagepromise=context.waitForEvent('page');
        await page1.locator('//a[@href="http://www.orangehrm.com"]').click();

        const newpage=await pagepromise;
        await expect(newpage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses");

    })
    