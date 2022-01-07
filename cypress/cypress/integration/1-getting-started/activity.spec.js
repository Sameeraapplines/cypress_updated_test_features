///<reference types= "cypress"/>
describe('Activity page', () => {
    it('Verifies availability and content of Activity page', () => {
        // cy.visit("https://speechpundit.com/#/")
        // cy.contains('Sign in').click()
        cy.visit("https://www.speechpundit.com/#/signin")

        cy.contains('Email').type('sameera@applines.com')
        cy.contains('Password').type("root12345")
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
