
// const cron = require('node-cron')
const {chromium} = require('playwright');

async function autoEmail(){
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(`file:///Users/carloschan/coding/practice/fetching/autoEmail.html`)

    await page.reload();
    await page.waitForSelector('.email');
    console.log('Page refreshed successfully!');
    await browser.close();

}

autoEmail();

// cron.schedule('1 * * * * * ',autoEmail)

