describe('Student feedback', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('studentfeedback').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Coach giving suggestions in student feedback ', function () {
        cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email


      
        cy.get('#email').type(this.user.Email)
        cy.get('#password').type(this.user.Password)
        cy.get('form').submit()
        cy.contains('Student Activity').click()
        cy.get(':nth-child(3) > .text-center > .fas').click() //feedback
        cy.get('.pt-1 > .btn').click()
        cy.get('.pt-1 > .btn').click()
        

        // cy.get('[for="btnradio4"] > .fas').click() //upper arrow
        // cy.get('.form-select').
        cy.get('[ptooltip="Save"]').click()
        cy.contains('Student Activity').click()
      // this.user exists
    })
    it('Feedback refelcted in students account ', function () {
        cy.visit("https://dev02.speechpundit.com/#/signin")
        cy.get('#email').type(this.user.Email1)
        cy.get('#password').type(this.user.Password)
        cy.get('form').submit()
        cy.contains('Activity').click()
        cy.get(':nth-child(1) > .justify-content-between > .pt-3 > .fa-comment-dots').click()
    })

    it('feeback option color changes after giving the feedback', function () {
        cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email


      
        cy.get('#email').type(this.user.Email)
        cy.get('#password').type(this.user.Password)
        cy.get('form').submit()
        cy.contains('Student Activity').click()
        cy.get(':nth-child(3) > .text-center > .fas').click() //feedback
        cy.get('.pt-1 > .btn').click()
        cy.get('.pt-1 > .btn').click()
        

        // cy.get('[for="btnradio4"] > .fas').click() //upper arrow
        // cy.get('.form-select').
        cy.get('[ptooltip="Save"]').click()
        cy.contains('Student Activity').click()
      // this.user exists
    })
    it.only("Viewing analytics of a student speech" , function(){
        cy.visit("https://dev02.speechpundit.com")
        cy.contains('Sign in').click()
        cy.get('#email').type("sameera+779@applines.com")
          cy.get('#password').type('root12345')
          cy.get('form').submit()
          cy.visit('https://dev02.speechpundit.com/#/user/groups')
          cy.visit('https://dev02.speechpundit.com/#/user/groups/neww22')
          cy.contains('Analysis').click()
    })

})