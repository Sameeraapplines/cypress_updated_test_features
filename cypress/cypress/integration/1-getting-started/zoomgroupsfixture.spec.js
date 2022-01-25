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
    it('Creating a zoom call and reflecting on calender', function(){
    //      cy.visit('https://dev02.speechpundit.com/#/signin')
    // //     // cy.contains('Sign in').click()
    //     cy.get('#email').type(this.user.Email)
    //    cy.get('#password').type(this.user.Password)
    //    cy.get('form').submit()
      cy.visit('https://dev02.speechpundit.com/#/user/groups')
          
      cy.contains('Create New Group').click()
      
        cy.contains('Group Name').type(this.user.Groupname)
        cy.get('#level').select('Beginner')
      //  cy.contains('Start Time').clear()
    //  cy.get('.p-calendar > .ng-tns-c65-5').click().clear().type("11:00 AM")
     cy.get('.p-calendar > .ng-tns-c65-6').click({force: true}) .clear().type("11:30 AM")
     cy.get('.p-calendar > .ng-tns-c65-5').click().clear().type("11:00 AM")
    
    cy.get('.col-md-8 > :nth-child(1) > .col-12 > :nth-child(3)').click()
    
     cy.contains('Start Date').click()
     cy.get(':nth-child(3) > :nth-child(3) > .ng-tns-c65-7').click()
     cy.contains('End Date').click()
     cy.get(':nth-child(4) > :nth-child(5) > .ng-tns-c65-8').click()
    //  cy.contains('Add').click()
    cy.get('.btn-primary > .ng-star-inserted').click()
    })
})

describe('Zoom Group', () => {
  
// describe('Website content Test', () => {
  it('Editing the class details', function(){
  
    cy.visit('https://dev02.speechpundit.com/#/user/groups')
    cy.get(':nth-child(4) > .mb-4 > .h4 > .dropdown > #dropdownOne > .fe').click()
    // cy.contains('Edit').click()
    cy.get(':nth-child(4) > .mb-4 > .h4 > .dropdown > .dropdown-menu > :nth-child(1)').click()
    cy.get('.col-12 > :nth-child(6)').click()
    // cy.get('.btn-primary > .ng-star-inserted').click()
    cy.get('.p-dialog-footer > .btn-primary').click()
        
  
  })
  it('Copy and creating the other the class', function(){
  
    cy.visit('https://dev02.speechpundit.com/#/user/groups')
    cy.get(':nth-child(1) > .mb-4 > .h4 > .dropdown > #dropdownOne > .fe').click()
    cy.get(':nth-child(1) > .mb-4 > .h4 > .dropdown > .dropdown-menu > :nth-child(2)').click()
    
    // cy.get('#name').clear().type('Copy of previous  test class')
    // cy.get('.col-12 > :nth-child(4)').click()
    // cy.get('.btn-primary > .ng-star-inserted').click()
    cy.get('.btn-primary > .ng-star-inserted').click()
    

    
        
  
  })
  it.only('Activating the zoom icon', function(){
  
    cy.visit('https://dev02.speechpundit.com/#/user/groups')
          
      cy.contains('Create New Group').click()
      
        cy.contains('Group Name').type("new group")
        cy.get('#level').select('Beginner')
      //  cy.contains('Start Time').clear()
    //  cy.get('.p-calendar > .ng-tns-c65-5').click().clear().type("11:00 AM")
     cy.get('.p-calendar > .ng-tns-c65-6').click({force: true}) .clear().type("11:30 AM")
     cy.get('.p-calendar > .ng-tns-c65-5').click().clear().type("11:00 AM")
     cy.get('.col-md-8 > :nth-child(1) > .col-12 > :nth-child(2)').click()
    
    cy.get('.col-md-8 > :nth-child(1) > .col-12 > :nth-child(3)').click()
    
     cy.contains('Start Date').click()
     cy.get('.p-datepicker-today > .ng-tns-c65-7').click()
    
      cy.contains('End Date').click()
      // cy.get('.p-datepicker-today > .ng-tns-c65-7').click()
      cy.get(':nth-child(5) > :nth-child(3) > .ng-tns-c65-8').click()
   
    cy.get('.btn-primary > .ng-star-inserted').click()
    
    
        
  
  })
})