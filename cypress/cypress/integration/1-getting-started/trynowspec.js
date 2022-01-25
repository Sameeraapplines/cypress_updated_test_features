describe('Try now', () => {
    it('Video recording in try  now', function(){
        cy.visit("https://dev02.speechpundit.com/#/home")
        cy.contains("Try Now").click()
    })
})