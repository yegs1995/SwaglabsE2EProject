
Feature: Validation Three

    As a standard user I am able to sort the produtct by price and verify that is right

    Scenario: As a standard user I am able to sort the produtct and verify that is right
    Given I am logged in the application
    When I click on sort by Price
    Then I should see the products orders by the price high to low