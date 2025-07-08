# 🌐 Front-end da Cafeteria CodeQual

Interface web da Cafeteria CodeQual — um sistema para visualização, montagem e envio de pedidos de café personalizado, com autenticação JWT e integração com a API da cafeteria.

Construído com **Vue.js 3 (composition API)**, roteamento protegido, armazenamento seguro de token, e layout responsivo ☕🖥️

---

## 🚀 Tecnologias utilizadas

- **Vue.js 3**
- **Vite** (bundler ultrarrápido)
- **Vue Router**
- **Pinia** (gerenciamento de estado)
- **Axios** para requisições HTTP
- **CSS personalizado + scoped style**
- **localStorage** para persistência do token JWT
- **Docker & Docker Compose**

---

## ✅ Pré-requisitos

Para rodar o projeto com Docker, instale:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

> O Node.js só é necessário se for executar localmente sem Docker.

---


## 🔐 Configuração de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
VITE_API_BASE=http://localhost:3000
```

> Essa URL aponta para o backend da API da Cafeteria. Se estiver usando Docker, `localhost:3000` é suficiente.

---

## 🐳 Subindo com Docker

```bash
docker-compose up --build
```

Isso irá:

- Criar o container da aplicação Vue
- Servir o frontend no endereço:  
  🌐 [`http://localhost:8080`](http://localhost:80)

---

## ✨ Autenticação

- O login é feito via `POST /auth/login`
- O token JWT é armazenado no `localStorage`
- Rotas são protegidas no `router.beforeEach`
- O botão **Sair** no rodapé remove o token e redireciona para `/login`

---

## 🧭 Estrutura de diretórios

```
cafeteria-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/          # Componentes visuais (Header, Footer, etc.)
│   ├── pages/               # Telas principais (Login.vue, Home.vue, etc.)
│   ├── router/              # Configuração de rotas protegidas
│   ├── store/               # Pinia (auth store, orders store, etc.)
│   ├── services/            # Axios e funções para comunicação com API
│   ├── App.vue
│   └── main.js
├── .env
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

---

## 💡 Possibilidades futuras

- Modo escuro 🌙
- Responsividade avançada para mobile
- Toasts com feedbacks de requisição
- Integração com sistemas de pagamento

---


