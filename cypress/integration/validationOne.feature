Feature: Validation One

    As a standard user I am able to add, remove, verify the items and finish the order

    Scenario: As a user, I am able to add items to the cart
    Given I am logged in the application
    When I click on Add to cart button in the item selected 'backpack'
    And I click on Add to cart button in the second selected 'fleece-jacket' 
    Then I should see the '2' items added in the cart 

    Scenario: As a user, I am able to remove items from the cart
    Given I have two items added in the cart
    When I search 'backpack' item and click on Remove button
    Then The cart should display just '1' item

    Scenario: As a user, I am able to verify the checkout
    Given I am on my cart view
    When I click on Checkout button
    Then I should complete the information
    And Click on the continue button
    And The item added should be displayed
    And The total values is right 

    Scenario: As a user, I am able to finish the purchase
    Given I am on the overview 
    When I click on Finish button
    Then The application should display "Thank you for your order" message
    And  I should see additional the "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
