const{test,expect}=require('playwright/test');

test('dropdown',async({page})=>
    {
        await page.goto('https://testautomationpractice.blogspot.com/');

        //selectoption works only when we have select tag in dropdown.

        //multiple ways to select dropdown options.
        //using label or visible text
        //await page.locator('#country').selectOption({label:'India'});
        //using visible text
        //await page.locator('#country').selectOption('Germany')
        //using value attribute
        //await page.locator('#country').selectOption({value:'germany'});

        //using index
        //await page.locator('#country').selectOption({index:4})

        //Assertions 
        //number of options in dropdown
        //const options=await page.locator('#country option');   //option here is tag name of dropdown
        //await expect(options).toHaveCount(10);

        //approach 2 using array length
        //const options = await page.$$('#country option');   ///$$ is used to get array of elements and $ is used to get single element
        //console.log("number of options in dropdown:" +options.length);
        //await expect(options.length).toBe(10);  //adjust based on actual count

        //check presence of value in the dropdown //approch1
        //const options=await page.locator('#country').textContent();
        //await expect(options.includes('India')).toBeTruthy();

        //approach 2 using loop 
        //first we will store all options in variable using array then apply loop
        const options=await page.$$('#country option');
        let status=false;
        for(const option of options)
        {
            console.log(await option.textContent());
        }
        await page.waitForTimeout(5000);
    })