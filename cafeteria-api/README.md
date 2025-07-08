# ☕ API da Cafeteria CodeQual

Sistema backend da Cafeteria CodeQual, desenvolvido com Node.js e banco PostgreSQL. A API gerencia ingredientes, pedidos e autenticação JWT com rotas protegidas, e está pronta para rodar 100% no Docker. 

---

## 🚀 Tecnologias utilizadas

- **Node.js**
- **Express**
- **PostgreSQL** (via Docker)
- **Sequelize** (ORM)
- **JWT** para autenticação
- **Jest + Supertest** para testes unitários
- **dotenv** para variáveis de ambiente
- **Docker e Docker Compose** para orquestração

---

## ✅ Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado na sua máquina:

- [Git](https://git-scm.com)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [Docker Compose](https://docs.docker.com/compose/install/)

> Não é necessário instalar Node ou PostgreSQL localmente — tudo roda dentro dos containers.

---

## 🔐 Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
DB_HOST=db
DB_USER=postgres
DB_PASS=postgres
DB_NAME=cafeteria
DB_PORT=5432
PORT=3000
```

Essas variáveis são utilizadas pela aplicação e pelos testes para conexão com o banco de dados e geração de tokens JWT.

---

## 🐳 Subindo a aplicação com Docker

Execute o seguinte comando na raiz do projeto:

```bash
docker-compose up --build
```

Esse comando irá:

- Criar e iniciar os containers do banco PostgreSQL (`db`) e da API (`cafeteria-api`)
- Executar os testes unitários automaticamente no container `api-test`
- Manter a aplicação rodando na porta [`http://localhost:3000`](http://localhost:3000)

---

## 🧭 Rotas principais da API

### 🔐 Autenticação

**POST** `/auth/login`  
Realiza o login e retorna um token JWT.

**Payload:**

```json
{
  "username": "admin",
  "password": "admin"
}
```

**Resposta esperada:**

```json
{
  "token": "JWT..."
}
```

Utilize o token nas requisições protegidas com o cabeçalho:

```
Authorization: Bearer SEU_TOKEN
```

---

### ☕ Pedidos

**POST** `/orders`  
Cria um novo pedido com base nos ingredientes fornecidos.  
Requer autenticação ✅

```json
{
  "baseIngredients": [1],
  "extras": [2, 3]
}
```

**GET** `/orders`  
Lista todos os pedidos registrados.  
Requer autenticação ✅

---

### 🧂 Ingredientes

**GET** `/ingredients`  
Retorna todos os ingredientes disponíveis.  
Requer autenticação ✅

## 📁 Estrutura do projeto

```
cafeteria-api/
├── src/
│   ├── controllers/       # Lógica dos endpoints (AuthController, OrderController, etc.)
│   ├── middlewares/       # Middlewares de autenticação e validação
│   ├── models/            # Modelos Sequelize (Order, Ingredient, etc.)
│   ├── routes/            # Arquivos de rotas agrupadas
│   ├── tests/             # Testes unitários (Jest + Supertest)
│   ├── app.js             # Arquivo principal que configura o Express
│   └── server.js          # Inicializa o servidor
├── config/
│   └── database.js        # Configuração do Sequelize e conexão com o banco
├── .env                   # Variáveis de ambiente (não deve ser versionado)
├── .gitignore             # Arquivos a serem ignorados pelo Git
├── Dockerfile             # Instruções para build da imagem Docker da API
├── docker-compose.yml     # Orquestração de containers (API + Banco + Testes)
├── package.json           # Dependências e scripts do projeto
├── jest.config.js         # Configuração do Jest (opcional)
└── README.md              # Documentação do projeto (esse arquivo)
```

## 🔍 Possíveis Melhorias

Durante o desenvolvimento da API da Cafeteria, foram observados pontos positivos na organização e funcionamento da aplicação, mas também surgiram oportunidades claras de melhoria para futuras versões. Abaixo estão alguns pontos que podem ser refinados:

### ✅ Pontos positivos

- Organização modular entre controllers, rotas e middlewares
- Uso correto de variáveis de ambiente com `dotenv`
- Integração com Docker funcional e isolada
- Validações básicas implementadas no controller de pedidos

### 🔧 Oportunidades de melhoria

- **Separação de responsabilidades**: extrair a lógica de negócio dos controllers para arquivos de `services/`, deixando os controllers focados apenas na entrada e saída de dados.
- **Tratamento global de erros**: implementar um middleware de erro (ex: `errorHandler`) para capturar exceções de forma centralizada e evitar repetição de `try/catch`.
- **Validações mais robustas**: usar bibliotecas como `Joi` ou `Zod` para validar inputs de forma declarativa e consistente.
- **Testes com seeders reais**: adicionar scripts que insiram dados falsos temporários no banco durante a fase de testes.
- **Padronização de respostas da API**: criar uma estrutura de resposta única, com campos como `success`, `data` e `error`, para facilitar o consumo no front-end.
- **Autenticação dinâmica**: substituir as credenciais fixas (`admin/admin`) por um controle de usuários persistente com roles.

Essas melhorias não são obrigatórias para funcionamento da aplicação atual, mas trarão mais escalabilidade, manutenibilidade e segurança para versões futuras.

## 🧭 Collection Postman com as apis do projeto

```env
{
	"info": {
		"_postman_id": "53fbd461-da4d-4165-ae59-5bed81685e66",
		"name": "Cafeteria API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "1115700"
	},
	"item": [
		{
			"name": "Criar Pedido",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"baseIngredients\": [1, 2],\n  \"extras\": [1, 3]\n}"
				},
				"url": {
					"raw": "http://localhost:3000/orders",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"orders"
					]
				}
			},
			"response": []
		},
		{
			"name": "Listar Ingredientes Base",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{authToken}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/ingredients/base",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"ingredients",
						"base"
					]
				}
			},
			"response": []
		},
		{
			"name": "Listar Ingredientes Extras",
			"request": {
				"auth": {
					"type": "bearer",
					"bearer": [
						{
							"key": "token",
							"value": "{{authToken}}",
							"type": "string"
						}
					]
				},
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/ingredients/extras",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"ingredients",
						"extras"
					]
				}
			},
			"response": []
		},
		{
			"name": "Listar Sabores Clássicos",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/menu",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"menu"
					]
				}
			},
			"response": []
		},
		{
			"name": "Buscar Pedido por ID",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/orders/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"orders",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Buscar Pedidos",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/orders/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"orders",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Desativar ingrediente",
			"request": {
				"method": "PATCH",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/ingredients/base/3/toggle",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"ingredients",
						"base",
						"3",
						"toggle"
					]
				},
				"description": "Generated from cURL: curl -X PATCH http://localhost:3000/ingredients/base/3/toggle\ncurl -X PATCH http://localhost:3000/ingredients/extra/2/toggle"
			},
			"response": []
		},
		{
			"name": "desativa extra",
			"request": {
				"method": "PATCH",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/ingredients/extra/5/toggle",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"ingredients",
						"extra",
						"5",
						"toggle"
					]
				},
				"description": "Generated from cURL: curl -X PATCH http://localhost:3000/ingredients/base/3/toggle\ncurl -X PATCH http://localhost:3000/ingredients/extra/2/toggle"
			},
			"response": []
		},
		{
			"name": "login",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"// Extrai o token da resposta e salva em uma variável global\r",
							"const json = pm.response.json();\r",
							"\r",
							"if (json.token) {\r",
							"  pm.globals.set('authToken', json.token);\r",
							"  console.log('✅ Token salvo com sucesso:', json.token);\r",
							"} else {\r",
							"  console.warn('❌ Token não encontrado na resposta.');\r",
							"}\r",
							""
						],
						"type": "text/javascript",
						"packages": {}
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\"username\": \"admin\", \"password\": \"admin\"}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/auth/login",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"auth",
						"login"
					]
				},
				"description": "Generated from cURL: curl -X POST http://localhost:3000/auth/login \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"username\": \"admin\", \"password\": \"admin\"}'"
			},
			"response": []
		}
	]
}
```