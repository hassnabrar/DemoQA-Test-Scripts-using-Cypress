Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe("Book Store API - Intercept", () => {
  it("should display book details for Understanding ECMAScript 6", () => {
    cy.visit("https://demoqa.com/");
    cy.get('#fixedban').should('be.visible');

    cy.contains("Book Store Application").click();
    cy.contains("Book Store").should("be.visible");

    cy.get('[class="btn btn-light active"]').click();
    cy.contains("Book Store").should("be.visible");

    cy.get('[class="mr-2"]').contains("Understanding ECMAScript 6").click();
    cy.get('[class="col-md-9 col-sm-12"]').should('contain', 'The Definitive Guide for JavaScript Developers');
  });
  it('should intercept the request and verify the response', () => {
    cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Book?ISBN=9781593277574').as('bookRequest');
    cy.visit("https://demoqa.com/books?book=9781593277574")
    // Visit the page or perform any actions that trigger the request

    // Wait for the intercepted request to complete
    cy.wait('@bookRequest').then((interception) => {
      // Access the intercepted response
      const response = interception.response.body;

      // Verify the response
      expect(response).to.deep.equal({
        "isbn": "9781593277574",
        "title": "Understanding ECMAScript 6",
        "subTitle": "The Definitive Guide for JavaScript Developers",
        "author": "Nicholas C. Zakas",
        "publish_date": "2016-09-03T00:00:00.000Z",
        "publisher": "No Starch Press",
        "pages": 352,
        "description": "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that E",
        "website": "https://leanpub.com/understandinges6/read"
      });
    });
  });
});

  