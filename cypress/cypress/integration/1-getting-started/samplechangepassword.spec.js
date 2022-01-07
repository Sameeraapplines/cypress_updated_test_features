///<reference types= "cypress"/>
describe('Change password', () => {
    it('Change password do not accept wrong current password', () => {
        const Demail = Cypress.env('Demail')
        const password1 = Cypress.env('password1')
        // cy.visit("https://dev02.speechpundit.com/")
        // // cy.visit("https://speechpundit.com/#/")
        // cy.contains('Sign in').click()
        cy.visit("https://dev02.speechpundit.com/#/signin")

        cy.contains('Email').type(Demail)
        cy.contains('Password').type(password1)
        cy.get('form').submit()
        cy.get('#menu-2').click()
        cy.visit("https://dev02.speechpundit.com/#/user/profile")
        cy.contains('Change password').click()
        // cy.contains('Current password').type('root')
        cy.get('#oldPassword').type("root")
        cy.contains("New password").type('root12345')
        // cy.contains("Confirm Password").type("root12345")
        cy.get('#confirmPassword').type("root12345")
        cy.get('form').submit()
        
    })
})


describe('Change password', () => {
    it('Change password with valid credentials', () => {
        const Demail = Cypress.env('Demail')
        const password1 = Cypress.env('password1')
       
        cy.visit("https://dev02.speechpundit.com/#/signin")

        cy.contains('Email').type(Demail)
        cy.contains('Password').type(password1)
        cy.get('form').submit()
        cy.get('#menu-2').click()
        cy.visit("https://dev02.speechpundit.com/#/user/profile")
        cy.contains('Change password').click()
        // cy.contains('Current password').type('root')
        cy.get('#oldPassword').type("root12345")
        cy.contains("New password").type('root12345')
        cy.get('#confirmPassword').type("root12345")
        // cy.contains("Confirm Password").type("root12345")
        cy.get('form').submit()
        
    })
})