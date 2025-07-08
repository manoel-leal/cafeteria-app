const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const db = require('../database/models');


// Token mockado manualmente
const token = jwt.sign({ username: 'admin' }, process.env.JWT_SECRET || 'cafeteria-secreta');

describe('☕ OrderController', () => {
  it('deve rejeitar criação de pedido sem token', async () => {
    const res = await request(app)
      .post('/orders')
      .send({ baseIngredients: [1] });

    expect(res.statusCode).toBe(401);
    expect(res.body.error).toMatch(/token/i);
  });

  it('deve rejeitar pedido sem ingredientes base', async () => {
    const res = await request(app)
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({ baseIngredients: [] });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/ingrediente base/i);
  });

  it('deve rejeitar mais de 2 extras', async () => {
    const res = await request(app)
      .post('/orders')
      .set('Authorization', `Bearer ${token}`)
      .send({ baseIngredients: [1], extras: [2, 3, 4] });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/máximo/i);
  });

  afterEach(async () => {
  await db.Order.destroy({ where: {}, force: true, cascade: true });

    });

});