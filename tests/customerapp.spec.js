import { expect, test } from '@playwright/test';
import { BookcallVerify, EnvantoKivilabVerify, EnvantoVerify, TrustpilotVerify, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test.describe("Customer app", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-831']").hover();
        await page.locator("//li[@id='menu-item-834']").click();
    });

    test("Buy now", async ({ page }) => {
        const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoKivilabVerify(page, Locator);
    });

    test("User App Playstore", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await UserAppPlaystore(page, adminpanelLocator);
    });

    test("Trustpilot Verify", async ({ page }) => {
        const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]");
        await TrustpilotVerify(page, TrustpilotVerifyLocator);
    });

    test("Envanto Verify", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/a[1]");
        await EnvantoVerify(page, EnvantoVerifyLocator);
    });

    test("Book a quick call", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
        await BookcallVerify(page, EnvantoVerifyLocator);
    });

    test("Book a quick call 2", async ({ page }) => {
        const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await BookcallVerify(page, EnvantoVerifyLocator);
    });

    test("Kivilab", async ({ page }) => {
        const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/p[1]/a[1]");
        await LinkLocator.scrollIntoViewIfNeeded();

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            LinkLocator.click()
        ]);
        const newPageUrl = newPage.url();
        expect(newPageUrl).toBe("https://kivilabs.iqonic.design/");
    });

    test("View Demo", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await UserAppPlaystore(page, adminpanelLocator);
    });

    test("View Demo 2", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await UserAppPlaystore(page, adminpanelLocator);
    });

    test("View Demo 3", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await UserAppPlaystore(page, adminpanelLocator);
    });

    test("View Demo 4", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await UserAppPlaystore(page, adminpanelLocator);
    });

    test("View Demo 5", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await UserAppPlaystore(page, adminpanelLocator);
    });

    test("View Demo 6", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[10]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await UserAppPlaystore(page, adminpanelLocator);
    });

    test("View Demo 7", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await UserAppPlaystore(page, adminpanelLocator);
    });
});