import { test } from '@playwright/test';
import { BookcallVerify, CollectorAppPlaystore, CommonLinkVerify, EnvantoKivilabVerify, EnvantoVerify, TrustpilotVerify } from './common';
const home_url = process.env.HOME_URL;

test("Collector app Buy Now", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivilabVerify(page, Locator);
})

test("Collector app View Demo", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await CollectorAppPlaystore(page, adminpanelLocator);
})

test("Collector app Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Collector app Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Collector app Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Collector app Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Collector app View Demo 2", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await CollectorAppPlaystore(page, adminpanelLocator);
})

test("Collector app View Demo 3", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await CollectorAppPlaystore(page, adminpanelLocator);
})

test("Collector app View Demo 4", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await CollectorAppPlaystore(page, adminpanelLocator);
})

test("Collector app phlebotomy app", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const adminpanelLocator = page.locator("//span[normalize-space()='phlebotomy app']");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    const expectedLink = "https://kivilabs.iqonic.design/product/collector-app/";
    await CommonLinkVerify(page, adminpanelLocator, expectedLink);
})

test("Collector app View Demo 5", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-831']").hover()
    await page.locator("//li[@id='menu-item-833']").click();
    const adminpanelLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[8]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await adminpanelLocator.scrollIntoViewIfNeeded();
    await CollectorAppPlaystore(page, adminpanelLocator);
})