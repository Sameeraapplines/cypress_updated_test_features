///<reference types= "cypress"/>

describe("SpeechPundit", function()
{
    it.only("visit the website", function(){
        cy.visit("https://speechpundit.com/#/")
        cy.get('[routerlink="/signup"]').click()
    })
    it.only("Invalid test(existing user) for sign up",function()
    {
        // cy.wait(2000)
        // cy.get('[routerlink="/signup"]').click()
        cy.get('#email').type("sameera@applines.com") //email
        // cy.wait(2000)
        cy.get('#firstName').type("sameera") //firstname
        cy.get('#lastName').type("SK") //lastname
        cy.get('#password').type("hello123") //pwd  
        cy.get('[value="Coach"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)

    })



    it("empty fields for sign up",function()
    {
        // cy.wait(2000)
        // cy.get('[routerlink="/signup"]').click()
        cy.get('#email').type("new@applines.com") //email
        // cy.wait(2000)
        cy.get('#firstName').type("sameera") //firstname
        // cy.get('#lastName').type("SK") //lastname
        cy.get('#password').type("hello123") //pwd  
        cy.get('[value="Coach"]').check({ force: true }) 
        // cy.get('[value="Student"]').check({ force: false }) 
        // cy.get('[value="Parent"]').check({ force: false })     
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)

    })



    it.only("Valid test for sign up",function()
    {
        cy.visit('https://speechpundit.com/#/signup')
        // cy.get('#email').should('be.enabled').type("me1e@applines.com") //email
        // cy.get('#firstName').should('be.enabled').type("sameera") //firstname
        // cy.get('#lastName').should('be.enabled').type("SK") //lastname
        cy.get('#email').type("sameera+33@applines.com") //email
        
        cy.get('#firstName').type("sameera") //firstname
        // cy.get('#lastName').type("SK") //lastname
        cy.get('#lastName').type("sheik")
        cy.get('#password').type("hello123") //pwd
        cy.get('[value="Coach"]').check({ force: true })
        
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)
        // cy.get('.btn').click()

    })



})
