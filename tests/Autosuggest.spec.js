const{test,expect}=require("@playwright/test");

test('Autosuggest',async({page})=>
    {
        await page.goto('https://www.redbus.in/?gad_source=1&gad_campaignid=21766324448&gclid=Cj0KCQjw8PDPBhCeARIsAOJwmWUHv1mqw5YgAfhi9YIMc_5-5CCjyFW_SkvTf90Vv6bP7EA9UHRTcF4aAtADEALw_wcB');
        await page.locator('input#srcinput').fill('Delhi');
        await page.waitForSelector('[role="option"]');

        //await page.waitForTimeout(3000);
        //locating all suggestions
        //const options=await page.locator('[role="option"]');
        //const count=await options.count();
        //console.log("number of options: " +count);


       const fromcities=await page.$$('[role="option"]');
        for(let option of fromcities)
            {
                //console.log(await option.textContent());
                const value=await option.textContent();
                console.log(value);
            }

    })