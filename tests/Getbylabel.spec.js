const{test,expect}=require('@playwright/test');

test('getbykabel',async({page})=>
    {
        await page.goto('https://rahulshettyacademy.com/angularpractice/');
        await page.getByLabel('Check me out if you Love IceCreams!').check();
        await page.getByLabel('Employed').check();
        await page.getByLabel('Gender').selectOption('Female');

        //getByPlaceholder
        await page.getByRole("button",{name:'submit'}).click();
        const bool=await page.getByText('Success! The Form has been submitted successfully!.').isVisible();
        await expect(bool).toBeTruthy();

        //getbyrole
        await page.getByRole("link",{name:'Shop'}).click();
        await page.locator('app-card').filter({hasText:'Nokia Edge'}).getByRole("button",{name:'Add'}).click();                //app-card is tagname
        
    }
)
