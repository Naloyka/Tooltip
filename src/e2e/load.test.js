import puppeteer from 'puppeteer';

describe('Inn Form', () => {
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

    test('test', async () => {
        await page.goto('http://localhost:9000');
        await page.waitForTimeout('body'); //проверяет наличие тега
    })

    afterAll((async () => { //хук закрывает браузер
        await browser.close()

    }))
})