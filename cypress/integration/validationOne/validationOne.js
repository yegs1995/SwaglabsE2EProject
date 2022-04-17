/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../Pages/loginPage';
import ProductPage from '../Pages/ProductPage';
import CartPage from '../Pages/CartPage';
import CheckoutPage from '../Pages/CheckoutPage';

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

And('I go to cart view', ()=>{
    CartPage.clickOnCartButton()
})

And('I should see the {string} items added in the cart', (totalItems)=>{
    ProductPage.getTotalItemsAdded(totalItems)
})
 
And('I search {string} item and click on Remove button',(itemToEliminate)=>{
    CartPage.ClickOnItemToEliminate(itemToEliminate)
})  
And('The cart should display just {string} item',(totalItems)=>{
   ProductPage.getTotalItemsAdded(totalItems);
}) 
And('I click on Checkout button',()=>{
    CartPage.ClickOnCheckoutButton();
    CheckoutPage.getCheckoutTitle()
})  

And('I should complete the information',()=>{
    CheckoutPage.sendFirstName('Camila');
    CheckoutPage.sendlastName('Camila');
    CheckoutPage.sendZipCode('99501')

})  
And('Click on the continue button',()=>{
   CheckoutPage.clickOnContinueButton()
}) 
And('The item {string} added should be displayed',(item)=>{
   CheckoutPage.verifyItem(item)
})  
And('The total values is right',()=>{
    CheckoutPage.verifyTotalValue()
})

And('I click on Finish button',()=>{
   CheckoutPage.clickOnFinishButton()
})  

Then('The application should display {string} message',(message)=>{
   CheckoutPage.verifySuccessMessage(message)
}) 
And('I should see additional the {string}',(message)=>{
   CheckoutPage.verifyDetailSuccessMessage(message);
})