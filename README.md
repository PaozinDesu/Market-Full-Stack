# DTI-Technical-Challange
⚙️ Configuração do Backend
1️⃣ Acesse a pasta do backend
cd backend

2️⃣ Instale as dependências
npm install

3️⃣ Configure o Prisma e o banco de dados

O arquivo prisma/schema.prisma define o modelo de dados.
Exemplo:

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Product {
  id          String   @id @default(uuid())
  name        String
  description String
  price       Float
  createdAt   DateTime @default(now())
}

4️⃣ Crie o banco de dados e gere o Prisma Client
npx prisma migrate dev --name init


👉 Isso cria o arquivo dev.db e o cliente Prisma.

5️⃣ Rode o servidor
npm run dev


Por padrão, o backend será iniciado em:

http://localhost:3333

6️⃣ Exemplos de rotas
Método	Rota	Descrição
GET	/products	Lista todos os produtos
POST	/products	Cria um novo produto
GET	/products/:id	Busca produto por ID
DELETE	/products/:id	Remove produto
💻 Configuração do Frontend
1️⃣ Acesse a pasta do frontend
cd ../frontend

2️⃣ Instale as dependências
npm install

3️⃣ Configure a URL do backend

Crie um arquivo .env.local na raiz do frontend:

NEXT_PUBLIC_API_URL=http://localhost:3333


No código, use esta variável para chamadas HTTP (por exemplo, com Axios):

import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default api;

4️⃣ Rode o frontend
npm run dev


O frontend será iniciado em:

http://localhost:3000

🔗 Conectando Frontend e Backend

Quando ambos os servidores estiverem rodando:

O frontend (Next.js) estará em http://localhost:3000

O backend (Express) estará em http://localhost:3333

As requisições do frontend (Axios ou Fetch) devem usar a URL base configurada (NEXT_PUBLIC_API_URL).

Exemplo:

const response = await api.get("/products");
setProducts(response.data);

🧠 Scripts Importantes
Backend (package.json)
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev"
}

Frontend (package.json)
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}

🧰 Ferramentas Recomendadas

VSCode (com extensões: Prisma, ESLint, Prettier)

Postman ou Insomnia (para testar a API)

SQLite Viewer (para visualizar o banco dev.db)

📚 Comandos Úteis
Comando	Descrição
npx prisma studio	Abre o painel visual do Prisma para o banco de dados
npx prisma db pull	Atualiza o schema com base no banco existente
npx prisma db push	Envia o schema atual para o banco
npm run build	Compila o TypeScript
npm run dev	Executa o modo de desenvolvimento
