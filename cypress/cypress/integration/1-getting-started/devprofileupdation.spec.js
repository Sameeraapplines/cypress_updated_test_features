//<reference types= "cypress"/>


describe('profile updation', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('devprofile').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Profile will not be updated with empty mandatory fields', function () {
      // this.user exists
      cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email
      cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('.btn').click()
      cy.get('form').submit()
      // cy.get('#menu-2').click()
      // cy.get('#menu-2\ ').click()
        cy.visit("https://dev02.speechpundit.com/#/user/profile")
        cy.get('#fname').clear()
        cy.get('#lname').clear().type(this.user.lname)
     })
  })
  
  describe('profile updation', () => {
      beforeEach(function () {
        // "this" points at the test context object
        cy.fixture('devprofile').then((user) => {
          // "this" is still the test context object
          this.user = user
        })
      })
    
      // the test callback is in "function () { ... }" form
      it('Upadating the user details with valid details', function () {
        // this.user exists
        cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email
        cy.get('#email').type(this.user.Email)
        cy.get('#password').type(this.user.Password)
        cy.get('.btn').click()
        cy.get('form').submit()
        // cy.get('#menu-2').click()
        // cy.get('#menu-2\ ').click()
          cy.visit("https://dev02.speechpundit.com/#/user/profile")
          cy.get('#fname').clear().type(this.user.fname)
          cy.get('#lname').clear().type(this.user.lname)
          // cy.get('#email').clear().type(this.user.Email)
          cy.get('form').submit()
  
       })
  })

  