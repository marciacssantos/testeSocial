Cypress.Commands.add('login', () => {
  cy.visit('/')
  cy.contains('span', 'Entrar com Google').click();

  cy.origin('https://accounts.google.com', () => {
    cy.get('input[type="email"]').type(Cypress.env('USERNAME'));
    cy.contains('button', 'Avançar').click();

    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('ResizeObserver loop limit exceeded');
      return false;
    });

    cy.get('input[type="password"]').type(Cypress.env('PASSWORD'));
    cy.contains('button', 'Avançar').click();
  });

});