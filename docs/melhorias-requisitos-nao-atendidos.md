# Melhorias e pontos não atendidos:

## Requisitos não atendidos:

1- RQNF12 - Diferencial, utilizando a ferramenta SonarQube, forneça um relatório no “readme” do projeto, apontando os problemas encontrados, e cite pontos prioritários de ajustes a curto prazo que tragam maior benefício com o menor risco possível 

- Justificativa: Como é um item diferencial, não foi priorizado devido a falta de tempo habil

2 - RN-G03.2: (Diferencial) Deve haver uma opção para "Limpar Seleção" ou "Começar de Novo".

- Justificativa: Como é um item diferencial, não foi priorizado devido a falta de tempo habil

3 - RN005.4: (Opcional) O resumo deve exibir o preço total do café, calculado com base nos custos dos ingredientes base e adicionais.

- Justificativa: Como é um item diferencial, não foi priorizado devido a falta de tempo habil

## Melhorias:

### Back-end:

1- **Chamada direto no banco de dados**: Funções Patch para ativar e desativar ingredientes usa comandos sql diretamente, sem usar comandos via model e Sequelize, dessa forma, divergindo do padrão das demais chamadas da aplicação.

- Justificativa: Não encontrei uma solução para resolver esse problema.

2- **Separação de responsabilidades**: extrair a lógica de negócio dos controllers para arquivos de `services/`, deixando os controllers focados apenas na entrada e saída de dados.

3- **Tratamento global de erros**: implementar um middleware de erro (ex: `errorHandler`) para capturar exceções de forma centralizada e evitar repetição de `try/catch`.

4- **Validações mais robustas**: usar bibliotecas como `Joi` ou `Zod` para validar inputs de forma declarativa e consistente.

5- **Testes com seeders reais**: adicionar scripts que insiram dados falsos temporários no banco durante a fase de testes.

6- **Padronização de respostas da API**: criar uma estrutura de resposta única, com campos como `success`, `data` e `error`, para facilitar o consumo no front-end.

7- **Autenticação dinâmica**: substituir as credenciais fixas (`admin/admin`) por um controle de usuários persistente com roles.

8- **Cadastro e gerenciamento de múltiplos usuários**: Atualmente, o sistema possui apenas um usuário fixo (admin). A criação de novos usuários e controle de perfis não foi implementada por falta de tempo, mas a estrutura está preparada para expansão.

- Justficativa (itens 2 a 8): Falta de tempo habil para implementar essa melhorias.

### Front-end:

1 - **Alinhamento**: Tela de pedido esta desalinhada.

2 - **Ajustes nos componentes da tela**: Melhorar a aparencia dos componentes para que a tela fique mais agradavel para o usuário final.

3 - **Tela para admin**: Tela para acesso admin para habilitar e desabilitar ingredientes (a api para essa funcionalidade já esta pronta)

4 - **Tela para listagem de pedidos**: Tela que lista todos os pedidos feitos (a api para essa funcionalidade já esta pronta)

- Justificativa: Falta de tempo habil

### Testes automatizados - API:

1- **Schema Validation**: Incluir validação de contrato para o response das apis, dessa forma, constatando todos os atributos e seus respetivos tipos estão conforme o esperado.

2- **Serialização e deserialização de objetos passados como body**: Atualmente esta sendo passado o body no formato json para fazer a requisição, uma melhoria e fazer uma estrutura onde se passa o objeto, dessa forma se tem mais reuso de código, alem disso facilita a manipulação de dados desse objeto.

3- **Arquivo que possui urls e rotas**: Criar um arquivo para armazenar como constante as urls e os nomes dos recursos, dessa forma, facilitando a manutenção e evitando duplicidade de código.

4- **Validação de respostas**: Em alguns casos de testes como o de ativação/ destavação de ingrediente, onde é um patch que alterna de true para false ou vice versa o valor da coluna isAvailable, atualmente não esta sendo validada a resposta porque necessita de uma pré-condição para saber o valor atual gravado na coluna isAvailable para que no momento do assert se saiba o resultado esperado.

- Justificativa: Falta de tempo hábil, outros itens foram priorizados.

### Testes automatizados e2e:

1- **Login background**: Implementar o login via set do token no localstorage para que a aplicação ja inicie logada, dessa forma, economizando tempo de cada caso de teste ja que a etapa do preenchimento de tela de login não vai ser realizada.

- Justificativa: Item não priorizado, falta de tempo habil

2- **Casos de teste de Logout**: Por algum motivo, quando a aplicação roda via cypress, o botão logout não foi apresentado, dessa forma, não foi possivel criar os casos de teste desse cenário.

- Justificativa: Ainda não identifiquei a solução desse problema.
