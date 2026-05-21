const{test,expect}=require('@playwright/test');

test('Asseertion',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1)to check radio button checked
    //first locate the element and select it
    const radiobutton= await page.locator('#male');
    await radiobutton.click();
    await expect(radiobutton).toBeChecked();

    //2)to check check boxes 
    //first locate then clicked/select 
    const checkbox=await page.locator('#sunday');
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    //to check element has attribute 
    const nameinput = await page.locator('#name');
    await expect(nameinput).toHaveAttribute('class','form-control');

    //to have text - for inner text and it should be complete
    const innertext=await page.getByText('PlaywrightPractice');
    await expect(innertext).toHaveText('PlaywrightPractice');

    //to contains text
    const innertext2=await page.getByText('PlaywrightPractice');
    await expect(innertext2).toContainText('PlaywrightPr');

    //to have value 
    const emailbox=await page.locator('#email');
    await emailbox.fill('test@gmail.com');
    await expect(emailbox).toHaveValue('test@gmail.com');

    //to have count useful for dropdowns
    const countryDropdown=await page.locator('#country')
    const options =await countryDropdown.locator('option');
    await expect(options).toHaveCount(10);  // adjust based on actual count

    //these all are hard assertions i.e if one fails it will terminate the code 
})
