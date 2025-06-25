const { expect } = require('@playwright/test');

const UserAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iqonic.kivilabs.customer&hl=en_IN");
    const trustpilotLocator = newPage.locator("//body[1]/c-wiz[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/c-wiz[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('KiviLabs');
    return newPage;
}

const CollectorAppPlaystore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://play.google.com/store/apps/details?id=com.iqonic.kivilabs.collector&hl=en_IN");
    const trustpilotLocator = newPage.locator("//span[contains(text(),'KiviLabs: Collector App')]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('KiviLabs: Collector App');
    return newPage;
}

const UserAppAppstore = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.apple.com/us/app/kivilabs/id6743613222");
    const trustpilotLocator = newPage.locator("//header/h1[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('KiviLabs');
    return newPage;
}

const AdminPanelVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    await newPage.waitForLoadState('networkidle');
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://apps.iqonic.design/kivilabs/login");
    return newPage;
}

const TrustpilotVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://www.trustpilot.com/review/iqonic.design");
    const trustpilotLocator = newPage.locator("//body/div[@id='__next']/div[1]/div[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/section[1]/div[2]/h1[1]/span[1]");
    const verifytext = await trustpilotLocator.textContent();
    expect(verifytext).toContain('IQONIC DESIGN');
    return newPage;
}

const EnvantoVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const newPageUrl = newPage.url();
    expect(newPageUrl).toBe("https://codecanyon.net/user/iqonicdesign/portfolio");
    const iqonicDesignSpanLocator = newPage.locator("//h1[contains(text(),'iqonicdesign - Portfolio')]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('iqonicdesign - Portfolio');
    return newPage;
}

const EnvantoKivilabVerify = async (page, locator) => {

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        locator.click()
    ])
    const iqonicDesignSpanLocator = newPage.locator("//body/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/h1[1]");
    const verifytext = await iqonicDesignSpanLocator.textContent();
    expect(verifytext).toContain('KiviLabs - All-in-One Lab Management & Test Booking Solution with Multi-Vendor Support');
    return newPage;
}

module.exports = { UserAppPlaystore, AdminPanelVerify, TrustpilotVerify, EnvantoVerify, EnvantoKivilabVerify, UserAppAppstore ,CollectorAppPlaystore}