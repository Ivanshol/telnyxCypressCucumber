import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
import { When, Then} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })


Then('I scroll the calculator into view', () => {
    TelnyxPage.scrollSavingsCalculatorIntoView();
})

Then('I slide the outbound calls slider to increase the value', () => {
    TelnyxPage.clickMakeOutbountSliderAndSlideIncrease();
})

Then('I slide the inbound calls slider to increase the value', () => {
    TelnyxPage.clickMakeInboundSliderAndSlideIncrease();
})

Then('I slide the outbound calls slider to decrease the value', () => {
    TelnyxPage.clickMakeOutboundSliderAndSlideDecrease();
})

Then('I slide the inbound calls slider to decrease the value', () => {
    TelnyxPage.clickMakeInboundSliderAndSlideDecrease();
})

Then('I click SMS Calculator button', () => {
    TelnyxPage.clickSMSCalculatorButton();
})

Then('I check that the money value change to a bigger number', () => {
    cy.get('div span span').eq(6).scrollIntoView();
    cy.get('div span span').eq(6)
    .invoke('text')
    .then((s) => {
      const start = s.indexOf('$')
      const end = s.indexOf('/', start)
      return s.slice(start + 1, end)
    })
    .then(cy.log)
    .then(parseFloat)
    .should('be.a', 'number')
    .and('be.above', 2.672)
})

Then('I check that the money value change to a lesser number', () => {
    cy.get('div span span').eq(6).scrollIntoView();
    cy.get('div span span').eq(6)
    .invoke('text')
    .then((s) => {
      const start = s.indexOf('$')
      const end = s.indexOf('/', start)
      return s.slice(start + 1, end)
    })
    .then(cy.log)
    .then(parseFloat)
    .should('be.a', 'number')
    .and('be.below', 2.672)
})

Then('I check that the money value change to a bigger number in the Twilio info label', () => {
    cy.get('.sc-1a5981e5-13').scrollIntoView();
    cy.get('div span span')
    .invoke('text')
    .then((s) => {
      const start = s.indexOf('$')
      const end = s.indexOf('/', start)
      return s.slice(start + 1, end)
    })
    .then(cy.log)
    .then(parseFloat)
    .should('be.a', 'number')
    .and('be.above', 4.763)
})


Then('I check that the money value change to a lesser number in the Twilio info label', () => {
    cy.get('.sc-1a5981e5-13').scrollIntoView();
    cy.get('.sc-1a5981e5-13')
    .invoke('text')
    .then((s) => {
      const start = s.indexOf('$')
      const end = s.indexOf('/', start)
      return s.slice(start + 1, end)
    })
    .then(cy.log)
    .then(parseFloat)
    .should('be.a', 'number')
    .and('be.below', 4.673)
})