const{test,expect}=require('@playwright/test');

test('Clientapp',async({page})=>
    {
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator('#userEmail').fill('whctarkar24@gmail.com');
        await page.locator('#userPassword').fill('Harekrishna108');
        await page.locator('#login').click();

        await page.waitForLoadState('networkidle');

        //for getting title of one product
        //console.log(await page.locator('.card-body h5 b').nth(0).textContent());
        //or
        //const title = await page.locator('.card-body h5 b').first().textContent();
        //console.log(title);

        //for getting all titles
        const titles=await page.locator('.card-body h5 b').allTextContents();
        console.log(titles);
        //console.log(await page.locator('.card-body h5 b').allTextContents());

        //assertions 
        //await expect(titles).toEqual(['ADIDAS ORIGINAL', 'ZARA COAT 3', 'iphone 13 pro']);

    }
)