import puppeteer from 'puppeteer';

describe('show-tooltip', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage()
    })

    test('tooltio should be on page start', async () => {
        await page.goto('http://localhost:9000');
        await page.waitForTimeout('.tooltip'); //проверяет наличие тега
    })

    test('tooltip show on page', async () => {
        await page.goto('http://localhost:9000');
      
        const btn = await page.$('.btn')
        const tooltip = await page.$('.tooltip')
    
        await btn.click()
        await page.waitForTimeout('.tooltip')
    })

    afterEach((async () => { //хук закрывает браузер
        await browser.close()

    }))
})