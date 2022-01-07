///<reference types= "cypress"/>

describe("Forgot password", function()
{
    it.only("Forgot password functionality", function(){
        
        cy.visit("https://www.speechpundit.com/#/signin") //visits signin page
        
        cy.contains('Forgot Password').click()
        cy.contains('Email').type("sameera@applines.com") //enter email
       
        cy.get('form').submit()
         //after clicking the submit button a link will be sent to registered email 
        //                             //  and there we need to change the password.
        cy.wait(2000)
         cy.visit("https://www.speechpundit.com/#/signin") //After changing the password we  need to visit the signin page again, and need to login in with new credentials
        // cy.wait(2000)
        cy.contains('Email').type('sameera@applines.com')
         cy.contains('Password').type("root12345")
         cy.get('form').submit()
        
        
        // cy.get('form').submit()



    })


})