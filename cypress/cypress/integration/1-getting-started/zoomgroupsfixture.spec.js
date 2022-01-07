///<reference types= "cypress"/>
describe('Zoom Group', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('zoomdetails').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })



    it('Can not create a zoom meet with empty mandatory fields', function(){
      //     cy.visit('https://dev02.speechpundit.com/#/signin')
      //     // cy.contains('Sign in').click()
      //     cy.get('#email').type(this.user.Email)
      //   cy.get('#password').type(this.user.Password)
      //   cy.get('form').submit()
        cy.visit('https://dev02.speechpundit.com/#/user/groups')
        cy.contains('Create New Group').click()
        cy.contains('Group Name').type(this.user.Groupname)
         cy.get('#level').select('Beginner')
      //    cy.contains('Start Time').clear()
      // cy.get('.p-calendar > .ng-tns-c65-5').click().clear().type("11:00 AM")
      cy.get('.p-calendar > .ng-tns-c65-6').click({force: true}) .clear().type("11:30 AM")
      cy.get('.p-calendar > .ng-tns-c65-5').click().clear().type("11:00 AM")
      
      cy.get('.col-md-8 > :nth-child(1) > .col-12 > :nth-child(3)').click()
      cy.get('.col-md-8 > :nth-child(1) > .col-12 > :nth-child(5)').click()
      cy.contains('Add').click()
      })
  })


  describe('Zoom Group', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('zoomdetails').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })

// describe('Website content Test', () => {
    it.only('Creating a zoom call and reflecting on calender', function(){
    //     cy.visit('https://dev02.speechpundit.com/#/signin')
    //     // cy.contains('Sign in').click()
    //     cy.get('#email').type(this.user.Email)
    //   cy.get('#password').type(this.user.Password)
    //   cy.get('form').submit()
      cy.visit('https://dev02.speechpundit.com/#/user/groups')
      // cy.get('.mb-0 > .btn').click()      
      cy.contains('Create New Group').click()
      
       cy.contains('Group Name').type(this.user.Groupname)
       cy.get('#level').select('Beginner')
      //  cy.contains('Start Time').clear()
    // cy.get('.p-calendar > .ng-tns-c65-5').click().clear().type("11:00 AM")
    cy.get('.p-calendar > .ng-tns-c65-6').click({force: true}) .clear().type("11:30 AM")
    cy.get('.p-calendar > .ng-tns-c65-5').click().clear().type("11:00 AM")
    
    cy.get('.col-md-8 > :nth-child(1) > .col-12 > :nth-child(3)').click()
    // cy.contains('M').click()
    // cy.get('.col-md-8 > :nth-child(1) > .col-12 > :nth-child(5)').click()
    cy.contains('Start Date').click()
    // cy.contains('Add').click()
    })
})