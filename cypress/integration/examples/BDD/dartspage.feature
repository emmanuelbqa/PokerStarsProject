Feature: Darts Page Get Request

    As a PokerStars Sports user I want to navigate to PokerStars Darts event and verify that a GET request was made to the request URL.

    Scenario: Check Get Request On Darts Event Page
    Given I navigate to Pokerstars Sports Homepage
    And I navigate to Darts
    When I click on first event
    Then a get request is made to the request URL   