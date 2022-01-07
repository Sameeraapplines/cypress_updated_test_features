///<reference types= "cypress"/>
describe('recording page', () => {
    it('Verifies availability and content of Recording page', () => {
        const email = Cypress.env('email')
        const password1 = Cypress.env('password1')

        cy.visit("https://speechpundit.com/#/")
        cy.contains('Sign in').click()

        cy.contains('Email').type(email)
        cy.contains('Password').type(password1)
        cy.get('form').submit()
        cy.contains('Record').click()  
        cy.contains('Click here to practice your speech').click()  




    })
})