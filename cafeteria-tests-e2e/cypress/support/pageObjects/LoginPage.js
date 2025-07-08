class LoginPage {
  visit() {
    cy.visit('/login');
  }

  fillUsername(username) {
    cy.get('[placeholder="Usuário"]').type(username);
  }

  fillPassword(password) {
    cy.get('[type="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  assertLoginSuccess() {
    cy.url().should('eq', 'http://localhost:8080/');
    cy.contains('h1', 'Monte Seu Café').should('be.visible');
  }

  assertLoginError() {
    cy.contains(/credenciais inválidas/i).should('be.visible');
  }
}

export default new LoginPage();