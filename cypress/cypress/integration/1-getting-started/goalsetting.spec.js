describe('goal setting',() => {

    

    it.only('Goal setting', function() {
      cy.visit("https://dev02.speechpundit.com/#/user/goalsetting")
      // cy.contains("Enabled").click()
      cy.get(':nth-child(1) > .col-12 > h4 > :nth-child(1) > .ng-untouched > .p-inputswitch > .p-inputswitch-slider').click()
      // cy.get('.ng-untouched > .p-inputswitch > .p-inputswitch-slider').click()
      cy.get(':nth-child(2) > .mb-2 > h4 > :nth-child(1) > .ng-valid > .p-inputswitch > .p-inputswitch-slider').click()
     })


})