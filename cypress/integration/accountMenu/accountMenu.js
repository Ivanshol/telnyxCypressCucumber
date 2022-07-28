const {menuLinks} = require('../../page-objects/AccountPage')
import TelnyxPage from "../../page-objects/TelnyxPage";
import AccountPage from "../../page-objects/AccountPage";
import TelnyxLoginPage from "../../page-objects/TelnyxLoginPage";
import Base from "../../page-objects/Base";
import {When, Then} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
})

Then('I test navigation menu links', () => {
    Array.from(menuLinks).forEach(menuLink => {
            AccountPage.verifyMenuLink(menuLink).should('include', menuLink);
    });
})

Then('I click log in button', () => {
    TelnyxPage.clickUpperLogInButton();
})

Then('I type my log in credentials', () => {
    TelnyxLoginPage.inputLoginData('shivantesting@gmail.com', 'Testpassword1.');
})

Then('I click Log in button to sign in', () => {
    TelnyxLoginPage.clickLogInButton();
})

Then('account page loads', () => {
    cy.wait(10000);
    cy.get('react-learn-and-build-message').should('be.visible');
})

Then('I log out', () => {
    cy.get('[viewBox="0 0 320 512"]').eq(0).trigger('mouseover');
    cy.get('[class="tx-1Iv0kw"]').click();
})
