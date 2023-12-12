import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LandingPage from '../pageobjects/landing.page.js';

const landing = LandingPage;

Given(/^I am on ebay landing page$/, async () => {
    landing.open();
    await expect(landing.searchBar).toBeDisplayed();
});

When(/^I search for (.*) on the search bar$/, async (item) => {
    await landing.typeOnSearchBar(item);
    await landing.clickOnSearchButton();
});

Then(/^I should see a result number for the item searched$/, async () => {
    await expect(landing.searchResultStatus).toHaveText(expect.stringContaining('resultados'));
    console.log("SEARCH RESULT STATUS: " + await landing.getSearchResultItems());
});

