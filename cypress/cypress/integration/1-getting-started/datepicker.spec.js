///references types  
 describe('datepicker', function(){
     before(function(){
         cy.fixture('datepicker').then(function(data){
             this.data =data;
         })
     })

    it('navigate to url and open datepicker',function() {
        cy.visit(this.data.url)
        cy.contains('Create New Group').click()
        

    })
 })