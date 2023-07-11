describe('Interaction Page Tests', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/')
    })
  
    it('should display "TOOLS QA" page', () => {
      cy.contains('TOOLS QA').should('be.visible')
    })
  
    it('should navigate to Interaction Page', () => {
      cy.contains('Interactions').click()
      cy.contains('Interaction Page').should('be.visible')
    })
  
    it('should verify sidebar tabs', () => {
      const sidebarTabs = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application']
      cy.get('.sidebar-wrapper .menu-list').should('contain', sidebarTabs)
    })
  
    it('should navigate to Resizable Tab', () => {
      cy.contains('Interactions').click()
      cy.contains('Resizable').click()
      cy.contains('Resizable').should('be.visible')
    })
  
    it('should verify current height and width of Box 1', () => {
      cy.get('.react-resizable-box').should('have.css', 'height', '200px')
      cy.get('.react-resizable-box').should('have.css', 'width', '200px')
    })
  
    it('should resize Box 1', () => {
      cy.get('.react-resizable-box').trigger('mousedown', 'bottom-right')
      cy.get('.react-resizable-box')
        .trigger('mousemove', { clientX: 400, clientY: 400 })
        .trigger('mouseup')
  
      cy.get('.react-resizable-box').should('have.css', 'min-height', '150px')
      cy.get('.react-resizable-box').should('have.css', 'min-width', '150px')
      cy.get('.react-resizable-box').should('have.css', 'max-width', '500px')
      cy.get('.react-resizable-box').should('have.css', 'max-height', '300px')
    })
  
    it('should verify Box 2 is resizable', () => {
      cy.get('#resizableBoxWithRestriction').should('have.class', 'react-resizable')
    })
  })
  