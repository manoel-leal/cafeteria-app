describe('☕ Criar Pedido', () => {
    let token;

    before(() => {
        cy.loginAsAdmin().then((t) => {
            token = t;
        });
    });


    it('deve criar um novo pedido com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/orders',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: {
                baseIngredients: [1, 2],
                extras: [1, 3]
            }
        }).then((res) => {
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property('pedidoId');
        });
    });

    it('não deve permitir pedido sem ingredientes base', () => {
        cy.request({
            method: 'POST',
            url: '/orders',
            headers: { Authorization: `Bearer ${token}` },
            body: {
                baseIngredients: [],
                extras: [1]
            },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.error).to.contain('Selecione pelo menos 1 ingrediente base.');
        });
    });

    it('não deve permitir mais de 2 extras', () => {
        cy.request({
            method: 'POST',
            url: '/orders',
            headers: { Authorization: `Bearer ${token}` },
            body: {
                baseIngredients: [1],
                extras: [2, 3, 4]
            },
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.error).to.contain('Máximo de 2 ingredientes extras permitidos.');
        });
    });

    it('deve falhar ao enviar corpo vazio', () => {
        cy.request({
            method: 'POST',
            url: '/orders',
            headers: { Authorization: `Bearer ${token}` },
            body: {},
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).to.eq(400);
            expect(res.body.error).to.contain('Selecione pelo menos 1 ingrediente base.');
        });
    });

    it('deve rejeitar criação de pedido sem autenticação', () => {
    cy.request({
      method: 'POST',
      url: '/orders',
      body: {
        baseIngredients: [1],
        extras: [2]
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body.error).to.contain('Token não fornecido.');
    });
  });

  
});