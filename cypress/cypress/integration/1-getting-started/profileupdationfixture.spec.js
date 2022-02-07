///<reference types= "cypress"/>


describe('profile updation', () => {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('profile').then((user) => {
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
      cy.fixture('profile').then((user) => {
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

describe('Changing profile picture', ()=>{

  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('profile').then((user) => {
      // "this" is still the test context object
      this.user = user
    })
  })
  
  
  it('Recording', function(){
  cy.visit("https://dev02.speechpundit.com/#/signin")
  cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('.btn').click()
      cy.contains('Record').click()  
      cy.contains('Click here to practice your speech').click() 

  // cy.visit(this.user.url)
  // cy.contains('Choose').click()
  // cy.get('.p-button-label').click()
  // cy.get('.changeProfilePic').click()


  })
})

describe('profile photo',()=>{
 
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('profile').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
    it.only('changing the profile picture',function(){
    cy.visit("https://dev02.speechpundit.com")
    cy.contains("Sign in").click()
    cy.get('#email').type(this.user.Email1)
      cy.get('#password').type(this.user.Password1)
      cy.get('.btn').click()
      // cy.get('#menu-2\ ').click()
      // cy.visit("https://dev02.speechpundit.com/#/user/profile")
      cy.get('#menu-2\  > img').invoke('show').click()
    


  })



})