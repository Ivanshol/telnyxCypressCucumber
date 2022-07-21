class TelnyxPage{
   

    clickTalkToAnExpertButton(){
        cy.get('[href="/contact-us"]').eq(0).click();
    }

    typeIntoEmailField(email){
        cy.get('[type="email"]').type(email);
    }

    clickTryForFreeButton(){
        cy.get('body form div div button').click();
    }

    clickUpperSupportCenterButton(){
        cy.get('header [href="https://support.telnyx.com"]').eq(0).click();
    }

    clickUpperLogInButton(){
        cy.get('header [href="https://portal.telnyx.com/"]').eq(0).click();
    }

    clickUpperTalkToAnExpertButton(){
        cy.get('[href="/contact-us"]').eq(0).click();
    }

    clickJoinTheWaitlistButton(){
        cy.get('header span div span a').click();
    }

    clickUpperSignUpButton(){
        cy.get('[href="/sign-up"]').eq(1).click();
    }

    scrollMidPageButtonIntoView(){
        cy.get('body div div h3').eq(1).scrollIntoView();
    }

    clickMidPageButton(index){
        cy.get('body div div h3').eq(`${index}`).click();
    }

}

export default new TelnyxPage()