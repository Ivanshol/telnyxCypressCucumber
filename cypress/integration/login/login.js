import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
import TelnyxLoginPage from "../../page-objects/TelnyxLoginPage";
import { When, Then, And} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })


Then('I click log in button', () => {
    TelnyxPage.clickUpperLogInButton();
})

Then('I type my log in credentials', () => {
    TelnyxLoginPage.inputLoginData('shivantesting@gmail.com', 'Testpassword1.');
})

Then('I type incorrect credentials', () => {
    TelnyxLoginPage.inputLoginData('incorrect@incorrect.com', 'incorrect');
})

Then('I type incorrect data', () => {
    TelnyxLoginPage.inputLoginData('$#@$@dfs', 'incorrect');
})

Then('I click Log in button', () => {
    TelnyxLoginPage.clickLogInButton();
})

Then('account page loads', () => {
    cy.wait(10000);
    cy.get('react-learn-and-build-message').should('be.visible');
})

Then('error should be visible', () => {
    cy.get('[type="error"]').eq(0).should('be.visible')
})

Then('email error should be visible', () => {
    cy.get('[class="TextField__ErrorMessage-wqPfx fjBYhj"]').eq(0).should('be.visible')
})