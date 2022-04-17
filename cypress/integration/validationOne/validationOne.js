/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../Pages/loginPage';
import ProductPage from '../Pages/ProductPage';
import CartPage from '../Pages/CartPage';

// Scenario: As a user, I am able to add items to the cart
Given('I am logged in the application',()=>{
    LoginPage.loginOnTheApplication();
    LoginPage.typeUserName('standard_user');
    LoginPage.typePassword('secret_sauce');
    LoginPage.clickOnLoginButton();
    ProductPage.getProductTitle('Products')
})

When('I click on Add to cart button in the item selected {string}',(item)=>{
    ProductPage.addItem(item);
})

And('I click on Add to cart button in the second selected {string}',(item)=>{
    ProductPage.addItem(item);
})

Then('I should see the {string} items added in the cart', (totalItems)=>{
    ProductPage.getTotalItemsAdded(totalItems);
})

// Scenario: As a user, I am able to remove items from the cart
Given('I have two items added in the cart',()=>{
    CartPage.clickOnCartButton()
})  
 
When('I earch {string} item and click on Remove button',(itemToEliminate)=>{
    CartPage.ClickOnItemToEliminate(itemToEliminate)
})  
Then('The cart should display just {string} item',(totalItems)=>{
   ProductPage.getTotalItemsAdded(totalItems);
}) 

// Scenario: As a user, I am able to verify the checkout
Given('I am on my cart view',()=>{
    CartPage.clickOnCartButton()
})  

When('I click on Checkout button',()=>{
    CartPage.ClickOnCheckoutButton()
})  

Then('I should complete the information',()=>{
   
})  
And('Click on the continue button',()=>{
   
}) 
And('The item added should be displayed',()=>{
   
})  
And('The total values is right',()=>{
   
})

// Scenario: As a user, I am able to finish the purchase

Given('I am on the overview',()=>{
   
})  

When('I click on Finish button',()=>{
   
})  

Then('The application should display {string} message',()=>{
   
}) 
And('I should see additional the {string}',()=>{
   
})