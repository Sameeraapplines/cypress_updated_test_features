///<reference types= "cypress"/>

describe('recording page', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('recording').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Verifies availability and content of Recording page', function () {
      // this.user exists
      cy.visit("https://speechpundit.com/#/signin") //problem with email
+

      // cy.contains('Email').type(this.data.Email)
      // cy.contains('Password').type(this.data.Password)
      cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('form').submit()
      cy.contains('Record').click()  
            cy.contains('Click here to practice your speech').click()  
    })
})