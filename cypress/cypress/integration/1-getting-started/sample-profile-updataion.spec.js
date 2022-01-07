///<reference types= "cypress"/>
describe('Profile updation', () => {
    it.only('profile will not be updated with empty  mandatory fields', () => {

        const Demail = Cypress.env('Demail')
        const password1 = Cypress.env('password1')

        // cy.visit("https://dev02.speechpundit.com/")
        // cy.visit("https://speechpundit.com/#/")
        // cy.contains('Sign in').click()
        cy.visit("https://dev02.speechpundit.com/#/signin")

        cy.contains('Email').type(Demail)
        cy.contains('Password').type(password1)
        cy.get('form').submit()
        
        cy.get('#menu-2').click()
        cy.visit("https://dev02.speechpundit.com/#/user/profile")
        cy.contains("My Subscriptions")
        cy.contains("My Profile")
        
        cy.get('#fname').clear()
        cy.get('#lname').clear().type("sks")
       
        


    })
})

describe('Profile updation', () => {
    it('Updating user details by giving valid credentials', () => {
        const Demail = Cypress.env('Demail')
        const password1 = Cypress.env('password1')

        // cy.visit("https://dev02.speechpundit.com/")
        // // cy.visit("https://speechpundit.com/#/")
        // cy.contains('Sign in').click()
        cy.visit("https://dev02.speechpundit.com/#/signin")


        cy.contains('Email').type(Demail)
        cy.contains('Password').type(password1)
        cy.get('form').submit()
        // cy.contains('s').click()
        cy.get('#menu-2').click()
        cy.visit("https://dev02.speechpundit.com/#/user/profile")
        cy.contains("My Subscriptions")
        cy.contains("My Profile")
        // cy.get('#fname').clear().type("Sameera")
        // cy.get('#lname').clear().type('SK')
        // cy.get('form').submit()
       


    })
})

