///<reference types= "cypress"/>


describe('Website content Test', () => {
    it('verifies availability and content of landing page', () => {
        // cy.visit('https://dev02.speechpundit.com/#/')
        cy.visit("https://speechpundit.com/#/")

        cy.contains('Sign in')
        cy.contains('Sign Up')
        cy.contains('Try Now')
        cy.contains("Sign Up for Pavi's Class")
    })
  })

  describe('Sign in - content Test', () => {
    it.only('verifies content of sign in form', () => {
        // cy.visit('https://dev02.speechpundit.com/#/')
        cy.visit("https://speechpundit.com/#/")
        cy.contains('Sign in').click()

        cy.contains('Email')
        cy.contains('Password')
    })
  })

  describe('Sign Up - content Test', () => {
    it.only('verifies content of Sign Up form', () => {
        cy.visit('https://speechpundit.com/#/')
        cy.contains('Sign Up').click()

        cy.contains('Create Account')
        cy.contains('Email')
        cy.contains('First Name')
        cy.contains('Last Name')
        cy.contains('Password')
        cy.contains('Student')
        cy.contains('Coach')
        cy.contains('Parent')
        cy.contains('Terms & Conditions')
        cy.contains('Register')
        cy.contains('Sign in')
        cy.contains('Privacy Policy')
    })
  })