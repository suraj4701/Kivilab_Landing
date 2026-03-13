import { expect, test } from '@playwright/test';
import { EnvantoKivilabVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Pricing", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-997']").click();
    });

    test("Buy Now", async ({ page }) => {
        const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await Locator.scrollIntoViewIfNeeded();
        await EnvantoKivilabVerify(page, Locator);
    });

    test("Buy Sevice", async ({ page }) => {
        const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await LinkLocator.scrollIntoViewIfNeeded();

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            LinkLocator.click()
        ]);

        const newPageUrl = newPage.url();
        expect(newPageUrl).toBe("https://service.iqonic.design/services/kivilabs-lab-management-app/");
    });

    test("Buy Now 2", async ({ page }) => {
        const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
        await Locator.scrollIntoViewIfNeeded();
        await EnvantoKivilabVerify(page, Locator);
    });
});