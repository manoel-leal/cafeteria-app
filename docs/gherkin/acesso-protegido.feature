Funcionalidade: Proteção de rotas

  Como visitante
  Quero ser redirecionado para login ao tentar acessar páginas restritas

  Cenário: Tentar acessar página sem token
    Dado que não estou autenticado
    Quando acesso diretamente a URL "/"
    Então devo ser redirecionado para "/login"
    E devo visualizar o formulário de login

  Cenário: Tentar acessar rota protegida após expiração do token
    Dado que estou autenticado
    E o token expirou
    Quando tento acessar "/orders"
    Então devo ser redirecionado automaticamente para "/login"

