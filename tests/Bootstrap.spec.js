const{test,expect}=require('playwright/test');

test('dropdown',async({page})=>
    {
        await page.goto('https://www.jquery-az.com/10-demos-of-bootstrap-multiselect-dropdown-by-using-jquery/');

        await page.locator('#menu-item-7090').hover();
        //await page.getByText('Kotlin').click();    //for selcting the option

        //total options 
        //approach 1
        //const options = await page.locator('#menu-item-7090 .sub-menu li');
        //await expect(options).toHaveCount(6);

        //approach2
        //const options = await page.$$('#menu-item-7090 .sub-menu li');
        //console.log("number of options:" +options.length);
        //await expect(options.length).toBe(6);

        //approach 3
        //const options = await page.locator('#menu-item-7090 .sub-menu li');
        //const count=await options.count();
        //console.log("number of options: " +count);
        //await expect(count).toBe(6);

        //presence of option in the dropdown
        //const content= await page.locator('#menu-item-7090').textContent();
        //await expect(content.includes('Kotlin')).toBeTruthy();

        //all options are prnted
        //const options = await page.locator('#menu-item-7090 .sub-menu li').allTextContents();
        //console.log(options);

        //using loop
        const options = await page.$$('#menu-item-7090 .sub-menu li');
        for(let option of options)
            {
                //console.log(await option.textContent());
                const value=await option.textContent();
                console.log(value);
                if(value.includes('Kotlin')||value.includes('java'))
                    {
                        await option.click();
                        break;
                    }

            }

        await page.waitForTimeout(5000);


    }
)
