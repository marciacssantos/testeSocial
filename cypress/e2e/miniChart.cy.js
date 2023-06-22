/// <reference types="cypress" />

describe('Testes do carrinho de compras', () => {

  before(() => {
    cy.login();
 
  })

  it('Deve adicionar um produto ao carrinho', () => {
    cy.contains('Article', 'Absorvente Malha Suave C/abas Modess 8 Un').click();
    cy.wait(5000);
    cy.contains('button', 'Comprar').click();
    cy.wait(5000);
  // });

  // Aumentar a quantidade do produto no carrinho
    cy.get('.vtex-product-list-0-x-quantitySelectorIncrease').click();
    cy.get('#product-list-quantity-stepper-311150').should('have.value', '2');
  

  // Diminuir a quantidade do produto no carrinho
    cy.get('.vtex-product-list-0-x-quantitySelectorDecrease').click();
    cy.get('#product-list-quantity-stepper-311150').should('have.value', '1');


  // Remover o produto do carrinho
    cy.get('#remove-button-311150').click();
    cy.get('.vtex-minicart-2-x-minicartEmptyStateContainer').contains('Ops, seu carrinho ainda está vazio!');
  });
})