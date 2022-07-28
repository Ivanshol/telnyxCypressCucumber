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

    hoverMouseOverMenu(index){
        cy.get('div ul li>span').eq(`${index}`).trigger('mouseover');
    }

    scrollHeaderIntoView(index){
        cy.get('div h2').eq(`${index}`).scrollIntoView();
    }

    scrollSavingsCalculatorIntoView(){
        cy.get("a[href='https://telnyx.com/sign-up']").scrollIntoView();
        cy.wait(7000);
    }

    clickSMSCalculatorButton(){
        cy.get('body div div h2~div>div>div>div>div~div>div>button').eq(1).click();
    }

    clickMakeOutbountSliderAndSlideIncrease(){
        cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle', { timeout: 10000 }).eq(0).click();
        let currentValue = 110000;
        let targetValue = 1000000;
        const increment = 500;
        const steps = (targetValue - currentValue) / increment;
        const arrows = '{rightarrow}'.repeat(steps); 
      
        cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle').eq(0)
          .type(arrows, { timeout: 13000 })
    }

    clickMakeInboundSliderAndSlideIncrease(){
        cy.get(':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-handle', { timeout: 10000 }).click();
        let currentValue = 110000;
        let targetValue = 1000000;
        const increment = 500;
        const steps = (targetValue - currentValue) / increment;
        const arrows = '{rightarrow}'.repeat(steps); 
      
        cy.get(':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-handle')
          .type(arrows, { timeout: 13000 })
    }

    clickMakeOutboundSliderAndSlideDecrease(){
        cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle', { timeout: 10000 }).eq(0).click();
        let currentValue = 240000;
        let targetValue = 500;
        const increment = 500;
        const steps = (currentValue - targetValue) / increment;
        const arrows = '{leftarrow}'.repeat(steps); 
      
        cy.get(':nth-child(4) > .telnyx-slider > .ant-slider > .ant-slider-handle').eq(0)
          .type(arrows, { timeout: 13000 })
    }

    
    clickMakeInboundSliderAndSlideDecrease(){
        cy.get(':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-handle', { timeout: 10000 }).click();
        let currentValue = 110000;
        let targetValue = 500;
        const increment = 500;
        const steps = (currentValue - targetValue) / increment;
        const arrows = '{leftarrow}'.repeat(steps); 
      
        cy.get(':nth-child(5) > .telnyx-slider > .ant-slider > .ant-slider-handle')
          .type(arrows, { timeout: 13000 })
    }


}

export default new TelnyxPage()