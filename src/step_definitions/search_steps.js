  import { Given, Then, When } from 'cucumber';
  import { expect } from 'chai';
  import searchPage from '../pages/search_page';

  // This step is just a string that matches the step in a scenario
  Given('the user is on the search page', function() {
    searchPage.open();
  });

  // This step is a regex so that we can parse necessary input data
  When(/the user enters the search term "(.*)" and submits the search/, function(keyword) {
    searchPage.search(keyword);
  });

  // Get the results and use chai assertions to check how many we got
  Then('the user sees a list of search results', function() {
    const results = searchPage.searchResults;
    expect(results.length).to.be.above(0);
  });
