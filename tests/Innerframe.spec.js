const{test,expect}=require('@playwright/test');

test('frames',async({page})=>
{
        await page.goto('https://ui.vision/demo/webtest/frames');

        const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
        //await frame3.fill('[name="mytext3"]','javascript');

        await frame3.locator('[name="mytext3"]').fill('javascript');

        const childframe = await frame3.childFrames();
        await childframe[0].locator('//div[@id="i6"]').click();   //or check 


        await page.waitForTimeout(5000);

        


})