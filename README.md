# 🛒 DTI Technical Challenge

Bem-vindo(a) ao **DTI Technical Challenge**!  
Este projeto é composto por um **backend (Node.js + Express + Prisma + SQLite)** e um **frontend (Next.js + React + TypeScript)**.  
Siga os passos abaixo para configurar e executar o projeto corretamente. 🚀

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v18+ recomendado)  
- **npm** (ou **yarn**, se preferir)  
- **Git**
- Uma **IDE** de sua preferência (ex: VS Code)

---

## 📂 Clonando o projeto

Abra o terminal na pasta onde deseja salvar o projeto, por exemplo:

```bash
cd "C:\Users\User\Documents\Projetos"
```

E clone o repositório:

```bash
git clone https://github.com/PaozinDesu/DTI-Technical-Challange.git
cd DTI-Technical-Challange
code .
```

---

## 🧠 Organização dos Terminais

Para facilitar o desenvolvimento, **abra 3 terminais** na sua IDE.

---

### 🖥️ Terminal 1 – Banco de Dados (Prisma Studio)

1️⃣ Acesse a pasta do backend:

```bash
cd server
```

2️⃣ Instale as dependências:

```bash
npm install
```

3️⃣ Crie um arquivo `.env` na **raiz da pasta `server`** com o seguinte conteúdo:

```env
DATABASE_URL="file:./dev.db"
```

4️⃣ Gere o banco de dados e o Prisma Client:

```bash
npx prisma migrate dev --name init
```

5️⃣ Popule o banco de dados com produtos iniciais:

```bash
npm run seed
```

6️⃣ Inicie o Prisma Studio (interface visual do banco de dados):

```bash
npx prisma studio
```

Acesse em:  
🔗 **http://localhost:5555**

---

### ⚡ Terminal 2 – Backend (API)

1️⃣ Acesse novamente a pasta do backend:

```bash
cd server
```

2️⃣ Inicie o servidor:

```bash
npm run dev
```

O backend ficará disponível em:  
🔗 **http://localhost:4000**

---

### 💻 Terminal 3 – Frontend (Next.js)

1️⃣ Acesse a pasta do frontend:

```bash
cd www
```

2️⃣ Instale as dependências:

```bash
npm install
```

3️⃣ Execute o frontend:

```bash
npm run dev
```

O frontend será iniciado em:  
🔗 **http://localhost:3000**

---

## 🧩 Utilizando o projeto

Agora é só abrir o navegador e acessar:  
👉 **[http://localhost:3000](http://localhost:3000)**

Você poderá:
- 🛍️ Adicionar produtos ao carrinho  
- ➕ Alterar quantidades  
- 💳 Finalizar compras  
- 🧾 Acompanhar as alterações diretamente no **Prisma Studio**

---

## 🧰 Tecnologias Utilizadas

**Backend**
- Node.js + Express  
- TypeScript  
- Prisma ORM  
- SQLite

**Frontend**
- Next.js + React  
- TypeScript  
- Tailwind CSS (opcional, se utilizado)

---

## 🧑‍💻 Autor

**[PaozinDesu](https://github.com/PaozinDesu)**  
💼 Desafio Técnico – DTI  
