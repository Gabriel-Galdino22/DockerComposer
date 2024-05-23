# Use uma imagem de node.js como base
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo de dependências e instale as dependências
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copie o código do aplicativo para o contêiner
COPY . .

# Exponha a porta 3000 para que possamos acessar o aplicativo
EXPOSE 3000

# Comando padrão para iniciar o aplicativo
CMD ["npm", "start"]
