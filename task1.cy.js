Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  describe('DemoQA Form Test', () => {
    it('fills out the form and closes the modal', () => {
      cy.visit('https://demoqa.com/')
      cy.contains('Forms').click()
      cy.contains('Practice Form').click()
  
      cy.get('#firstName').type('Cowlar')
      cy.get('#lastName').type('Developer')
      cy.get('#userEmail').type('qaengineer@cowlar.com')
      cy.get('[for="gender-radio-1"]').click()
      cy.get('#userNumber').type('0123456789')
      cy.get('#subjectsInput').type('Computer Science').type('{enter}')
      cy.get('[for="hobbies-checkbox-3"]').click()
      cy.get('#currentAddress').type('Address 1')
      //cy.get('#state').invoke('show').type('NCR')
      //cy.get('#state').type('NCR', {force: true})
      cy.contains('Last name')  
      .click({force: true})
      .type("Test LLC");  
      cy.get('#city').type('Delhi')
  
      cy.get('#submit').click()
  
      cy.get('.modal-content').within(() => {
        cy.contains('Cowlar')
        cy.contains('Developer')
        cy.contains('qaengineer@cowlar.com')
        cy.contains('Male')
        cy.contains('0123456789')
        cy.contains('Computer Science')
        cy.contains('Music')
        cy.contains('Address 1')
        cy.contains('NCR')
        cy.contains('Delhi')
  
        cy.get('.close').click()
      })
    })
  })

  