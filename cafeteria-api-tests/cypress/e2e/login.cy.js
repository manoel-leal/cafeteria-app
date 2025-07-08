describe('🔐 Autenticação API', () => {
  it('deve retornar token válido com credenciais corretas', () => {
    cy.request('POST', 'http://localhost:3000/auth/login', {
      username: 'admin',
      password: 'admin'
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body.token).to.be.a('string');
      cy.wrap(res.body.token).as('authToken');
    });
  });
});