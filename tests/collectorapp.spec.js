import { test } from '@playwright/test';
import { BookcallVerify, CollectorAppPlaystore, CommonLinkVerify, EnvantoKivilabVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test.describe("Collector app", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
        await page.locator("//li[@id='menu-item-831']").hover();
        await page.locator("//li[@id='menu-item-833']").click();
    });

    test("Buy Now", async ({ page }) => {
        const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await EnvantoKivilabVerify(page, Locator);
    });

    test("View Demo", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
        await CollectorAppPlaystore(page, adminpanelLocator);
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

    test("View Demo 2", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await CollectorAppPlaystore(page, adminpanelLocator);
    });

    test("View Demo 3", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await CollectorAppPlaystore(page, adminpanelLocator);
    });

    test("View Demo 4", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await CollectorAppPlaystore(page, adminpanelLocator);
    });

    test("phlebotomy app", async ({ page }) => {
        const adminpanelLocator = page.locator("//span[normalize-space()='phlebotomy app']");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        const expectedLink = "https://kivilabs.iqonic.design/product/collector-app/";
        await CommonLinkVerify(page, adminpanelLocator, expectedLink);
    });

    test("View Demo 5", async ({ page }) => {
        const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
        await adminpanelLocator.scrollIntoViewIfNeeded();
        await CollectorAppPlaystore(page, adminpanelLocator);
    });
});