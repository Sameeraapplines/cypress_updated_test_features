describe('Subscriptions', ()=>{

    it('Upgrading to basic plan', function(){
        cy.visit('https://dev02.speechpundit.com/#/user/subscriptions')
        cy.contains('Upgrade Plan').click()
        cy.contains('Upgrade to Basic').click()
        cy.contains('Purchase').click()
        // cy.contains('Upgrade to Premium').click()
    })
    it('Upgrading to premium plan', function(){
        cy.visit('https://dev02.speechpundit.com/#/user/subscriptions')
        cy.contains('Upgrade Plan').click()
        cy.contains('Upgrade to Premium').click()
        cy.get('.p-dropdown-trigger-icon').click()
        cy.contains('Monthly').click()
        cy.contains('Purchase').click()
    })




})