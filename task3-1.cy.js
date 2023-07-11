describe('Book Store API - Intercept', () => {
    beforeEach(() => {
      cy.visit('https://demoqa.com/');
      cy.contains('TOOLS QA').should('be.visible');
      cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574', {
        statusCode: 200,
        body: {
          "isbn": "9781593277574",
          "title": "Understanding ECMAScript 6",
          "subTitle": "The Definitive Guide for JavaScript Developers",
          "author": "Nicholas C. Zakas",
          "publish_date": "2016-09-03T00:00:00.000Z",
          "publisher": "No Starch Press",
          "pages": 352,
          "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
          "website": "https://leanpub.com/understandinges6/read"
        }
      });
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