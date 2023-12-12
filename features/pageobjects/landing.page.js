import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchBar () {
        return $('input[id="kw"]');
    }

    get searchBarButton () {
       return $('button[class="gh-search__submitbtn"]');
    }

    get searchResultStatus () {
       return $('h1[role="status"]');
    }

    async typeOnSearchBar (item) {
        await this.searchBar.click();
        await this.searchBar.setValue(item);
    }

    async clickOnSearchButton () {
        await this.searchBarButton.click()
    }

    async getSearchResultItems() {
        const result = await this.searchResultStatus.getText();
        return result;
    }
}

export default new LandingPage();
