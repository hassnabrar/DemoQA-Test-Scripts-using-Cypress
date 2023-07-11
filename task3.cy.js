describe('Book Store API - Intercept', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/');
      cy.get('input[class="card-up"]')
      //cy.contains('TOOLS QA').should('be.visible');
    });
  
    it('should display book details', () => {
      cy.contains('Book Store Application').click();
      cy.contains('Book Store Page').should('be.visible');
      cy.contains('Book Store Tab').click();
      cy.contains('Book Store').should('be.visible');
      cy.contains('Understanding ECMAScript 6').click();
  
      // Verify book details
      cy.contains('Title: Understanding ECMAScript 6').should('be.visible');
      cy.contains('Subtitle: The Definitive Guide for JavaScript Developers').should('be.visible');
      cy.contains('Author: Nicholas C. Zakas').should('be.visible');
      cy.contains('Publisher: No Starch Press').should('be.visible');
      cy.contains('Total Pages: 352').should('be.visible');
      cy.contains('ISBN: 978-1593277574').should('be.visible');
      cy.contains('Description: ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.').should('be.visible');
      cy.contains('Website: https://leanpub.com/understandinges6').should('be.visible');
    });
  });
  