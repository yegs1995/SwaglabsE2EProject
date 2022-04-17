Feature: Validation Two

    As a standard user I am able to sort the products by name and verify that is right

    Scenario: As a standard user I am able to sort the products by name and verify that is right
    Given I am logged in the application
    And  I am on the 'Products' view
    When I click on sort by
    Then I should see the products ordered by the ZA name 