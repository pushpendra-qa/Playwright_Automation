const{test,expect}=require('@playwright/test');

test("popup validation", async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        //await page.goto("https://www.google.com");

        //await page.goBack();
        //await page.goForward();

        await expect(page.locator('#displayed-text')).toBeVisible();
        await page.locator('#hide-textbox').click();
        await expect(page.locator('#displayed-text')).toBeHidden();

        page.on('dialog',dialog=>dialog.accept());
        await page.locator('#confirmbtn').click();
        //await page.pause();
        await page.locator('#mousehover').hover();

        //switch to frame
        const framepage=await page.frameLocator('#courses-iframe');
        await framepage.locator('li a[href*=lifetime]:visible').click();
        const textcheck=await framepage.locator('.text h2').textContent();
        console.log(textcheck.split(" ")[1]);
    }
)