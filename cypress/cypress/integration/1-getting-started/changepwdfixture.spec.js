///<reference types= "cypress"/>

describe('Change password', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('changepwd').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Change password do not accept wrong current password', function () {
      // this.user exists
      cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email
      cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('form').submit()
      cy.get('#menu-2').click()
        cy.visit("https://dev02.speechpundit.com/#/user/profile")
        cy.contains('Change password').click()
        cy.get('#oldPassword').type(this.user.Wrongcurrentpassword)
        cy.contains("New password").type(this.user.NewPassword)
        // cy.contains("Confirm Password").type("root12345")
        cy.get('#confirmPassword').type(this.user.ConfirmPassword)
        cy.get('form').submit()

    })
})

describe('Change password', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('changepwd').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it.only('Change password do not accept wrong current password', function () {
      // this.user exists
      cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email
      cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('form').submit()
      cy.get('#menu-2').click()
        cy.visit("https://dev02.speechpundit.com/#/user/profile")
        cy.contains('Change password').click()
        cy.get('#oldPassword').type(this.user.CurrentPassword)
        cy.contains("New password").type(this.user.NewPassword)
        // cy.contains("Confirm Password").type("root12345")
        cy.get('#confirmPassword').type(this.user.ConfirmPassword)
        cy.get('form').submit()

    })
})