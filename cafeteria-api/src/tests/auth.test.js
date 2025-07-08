const request = require('supertest');
const app = require('../app');

describe('🔐 AuthController', () => {
  it('deve retornar um token válido com credenciais corretas', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'admin', password: 'admin' });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('deve recusar login com credenciais inválidas', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ username: 'hacker', password: 'wrong' });

    expect(res.statusCode).toBe(401);
    expect(res.body.error).toMatch(/credenciais/i);
  });
});