Guia de Instruções para Clonar e Executar o Projeto:

Clonar o Repositório:

Abra o terminal ou prompt de comando.
Navegue até o diretório onde deseja clonar o repositório.
Execute o seguinte comando:

![image](https://github.com/Gabriel-Galdino22/CP3/assets/126733117/76a9fe70-ef48-4d47-b2ac-8f14d4608f2f)

Executar o Projeto:

Certifique-se de ter o Docker e o Docker Compose instalados na sua máquina.
Navegue até o diretório raiz do projeto clonado.
Abra o arquivo docker-compose.yml em um editor de texto, se desejar revisar as configurações dos serviços.
Execute o seguinte comando para construir e iniciar os serviços do Docker Compose:

![image](https://github.com/Gabriel-Galdino22/CP3/assets/126733117/4e4e5475-131e-42b4-afe9-360b191fc43f)

Aguarde até que todos os serviços sejam construídos e iniciados. Você verá mensagens indicando o progresso de cada serviço no terminal.
Uma vez que todos os serviços estejam em execução, abra um navegador da web e acesse o frontend em http://localhost:3000.

Desenho da Arquitetura do Projeto
O projeto é composto por três serviços principais:

Frontend: Aplicação React que roda na porta 3000.
Backend: API Node.js com Express que roda na porta 5000.
MongoDB: Banco de dados MongoDB que roda na porta 27017.

![image](https://github.com/Gabriel-Galdino22/CP3/assets/126733117/35b2cdb2-4c69-4be8-a187-d62f09264b01)

#Comandos para Analisar e Manipular Contêineres e Dados no MongoDB e Listar os Contêineres em Execução

#Listar todos os contêineres:
docker ps

#Acessar o Terminal do Contêiner MongoDB:
docker exec -it myapp-mongo-1 mongo

#Entrar no terminal do contêiner MongoDB:
docker exec -it myapp-mongo-1 mongo

#Selecionar o Banco de Dados:
use todo

#Inserir um Documento na Coleção tasks:
db.tasks.insertOne({ task: "Estudar Docker" })

#Verificar a Inclusão:
db.tasks.find().pretty()

#Atualizar um Documento na Coleção tasks:
db.tasks.updateOne({ task: "Estudar Docker" }, { $set: { task: "Estudar Docker Compose" } })

#Verificar a Alteração:
db.tasks.find().pretty()

#Deletar um Documento na Coleção tasks:
db.tasks.deleteOne({ task: "Estudar Docker Compose" })

#Verificar a Deleção:
db.tasks.find().pretty()

#Analisando Logs e Recursos Criados
#Ver logs do contêiner backend:
docker logs myapp-backend-1

#Ver logs do contêiner frontend:
docker logs myapp-frontend-1

#Listar volumes criados:
docker volume ls

#Listar Redess criadas:
docker network ls
