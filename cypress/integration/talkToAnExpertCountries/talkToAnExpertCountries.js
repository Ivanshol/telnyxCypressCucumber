import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
const {availableCountries} = require('../../page-objects/TalkToAnExpert')
import { When, Then, And} from "cypress-cucumber-preprocessor/steps";
const { expect } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })

And('I click upper talk to an expert button', () => {
    TelnyxPage.clickUpperTalkToAnExpertButton();
})

And('the contact us page loads', () => {
    cy.url().should('include', 'contact-us');
    cy.get('div h1').contains('Talk to an expert')
})

Then('I check the available countries', () => {
    cy
    .get('section ul li')
    .each(($span, i) => {
         expect($span.text()).to.include(availableCountries[i]);
    });
})