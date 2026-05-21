const {test, expect} = require('@playwright/test');

test('LocatingmultipleElements', async({page})=>{
await page.goto('https://www.demoblaze.com/index.html')

//to locate multiple elements
const links=await page.$$('a');

for(const link of links)
    {
        const linktext = await link.textContent();     //similar to get text
        console.log(linktext);
    }
})

//to capture product lists 

