Funcionalidade: Criação de pedidos

  Como usuário logado
  Quero montar um pedido de café personalizado
  Para receber a bebida conforme meu gosto

  Contexto:
    Dado que estou autenticado com usuário "admin"

  Cenário: Pedido com 1 base e 2 extras
    Dado que estou na página de pedidos
    Quando seleciono "Café expresso" como base
    E seleciono "Canela" e "Leite condensado" como extras
    E clico no botão "Confirmar pedido"
    Então devo ver a mensagem "Pedido criado com sucesso"

  Cenário: Pedido sem ingrediente base
    Dado que estou na página de pedidos
    Quando não seleciono nenhum ingrediente base
    E clico em "Confirmar pedido"
    Então devo visualizar a mensagem de erro "Selecione pelo menos um ingrediente base"

  Cenário: Pedido com mais de 2 extras
    Dado que estou na página de pedidos
    Quando seleciono "Café expresso" como base
    E seleciono 3 extras
    E clico em "Confirmar pedido"
    Então devo visualizar a mensagem "O limite é de até 2 ingredientes extras"

  Cenário: Pedido com café classico
    Dado que estou na página de pedidos
    Quando seleciono "Expresso" e "Leite" como base
    E clico no botão "Confirmar pedido"
    Então devo ver a mensagem "Pedido criado com sucesso"
    E apresentar o tipo de café "Latte"

  Cenário: Pedido com café personalizado
    Dado que estou na página de pedidos
    Quando seleciono "Café expresso" como base
    E seleciono "Espresso" e "canela" como extras
    E clico no botão "Confirmar pedido"
    Então devo ver a mensagem "Pedido criado com sucesso"
    E apresentar o tipo de café "Café Personalizado"

  Cenário: Voltar para a tela de pedidos
    Dado que estou na página de pedidos
    Quando seleciono "Café expresso" como base
    E seleciono "Espresso" e "canela" como extras
    E clico no botão "Confirmar pedido"
    Então devo ver a mensagem "Pedido criado com sucesso"
    Quando clico no botão "Fazer outro pedido"
    Então a tela "Monte seu café" deverá ser apresentada



