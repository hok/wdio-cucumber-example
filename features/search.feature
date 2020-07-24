# A feature file can be tagged so that it is easier to run a specific set
# of tests. Tagging can be done on the feature file or the scenario level.
# Tags are useful for marking things to be part of the smoke test set, 
# excluding things that are not yet complete, disabling tests that currently
# fails due to a bug etc.
@search
Feature: Google search

  To find information about topics they are interested in
  The users
  Should be able to search Google and get results

  # When several scenarios need to execute the same steps in the beginning,
  # a background can be used. This will be executed for all scenarios in
  # this feature file
  Background: The user is on the Google search page
    Given the user is on the search page

  Scenario: Search on Google
    When the user enters the search term "webdriver" and submits the search
    Then the user sees a list of search results

  # Tests can be tagged to keep things organised and to exclude specific tests.
  # This might be needed because the test is not yet ready to be executed on the
  # pipeline or maybe the feature is not implemented yet.
  @wip
  Scenario: Search Google images
    When the user enters the search term "webdriver" and submits the search
    Then the user sees a list of search results
