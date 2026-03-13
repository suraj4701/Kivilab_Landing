import { test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, CollectorAppAppstore, CollectorAppPlaystore, CommonLinkVerify, EnvantoKivilabVerify, EnvantoVerify, TrustpilotVerify, UserAppAppstore, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test.describe("More", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(home_url);
    });

    test("Hire Us", async ({ page }) => {
        const Docs = page.locator("//li[@id='menu-item-837']");
        const expectedLink = "https://iqonic.tech/healthcare/";
        await CommonLinkVerify(page, Docs, expectedLink);
    });

    test("Book Demo Call", async ({ page }) => {
        const Docs = page.locator("//li[@id='menu-item-1200']");
        const expectedLink = "https://kivilabs.iqonic.design/kivilabs-demo-call/";
        await CommonLinkVerify(page, Docs, expectedLink);
    });

    test("Buy Now", async ({ page }) => {
        const Locator = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
        await Locator.scrollIntoViewIfNeeded();
        await EnvantoKivilabVerify(page, Locator);
    });

    test.describe("Explore Now", () => {
        const getExplorePage = async (page) => {
            const exploreBtn = page.locator("//header/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/a[1]");
            const [newPage] = await Promise.all([
                page.context().waitForEvent('page'),
                exploreBtn.click()
            ]);
            return newPage;
        };

        test("Trustpilot Verify", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/a[1]");
            await TrustpilotVerify(newPage, locator);
        });

        test("Envanto Verify", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/a[1]");
            await EnvantoVerify(newPage, locator);
        });

        test("Book a quick call", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//a[contains(text(),'Book a quick call.')]");
            await BookcallVerify(newPage, locator);
        });

        test("User App Playstore", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
            await UserAppPlaystore(newPage, locator);
        });

        test("User App Appstore", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/a[1]");
            await UserAppAppstore(newPage, locator);
        });

        test("Collector App Playstore", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[1]/a[1]");
            await CollectorAppPlaystore(newPage, locator);
        });

        test("Collector App Appstore", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/a[1]");
            await CollectorAppAppstore(newPage, locator);
        });

        test("AdminPanel", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
            await AdminPanelVerify(newPage, locator);
        });

        test("ContactUs", async ({ page }) => {
            const newPage = await getExplorePage(page);
            const locator = newPage.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[2]/div[3]/div[1]/div[1]/div[1]/a[1]");
            const expectedLink = "https://iqonic.tech/contact-us/";
            await CommonLinkVerify(newPage, locator, expectedLink);
        });
    });
});