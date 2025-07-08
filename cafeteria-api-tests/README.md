# ☕📡 Testes Automatizados de API — Cafeteria API

Este repositório contém a suíte de testes automatizados das APIs REST do sistema da **Cafeteria CodeQual**, escrita em **Cypress** com foco exclusivo na camada de comunicação entre clientes e o back-end (sem interface gráfica).

---

## 🚀 Tecnologias utilizadas

- **Node.js** `v16+`
- **Cypress** `v12+`
- **JavaScript (ES6)**
- **Mochawesome** (relatórios HTML detalhados)

---

## 🔧 Requisitos para executar localmente

Certifique-se de ter os seguintes programas instalados em sua máquina:

- [Node.js](https://nodejs.org/en/download/) (recomendado LTS)
- [Git](https://git-scm.com/)

Além disso, é indispensável que o **back-end da aplicação esteja rodando localmente** antes da execução dos testes.

📎 Consulte as instruções para subir a API em: [`../cafeteria-api/README.md`](../cafeteria-api/README.md)

---

## 📥 Instalação do projeto

1. Clone este repositório:

```bash
git clone ${url_repo_projeto}
cd cafeteria-api-tests
```

2. Instale as dependências:

```bash
npm install
```

---

## 📂 Estrutura de pastas

```
cafeteria-api-tests/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js              # Testes de autenticação
│   │   ├── pedidos.cy.js            # Testes de criação/listagem de pedidos
│   │   ├── ingredientes.cy.js       # Testes de ingredientes base e extras
│   │   ├── menu.cy.js               # Teste de sabores clássicos
│   │   └── ...                      # Outros testes
│   ├── support/
│   │   ├── e2e.js                   # Arquivo de suporte
│   │   └── commands.js              # Comandos customizados (ex: login)
├── cypress.config.js                # Configuração principal do Cypress
├── package.json
├── .gitignore
└── README.md                        # Este arquivo
```

---

## ✅ Executando os testes

---

### 🤖 Modo headless (linha de comando)

Para rodar todos os testes de forma automatizada:

```bash
npx cypress run
```

---

## 📊 Geração de relatório (Mochawesome)

Relatórios HTML com status, logs e evidências visuais são gerados automaticamente após a execução dos testes.

### Abrir o relatório:

1. Execute os testes:

```bash
npm run test
```

2. Gere e abra o relatório:

```bash
npm run report
```

📄 O relatório estará disponível em:

```
cypress/reports/mochawesome-report/mochawesome.html
```

---

## 🧪 Comando útil de login

Todos os testes autenticados utilizam um comando customizado para login:

```js
cy.loginAsAdmin().then((token) => {
  // Use o token em suas requests
});
```

Esse comando está definido em: `cypress/support/commands.js`

---

## 📝 Observações

- Todas as chamadas à API usam a base `http://localhost:3000`, conforme definido em `cypress.config.js`
- A API precisa estar rodando com dados mínimos para que os testes sejam executados com sucesso
- As evidências de falha são salvas em `cypress/screenshots/` e os vídeos (se ativados) em `cypress/videos/`

---

## 🧰 Scripts disponíveis

| Comando            | Ação                                                                 |
|--------------------|----------------------------------------------------------------------|
| `npm run test`     | Executa todos os testes em modo headless                             |
| `npm run report`   | Abre o relatório HTML gerado com Mochawesome                         |
| `npx cypress open` | Abre a interface gráfica do Cypress                                  |
| `npx cypress run`  | Executa os testes em modo terminal com geração de evidências         |

---

Feito com ☕, `cy.request()` e muita atenção ao detalhe.  
Fique à vontade para adaptar ou expandir esta suíte com novos testes e melhorias 🧪🔁📦