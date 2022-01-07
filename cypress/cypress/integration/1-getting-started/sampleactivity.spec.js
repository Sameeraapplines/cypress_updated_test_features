describe('Activity page', () => {
    it('Verifies availability and content of Activity page', () => {

        const email = Cypress.env('email')
        const password1 = Cypress.env('password1')

        cy.visit("https://www.speechpundit.com/#/signin")
        // cy.contains('Sign in').click()

        cy.contains('Email').type(email)
        cy.contains('Password').type(password1)
        cy.get('form').submit()
        cy.contains('Activity').click()
         cy.contains('Summary')
         cy.get('[routerlink="/favorites"]').click() //favourites

         cy.get('[routerlink="/analytics"]').click() //analytics
        //  cy.wait(2000)
         cy.get('.p-toast-icon-close-icon').click() 
        //  cy.contains('FAVORITES')
        // cy.contains('ANALYTICS')



    })
    })
