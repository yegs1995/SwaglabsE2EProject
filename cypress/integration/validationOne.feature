Feature: Validation One

    As a standard user I am able to add, remove, verify the items and finish the order

    Scenario: As a standard user I am able to add, remove, verify the items and finish the order
    Given I am logged in the application
    When I click on Add to cart button in the item selected 'Backpack'
    And I click on Add to cart button in the second selected 'Fleece Jacket' 
    And I should see the '2' items added in the cart 
    And I go to cart view
    And I search 'Fleece Jacket' item and click on Remove button
    And The cart should display just '1' item
    And I click on Checkout button
    And I should complete the information
    And Click on the continue button
    And The item 'Backpack' added should be displayed
    And The total values is right 
    And I click on Finish button
    Then The application should display "THANK YOU FOR YOUR ORDER" message
    And I should see additional the "Your order has been dispatched, and will arrive just as fast as the pony can get there!"

