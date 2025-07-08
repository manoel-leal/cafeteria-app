class OrderPage {
  selectBaseIngredient(name) {
    cy.contains('label', name).find('input[type="checkbox"]').check();
  }

  selectExtraIngredient(name) {
      cy.contains('label', name).find('input[type="checkbox"]').check();
  }

  submitOrder() {
    cy.contains('button', 'Criar Pedido').click();
  }

  returnToBackPage(){
    cy.get('.btn-voltar').click();
  }

  assertOrderSuccess() {
    cy.contains(/pedido criado com sucesso/i).should('be.visible');
  }

    assertCoffeeType(cofeeType) {
    cy.contains('h2', cofeeType).should('be.visible');
  }

  assertOrderError(message) {
      cy.on('window:alert', (texto) => {
        expect(texto).should('be.visible');
    })

  }

  assertOrderPage(){
    cy.contains('h1', 'Monte Seu Café').should('be.visible');
  }
}

export default new OrderPage();