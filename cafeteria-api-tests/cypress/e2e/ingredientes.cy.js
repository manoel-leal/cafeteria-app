describe('🧂 Listagem de ingredientes', () => {
  let token;

  before(() => {
    cy.loginAsAdmin().then((t) => {
      token = t;
    });
  });

  it('deve listar ingredientes base', () => {
    cy.request({
      method: 'GET',
      url: '/ingredients/base',
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
    });
  });

  it('deve listar ingredientes extras', () => {
    cy.request({
      method: 'GET',
      url: '/ingredients/extras',
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.be.an('array');
    });
  });

  describe('🛠️ Ativar/desativar ingredientes', () => {
  let token;

  before(() => {
    cy.loginAsAdmin().then((t) => {
      token = t;
    });
  });

  it('deve alternar disponibilidade de ingrediente base', () => {
    cy.request({
      method: 'PATCH',
      url: '/ingredients/base/3/toggle',
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 204]);
    });
  });

  it('deve alternar disponibilidade de extra', () => {
    cy.request({
      method: 'PATCH',
      url: '/ingredients/extra/5/toggle',
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      expect(res.status).to.be.oneOf([200, 204]);
    });
  });

  it('deve falhar se id do ingrediente for inválido', () => {
    cy.request({
      method: 'PATCH',
      url: '/ingredients/base/9999/toggle',
      headers: { Authorization: `Bearer ${token}` },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(404);
    });
  });
});

});