///<reference types= "cypress"/>
describe('Signup with empty mandatory fields ', () => {
    it('Signup do not accept empty mandatory fields', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')
    const firstname = Cypress.env('firstname')
    const lastname = Cypress.env('lastname')

    cy.visit("https://www.speechpundit.com/#/signup")
    // cy.contains('Email').type(email)
    cy.contains('First Name').type(firstname)
        cy.contains('Last Name').type(lastname)
        cy.contains('Password').type(password)
        cy.get('[value="Student"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        
        cy.get('form').submit()


    })

})

describe('Signup with existing credentials ', () => {
    it('Signup do not accept existing credentials', () => {
    const email = Cypress.env('email')
    const password = Cypress.env('password')
    const firstname = Cypress.env('firstname')
    const lastname = Cypress.env('lastname')

    cy.visit("https://www.speechpundit.com/#/signup")
    cy.contains('Email').type(email)
    cy.contains('First Name').type(firstname)
        cy.contains('Last Name').type(lastname)
        cy.contains('Password').type(password)
        cy.get('[value="Student"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        
        cy.get('form').submit()


    })

})


describe('Signup with valid credentials ', () => {
    it.only('Signup  only  accepts valid credentials', () => {
       
            const email1 = Cypress.env('email1')
            const password = Cypress.env('password')
            const firstname = Cypress.env('firstname')
            const lastname = Cypress.env('lastname')
        
            cy.visit("https://www.speechpundit.com/#/signup")
            cy.contains('Email').type(email1)
            cy.contains('First Name').type(firstname)
                cy.contains('Last Name').type(lastname)
                cy.contains('Password').type(password)
                cy.get('[value="Student"]').check({ force: true })      
                cy.get("#acceptTerms").check() //checkbox
                
                // cy.get('form').submit()  
                cy.get('.btn').click() 


    })
})

////Note --> Always change the  email1 in configuration file(the email which we provide  while creating a new user  in signup) before running the test. 