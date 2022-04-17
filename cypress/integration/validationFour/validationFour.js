/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../Pages/loginPage';
import users from '.../../../cypress/fixtures/users.json';
import ProductPage from '../Pages/ProductPage';


Given('I navigate to the login page',()=>{
    LoginPage.loginOnTheApplication()
})

When('I type the invalid username',()=>{
    LoginPage.typeUserName(users[1].userName)
})

And('I type the valid password',()=>{
   LoginPage.typePassword(users[1].password)
})

Then('I click on Login button',()=>{
    LoginPage.clickOnLoginButton()
})
And('The application shold display the {string} view', (productTitle)=>{
    ProductPage.getProductTitle(productTitle)
})



