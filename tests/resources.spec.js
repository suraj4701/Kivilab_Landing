import { expect, test } from '@playwright/test';
import { CommonLinkVerify } from './common';
const home_url = process.env.HOME_URL;

test("Resources FAQ", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-835']").hover()
    await page.locator("//li[@id='menu-item-1052']").click();
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/faq/");
})

test("Resources Docs", async ({ page }) => {
    await page.goto(home_url);
    await page.locator("//li[@id='menu-item-835']").hover()
    const Docs = page.locator("//li[@id='menu-item-836']")
    const expectedLink = "https://documentation.iqonic.design/kivilab-laravel/";
    await CommonLinkVerify(page, Docs, expectedLink);
})