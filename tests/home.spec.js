import { expect, test } from '@playwright/test';
import { AdminPanelVerify, BookcallVerify, EnvantoKivilabVerify, EnvantoVerify, TrustpilotVerify, UserAppPlaystore } from './common';
const home_url = process.env.HOME_URL;

test("Home User App Playstore", async ({ page }) => {
    await page.goto(home_url);
    const adminpanelLocator = page.locator("//a[contains(text(),'User App')]");
    await UserAppPlaystore(page, adminpanelLocator);
})

test("Home Admin Panel Verify", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await AdminPanelVerify(page, Locator);
})

test("Home Trustpilot Verify", async ({ page }) => {
    await page.goto(home_url);
    const TrustpilotVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/a[1]");
    await TrustpilotVerify(page, TrustpilotVerifyLocator);
})

test("Home Envanto Verify", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/a[1]");
    await EnvantoVerify(page, EnvantoVerifyLocator);
})

test("Home Book a quick call", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//a[contains(text(),'Book a quick call.')]");
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Explore Customer App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://kivilabs.iqonic.design/product/customer-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/product/customer-app/");
});

test("Home Explore Collector App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[normalize-space()='Explore Collector App']");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://kivilabs.iqonic.design/product/collector-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/product/collector-app/");
});

test("Home Explore Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[5]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://kivilabs.iqonic.design/product/admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/product/admin-panel/");
});

test("Home Book a quick call 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Book a quick call 3", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Buy now", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivilabVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy now 2", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[12]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivilabVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy now 3", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[11]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivilabVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Book a quick call 4", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoVerifyLocator = page.locator("//a[normalize-space()='Talk to a Product Expert']");
    await EnvantoVerifyLocator.scrollIntoViewIfNeeded();
    await BookcallVerify(page, EnvantoVerifyLocator);
})

test("Home Buy Regular", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//a[contains(text(),'Buy Regular')]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivilabVerify(page, EnvantoKivicareVerifyLocator);
})

test("Home Buy Sevice", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//a[contains(text(),'Buy Service')]");
    await LinkLocator.scrollIntoViewIfNeeded();

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        LinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://service.iqonic.design/services/kivilabs-lab-management-app/");
    return newPage;
});

test("Home Try Demo", async ({ page }) => {
    await page.goto(home_url);
    const Locator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await Locator.scrollIntoViewIfNeeded();
    await AdminPanelVerify(page, Locator);
})

test("Home Buy now 4", async ({ page }) => {
    await page.goto(home_url);
    const EnvantoKivicareVerifyLocator = page.locator("//body/div[@id='main-container']/main[@id='main']/div[1]/article[1]/div[1]/div[1]/div[16]/div[1]/div[1]/div[1]/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/a[1]");
    await EnvantoKivicareVerifyLocator.scrollIntoViewIfNeeded();
    await EnvantoKivilabVerify(page, EnvantoKivicareVerifyLocator);
})

test("Facebook link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[1]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.facebook.com/iqonicdesign");
})

test("YouTube link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[2]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.youtube.com/iqonicdesign");
})

test("X Twitter link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[3]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://x.com/iqonicdesign");
})

test("Instagram link verify", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/span[4]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.instagram.com/iqonicdesign/");
})

test("Home Footer Customer App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//div[@class='elementor-element elementor-element-6b9688f e-con-full e-flex e-con e-child']//li[1]//a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://kivilabs.iqonic.design/product/customer-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/product/customer-app/");
});

test("Home Footer Collector App", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//div[@class='elementor-element elementor-element-6b9688f e-con-full e-flex e-con e-child']//li[2]//a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://kivilabs.iqonic.design/product/collector-app/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/product/collector-app/");
});

test("Home Footer Admin Panel", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//div[@class='elementor-element elementor-element-6b9688f e-con-full e-flex e-con e-child']//li[3]//a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://kivilabs.iqonic.design/product/admin-panel/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/product/admin-panel/");
});

test("Home Footer FAQ", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://kivilabs.iqonic.design/faq/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/faq/");
});

test("Home Footer Docs", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://documentation.iqonic.design/kivilab-laravel/");
})

test("Home Footer Pricing", async ({ page }) => {
    await page.goto(home_url);
    const LinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await LinkLocator.scrollIntoViewIfNeeded();
    await LinkLocator.click();
    await page.waitForURL("https://kivilabs.iqonic.design/pricing/")
    const newPageUrl = page.url();
    expect(newPageUrl).toBe("https://kivilabs.iqonic.design/pricing/");
});

test("Home Footer Support", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[1]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.desky.support/");
})

test("Home Footer Get A Quote", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[2]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/ai-cost-calculator/");
})

test("Home Footer License", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[3]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.design/licensing-terms-more/#licenses");
})

test("Home Footer Hire Us", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//body/div[@id='main-container']/footer[@id='footer']/div[1]/div[1]/article[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/div[1]/ul[1]/li[4]/a[1]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.tech/healthcare/");
})

test("Home Footer Iqonic Design", async ({ page }) => {
    await page.goto(home_url);
    const facebookLinkLocator = page.locator("//a[contains(text(),'Iqonic Design.')]");
    await facebookLinkLocator.scrollIntoViewIfNeeded()
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        facebookLinkLocator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://iqonic.design/");
})