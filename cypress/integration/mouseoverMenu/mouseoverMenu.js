import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
import { When, Then, And} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })

And('I hover mouse over Products drop-down menu', () => {
    TelnyxPage.hoverMouseOverMenu(0);
})

And('I hover mouse over Solutions drop-down menu', () => {
    TelnyxPage.hoverMouseOverMenu(1);
})

And('I hover mouse over Resources drop-down menu', () => {
    TelnyxPage.hoverMouseOverMenu(3);
})

And('I hover mouse over Company drop-down menu', () => {
    TelnyxPage.hoverMouseOverMenu(4);
})

And('I hover mouse over Pricing drop-down menu', () => {
    TelnyxPage.hoverMouseOverMenu(5);
})

And('I click the Network menu button', () => {
    TelnyxPage.hoverMouseOverMenu(2);
})

Then('the Products menu tabs should be visible', () => {
    cy.get('[href="/products/sip-trunks"]').should('be.visible');
    cy.get('[href="/products/video"]').should('be.visible');
})

Then('the Solutions menu tabs should be visible', () => {
    cy.get('[href="/solutions/customer-engagement-platforms"]').should('be.visible');
    cy.get('[href="/use-cases/voip-for-small-business"]').should('be.visible');
})

Then('the Resources menu tabs should be visible', () => {
    cy.get('[href="https://developers.telnyx.com/docs"]').should('be.visible');
    cy.get('[href="/twilio-pricing-calculator"]').should('be.visible');
})

Then('the Company menu tabs should be visible', () => {
    cy.get('[href="/company"]').should('be.visible');
    cy.get('[href="/integrations"]').should('be.visible');
})

Then('the Pricing menu tabs should be visible', () => {
    cy.get('[href="/pricing/elastic-sip"]').should('be.visible');
    cy.get('[href="/pricing/id-services-and-data"]').should('be.visible');
})

Then('the Network tab should load', () => {
    cy.get('div h1').contains('The Global, Private Network Built for Real-Time Comms.');
})