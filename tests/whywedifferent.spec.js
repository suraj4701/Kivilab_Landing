import { test } from '@playwright/test';
import { BookcallVerify, EnvantoVerify, TrustpilotVerify, UserAppAppstore, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test.describe("Role Based Verifications", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-828']").hover();
    });

    test.describe("For Developer", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-830']").click();
        });

        test("Trustpilot Verify", async ({ page }) => {
            const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, locator);
        });

        test("Envanto Verify", async ({ page }) => {
            const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]");
            await EnvantoVerify(page, locator);
        });

        test("Book a quick call", async ({ page }) => {
            const locator = page.locator("//a[contains(text(),'Book a quick call.')]");
            await BookcallVerify(page, locator);
        });

        test("User App Playstore", async ({ page }) => {
            const locator = page.locator("//img[@title='kl_gplay']");
            await locator.scrollIntoViewIfNeeded();
            await UserAppPlaystore(page, locator);
        });

        test("User App Appstore", async ({ page }) => {
            const locator = page.locator("//img[@title='kl_apstore']");
            await locator.scrollIntoViewIfNeeded();
            await UserAppAppstore(page, locator);
        });
    });

    test.describe("For Medical Professional", () => {
        test.beforeEach(async ({ page }) => {
            await page.locator("//li[@id='menu-item-829']").click();
        });

        test("Trustpilot Verify", async ({ page }) => {
            const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(page, locator);
        });

        test("Envanto Verify", async ({ page }) => {
            const locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]");
            await EnvantoVerify(page, locator);
        });

        test("Book a quick call", async ({ page }) => {
            const locator = page.locator("//a[contains(text(),'Book a quick call.')]");
            await BookcallVerify(page, locator);
        });
    });
});