const { test, expect, request } = require('@playwright/test');
const { json } = require('node:stream/consumers');
const loginpayload={userEmail: "whctarkar24@gmail.com", userPassword: "Harekrishna108"};

const orderpayload={orders: [{country: "India", productOrderedId: "6960eac0c941646b7a8b3e68"}]};

let token;
test.beforeAll( async()=>
    {

       const apicontext=await request.newContext();
       const loginresponse=await apicontext.post('https://rahulshettyacademy.com/api/ecom/auth/login',
        {
            data:loginpayload
        });

        expect(loginresponse.ok()).toBeTruthy();
        const loginresponsejson=await loginresponse.json();
        token=await loginresponsejson.token;
        console.log(token);

        //
         const orderresponse=await apicontext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data:orderpayload,
            headers:{
                'Authorization':token,
                'Content-Type':'application/json'
            }
        })
        const oerderresponsejson=await orderresponse.json();
        const orderid = await oerderresponsejson.orders[0];
        console.log(orderid);
    })

test.beforeEach( ()=>
    {

    })
    
test('Place the order',async({page})=>
    {
        await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

       await page.goto("https://rahulshettyacademy.com/client/");
       //await page.locator('#userEmail').fill('whctarkar24@gmail.com');
       //await page.locator('#userPassword').fill('Harekrishna108');
       //await page.locator('#login').click();

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

        /*
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
        */ 
    });