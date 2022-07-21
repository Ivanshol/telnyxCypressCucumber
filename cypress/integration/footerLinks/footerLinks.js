const {footerProductLinks, footerPricingLinks, footerCompanyLinks, footerLinks} = require('../../page-objects/TelnyxFooter')
import TelnyxFooter from "../../page-objects/TelnyxFooter";
import Base from "../../page-objects/Base";
import { When, Then} from "cypress-cucumber-preprocessor/steps";
const { should } = require("chai");

When('I open the home page', () => {
    Base.navigateToHome();
})

Then('I test footer product menu links', () => {
    Array.from(footerProductLinks).forEach(footerLink => {
            TelnyxFooter.verifyFooterLink('products', footerLink).should('include', footerLink);
            TelnyxFooter.goToPreviousPage();
    });
})


Then('I test footer pricing menu links', () => {
    Array.from(footerPricingLinks).forEach(footerLink => {
            TelnyxFooter.verifyFooterLink('pricing', footerLink).should('include', footerLink);
            TelnyxFooter.goToPreviousPage();
    });
})

Then('I test footer company menu links', () => {
    Array.from(footerCompanyLinks).forEach(footerLink => {
            TelnyxFooter.verifyFooterLink('company', footerLink).should('include', footerLink);
            TelnyxFooter.goToPreviousPage();
    });
})

Then('I test footer single parameter menu links', () => {
    Array.from(footerLinks).forEach(footerLink => {
          TelnyxFooter.verifyFooterLinkSingle(footerLink).should('include', footerLink);
          TelnyxFooter.goToPreviousPage();
  });
})