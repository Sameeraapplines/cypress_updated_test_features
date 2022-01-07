



///<reference types= "cypress"/>

describe('Lessonplan', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('lessonplan').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it('Lessons are added only if all the required fields are given', function () {
      // this.user exists
    //   cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email


    //   // cy.contains('Email').type(this.data.Email)
    //   // cy.contains('Password').type(this.data.Password)
    //   cy.get('#email').type(this.user.Email)
    //   cy.get('#password').type(this.user.Password)
    //   cy.get('form').submit()
    //   cy.get('#menu-2\ ').click()
    // cy.visit("https://dev02.speechpundit.com/#/user/lessonplan")
    cy.visit("https://dev02.speechpundit.com/#/user/lessonplan")
    cy.contains("Add Lesson Plan").click()
    // cy.contains('Speech Title').type(this.user.title)
    cy.get('#speechTitle').type(this.user.title)
    cy.get('.form-select').select("Beginner")
    cy.get('#speechTime').clear().type("5") 
    cy.get(':nth-child(4) > .ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').type("That so many of us are here today is a recognition that the threat from climate change is serious, it is urgent, and it is growing. Our generation's response to this challenge will be judged by history, for if we fail to meet it - boldly, swiftly, and together - we risk consigning future generations to an irreversible catastrophe.These are the words President Obama used to begin his global warming speech before the United Nations Summit in 2009.Search Google for global warming and you will get almost 65 million pages of results.The subject has certainly drawn a lot of attention. But just what is global warming? What is causing it? What effects does it have on the earth and its inhabitants? What are some possible solutions? These are the questions that I will be addressing in this short, informative speech today.")
    // cy.get('.mb-3.ng-untouched > .ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').type("Global warming occurs when greenhouse gases, such as carbon dioxide, nitrous oxide, and methane trap heat inside the earth's atmosphere.Think about what happens when you open your car door after the windows have been rolled up on a hot day. Heat from the sun enters the car, but the frame of the car prevents it from escaping.To a small extent, this is a representation of what happens during global warming. Burning fossil fuels like petroleum and deforestation both contribute to the problem.")
    // cy.get('.ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').type("There are ways we can combat the effects of global warming. The Clean Air Act of 1990 is a law in the United States that attempts to protect and improve the earth's air and atmosphere.Some of the components of this law include limiting harmful vehicle emissions and phasing out the use of chemicals that can damage the ozone layer.On a more personal level, we can work to prevent global warming by planting trees and by car-pooling.Climate change is seen as a serious threat that is receiving serious attention world-wide. Hopefully, this global warming speech has helped inform you of what causes it and the effects that it has on the earth. It's up to you to decide how you can help to do something about it.")
    cy.get('.p-dialog-footer > .btn-primary').click()



    
    //   expect(this.user.Email).to.equal('sameera@applines.com')
    }) 
})


describe('Lesson', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('lessonplan').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it.only('Adding lessons for students', function () {
      // this.user exists
    //   cy.visit("https://dev02.speechpundit.com/#/signin") //problem with email


    //   // cy.contains('Email').type(this.data.Email)
    //   // cy.contains('Password').type(this.data.Password)
    //   cy.get('#email').type(this.user.Email)
    //   cy.get('#password').type(this.user.Password)
    //   cy.get('form').submit()
    //   cy.get('#menu-2\ ').click()
    // cy.visit("https://dev02.speechpundit.com/#/user/lessonplan")
    cy.visit("https://dev02.speechpundit.com/#/user/lessonplan")
    cy.contains("Add Lesson Plan").click()
    // cy.contains('Speech Title').type(this.user.title)
    cy.get('#speechTitle').type(this.user.title)
    cy.get('.form-select').select("Beginner")
    cy.get('#speechTime').clear().type("5") 
     cy.get(':nth-child(4) > .ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').type("That so many of us are here today is a recognition that the threat from climate change is serious, it is urgent, and it is growing. Our generation's response to this challenge will be judged by history, for if we fail to meet it - boldly, swiftly, and together - we risk consigning future generations to an irreversible catastrophe.These are the words President Obama used to begin his global warming speech before the United Nations Summit in 2009.Search Google for global warming and you will get almost 65 million pages of results.The subject has certainly drawn a lot of attention. But just what is global warming? What is causing it? What effects does it have on the earth and its inhabitants? What are some possible solutions? These are the questions that I will be addressing in this short, informative speech today.")
    cy.get('.mb-3.ng-untouched > .ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').type("Global warming occurs when greenhouse gases, such as carbon dioxide, nitrous oxide, and methane trap heat inside the earth's atmosphere.Think about what happens when you open your car door after the windows have been rolled up on a hot day. Heat from the sun enters the car, but the frame of the car prevents it from escaping.To a small extent, this is a representation of what happens during global warming. Burning fossil fuels like petroleum and deforestation both contribute to the problem.")
    cy.get('.ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').type("There are ways we can combat the effects of global warming. The Clean Air Act of 1990 is a law in the United States that attempts to protect and improve the earth's air and atmosphere.Some of the components of this law include limiting harmful vehicle emissions and phasing out the use of chemicals that can damage the ozone layer.On a more personal level, we can work to prevent global warming by planting trees and by car-pooling.Climate change is seen as a serious threat that is receiving serious attention world-wide. Hopefully, this global warming speech has helped inform you of what causes it and the effects that it has on the earth. It's up to you to decide how you can help to do something about it.")
    cy.get('.p-dialog-footer > .btn-primary').click()



    
    //   expect(this.user.Email).to.equal('sameera@applines.com')
    }) 
})

describe('Lesson', () => {
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('lessonplan').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })
  
    // the test callback is in "function () { ... }" form
    it(' editing the  lesson plan for students', function () {
      
    cy.visit("https://dev02.speechpundit.com/#/user/lessonplan")
    // cy.contains("Add Lesson Plan").click()
    cy.get(':nth-child(3) > .text-justify > .fa-edit').click()
    // cy.contains('Speech Title').clear().type("edited")
    // cy.get('#speechTitle').type(this.user.title)
    cy.get('#speechTitle').clear().type("Edited")
    cy.get('#speechTime').clear().type("5")
    cy.get(':nth-child(4) > .ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').clear().type("edited one")
    cy.get('.mb-3.ng-untouched > .ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').clear().type("edited")
    cy.get('.ng-untouched > .p-editor-container > .p-editor-content > .ql-editor').clear().type("modified")
    cy.get('.p-dialog-footer > .btn-primary').click()
    })
})


describe('Lesson plan', ()=>{

  it('Deleting a lesson', function(){
    cy.visit("https://dev02.speechpundit.com/#/user/lessonplan")
    cy.get(':nth-child(2) > .text-justify > .fa-trash').click()
    // cy.contains('Yes').click()
    cy.get('.ng-trigger.ng-tns-c85-7 > .p-confirm-popup-footer > .p-confirm-popup-accept > .p-button-label').click()
  })
})
