/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../Pages/loginPage';
import ProductPage from '../Pages/ProductPage';
import users from '.../../../cypress/fixtures/users.json'

Given('I am logged in the application',()=>{
    LoginPage.loginOnTheApplication();
    LoginPage.typeUserName(users[0].userName);
    LoginPage.typePassword(users[0].password);
    LoginPage.clickOnLoginButton()
})

When('I click on sort by Price',()=>{
    ProductPage.clickOnSortByPrice()
})

Then('I should see the products orders by the price high to low', ()=>{
    ProductPage.ClickSortByPriceAndVerifySortered()
})


