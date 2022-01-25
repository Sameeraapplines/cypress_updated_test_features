//<reference types= "cypress"/>

describe('Student feedback', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('studentfeedback').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Student feedback(coach)', function () {
      // this.user exists
      cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email


      
      cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('form').submit()
      cy.contains('Student Activity').click()

   
    cy.get('.ml-2 > .fas').click()
    cy.wait(2000)
    // cy.get('[for="btnradio1"] > .fa').click()
    cy.get(':nth-child(1) > .mb-4 > .card-body > .btn').click() //summary
    cy.get('.far').click() //play
    cy.wait(2000)
    // cy.get('.far').click() //pause
    cy.get('.p-button-icon').click()

    
    //  cy.get(':nth-child(2) > .text-center > .fas').click()
    })
    it.only('Student feedback(Student)', function () {
      // this.user exists
      cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email


      
      cy.get('#email').type(this.user.Email1)
      cy.get('#password').type(this.user.Password)
      cy.get('form').submit()
      cy.contains("Activity").click()
      cy.get(':nth-child(1) > .justify-content-between > .pt-3 > .btn').click()
      
    })
})