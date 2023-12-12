Feature: Ebay item search

  Scenario Outline: As a user, I want to search for an item on ebay and see the result

    Given I am on ebay landing page
    When I search for <item> on the search bar
    Then I should see a result number for the item searched

    Examples:
      | item  |
      | pilas |
