///<reference types= "cypress"/>
describe('Successful login Test', () => {
    it('verifies login succeeds with valid credentials', () => {
        //-- ACTION --//
        
        cy.visit("https://speechpundit.com/#/")
        cy.contains('Sign in').click()

        cy.contains('Email').type('sameera@applines.com')
        cy.contains('Password').type("root12345")
        cy.get('form').submit()
        
        //-- VALIDATION --//
        
        cy.url().should("contain", 'record')
        
        cy.contains('Speeches')
        
        cy.contains('Activity')
        cy.contains('Record')
    })
  })

  describe('Unsuccessful login Test', () => {
    it('verifies login fails with invalid credentials', () => {
        //-- ACTION --//
        cy.visit('https://speechpundit.com/#/')
        cy.contains('Sign in').click()

        cy.contains('Email').type('sameera@applines.com')
        cy.contains('Password').type('abcde')
        cy.get('form').submit()

        //-- VALIDATION --//
        cy.contains('Not Found')
        cy.url().should("contain", 'signin')
    })
  })