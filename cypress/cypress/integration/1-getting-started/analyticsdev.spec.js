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
    it('Verifies analytics of Activity page', function () {
      // this.user exists
      cy.visit("https://dev02.speechpundit.com/") //problem with email
      cy.contains('Sign in').click()


      // cy.contains('Email').type(this.data.Email)
      // cy.contains('Password').type(this.data.Password)
      cy.get('#email').type(this.user.Email1)
      cy.get('#password').type(this.user.Password1)
      cy.get('form').submit()
    //   cy.contains('Activity').click()
    cy.get(':nth-child(5) > .nav-link').click()
      cy.get('[routerlink="/analytics"]').click()
         
    })

    it('Verifies analytics of this week', function () {
        // this.user exists
        cy.visit("https://dev02.speechpundit.com/") //problem with email
        cy.contains('Sign in').click()
  
  
        // cy.contains('Email').type(this.data.Email)
        // cy.contains('Password').type(this.data.Password)
        cy.get('#email').type(this.user.Email1)
        cy.get('#password').type(this.user.Password1)
        cy.get('form').submit()
      //   cy.contains('Activity').click()
      cy.get(':nth-child(5) > .nav-link').click()
        cy.get('[routerlink="/analytics"]').click()
        // cy.get('.col-2 > .form-select').click()
      })

      it.only('Verifies analytics of this last week', function () {
        // this.user exists
        cy.visit("https://dev02.speechpundit.com/") //problem with email
        cy.contains('Sign in').click()
  
  
        // cy.contains('Email').type(this.data.Email)
        // cy.contains('Password').type(this.data.Password)
        cy.get('#email').type(this.user.Email1)
        cy.get('#password').type(this.user.Password1)
        cy.get('form').submit()
      //   cy.contains('Activity').click()
      cy.get(':nth-child(5) > .nav-link').click()
        cy.get('[routerlink="/analytics"]').click()
        // cy.contains('This Week').click()
        // cy.get('option[value = "Last Week"]').click({force: true})
        //  cy.contains('This Week').click({force: true}).select('[value="Last Week"]').click()
        // cy.go('back')
        // cy.get('.col-2 > .form-select').click({ force: true }).select('Last Week')
        // cy.get('[value="Last Week"]').check({ force: true })  
        // cy.get('.dropdown-menu').click({ multiple: true })
        // cy.get('.col-2 > .form-select').filter('contains("Last Week")')
        // cy.get('.col-2 > .form-select').find("Last Week")
        cy.get('.col-2 > .form-select').click({force: true}).invoke("Last Week")

// 

      })
     
     
     
      it('Verifies analytics of duration(Speed)', function () {
        // this.user exists
        cy.visit("https://dev02.speechpundit.com/") //problem with email
        cy.contains('Sign in').click()
  
  
        // cy.contains('Email').type(this.data.Email)
        // cy.contains('Password').type(this.data.Password)
        cy.get('#email').type(this.user.Email1)
        cy.get('#password').type(this.user.Password1)
        cy.get('form').submit()
      //   cy.contains('Activity').click()
      cy.get(':nth-child(5) > .nav-link').click()
        cy.get('[routerlink="/analytics"]').click()
        cy.get('.col-4 > .form-select').select('Speed')
      })
      
      
      
      it('Verifies analytics of duration(Volume)', function () {
        // this.user exists
        cy.visit("https://dev02.speechpundit.com/") //problem with email
        cy.contains('Sign in').click()
  
  
        // cy.contains('Email').type(this.data.Email)
        // cy.contains('Password').type(this.data.Password)
        cy.get('#email').type(this.user.Email1)
        cy.get('#password').type(this.user.Password1)
        cy.get('form').submit()
      //   cy.contains('Activity').click()
      cy.get(':nth-child(5) > .nav-link').click()
        cy.get('[routerlink="/analytics"]').click()
        cy.get('.col-4 > .form-select').select('Volume')
      })
      
      
      
      it('Verifies analytics of duration(Qualtity)', function () {
        // this.user exists
        cy.visit("https://dev02.speechpundit.com/") //problem with email
        cy.contains('Sign in').click()
  
  
        // cy.contains('Email').type(this.data.Email)
        // cy.contains('Password').type(this.data.Password)
        cy.get('#email').type(this.user.Email1)
        cy.get('#password').type(this.user.Password1)
        cy.get('form').submit()
      //   cy.contains('Activity').click()
      cy.get(':nth-child(5) > .nav-link').click()
        cy.get('[routerlink="/analytics"]').click()
        cy.get('.col-4 > .form-select').select('Quality')
      })
      
      
      
      it('Verifies analytics of duration(Paralingual)', function () {
        // this.user exists
        cy.visit("https://dev02.speechpundit.com/") //problem with email
        cy.contains('Sign in').click()
  
  
        // cy.contains('Email').type(this.data.Email)
        // cy.contains('Password').type(this.data.Password)
        cy.get('#email').type(this.user.Email1)
        cy.get('#password').type(this.user.Password1)
        cy.get('form').submit()
      //   cy.contains('Activity').click()
      cy.get(':nth-child(5) > .nav-link').click()
        cy.get('[routerlink="/analytics"]').click()
        cy.get('.col-4 > .form-select').select('Paralingual')
      })
      
      
      
      
      it('Verifies analytics of duration(Inflection)', function () {
        // this.user exists
        cy.visit("https://dev02.speechpundit.com/") //problem with email
        cy.contains('Sign in').click()
  
  
        // cy.contains('Email').type(this.data.Email)
        // cy.contains('Password').type(this.data.Password)
        cy.get('#email').type(this.user.Email1)
        cy.get('#password').type(this.user.Password1)
        cy.get('form').submit()
      //   cy.contains('Activity').click()
      cy.get(':nth-child(5) > .nav-link').click()
        cy.get('[routerlink="/analytics"]').click()
        cy.get('.col-4 > .form-select').select('Inflection')
      })
})