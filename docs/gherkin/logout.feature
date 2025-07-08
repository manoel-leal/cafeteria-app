Funcionalidade: Logout do sistema

  Como usuário logado
  Quero sair da aplicação com segurança
  Para encerrar minha sessão e proteger meus dados

  Cenário: Logout bem-sucedido
    Dado que estou logado
    Quando clico no botão "Sair"
    Então devo ser redirecionado para "/login"
    E o token de acesso não deve estar mais armazenado

  Cenário: Acesso após logout
    Dado que realizei o logout
    Quando tento acessar a página "/"
    Então devo ser redirecionado para "/login"
