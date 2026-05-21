const{test,expect}=require('@playwright/test');

test('Built-in-locators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //getByAltText- to locate logo, image etc
    const logo=await page.getByAltText('company-branding');
    await expect(logo).toBeVisible();

    //getByPlaceholder-to locate an input
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill("1234");

    //getbyrole-
    await page.getByRole('Button', {type:'submit'}).click();

    
})