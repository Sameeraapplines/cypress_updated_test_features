///<reference types= "cypress"/>

describe("SpeechPundit", function()

{           
    it("Website & Content", function(){
        cy.visit("https://speechpundit.com/#/")
        cy.get('[routerlink="/signup"]').click() 
        cy.visit("https://speechpundit.com/#/") // try back button instead
        cy.get('[routerlink="/trynow"]').click()
        cy.get('.p-button-label').click() //pavis class
        cy.get('.btn-info').click()
        
        })


    it("Navigation", function(){
        cy.visit("https://speechpundit.com/#/")
        cy.get('.active').click()
        cy.get(':nth-child(3) > a').click()
        
        cy.get(':nth-child(4) > a').click()
    })





    it("Signup testcases", function(){
        cy.visit("https://speechpundit.com/#/")
        cy.get('[routerlink="/signup"]').click()
    })
    it("Invalid test(empty input fields) for sign up",function()
    {
        // cy.wait(2000)
        cy.get('#email').type("meee@applines.com") //email
        // cy.wait(2000)
        cy.get('#firstName').type("sameera") //firstname
        cy.get('#lastName').type("SK") //lastname
        cy.get('#password').type("hello123") //pwd  
        // cy.get('[value="Student"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)
    })


    it("Invalid test(existing user) for sign up",function()
    {
        // cy.wait(2000)
        // cy.get('[routerlink="/signup"]').click()
        cy.get('#email').type("sameera@applines.com") //email
        // cy.wait(2000)
        cy.get('#firstName').type("sameera") //firstname
        cy.get('#lastName').type("SK") //lastname
        cy.get('#password').type("hello123") //pwd  
        cy.get('[value="Student"]').check({ force: true })      
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)
    })


    it("Valid test for sign up",function()
    {
        cy.visit('https://speechpundit.com/#/signup')
        // cy.get('#email').should('be.enabled').type("me1e@applines.com") //email
        // cy.get('#firstName').should('be.enabled').type("sameera") //firstname
        // cy.get('#lastName').should('be.enabled').type("SK") //lastname
        cy.get('#email').type("sameera+34@applines.com") //email
        
        cy.get('#firstName').type("sameera") //firstname
        // cy.get('#lastName').type("SK") //lastname
        cy.get('#lastName').type("sheik")
        cy.get('#password').type("hello123") //pwd
        cy.get('[value="Student"]').check({ force: true })
        
        cy.get("#acceptTerms").check() //checkbox
        // cy.wait(2000)
        cy.get('.btn').click()
        // cy.wait(2000)
        // cy.get('.btn').click()
        

    })
    // it("billing", function(){

    //         cy.visit("https://speechpundit.com/#/billing/pricing/all")
    //         // cy.get(':nth-child(2) > app-plan-item > .card > .pb-6 > .btn').click()
    //         // cy.get('.list-group > :nth-child(5)').click()
    //         // cy.get('.btn-primary btn').click()
    //         cy.get(':nth-child(2) > app-plan-item > .card > .pb-6 > .btn').click()
    //         cy.get('."btn-primary btn btn-block ng-star-inserted" xpath="1"').click()

    // })


    it("wrong password", function()
    {
        cy.visit("https://speechpundit.com/#/signin")
        cy.get('#email').type("sameera@applines.com")

        cy.get('#password').type("root1234")
        cy.get('.btn').click()
        cy.wait(1000)



    })


    it("existing user log in", function()
    {
        cy.visit("https://speechpundit.com/#/signin")
        cy.get('#email').type("sameera@applines.com")

        cy.get('#password').type("root12345")
        cy.get('.btn').click()
        cy.wait(1000)



    })

     it("Recording", function()
     {
         cy.visit("https://speechpundit.com/#/signin")
         cy.get('#email').type("sameera@applines.com")

         cy.get('#password').type("root12345")
        //  cy.get('.btn').click().then(() => {
        //     // Debugger is hit after the cy.visit
        //     // and cy.get command have completed
        //     cy.visit("https://speechpundit.com/#/record").then(() => 
        //         // cy.wait(2000)
        //         cy.get('.rec-btn').click({force: true})
        //     )
        cy.get('.btn').click()
        cy.visit("https://speechpundit.com/#/record")
        cy.wait(2000)
        cy.get('.rec-btn').click({force: true})
        cy.wait(2000)
        })
        //  cy.get('[routerlink="/activity"]').click({multiple:true})
        //  cy.get('#menu-1').click()
         
        //  cy.get('.rec-btn').click({force: true})
        

    //  })
         
     it("navigation",function()
     {
            cy.visit("https://speechpundit.com/#/record")
            cy.get('#email').type("sameera@applines.com")
            cy.get('#password').type("root12345")
            cy.get('.btn').click()
            cy.get('[routerlink="/activity"]').click({multiple:true})
             cy.get('#menu-1').click()



     })
        it("profile updation",function()
        {

            cy.visit("https://speechpundit.com/#/record")
            cy.get('#email').type("sameera@applines.com")
            cy.get('#password').type("root12345")
            cy.get('.btn').click()
            cy.get('#menu-2').click()
            // cy.get('.fas fa-user').click()
            // cy.get('.dropdown menu').click()


        })
    //  it("Recording", function()
    //  {

    //     cy.get('.rec-btn').click({force: true})


    //  })








})