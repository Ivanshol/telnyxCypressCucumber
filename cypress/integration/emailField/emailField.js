import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
import { When, Then, And} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })

Then('I type incorrect data into email field', () => {
    TelnyxPage.typeIntoEmailField('s21fz');
})

And('I click the try for free button', () => {
    TelnyxPage.clickTryForFreeButton();
})

Then('the url stays the same', () => {
    cy.url().should('be.equal', 'https://telnyx.com/');
})

Then('I type correct data into email field', () => {
    TelnyxPage.typeIntoEmailField('shivantesting@gmail.com');
})

Then('the sign up page loads', () => {
    cy.url().should('include', 'sign-up');
    cy.get('div h1').contains ('Create a free account');
})