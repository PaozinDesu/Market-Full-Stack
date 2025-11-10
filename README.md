# 🛒 ECommerce Full-Stack

Welcome to the **DTI Technical Challenge**!  
This project is composed of a **backend (Node.js + Express + Prisma + SQLite)** and a **frontend (Next.js + React + TypeScript)**.  
Follow the steps below to set up and run the project correctly. 🚀

---

## ⚙️ Prerequisites

Before you begin, make sure you have installed the following on your machine:

- **[Node.js](https://nodejs.org/en/download)** (v18+ recommended)  
- **npm** (or **yarn**, if you prefer)  
- **[Git](https://git-scm.com/install/)**  
- An **IDE** of your choice (e.g. [VS Code](https://code.visualstudio.com/download))

---

## 📂 Cloning the Project

Open the terminal in the folder where you want to save the project, for example:

```bash
cd "C:\Users\YOUR_USER\Documents\Projects"
```

Then clone the repository:

```bash
git clone https://github.com/PaozinDesu/DTI-Technical-Challange.git
cd DTI-Technical-Challange
code .
```

A new Visual Studio Code window will open — you can close the previous one.

If you’re not using Visual Studio Code, just open the generated folder with your preferred IDE.

---

## 🧠 Terminal Organization

To make development easier, open 3 terminals in your IDE.

---

### 🖥️ Terminal 1 – Database (Prisma Studio)

1️⃣ Go to the backend folder:

```bash
cd server
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Create a .env file in the root of the server folder with the following content:

```env
DATABASE_URL="file:./dev.db"
```

4️⃣ Generate the database and Prisma Client:

```bash
npx prisma migrate deploy
```

```bash
npx prisma generate
```

5️⃣ Seed the database with initial products:

```bash
npm run seed
```

6️⃣ Start Prisma Studio (visual database interface):

```bash
npx prisma studio
```

Access at:
🔗 **http://localhost:5555**

---

### ⚡ Terminal 2 – Backend (API)

1️⃣ Go again to the backend folder:

```bash
cd server
```

2️⃣ Start the server:

```bash
npm run dev
```

The backend will be available at:
🔗 **http://localhost:4000**

---

### 💻 Terminal 3 – Frontend (Next.js)

1️⃣ Go to the frontend folder:

```bash
cd www
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Run the frontend:

```bash
npm run dev
```

The frontend will start at:
🔗 **http://localhost:3000**

---

## 🧩 Using the Project

Now just open your browser and go to: 
👉 **[http://localhost:3000](http://localhost:3000)**

You can:
- 🛍️ Add products to the cart
- ➕ Change quantities
- 💳 Complete purchases  
- 🧾 Track changes directly in Prisma Studio

---

## 🧰 Technologies Used

**Backend**
- Node.js + Express  
- TypeScript  
- Prisma ORM  
- SQLite

**Frontend**
- Next.js + React  
- TypeScript  
- Tailwind CSS
