import Base from "../../page-objects/Base"
import TelnyxPage from "../../page-objects/TelnyxPage";
import { When, Then} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
  })


Then('I scroll to headers and they contain correct text', () => {
    TelnyxPage.scrollHeaderIntoView(0);
    cy.get('div h2').eq(0).contains(`Here's what our customers think.`);

    TelnyxPage.scrollHeaderIntoView(1);
    cy.get('div h2').eq(1).contains(`Powerful products.`);

    TelnyxPage.scrollHeaderIntoView(2);
    cy.get('div h2').eq(2).contains(`When Lightspeed switched to Telnyx from a stack of other outbound carriers, 
    their reported call failures dropped by a whopping 99.9%`);

    TelnyxPage.scrollHeaderIntoView(3);
    cy.get('div h2').eq(3).contains(`Switch + Save with Telnyx.`);

    TelnyxPage.scrollHeaderIntoView(4);
    cy.get('div h2').eq(4).contains(`Why customers choose Telnyx.`);

    TelnyxPage.scrollHeaderIntoView(5);
    cy.get('div h2').eq(5).contains(`The API that gives developers real control.`);
})