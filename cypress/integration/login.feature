Feature: Login

    As a standard user, I am able to login successful in the application

    Scenario: As a user, I am able to login in in the application
    Given I navigate to the login page
    When I type the valid username "standard_user"
    And I type the valid password "secret_sauce"
    And I click on Login button
    Then The application shold display the "PRODUCTS" view