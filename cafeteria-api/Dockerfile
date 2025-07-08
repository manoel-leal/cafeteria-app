FROM node:18

# Instala netcat para checagem do banco
RUN apt-get update && apt-get install -y netcat-openbsd

WORKDIR /app

# Copia apenas os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante da aplicação (inclusive o entrypoint)
COPY . .

# Copia o script de entrypoint e dá permissão de execução
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

EXPOSE 3000

# Define o entrypoint que roda no container
ENTRYPOINT ["sh", "/app/entrypoint.sh"]