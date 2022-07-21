class TelnyxAccounPage{

    inputLoginData(email, password) {
        cy.get('[name="email"]').eq(0).type(email);
        cy.get('[name="password"]').type(password);
    }

    clickLogInButton() {
        cy.get('[role="button"][type="submit"]').eq(1).click();
    }

}

export default new TelnyxAccounPage()