import HomePage from "../pages/home-page";

describe('Sample', () => {
    it('Sample Test', async () => {
        await HomePage.open();

        browser.maximizeWindow();
        await HomePage.emailField.addValue("fadlie.hadi@silentmode.my");
        await $('//input[@name="password"]').addValue("Ronpos@3215");
        await $('//button[normalize-space()="Sign in"]').click();
        await $('//a[normalize-space()="Franchises"]').click();
        await $('//a[normalize-space()="BHPetrol"]').click();
        await $('//a[normalize-space()="Impersonate Owner"]').click();

        //to check the page title
        await expect(browser).toHaveTitle('Dashboard · RONPOS');
        const pageTitle = await $('span[class="h5"]');
        //await expect(pageTitle).toEqual("BHPetrol"); exactly equal what is inserted in the expect()
        await expect(pageTitle).toHaveText("BHPetrol"); //check the locator have the text

        //await $('locator').waitForDisplayed(); wait for the element to appears
        //await $('locator').waitForClickable(); wait for the element to be clickable
        //.waitForEnabled() wait for the input field to be enabled
        //.waitForExist() wait for the element to be in DOM
        //.waitUntil() wait for the condition to be met

        browser.pause(5000);

    })
})