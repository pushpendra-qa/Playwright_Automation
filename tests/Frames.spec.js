const{test,expect}=require('@playwright/test');

test('frames',async({page})=>
    {
        await page.goto('https://ui.vision/demo/webtest/frames');

        //total frames
        const allframe=await page.frames();
        console.log("number of frames:" +allframe.length);

        //approach 1 by using name or url   for url copy link address
        //const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
        //await frame1.fill('[name="mytext1"]', 'welcome');
        //if name available
        //const page1=awaitpage.frame('name');

        //approach 2 by using frame locator
        //await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]').fill('welcome');

        //approach 3
        const inputbox = await page.frameLocator('frame[src="frame_1.html"]').locator('[name="mytext1"]');
        await inputbox.fill('welcome');
        await page.waitForTimeout(5000);
    })
