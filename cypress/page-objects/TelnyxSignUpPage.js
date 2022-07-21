class TelnyxSignUpPage{
    pressCreateAccountButton(){
        cy.get('body form div div button').eq(1).click();
    }

    agreeToTermsAndConditions(){
        cy.get('svg rect').eq(2).click();
    }

    verifyEmailErrorIsVisible(){
        cy.get('#email_error').should('be.visible');
    }

    verifyNameErrorIsVisible(){
        cy.get('#full_name_error').should('be.visible');
    }

    inputIncorrectEmailData(){
        cy.get('#email').type('incorrect');
    }

    verifyIncorrectEmailDataIsRecognized(){
        cy.get('#email_error').should('be.visible');
        cy.get('#email_error').contains('enter a valid email address.')
    }

    inputEmailData(email){
        cy.get('#email').type(email);
    }

    inputNameData(name){
        cy.get('#full_name').type(name);
    }

    inputPasswordData(password){
        cy.get('#password').type(password);
    }

    verifyPasswordRequirementsAreVisible(){
        cy.get('#password_requirements').should('be.visible');
    }
}

export default new TelnyxSignUpPage()
