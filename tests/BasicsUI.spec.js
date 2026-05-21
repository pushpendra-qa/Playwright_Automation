const{test,expect}=require('@playwright/test');

test.only('browsercontext',async({page})=>
    {
        /*
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.locator('#username').fill('rahulshettyacademy');
        await page.locator('#password').fill('Learning@830$3mK');
        await page.locator('#signInBtn').click();

        console.log(await page.locator('[style*="block"]').textContent()); //without printing if we use assertion msg will not be shown in console.
        await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
        */

        
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        await page.locator('#username').fill('rahulshettyacademy');
        await page.locator('#password').fill('Learning@830$3mK2');
        await page.locator('#signInBtn').click();

        //locating title of iphonex

       console.log(await page.locator('.card-body a').nth(0).textContent());
       console.log(await page.locator('.card-body a').first().textContent());        //alternate to nth(0)

       //to get all titlesof the products
       const Alltitles=await page.locator('.card-body a').allTextContents();
       console.log(Alltitles);

       //Assertion individually for each product
       await expect(Alltitles).toContain('iphone X');
       await expect(Alltitles).toContain('Blackberry');
       await expect(Alltitles).toContain('Nokia Edge');
       await expect(Alltitles).toContain('Samsung Note 8');

       //Assertion for all products together  using toequal method because toequal works for arrays
       await expect(Alltitles).toEqual(["iphone X", "Samsung Note 8", "Nokia Edge", "Blackberry"]);

       
    }
)

test('dropdownwithselecttag',async({page})=>
    {
       await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
       const dropdown= await page.locator('select.form-control');
       await dropdown.selectOption('Consultant');
       await page.locator('span.checkmark').nth(1).check();   //click() method can also be used
       await expect(page.locator('span.checkmark').nth(1)).toBeChecked();  //assertion for checking whether radio button is checked or not
       //await page.locator('span.checkmark').nth(1).uncheck();  //to uncheck the radiobutton


       //validation on okay button
       //await expect(page.locator('#okayBtn')).toBeVisible();
       //or 
       const okbtn=await page.locator('#okayBtn');
       await expect(okbtn).toBeVisible();
       //similary validation on cancel button

       await page.locator('#okayBtn').click();

       //verifying link
       const locator= await page.locator('a[href*=documents-request]');
       await expect(locator).toHaveAttribute('class','blinkingText');

       //similary verify another link given on login page
       await page.pause();
    }
)

test('New Window',async({browser})=>
    {
        const context=await browser.newContext();
        const page=await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        const documentlink= await page.locator('a[href*=documents-request]');

        const[newPage]=await Promise.all([
        context.waitForEvent('page'),   //listen for new page opening, rejected, fulfilled 
        await documentlink.click(),   //opens the new page 
        ])

       const text=await newPage.locator('p.red').textContent();
       console.log(text);

    }
)

test('end to end test',async({page})=>
    {
       await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
       await page.locator('#userEmail').fill('whctarkar24@gmail.com');
       await page.locator('#userPassword').fill('Harekrishna108');
       await page.locator('#login').click();

       await page.locator('.card-body').first().waitFor();
       //const products=await page.locator('.card-body').allTextContents();
       //console.log(products);

       const products=await page.locator('.card-body');
       const count = await products.count();
       console.log("total products are " +count)
       for(let i=0;i<count;i++)
        {
            console.log(await products.nth(i).textContent());
            if((await products.nth(i).locator('b').textContent())==='ZARA COAT 3')
            {
                //add to cart
                await products.nth(i).locator('text= Add To Cart').click();
                break;

            }
        }
        //await page.pause();
        await page.locator('[routerlink*="cart"]').click();
        await page.locator("h3:has-text('ZARA COAT 3')").waitFor();
        const bool= await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        await expect(bool).toBeTruthy();
        await page.locator('text=Checkout').click();

        await page.locator('//div[@class="field small"]//select[@class="input ddl"][1]').selectOption({index:2});
        //await page.pause();

        await page.locator('//select[@class="input ddl"][2]').selectOption({index:6});
        //await page.pause();

        await page.locator('//div[@class="field small"]//input[@class="input txt"]').fill('2214');

        await page.locator('//div[@class="field"]//input[@class="input txt"]').fill('SBI');
        //await page.pause();

        await page.locator('[placeholder="Select Country"]').pressSequentially('Ind');
        //await page.pause();

       const dropdown=await page.locator('[class="ta-results list-group ng-star-inserted"]');
       await dropdown.waitFor();

       const optionscount = await dropdown.locator('[type="button"]').count();
       for(let i=0; i<optionscount; i++)
        {
           const text=await dropdown.locator('[type="button"]').nth(i).textContent();
           if(text===" India")
            {
                await dropdown.locator('[type="button"]').nth(i).click();
                break;
            }
        }
        await expect(page.locator('text=whctarkar24@gmail.com')).toHaveText('whctarkar24@gmail.com');
        await page.locator('.action__submit').click();
        //await page.pause()
          
        await expect(page.locator('[class="hero-primary"]')).toHaveText('Thankyou for the order.');

        const orderId = (await page.locator('.em-spacer-1 .ng-star-inserted').textContent()).replace(/\|/g, '').trim();

        console.log("Order ID is:", orderId);

        await page.locator('[routerlink*="myorders"]').first().click();

        const rows =await page.locator('tbody tr');

        const rowCount = await rows.count();

        for(let i = 0; i < rowCount; i++)
        {
         const rowOrderId = (await rows.nth(i).locator('th').textContent()).trim();

        console.log("Row Order ID:", rowOrderId);

        if(orderId === rowOrderId)
               {
                 await rows.nth(i).locator('button.btn-primary').click();
                 break;

               }
        }
        //await page.locator('div.col-text').waitFor();

        //await expect(page.locator('label.ng-star-inserted')).toContainText(orderId);
        // await expect(page.locator('.email-title')).toContainText(orderId);
        //await expect(page.locator('div.-main')).toContainText(orderId);
        //await page.pause();
     }    
);