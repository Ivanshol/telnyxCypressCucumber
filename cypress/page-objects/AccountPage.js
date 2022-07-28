export const menuLinks = ['home', 'messaging', 'verify/profiles', 'call-control/applications', 'fax/applications', 
'connections', 'outbound-profiles', 'wireless/sim-cards', 'video/video-rooms', 'reporting/detail-requests',
'debugging/sip-call-flow-tool', 'api-keys', 'networking/networks', 'lookup', 'trust-center/whatsapp', 'branded-calls', 
'allowed-ips/cidr-blocks']

class AccountPage{
    clickMenuLink(menu) {
        cy.get(
            `[href="/#/app/${menu}"]`
        ).eq(1).click();
    }

    verifyMenuLink(menu) {
        this.clickMenuLink(menu);
        return cy.url();
    }

    goToPreviousPage(){
        cy.go('back')
    }
}

export default new AccountPage()