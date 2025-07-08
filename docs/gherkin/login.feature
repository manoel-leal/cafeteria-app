Funcionalidade: Login do usuário

  Como visitante
  Quero acessar a área de login
  Para obter um token de autenticação e navegar pela plataforma

  Cenário: Login com credenciais válidas
    Dado que estou na página de login
    Quando preencho o campo usuário com "admin"
    E preencho o campo senha com "admin"
    E clico no botão "Entrar"
    Então devo ser redirecionado para a página inicial
    E devo visualizar meu nome de usuário

  Cenário: Login com senha incorreta
    Dado que estou na página de login
    Quando preencho o usuário com "admin"
    E preencho a senha com "senhaErrada"
    E clico em "Entrar"
    Então devo ver a mensagem "Credenciais inválidas"

  Cenário: Campos vazios
    Dado que estou na página de login
    Quando clico no botão "Entrar" sem preencher os campos
    Então devo visualizar mensagens de erro de campo obrigatório

