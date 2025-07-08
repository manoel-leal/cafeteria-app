# cafeteria-app
A complete cafeteria app (Back-end, Front-end, API automation Test project and E2E Automation Test projetct) using Javascript stack: Express, Vue and Cypress.

## 📌 Considerações finais sobre a entrega

App criado para a realização da prova de processo seletivo do SENAI-SC.

---

### ✅ Funcionalidades implementadas (back-end + front-end)

A seguir está o detalhamento das funcionalidades que foram efetivamente implementadas durante o desenvolvimento do sistema da Cafeteria CodeQual:

- 🔐 **Autenticação JWT** (back-end + front-end)
  - Fluxo de login com persistência de token em `localStorage`
  - Proteção de rotas no front-end via `router.beforeEach`
  - Middleware de validação de token na API

- 🧂 **Gerenciamento de ingredientes**
  - Listagem de ingredientes disponíveis (somente autenticado)
  - Ingredientes categorizados entre bases e extras

- ☕ **Criação de pedidos**
  - Seleção dinâmica de ingredientes via interface
  - Regras de validação no back-end (mínimo de 1 base, no máximo 2 extras)
  - Feedback visual no front após pedido criado

- 📊 **Camada de testes**
  - Testes unitários no back-end com Jest + Supertest
  - Testes E2E com Cypress (login, pedidos, proteção de rotas, logout)
  - Page Objects reutilizáveis no projeto de automação

- ♻️ **Integração entre sistemas**
  - Comunicação direta front → back via Axios
  - Front-end e API integrados via Docker ou localmente (configurável via `.env`)
  - Projeto de testes E2E em repositório separado, conectado aos sistemas reais

---

### ⚠️ Funcionalidades não implementadas

Durante o desenvolvimento, alguns requisitos não foram atendidos e surgiram também alguns pontos de melhoria:

📄 Localização: [`docs/melhorias-requisitos-nao-atendidos.md`](docs/melhorias-requisitos-nao-atendidos.md)

---

### 📦 Bibliotecas e frameworks adicionados

#### Back-end:

- `jest`, `supertest` — para testes unitários e de integração
- `dotenv` — gerenciamento de variáveis de ambiente
- `cross-env` — suporte multiplataforma aos scripts de execução

#### Front-end:

- `Pinia` — controle de estado mais moderno e modular que Vuex
- `axios` — para facilitar requisições HTTP
- `vite` — substituto do Webpack, com build mais rápido

#### Testes automatizados - API:

- `Cypress` — testes end-to-end simulando o comportamento do usuário
- `mochawesome` — geração de relatórios com screenshots e vídeos

#### Testes automatizados - E2E:

- `Cypress` — testes end-to-end simulando o comportamento do usuário
- `mochawesome` — geração de relatórios com screenshots e vídeos
- `Page Objects` — estruturação da automação com encapsulamento de seletores

---

### 🧪 Instruções para correção da prova

1. Acesse os repositórios:
   - Back-end: [`/cafeteria-api`](./cafeteria-api/)
   - Front-end: [`/cafeteria-frontend`](./cafeteria-frontend/)
   - Testes de API: [`/cafeteria-api-tests`](./cafeteria-api-tests/)
   - Testes E2E: [`/cafeteria-tests-e2e`](./cafeteria-tests-e2e/)

2. Siga os `README.md` de cada projeto para subir localmente:
   - Primeiro rode o banco e API
   - Depois a interface Vue
   - Por fim, execute os testes E2E com `npx cypress run` ou `npx cypress open`

3. Os testes automatizados E2E (login, pedidos e logout) estão todos incluídos no projeto de testes com evidências geradas automaticamente (screenshots e vídeos) e relatório HTML em `cypress/reports/`.

---

## 🧾 Artefatos de Qualidade e Testes

Durante o desenvolvimento, foram criados diversos artefatos de testes para garantir cobertura, rastreabilidade de requisitos e documentação de comportamento da aplicação:

### 📋 Plano de Testes

- Documento descrevendo a estratégia de testes adotada para front-end, back-end e E2E
- Detalha prioridades, ferramentas, tipos de teste (unitário, API, E2E) e abordagem (caixa branca/caixa preta)
- Inclui matriz de testes com as abordagens utilizadas por camada

📄 Localização: [`docs/plano-de-testes.md`](./docs/plano-de-testes.md)

---

### 🧪 Especificações Gherkin (BDD)

- Cenários escritos em linguagem Gherkin para descrever o comportamento do sistema do ponto de vista do usuário
- Organizado por funcionalidades: login, pedidos, logout e proteção de rotas
- Utilizados como base para os testes automatizados de E2E

📄 Localização: [`docs/gherkin/`](./docs/gherkin/)

---

### 🐞 Registro de bugs

- Os problemas identificados durante os testes manuais e E2E estão descritos no arquivo `bugs.md`
- Cada bug documentado contém: título, descrição, passos para reprodução, impacto e status

📄 Localização: [`docs/bugs.md`](./docs/Bugs/bugs.md)

---

Esses artefatos foram mantidos versionados e atualizados conforme a evolução do projeto, servindo como evidência de validação dos requisitos e suporte à rastreabilidade funcional. Caso precise acessar uma visão estruturada da cobertura de testes, recomenda-se começar pelo plano de testes.

---

### 📝 Observações gerais

- A aplicação completa pode ser executada totalmente em ambiente Docker ou separadamente via terminal.
- O uso do padrão Page Object nos testes permite reutilização e legibilidade.
- Os cenários Gherkin estão documentados em `docs/gherkin/` e mapeiam todos os comportamentos esperados.

