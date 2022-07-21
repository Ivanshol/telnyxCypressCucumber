import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
import { When, Then} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })


Then('I scroll mid-page buttons into view', () => {
    TelnyxPage.scrollMidPageButtonIntoView();
})

Then('I click messaging api button', () => {
    TelnyxPage.clickMidPageButton(1);
})

Then('I click video api button', () => {
    TelnyxPage.clickMidPageButton(2);
})

Then('I click wireless button', () => {
    TelnyxPage.clickMidPageButton(3);
})

Then('I click voice api button', () => {
    TelnyxPage.clickMidPageButton(4);
})

Then('I click elastic sip-trunking button', () => {
    TelnyxPage.clickMidPageButton(5);
})

Then('I click storage button', () => {
    TelnyxPage.clickMidPageButton(6);
})

Then('messaging api page is loaded', () => {
    cy.url().should('contain', 'sms-api');
    cy.get('body h1').contains('SMS API');
})

Then('video api page is loaded', () => {
    cy.url().should('contain', 'video');
    cy.get('body h1').contains('Build an integrated video solution');
})

Then('wireless page is loaded', () => {
    cy.url().should('contain', 'iot-sim-card');
    cy.get('body h1').contains('IoT SIM Cards');
})

Then('voice-api page is loaded', () => {
    cy.url().should('contain', 'voice-api');
    cy.get('body h1').contains('Voice API');
})

Then('elastic sip-trunking page is loaded', () => {
    cy.url().should('contain', 'sip-trunks');
    cy.get('body h1').contains('SIP Trunking for ');
})

Then('storage page is loaded', () => {
    cy.url().should('include', 'storage');
    cy.get('div h1').contains('Better cloud storage, for less.')
})