import Page from './page';

class SearchPage extends Page {
  // Specific element methods are created as getters.
  // $ returns a single element
  get searchInput() { return $('[name="q"]'); }

  // $$ returns a list of elements
  get searchResults() { return $$('.rc'); }

  // Calls the open method in the base page. See baseUrl in wdio.conf.js
  open() { super.open('/'); }

  /**
   * Higher level actions and things that require input are defined as normal methods.
   * Search and wait until results are shown so that the test doesn't became flaky.
   * Assertions are done in test steps as that's where the test logic belongs.
   */
  search(term) {
    this.searchInput.setValue(term);
    this.searchInput.keys(['Return']);

    // waitUntil is the built-in wait mechanism for things that require more logic.
    // There are others such as waitForDisplayed, waitForExist. API page lists them all.
    browser.waitUntil(() => {
      const results = this.searchResults;
      return results.length > 0;
    }, 5000);
  }
}

// The page is directly instantiated. It doesn't need to keep any state and
// is more a way to group and organise things
export default new SearchPage();
