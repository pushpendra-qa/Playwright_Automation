//const {test,expect} = require('@playwright/test')  or 
import{test,expect} from '@playwright/test'

test('locators', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")

    //await page.locator('locator').click();
    //await page.click('locator');
    //click to login using property method
    //await page.locator('id=login2').click();
    await page.click('#login2')

    //provide username using css
    //await page.locator('#loginusername').fill("pushpendra")
    //await page.fill('#loginusername')
    await page.type('#loginusername', 'pushpendra')

    //password using css
    await page.fill("input[id='loginpassword']", 'test@123')

    //login element using xpath
    await page.click("//button[@onclick='logIn()']")

    //to check element visible or not using xpath
    //first store the element into variable
    const homelink=await page.locator("//a[@href='index.html' and @id='nava']")
    await expect(homelink).toBeVisible()

    await page.close()

})