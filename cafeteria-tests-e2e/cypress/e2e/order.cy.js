import LoginPage from '../support/pageObjects/LoginPage';
import OrderPage from '../support/pageObjects/OrderPage';

describe('☕ Pedido', () => {
  beforeEach(() => {
    cy.visit('/login');
    LoginPage.fillUsername('admin');
    LoginPage.fillPassword('admin');
    LoginPage.submit();
    cy.url().should('include', '/');
  });

  it('deve criar um pedido com 1 base e 2 extras - Café personalizado', () => {
    OrderPage.selectBaseIngredient(' Espresso');
    OrderPage.selectExtraIngredient('Canela');
    OrderPage.submitOrder();
    OrderPage.assertOrderSuccess();
    OrderPage.assertCoffeeType('Café Personalizado')
  });

    it('deve criar um pedido - Café Classico - Latte', () => {
    OrderPage.selectBaseIngredient(' Espresso');
    OrderPage.selectBaseIngredient('Leite');
    OrderPage.submitOrder();
    OrderPage.assertOrderSuccess();
    OrderPage.assertCoffeeType('Latte')
  });

    it('deve criar um pedido - Café Classico - Macchiato', () => {
    OrderPage.selectBaseIngredient(' Espresso');
    OrderPage.selectBaseIngredient('Leite');
    OrderPage.selectExtraIngredient('Espuma');
    OrderPage.submitOrder();
    OrderPage.assertOrderSuccess();
    OrderPage.assertCoffeeType('Macchiato')
  });

  it('deve exibir erro ao submeter pedido sem base', () => {
    OrderPage.selectExtraIngredient('Canela');
    OrderPage.submitOrder();
    OrderPage.assertOrderError('Selecione pelo menos um ingrediente base');
  });

    it('deve voltar para tela de pedidos', () => {
    OrderPage.selectBaseIngredient(' Espresso');
    OrderPage.selectExtraIngredient('Canela');
    OrderPage.submitOrder();
    OrderPage.returnToBackPage();
    OrderPage.assertOrderPage();
  });
});