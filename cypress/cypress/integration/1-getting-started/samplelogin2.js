///<reference types= "cypress"/>
// describe('Successful login Test', () => {


//     before(function(){
//         cy.fixture('example').then(function(data){
//             this.data =data
//         })
//     })

    
//     it('verifies login succeeds with valid credentials', () => {
//         //-- ACTION --//
        
//         cy.visit("https://speechpundit.com/#/")
//         cy.contains('Sign in').click()

//         cy.contains('Email').type(this.data.Email)
//         cy.contains('Password').type(this.data.Password)
//         // cy.get('#email').type(this.data.Email)
//         // cy.get('#password').type(this.data.Password)
//         cy.get('form').submit()
//     })
// })


describe('Successful login Test', () => {
    it('verifies login succeeds with valid credentials', () => {
     const email = Cypress.env('email')
     const password1 = Cypress.env('password1')
//     console.log(email)
//     console.log(password)

//     // it is ok for the username to be visible in the Command Log
//     expect(email, 'email was set').to.be.a('string').and.not.be.empty
//     // but the password value should not be shown
//     if (typeof password !== 'string' || !password) {
//       throw new Error('Missing password value, set using CYPRESS_password=...')
//     }
  
    // cy.request({
    //   method: 'POST',
    //   url: '/login',
    //   form: true,
    //   body: {
    //     email,
    //     password
    //   }
    // })
    // cy.getCookie('connect.sid').should('exist')
  
    // now visit the profile page
    cy.visit('https://speechpundit.com/#/signin').contains('Email')
    cy.contains('Email').type(email)
        cy.contains('Password').type(password1)
        cy.get('form').submit()

  })
})

describe('Unsuccessful login Test', () => {
    it('verifies login fails with invalid credentials', () => {
        const email = Cypress.env('email')
         const password = Cypress.env('password')
        cy.visit('https://speechpundit.com/#/signin').contains('Email')
        cy.contains('Email').type(email)
        cy.contains('Password').type(password)
        cy.get('form').submit()


    })
})

// email --> original email
// email1 --> email used for creating a new account.
//password1 --> original pwd ,pwd --> duplicate password. 