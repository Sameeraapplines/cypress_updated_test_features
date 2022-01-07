///<reference types= "cypress"/>
describe('recording page', () => {
        it('Verifies availability and content of Recording page', () => {
            cy.visit("https://speechpundit.com/#/")
            cy.contains('Sign in').click()
    
            cy.contains('Email').type('sameera@applines.com')
            cy.contains('Password').type("root12345")
            cy.get('form').submit()
            cy.contains('Record').click()  
            cy.contains('Click here to practice your speech').click()  




        })
})