## 📋 Plano de Testes 

O objetivo deste plano é garantir o funcionamento da aplicação como um todo por meio de estratégias de teste em múltiplos níveis: unitários, integração de API e testes E2E com simulação real do fluxo do usuário.

Documento versionado em:  
📁 `docs/plano-de-testes.md`

---

### ✅ Estratégia de testes

A estratégia será composta por três camadas principais:

| Tipo de Teste            | Ferramentas                  | Status        | Objetivo                                                 |
|--------------------------|------------------------------|----------------|----------------------------------------------------------|
| Unitários (Back-end)     | Jest + Supertest             | ✅ Implementado | Validar regras isoladas de controladores e middlewares   |
| API (Back-end)           | Cypress (modo headless)      | ✅ Implementado | Consumir endpoints reais e validar respostas da API      |
| End-to-End (Full stack)  | Cypress + PageObjects        | ✅ Implementado   | Simular uso completo da aplicação via interface gráfica  |
| Testes de aceite  | Testes e2e funcionais manuais        | ✅ Feito   | Simular uso completo da aplicação via interface gráfica de forma manual |

---

### 🧪 Prioridades a curto prazo

#### 🔧 1. Testes unitários (Back-end)

- [x] Validação de requisições inválidas (token ausente, campos obrigatórios)
- [x] Casos de sucesso nos controllers com dados válidos
- [x] Validação de regra de negócio (máximo de 2 extras, base obrigatória)

#### 🌐 2. Testes de API com Cypress

- [x] Autenticação: `/auth/login` (status e token)
- [x] Proteção de rotas sem JWT
- [x] `/orders` POST: erros e sucesso (com payloads variados)
- [x] `/ingredients` GET: retorno esperado com dados mockados

> Os testes serão executados no modo CLI, com Cypress acessando a API real via `http://localhost:3000`.

#### 🧑‍💻 3. Testes E2E com Cypress e PageObjects

- [x] Login com credenciais válidas
- [x] Seleção de ingredientes e envio de pedido
- [x] Feedback visual após pedido criado com sucesso

#### 🧑‍💻 4. Testes E2E Manuais

- [x] Login com credenciais válidas
- [x] Seleção de ingredientes e envio de pedido
- [x] Feedback visual após pedido criado com sucesso

---

### 📁 Organização dos arquivos

```
docs/
└── plano-de-testes.md     # este documento

src/tests/                 # testes unitários de backend (Jest)

cypress/
├── api/                   # testes de API consumindo rotas HTTP
├── e2e/                   # testes E2E com fluxo real
├── support/
│   └── pageObjects/       # repositório de seletores e ações reutilizáveis
└── cypress.config.js
```

---

### 🎯 Tipos de teste por abordagem

| Tipo de Teste        | Abordagem       | Descrição                                                                 |
|----------------------|------------------|---------------------------------------------------------------------------|
| Unitários (Back-end) | **Caixa branca** | Validam a lógica interna dos controllers com conhecimento do código-fonte |
| API com Cypress      | **Caixa preta**  | Consomem endpoints reais testando entradas e saídas, sem olhar o código   |
| E2E com Cypress      | **Caixa preta**  | Simulam o comportamento do usuário através da interface gráfica           |
| Testes E2E manual      | **Caixa preta**  | Testes manuais de acordo com os cenários de testes definidos nas especificações gherkin           |

---

#### ✅ Testes executados por abordagem

- **Caixa branca (Jest)**:
  - Validação de regras de negócio no `OrderController`
  - Rejeição de requisições inválidas (sem token, dados ausentes ou inconsistentes)
  - Cobertura de branches de lógica condicional (ex: limite de extras)

- **Caixa preta (Cypress API)**:
  - Requisição de login (`/auth/login`) com usuários válidos e inválidos
  - Criação de pedido com dados válidos e inválidos
  - Verificação de status code e mensagens de erro da API

- **Caixa preta (Cypress E2E)**:
  - Navegação protegida por token
  - Criação de pedido pelo fluxo visual
  - Feedback em tela após ações do usuário



### 📎 Casos de teste Gherkin por funcionalidade

Os testes comportamentais foram especificados em arquivos `.feature` com sintaxe Gherkin, organizados por fluxo funcional da aplicação. Eles descrevem cenários esperados do ponto de vista do usuário (caixa preta), auxiliando na automação de testes end-to-end.

Esses arquivos estão localizados em:  
📁 `docs/gherkin/`

---

| Funcionalidade          | Arquivo `.feature`                     | Casos contemplados                               |
|--------------------------|----------------------------------------|--------------------------------------------------|
| Login                   | `login.feature`                        | Login válido, inválido, campos vazios            |
| Criação de Pedidos      | `pedidos.feature`                      | Pedido com 1 base, erro sem base, excesso extras |
| Proteção de Rotas       | `acesso-protegido.feature`             | Redirecionamento sem token ou token expirado     |
| Logout do sistema       | `logout.feature`                       | Logout e bloqueio pós logout                     |

---

