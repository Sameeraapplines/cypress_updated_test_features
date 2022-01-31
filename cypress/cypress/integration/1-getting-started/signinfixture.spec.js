//<reference types= "cypress"/>
// import example  from  'cypress/fixtures/example.json'

///<reference types= "cypress"/>

describe('Successful login Test', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('signin').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('verifies login succeeds with valid credentials', function () {
      // this.user exists
      cy.visit("https://speechpundit.com/#/signin") //problem with email


      // cy.contains('Email').type(this.data.Email)
      // cy.contains('Password').type(this.data.Password)
      cy.get('#email').type(this.user.Email)
      cy.get('#password').type(this.user.Password)
      cy.get('form').submit()

    //   expect(this.user.Email).to.equal('sameera@applines.com')
    })
})


describe('Unsuccessful login Test', () => {
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('signin').then((user) => {
      // "this" is still the test context object
      this.user = user
    })
  })

  // the test callback is in "function () { ... }" form
  it('verifies login fails with invalid credentials', function () {
    // this.user exists
    cy.visit("https://speechpundit.com/#/signin") //problem with email


    // cy.contains('Email').type(this.data.Email)
    // cy.contains('Password').type(this.data.Password)
    cy.get('#email').type(this.user.Email)
    cy.get('#password').type(this.user.Password1)
    cy.get('form').submit()

  //   expect(this.user.Email).to.equal('sameera@applines.com')
  })
  it.only('verifies login fails with empty credentials', function () {
    // this.user exists
    cy.visit("https://speechpundit.com/#/signin") //problem with email


    
    cy.get('#email').type(this.user.Email)
    // cy.get('#password').type(this.user.Password1)
    cy.get('form').submit()
    // cy.get('.ng-invalid.ng-dirty').click()

  //   expect(this.user.Email).to.equal('sameera@applines.com')
  })
})

// describe('new',function(){
//     before(function(){
//         cy.fixture('example').then(function (data){
//             this.data =data;

//         })
//     })

    
//     it.only('verifies login succeeds with valid credentials', () => {
//         //-- ACTION --//
        
//         cy.visit("https://speechpundit.com/#/") //problem with email

//         console.log(this.data)

//         // cy.contains('Email').type(this.data.Email)
//         // cy.contains('Password').type(this.data.Password)
//         cy.get('#email').type(this.data.Email)
//         cy.get('#password').type(this.data.Password)
//         cy.get('form').submit()
//     })
// })











// // it('logs in using cy.request', () => {
// //     const email = Cypress.env('email')
// //     const password = Cypress.env('password')
  
// //     // it is ok for the username to be visible in the Command Log
// //     expect(email, 'email was set').to.be.a('string').and.not.be.empty
// //     // but the password value should not be shown
// //     if (typeof password !== 'string' || !password) {
// //       throw new Error('Missing password value, set using CYPRESS_password=...')
// //     }
  
// //     // cy.request({
// //     //   method: 'POST',
// //     //   url: '/login',
// //     //   form: true,
// //     //   body: {
// //     //     email,
// //     //     password
// //     //   }
// //     // })
// //     // cy.getCookie('connect.sid').should('exist')
  
// //     // now visit the profile page
// //     cy.visit('https://speechpundit.com/#/signin').contains('Email')
// //   })


// ///<reference types= "cypress"/>

// describe('new',function(){




//     before(function(){
//         cy.fixture('example.json').then(function (data){
//             this.data =data;
//         })
//     })

    
//     it.only('verifies login succeeds with valid credentials', () => {
//         //-- ACTION --//
        
//         cy.visit("https://speechpundit.com/#/")
//         cy.contains('Sign in').click()

//         cy.contains('Email').type(this.data.Email)   //path addedd, wrong path
//         cy.contains('Password').type(this.data.Password)
//         // cy.get('#email').type(this.data.Email)
//         // cy.get('#password').type(this.data.Password)
//         cy.get('form').submit()
//     })

// })

// ///<reference types= "cypress"/>
// describe('new',function(){
//     before(function(){
//         cy.fixture('example').then(function (dataJson){
//             this.dataJson =dataJson;
//         })
//     })

    
//     it('verifies login succeeds with valid credentials', () => {
//         //-- ACTION --//
        
//         cy.visit("https://speechpundit.com/#/")
//         cy.contains('Sign in').click()

//         // cy.contains('Email').type(this.data.Email)
//         // cy.contains('Password').type(this.data.Password)
//         cy.get('#email').type(this.dataJson.Email)  //problem with Email
//         cy.get('#password').type(this.dataJson.Password)
//         cy.get('form').submit()
//     })
// })
