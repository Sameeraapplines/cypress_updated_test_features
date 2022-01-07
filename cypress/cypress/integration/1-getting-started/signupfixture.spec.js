///<reference types= "cypress"/>

describe('Signup with empty mandatory fields ', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('signup').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Signup do not accept empty mandatory fields', function () {
      // this.user exists
      cy.visit("https://www.speechpundit.com/#/signup")
      // cy.contains('Email').type(email)
      cy.contains('First Name').type(this.user.Firstname)
          cy.contains('Last Name').type(this.user.Lastname)
          cy.get('#password').type(this.user.Password)
          cy.get('[value="Student"]').check({ force: true })      
          cy.get("#acceptTerms").check() //checkbox
      cy.get('form').submit()
    //   cy.get('.btn').click()
    })
})

///<reference types= "cypress"/>

describe('Signup with existing credentials ', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('signup').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Signup do not accept existing credentials', function () {
      // this.user exists
      cy.visit("https://www.speechpundit.com/#/signup")
      cy.contains('Email').type(this.user.Email)
      cy.contains('First Name').type(this.user.Firstname)
          cy.contains('Last Name').type(this.user.Lastname)
          cy.get('#password').type(this.user.Password)
          cy.get('[value="Student"]').check({ force: true })      
          cy.get("#acceptTerms").check() //checkbox
      cy.get('form').submit()
    })
})


//<reference types= "cypress"/>

describe('Signup with valid credentials ', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('signup').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it.only('Signup  only  accepts valid credentials', function () {
      // this.user exists
      cy.visit("https://www.speechpundit.com/#/signup")
      cy.contains('Email').type(this.user.Email1)
      cy.contains('First Name').type(this.user.Firstname)
          cy.contains('Last Name').type(this.user.Lastname)
          cy.get('#password').type(this.user.Password)
          cy.get('[value="Student"]').check({ force: true })      
          cy.get("#acceptTerms").check() //checkbox
            // cy.get('form').submit()
            cy.get('.btn').click()
    })
})