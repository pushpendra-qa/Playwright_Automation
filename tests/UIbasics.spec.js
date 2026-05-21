const{expect,test}=require('@playwright/test');

test('Browser Context Playwright test', async ({ browser }) => {

    // chrome - plugins / cookies

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

});


test.only('Page Playwright test', async ({ page }) =>
    {

    await page.goto("https://www.google.com/");
    //const Title=await page.title();
    //console.log(Title);
    //await expect(Title).toBe("Google");

    //get title then do assertion
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");     //with page fixture we write this syntax
   


    }
);

