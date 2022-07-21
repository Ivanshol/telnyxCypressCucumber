class TelnyxCookiePolicyPage{
    submitContactReasons(){
        cy.get('[type="submit"]').click();
    }

    verifyPageDidNotChangeWithEmptyInputs(){
        cy.url().should('eq', 'https://telnyx.com/contact-us');
    }
}

export default new TelnyxCookiePolicyPage()