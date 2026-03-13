import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EnvantoKivilabVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe('Admin Panel', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-831']").hover();
        await page.locator("//li[@id='menu-item-832']").click();
    });
    
    test('Buy Now', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoKivilabVerify(page, locator);
    });

    test('View Demo', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await AdminPanelVerify(page, locator);
    });

    test('Trustpilot Verify', async ({ page }) => {
        const trustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(page, trustpilotVerifyLocator);
    });

    test('Envanto Verify', async ({ page }) => {
        const envantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/a[1]");
        await EnvantoVerify(page, envantoVerifyLocator);
    });

    test('Book a quick call', async ({ page }) => {
        const locator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, locator);
    });

    test('Book a quick call 2', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await BookcallVerify(page, locator);
    });

    test('View Demo 2', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 3', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 4', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 5', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('Collector', async ({ page }) => {
        const linkLocator = page.locator("//a[contains(text(),'collector')]");
        await linkLocator.scrollIntoViewIfNeeded();
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            linkLocator.click(),
        ]);
        const newPageUrl = newPage.url();
        expect(newPageUrl).toBe('https://kivilabs.iqonic.design/product/collector-app/');
    });

    test('View Demo 6', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 7', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 8', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[10]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 9', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 10', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 11', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[13]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });

    test('View Demo 12', async ({ page }) => {
        const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[14]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await locator.scrollIntoViewIfNeeded();
        await AdminPanelVerify(page, locator);
    });
});