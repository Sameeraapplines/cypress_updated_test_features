///<reference types= "cypress"/>

describe('Activity page', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('activity').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Verifies availability and content of Activity page', function () {
      // this.user exists
      cy.visit("https://speechpundit.com/#/signin") //problem with email
+

      // cy.contains('Email').type(this.data.Email)
      // cy.contains('Password').type(this.data.Password)
      cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('form').submit()
      cy.contains('Activity').click()
         cy.contains('Summary')
         cy.get('[routerlink="/favorites"]').click() //favourites

         cy.get('[routerlink="/analytics"]').click() //analytics
        //  cy.wait(2000)
         cy.get('.p-toast-icon-close-icon').click() 
    })
})