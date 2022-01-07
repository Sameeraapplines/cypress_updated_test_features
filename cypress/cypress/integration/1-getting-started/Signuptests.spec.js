///<reference types= "cypress"/>


describe('Signup with empty mandatoey fields ', () => {
    it('Signup do not accept empty mandatory fields', () => {
        
        cy.visit("https://speechpundit.com/#/")
        cy.contains('Sign Up').click()

        // cy.contains('Email').type('newuser@applines.com')
        cy.contains('First Name').type("newuser")
        cy.contains('Last Name').type("new")
        cy.contains('Password').type("root123")
        cy.get('[value="Student"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        
        cy.get('form').submit()

    })
})


describe('Signup with existing credentials ', () => {
        it('Signup do not accept existing credentials', () => {
            cy.visit("https://speechpundit.com/#/")
            cy.contains('Sign Up').click()
    
            cy.contains('Email').type('sameera@applines.com')
            cy.contains('First Name').type("newuser")
            cy.contains('Last Name').type("new")
            cy.contains('Password').type("root123")
            cy.get('[value="Student"]').check({ force: true })      
            cy.get("#acceptTerms").check() //checkbox
            
            cy.get('form').submit()
    
        })
    })


    describe('Signup with valid credentials ', () => {
        it('Signup  only  accepts valid credentials', () => {
            //-- ACTION --//
            
            cy.visit("https://speechpundit.com/#/")
            cy.contains('Sign Up').click()
    
            cy.contains('Email').type('sameera+93@applines.com')
            cy.contains('First Name').type("newuser")
            cy.contains('Last Name').type("new")
            cy.contains('Password').type("root12345")
            cy.get('[value="Student"]').check({ force: true })      
            cy.get("#acceptTerms").check() //checkbox
            
            cy.get('.btn').click()
    
        })
    })