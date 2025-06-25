import { test } from '@playwright/test';
import { EnvantoVerify, TrustpilotVerify, UserAppAppstore } from './common';
const home_url = process.env.HOME_URL;

test("For Developer Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-828']").hover()
    await page.locator("//li[@id='menu-item-830']").click();
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("For Developer Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-828']").hover()
    await page.locator("//li[@id='menu-item-830']").click();
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("For Developer User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-828']").hover()
    await page.locator("//li[@id='menu-item-830']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await UserAppAppstore(page, adminpanelLocator);
})

test("For Medical Professional Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-828']").hover()
    await page.locator("//li[@id='menu-item-829']").click();
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("For Medical Professional Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-828']").hover()
    await page.locator("//li[@id='menu-item-829']").click();
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})