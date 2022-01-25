///<reference types= "cypress"/>
describe("Content" ,() => {
  it("Checking the content present in student activity" , function(){
      cy.visit('https://dev02.speechpundit.com/#/user/groups')
      cy.visit('https://dev02.speechpundit.com/#/user/groups/123')
      cy.contains('Classwork').click()
      cy.contains('Analysis').click()


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



    it('Adding an existing student using their Email', function(){
        
        cy.visit('https://dev02.speechpundit.com/#/user/groups')
         cy.visit('https://dev02.speechpundit.com/#/user/groups/123')
        
        // cy.contains('Test').click()
        
        // cy.get('.text-capitalize').click({ multiple: true })
        // cy.get(':nth-child(1) > .mb-4').click()
        cy.contains('Add Existing Student').click()                        
        
        cy.get('#email').type('divya+1@applines.com')
        cy.contains('Search').click()
       
        cy.get('tr.ng-star-inserted > :nth-child(3) > .btn').click()
        cy.get('.btn-light').click()
        
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



    it('Adding an existing student results in error', function(){
      
        cy.visit('https://dev02.speechpundit.com/#/user/groups')
        cy.visit('https://dev02.speechpundit.com/#/user/groups/123')
        
        
        
        
        // cy.get('.text-capitalize').click({ multiple: true })
        // cy.get(':nth-child(1) > .mb-4').click()
        cy.contains('Add Existing Student').click()                        
        
        cy.get('#email').type('divya+1@applines.com')
        cy.contains('Search').click()
       
    })
})


describe("deleting a student" ,() => {
    it("deleting a student from  the list" , function(){
        cy.visit('https://dev02.speechpundit.com/#/user/groups')
        cy.visit('https://dev02.speechpundit.com/#/user/groups/123')
        cy.get('.fa fa-trash').click()
        // cy.get('.text-capitalize').click()


    })



})

describe("Adding a student" ,() => {
    it("Adding New student" , function(){
        cy.visit('https://dev02.speechpundit.com/#/user/groups')
        cy.visit('https://dev02.speechpundit.com/#/user/groups/123')
        // cy.get('.text-capitalize').click()
        cy.contains('Add New Student').click()
        cy.contains('First Name').type("ann")
        cy.contains('Last Name').type("albert")
        cy.get('#email').type("n150547@rguktn.ac.in")
        cy.get('.p-inputnumber-input').type("22")
        cy.get('[value="Male"]').check({ force: true }) 
        // cy.contains('Add').click()

        cy.get('.p-dialog-footer > .btn-primary').click()
        




    })



})

describe("Adding a student" ,() => {
  it("Adding an existing student results in error" , function(){
      cy.visit('https://dev02.speechpundit.com/#/user/groups')
      cy.visit('https://dev02.speechpundit.com/#/user/groups/123')
      // cy.get('.text-capitalize').click()
      cy.contains('Add New Student').click()
      cy.contains('First Name').type("ann")
      cy.contains('Last Name').type("albert")
      cy.get('#email').type("n150411@rguktn.ac.in")
      cy.get('.p-inputnumber-input').type("22")
      cy.get('[value="Male"]').check({ force: true }) 
      // cy.contains('Add').click()

      cy.get('.p-dialog-footer > .btn-primary').click()
      




  })



})
describe("Adding a new student" ,() => {
  it("Do not accept empty mandatory fields" , function(){
      cy.visit('https://dev02.speechpundit.com/#/user/groups')
      cy.visit('https://dev02.speechpundit.com/#/user/groups/123')
      // cy.get('.text-capitalize').click()
      cy.contains('Add New Student').click()
      cy.contains('First Name').type("ann")
      cy.contains('Last Name').type("albert")
      // cy.get('#email').type("n150411@rguktn.ac.in")
      cy.get('.p-inputnumber-input').type("22")
      cy.get('[value="Male"]').check({ force: true }) 
      // cy.contains('Add').click()

      cy.get('.p-dialog-footer > .btn-primary').click()
      




  })



})
describe("Assigning task" ,() => {
  it.only("Allocating tasks to students in class" , function(){
    cy.visit("https://dev02.speechpundit.com/#/home")
    cy.contains('sign in').click()
    cy.get('#email').type("sameera+779@applines.com")
      cy.get('#password').type('root12345')
      cy.get('form').submit()

      cy.visit('https://dev02.speechpundit.com/#/user/groups')
      cy.visit('https://dev02.speechpundit.com/#/user/groups/neww22')
      cy.contains('Classwork').click()
      cy.contains('New Assignment').click()
      // cy.get('.form-select').click()
      // cy.contains('Select Speech').select('Global Warming')
      // cy.get('.form-select').select('Global Warming')
      // cy.contains('Select Speech').click()
      // cy.contains("Assigned Date").click()
      
      cy.get('#assignedDate').click()
      cy.get('.p-datepicker-today > .ng-tns-c65-9').click()
      cy.get('#dueDate').click()
      cy.get(':nth-child(4) > :nth-child(5) > .ng-tns-c65-10').click()
      // cy.get('#dueDate').click()
      cy.get('.p-multiselect-label').type("divya")
     




  })



})