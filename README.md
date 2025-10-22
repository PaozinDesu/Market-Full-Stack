# DTI-Technical-Challange
⚙️ Configuração do Backend
1️⃣ Acesse a pasta do backend
cd server

2️⃣ Instale as dependências
npm install

3️⃣ Crie o banco de dados e gere o Prisma Client
npx prisma migrate dev --name init

4️⃣ adicione os produtos ao banco de dados
npm run seed

👉 Isso cria o arquivo dev.db e o cliente Prisma.

5️⃣ Rode o servidor
npm run dev

Por padrão, o backend será iniciado em:
http://localhost:4000

💻 Configuração do Frontend
1️⃣ Acesse a pasta do frontend
cd ../wwww

2️⃣ Instale as dependências
npm install

3️⃣ Configure a URL do backend

Crie um arquivo .env.local na raiz do frontend:

NEXT_PUBLIC_API_URL=http://localhost:4000

No código, use esta variável para chamadas HTTP (por exemplo, com Axios):

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
