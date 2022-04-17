Feature: Login

    As a slocked_out_user, I am not able to login successful in the application

    Scenario: As a slocked_out_user, I am not able to login successful in the application
    Given I navigate to the login page
    When I type the invalid username
    And I type the valid password
    And I click on Login button
    And I click on Login button
    Then The application shold display the "Products" view