///<reference types= "cypress"/>
describe('recording page', () => {
        it('Verifies availability and content of Recording page', () => {
            cy.visit("https://speechpundit.com/#/")
            cy.contains('Sign in').click()
    
            cy.contains('Email').type('sameera@applines.com')
            cy.contains('Password').type("root12345")
            cy.get('form').submit()
            cy.contains('Record').click()  
            cy.contains('Click here to practice your speech').click()  




        })
        it.only('Verifies the uploading of existing  video', () => {
            cy.visit("https://speechpundit.com/#/")
            cy.contains('Sign in').click()
    
            cy.contains('Email').type('sameera@applines.com')
            cy.contains('Password').type("root12345")
            cy.get('form').submit()
            cy.contains('Record').click()  
            // cy.contains('or Upload Video').click()
            cy.get('h3.ng-star-inserted').click()
            cy.get('.p-fileupload-choose').and('.p-fileupload-choose > .p-button-label').click()
            // cy.get('.p-fileupload-choose > .p-button-label').click()
             




        })
})