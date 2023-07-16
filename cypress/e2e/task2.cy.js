Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Interaction Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/');})

  it('main page verification along with interaction page verification', () => {
    cy.get('#fixedban').should('be.visible');
    cy.contains('Interactions').click();
    cy.contains('Elements').should('contain', 'Elements');
    cy.contains('Forms').should('contain', 'Forms');
    cy.contains('Alerts, Frame & Windows').should('contain', 'Alerts, Frame & Windows');
    cy.contains('Widgets').should('contain', 'Widgets');
    cy.contains('Interactions').should('contain', 'Interactions');
    cy.contains('Book Store Application').should('contain', 'Book Store Application');
    cy.contains('Resizable').click();
    cy.get('[id="item-2"]').should('be.visible');
    cy.get('[class="constraint-area"]').should('be.visible');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'height', '200px');
    cy.get('#resizableBoxWithRestriction').should('have.css', 'width', '200px');
    //cy.contains('Resizable').click();
    cy.get('#resizableBoxWithRestriction').trigger('mousedown', { which: 1 });
    cy.get('#resizableBoxWithRestriction').trigger('mousemove', { clientX: 400, clientY: 400 });
    cy.get('#resizableBoxWithRestriction').trigger('mouseup');
    cy.get('#resizableBoxWithRestriction .react-resizable-handle').trigger('mousedown', { which: 1 });
    cy.get('#resizableBoxWithRestriction .react-resizable-handle').trigger('mousemove', { clientX: 150, clientY: 150 });
    cy.get('#resizableBoxWithRestriction .react-resizable-handle').trigger('mouseup');
    cy.get('[class="constraint-area"]').should('have.css', 'width', '500px');
    cy.get('[class="constraint-area"]').should('have.css', 'height', '300px');
    cy.get('[class="resizable-nolimit mt-4"]').click();
    cy.get('[class="resizable-nolimit mt-4"] .react-resizable-handle').should('be.visible');
  });
  it('Checking if resizable box goes below 150 x 150 or not (This test should give error)', () => {
    cy.contains('Interactions').click();
    cy.contains('Resizable').click();
    cy.get('[class="constraint-area"]').should('have.css', 'width', '149px');
    cy.get('[class="constraint-area"]').should('have.css', 'height', '149px');
  });
 });
  