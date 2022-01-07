///<reference types= "cypress"/>

describe('Forgot password', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('forgotpwd').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Forgot password functionality', function () {
      // this.user exists
      cy.visit("https://speechpundit.com/#/signin") 
      cy.contains('Email').type(this.user.Email) //enter email
       
        cy.get('form').submit()
        cy.visit("https://www.speechpundit.com/#/signin") //After changing the password we  need to visit the signin page again, and need to login in with new credentials
        // cy.wait(2000)
        cy.contains('Email').type(this.user.Email)
         cy.contains('Password').type(this.user.Password)
         cy.get('form').submit()
        
    })
})

