# 🧪 Testes End-to-End — Projeto Cypress (Cafeteria)

Este repositório contém os testes automatizados de ponta a ponta da aplicação da Cafeteria CodeQual, utilizando **Cypress** com padrão **Page Objects** para simular a navegação real do usuário nas interfaces do sistema.

---

## 🚀 Tecnologias utilizadas

- **Cypress** `12+` (E2E framework)
- **JavaScript**
- **Page Object Pattern** (modularização dos seletores e ações)
- **Node.js** `v16+`

---

## 🔧 Pré-requisitos

Para executar o projeto de testes, certifique-se de que os seguintes softwares estão instalados localmente:

- [Node.js](https://nodejs.org/) (recomendado LTS)
- [Git](https://git-scm.com/)
- Navegador Google Chrome ou Chromium

---

## 📂 Clonando o projeto de testes

```bash
git clone {URL do projeto}
cd cafeteria-e2e
npm install
```

---

## 🚀 Subindo a aplicação (frontend + backend)

Antes de rodar os testes, a aplicação precisa estar em execução localmente:

- 🔙 **Back-end**: siga as instruções em [`/cafeteria-api/README.md`](../cafeteria-api/README.md)
- 🔜 **Front-end**: siga as instruções em [`/cafeteria-frontend/README.md`](../cafeteria-frontend/README.md)

> Certifique-se de que:
> - A API esteja disponível em `http://localhost:3000`
> - A interface Vue esteja acessível em `http://localhost:8080`

---

## 🧪 Rodando os testes Cypress

### Modo 1 — Interface visual (GUI):

```bash
npx cypress open
```

> Isso abrirá o Test Runner do Cypress. Escolha o navegador desejado e selecione os testes.

---

### Modo 2 — Headless (linha de comando):

> Ao rodar com esse comando, será gerado o relatório de testes na pasta reports e videos da execução na pasta de vídeos.

```bash
npx cypress run
```

> Executa todos os testes em modo headless com o navegador Electron padrão. Para rodar em Chrome headless:

```bash
npx cypress run --browser chrome
```

---

## 📁 Estrutura do projeto

```
cafeteria-e2e/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── order.cy.js
│   ├── support/
│   │   ├── pageObjects/
│   │   │   ├── LoginPage.js
│   │   │   ├── OrderPage.js
│   │   └── e2e.js
├── cypress.config.js
├── package.json
└── README.md
```

---

## 📌 Observações

- Testes são reiniciados com `beforeEach` para simular sessões isoladas
- O Cypress intercepta `window.alert`, `confirm`, e valida mensagens diretamente

---

## 💡 Possíveis evoluções

- Integração com CI/CD (GitHub Actions ou GitLab)
- O projeto utiliza `localStorage` para persistência do token de autenticação JWT
- Separação de ambiente por `.env` e múltiplos ambientes (`dev`, `staging`, `prod`)

---

