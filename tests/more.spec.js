import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CollectorAppAppstore, CollectorAppPlaystore, CommonLinkVerify, EnvantoKivilabVerify, EnvantoVerify, TrustpilotVerify, UserAppAppstore, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("More Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//li[@id='menu-item-837']")
    const expectedLink = "https://iqonic.tech/healthcare/";
    await CommonLinkVerify(page, Docs, expectedLink);
})

test("More Book Demo Call", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//li[@id='menu-item-1200']")
    const expectedLink = "https://kivilabs.iqonic.design/kivilabs-demo-call/";
    await CommonLinkVerify(page, Docs, expectedLink);
})

test("More Buy Now", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await Locator.scrollIntoViewIfNeeded();
    await EnvantoKivilabVerify(page, Locator);
})

test("More Explore Now Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const TrustpilotVerifyLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(newPage, TrustpilotVerifyLocator);
})

test("More Explore Now Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const EnvantoVerifyLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/a[1]");
    await EnvantoVerify(newPage, EnvantoVerifyLocator);
})

test("More Explore Now Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const EnvantoVerifyLocator = newPage.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(newPage, EnvantoVerifyLocator);
})

test("More Explore Now User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await UserAppPlaystore(newPage, adminpanelLocator);
})

test("More Explore Now User App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/a[1]");
    await UserAppAppstore(newPage, adminpanelLocator);
})


test("More Explore Now Collector App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await CollectorAppPlaystore(newPage, adminpanelLocator);
})

test("More Explore Now Collector App Appstore", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/a[1]");
    await CollectorAppAppstore(newPage, adminpanelLocator);
})

test("More Explore Now AdminPanel", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(newPage, adminpanelLocator);
})


test("More Explore Now ContactUs", async ({ page }) => {
    await page.goto(home_url);
    const Docs = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]")

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        Docs.click()
    ])

    const adminpanelLocator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
    const expectedLink = "https://iqonic.tech/contact-us/";
    await CommonLinkVerify(page, adminpanelLocator, expectedLink);
})