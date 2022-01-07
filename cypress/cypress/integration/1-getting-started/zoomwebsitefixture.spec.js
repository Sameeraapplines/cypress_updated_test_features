///<reference types= "cypress"/>
describe('Coach interface in Dev02', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('zoomdetails').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })


// describe('Website content Test', () => {
    it('verifies availability and content of landing page', function(){
        cy.visit('https://dev02.speechpundit.com/#/signin')
        // cy.contains('Sign in').click()
        cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('form').submit()
      cy.contains('Student Activity')
      cy.contains('Speeches')
      cy.contains('Activity')
      cy.contains('Record')
    })
})

describe('Profile Menu', () => {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('zoomdetails').then((user) => {
      // "this" is still the test context object
      this.user = user
    })
  })


// describe('Website content Test', () => {
  it('verifies availability of all categories', function(){
      cy.visit('https://dev02.speechpundit.com/#/signin')
      // cy.contains('Sign in').click()
      cy.get('#email').type(this.user.Email)
    cy.get('#password').type(this.user.Password)
    cy.get('form').submit()
    // cy.hover('#menu-2')
    // cy.get('#menu-2').click()nav-item dropdown ml-4 ng-star-inserted
    // cy.get('#menu-2\ ').click()
    // cy.get('nav-item dropdown ml-4 ng-star-inserted').click()
    // cy.contains('Student Activity')
    // cy.contains('Speeches')
    // cy.contains('Activity')
    // cy.contains('Record')
  })
})

describe("trynow",() => {
  it("testing try now feature", function(){
      cy.visit('https://dev02.speechpundit.com/#/')
      cy.contains('Try Now').click()
      
  })


})



