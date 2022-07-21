import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
import { When, Then, And} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })

Then('I click upper support center button', () => {
    TelnyxPage.clickUpperSupportCenterButton();
})

Then('I click upper log in button', () => {
    TelnyxPage.clickUpperLogInButton();
})

Then('I click upper talk to an expert button', () => {
    TelnyxPage.clickUpperTalkToAnExpertButton();
})

Then('I click upper sign up button', () => {
    TelnyxPage.clickUpperSignUpButton();
})

Then('I click join the waitlist button', () => {
    TelnyxPage.clickJoinTheWaitlistButton();
})

Then('the sign up page loads', () => {
    cy.url().should('include', 'sign-up');
    cy.get('div h1').contains('Create a free account')
})

Then('the log in page loads', () => {
    cy.url().should('include', 'login');
    cy.get('[data-testid="login.signin.title"]').contains('Log in')
})

Then('the contact us page loads', () => {
    cy.url().should('include', 'contact-us');
    cy.get('div h1').contains('Talk to an expert')
})

Then('the support center page loads', () => {
    cy.url().should('be.equal', 'https://support.telnyx.com/en/');
    cy.get('div h1').contains('Support Center');
})

Then('the cloud storage page loads', () => {
    cy.url().should('include', 'storage');
    cy.get('div h1').contains('Better cloud storage, for less.')
})