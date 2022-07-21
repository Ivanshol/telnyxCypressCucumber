class Base{

    navigateToHome(){
        cy.visit('https://telnyx.com/');
        cy.get('body')
        .then($body => {
          if ($body.find('[aria-label="close and deny"] ~div>div>button').length) {
            cy.get('[aria-label="close and deny"] ~div>div>button').click(); 
          }
          else{
      
          }
        })
    }

    clickFooterLink(menu, link, index) {
        cy.get(
            `[href="/${menu}/${link}"]`
        ).eq(`${index}`).scrollIntoView().click();
    }

    clickFooterLink(link, index) {
        cy.get(
            `[href="/${link}"]`
        ).eq(`${index}`).scrollIntoView().click();
    }
}

export default new Base()