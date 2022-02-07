describe('Check whether all links are working properly' ,() => {
    
    it('Navigate to landing page of the website', function(){
    cy.visit("https://dev02.speechpundit.com/#/")
    
    })
    it('Navigate to sign up link', function(){
        cy.visit("https://dev02.speechpundit.com/#/")
        cy.contains('Sign Up').click()
        
        })
   it('Navigate to try now', function(){
            cy.visit("https://dev02.speechpundit.com/#/")
            cy.contains("Try Now").click()
            
    })
     it('Navigate to signup for pavis class link ', function(){
                cy.visit("https://dev02.speechpundit.com/#/")
                cy.contains("Sign Up for Pavi's Class").click()
                
     })
    it('Navigate to sign inlink ', function(){
                    cy.visit("https://dev02.speechpundit.com/#/")
                    cy.contains("Sign In").click()
                    
    })
    })

    describe('password validation' ,() => {
        beforeEach(function () {
            // "this" points at the test context object
            cy.fixture('navigation').then((user) => {
              // "this" is still the test context object
              this.user = user
            })
        })
    
        it('Can not sign up if the password length is lessthan 8', function(){
            cy.visit("https://dev02.speechpundit.com/#/")
                    cy.contains("Sign Up").click()
                    cy.contains('Email').type(this.user.Email)
                    cy.contains('First Name').type(this.user.Firstname)
                        cy.contains('Last Name').type(this.user.Lastname)
                        cy.get('#password').type(this.user.pwd1)
                        cy.get('[value="Student"]').check({ force: true })     

        })
        it.only('password length should be >= 8', function(){
            cy.visit("https://dev02.speechpundit.com/#/")
                    cy.contains("Sign Up").click()
                    cy.contains('Email').type(this.user.Email1)
                    cy.contains('First Name').type(this.user.Firstname)
                        cy.contains('Last Name').type(this.user.Lastname)
                        cy.get('#password').type(this.user.pwd2)
                        cy.get('[value="Student"]').check({ force: true })     

        })
    })
