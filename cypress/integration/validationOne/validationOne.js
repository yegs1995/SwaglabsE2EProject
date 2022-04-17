/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../Pages/loginPage';
import ProductPage from '../Pages/ProductPage';

// Scenario: As a user, I am able to add items to the cart
Given('I am logged in the application',()=>{
    LoginPage.loginOnTheApplication();
    LoginPage.typeUserName('standard_user');
    LoginPage.typePassword('secret_sauce');
    LoginPage.clickOnLoginButton();
    LoginPage.getProductTitle('PRODUCTS');
})

When('I select one item from the product list {string}',(item)=>{
   ProductPage.selectItemByName(item);
})

And('I click on Add to cart button in the item selected {string}',(item)=>{
    ProductPage.addItem(item);
})

And('I select second item from the product list {string}',(item)=>{
    ProductPage.selectItemByName(item);
})

And('I click on Add to cart button in the second selected {string}',(item)=>{
    ProductPage.addItem(item);
})

Then('I should see the {string} items added in the cart', (totalItems)=>{
    ProductPage.getTotalItemsAdded(totalItems);
})

// Scenario: As a user, I am able to remove items from the cart
Given('I have two items added in the cart',()=>{
   
})  

When('I search one item by its name',()=>{
   
})  

And('I click on Remove button',()=>{
   
})  
Then('The cart should display just one item',()=>{
   
}) 

// Scenario: As a user, I am able to verify the checkout
Given('I am on my cart view',()=>{
   
})  

When('I click on Checkout button',()=>{
   
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