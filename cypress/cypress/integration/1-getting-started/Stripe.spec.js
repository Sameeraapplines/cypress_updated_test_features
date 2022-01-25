describe('Changing the plan', () => {
    
    it('Invoice', function(){
        // cy.visit("https://dev02.speechpundit.com/#/user/subscriptions")
        
        
    //     cy.visit('https://dev02.speechpundit.com/#/signin')
    //     cy.get('#email').type("sameera+2022@applines.com")
    //   cy.get('#password').type("root12345")
    //   cy.get('form').submit()
    //   cy.get('#menu-2\ ').click()
    
    cy.visit("https://dev02.speechpundit.com/#/user/subscriptions")
    })

    it.only('Upgrading the paln', function(){
        // cy.visit("https://dev02.speechpundit.com/#/user/subscriptions")
    //     cy.visit('https://dev02.speechpundit.com/#/signin')
    //     cy.get('#email').type("sameera+2023@applines.com")
    //   cy.get('#password').type("root12345")
    //   cy.get('form').submit()
      cy.visit("https://dev02.speechpundit.com/#/user/subscriptions")

        cy.contains("Upgrade Plan").click()
        cy.contains("Upgrade to Premium").click()
        cy.get('.p-dropdown-trigger-icon').click()
        cy.contains('Monthly').click()
        cy.contains('Purchase').click()
    })
})