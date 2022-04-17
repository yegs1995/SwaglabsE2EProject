/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../Pages/loginPage';

Given('I navigate to the login page',()=>{
    LoginPage.loginOnTheApplication()
})

When('I type the valid username {string}',(username)=>{
    LoginPage.typeUserName(username)
})

And('I type the valid password {string}',(password)=>{
   LoginPage.typePassword(password)
})

And('I click on Login button',()=>{
    LoginPage.clickOnLoginButton()
})

Then('The application shold display the {string} view', (productTitle)=>{
   LoginPage.getProductTitle(productTitle)
})


