Feature: Betslip

    As a user I want to add and remove from the betslip.

Scenario: Add And Remove Bet Selection From Betslip
Given I navigate to Pokerstars Sports Homepage
When I click on the first bet selection under Popular
Then the bet selection is added to the bet slip
When I click on delete button
Then the betslip is empty