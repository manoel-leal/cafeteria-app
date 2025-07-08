#!/bin/sh

echo "🚨 Resetando o banco de dados da Cafeteria..."

# Aguarda o banco ficar disponível (ajuste o host se necessário)
until nc -z db 5432; do
  echo "🔄 Aguardando o banco iniciar..."
  sleep 1
done

echo "✅ Banco disponível, iniciando reset."

# DROP, CREATE, MIGRATE e SEED
npx sequelize-cli db:drop && \
npx sequelize-cli db:create && \
npx sequelize-cli db:migrate && \
npx sequelize-cli db:seed:all

echo "✅ Banco restaurado com sucesso."

# Inicia o servidor da API (ajuste conforme seu app)
npm run dev