import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
import TelnyxSignUpPage from "../../page-objects/TelnyxSignUpPage";
import { When, Then, And} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })

Then('I click sign up button', () => {
    TelnyxPage.clickUpperSignUpButton();
})

Then('the sign up page loads', () => {
    cy.url().should('include', 'sign-up');
    cy.get('div h1').contains('Create a free account')
})

Then('I input existing email data', () => {
    TelnyxSignUpPage.inputEmailData('shivantesting@gmail.com');
})

Then('I input incorrect email data', () => {
    TelnyxSignUpPage.inputEmailData('erfwqewr');
})

Then('I input name data', () => {
    TelnyxSignUpPage.inputNameData('Ivan Sholomitskyi');
})

Then('I input password data', () => {
    TelnyxSignUpPage.inputPasswordData('Testpassword1.');
})

Then('I agree to Terms and Conditions', () => {
    TelnyxSignUpPage.agreeToTermsAndConditions();
})

Then('I click create account button', () => {
    TelnyxSignUpPage.pressCreateAccountButton();
})

Then('I see an email error message visible', () => {
    cy.get('#email_error').should('be.visible');
})

Then('I see a name error message visible', () => {
    cy.get('#full_name_error').should('be.visible');
})

Then('I see password requirements visible', () => {
    cy.get('#password_requirements').should('be.visible');
})


