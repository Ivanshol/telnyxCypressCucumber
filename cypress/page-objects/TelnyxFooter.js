export const footerProductLinks = [
'sip-trunks', 'voice-api', 'sms-api', 'whatsapp-api', 'fax-api', 'iot-sim-card', 'phone-numbers'
, 'verify-api']

export const footerPricingLinks = ['elastic-sip', 'messaging', 'call-control', 'wireless-pricing']

export const footerCompanyLinks = ['about', 'careers', 'data-privacy']

export const footerLinks = ['number-lookup', 'products', 'resources', 'learn', 'release-notes', 'privacy-policy', 
'cookie-policy', 'acceptable-use-policy', 'terms-and-conditions', 'report-abuse']

class TelnyxFooter{

    
    clickFooterLinkSingle(menu) {
        cy.get(
            `footer [href="/${menu}"]`
        ).scrollIntoView().click();
    }

    verifyFooterLinkSingle(menu) {
        this.clickFooterLinkSingle(menu);
        return cy.url();
    }


    clickFooterLink(menu, link) {
        cy.get(
            `footer [href="/${menu}/${link}"]`
        ).scrollIntoView().click();
    }

    verifyFooterLink(menu, link) {
        this.clickFooterLink(menu, link);
        return cy.url();
    }

    goToPreviousPage(){
        cy.go('back')
    }

}

export default new TelnyxFooter()
