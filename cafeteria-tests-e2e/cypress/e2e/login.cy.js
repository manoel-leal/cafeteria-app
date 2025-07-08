import LoginPage from '../support/pageObjects/LoginPage';

describe('🔐 Login', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('deve logar com credenciais válidas', () => {
    LoginPage.fillUsername('admin');
    LoginPage.fillPassword('admin');
    LoginPage.submit();
    LoginPage.assertLoginSuccess();
  });

  it('deve exibir erro com senha inválida', () => {
    LoginPage.fillUsername('admin');
    LoginPage.fillPassword('errado123');
    LoginPage.submit();
    LoginPage.assertLoginError();
  });
});