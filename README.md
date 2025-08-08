---
# **Superhero Database – Frontend**

A sleek and responsive React application for exploring superheroes, powered by the **Innovix Matrix Public Superhero API**.
Built with **Vite** for blazing-fast performance and **Tailwind CSS** for modern, responsive design.
---

## **🚀 Live Demo**

Check out the deployed application here:
[https://superhero-l21l.onrender.com](https://superhero-l21l.onrender.com)

---

## **✨ Key Features**

- 🔍 **Search & Filter** – Find superheroes with partial or exact name matches.
- 📑 **Pagination & Sorting** – Browse heroes in pages, sorted A–Z or Z–A.
- 📜 **Detailed Profiles** – View complete superhero information.
- 📱 **Fully Responsive** – Optimized for mobile, tablet, and desktop.
- ⚡ **Fast Development** – Powered by Vite and modern tooling.

---

## **🛠 Technology Stack**

- **React 18+** – UI library for building interactive interfaces
- **Vite** – Next-generation frontend tooling
- **Tailwind CSS** – Utility-first styling
- **React Router** – Client-side navigation
- **Fetch API** – Seamless data fetching

---

## **📂 Project Structure**

```
SUPERHERO/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Superhero.jsx
│   │   └── SuperheroCard.jsx
│   ├── pages/
│   │   └── SuperheroDetails.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## **⚙️ Getting Started**

### **Prerequisites**

- Node.js **v14+**
- npm or yarn package manager

### **Installation**

```bash
# Clone the repository
git clone https://github.com/Tahsina2226/Superheros.git

# Navigate into the project
cd Superheros

# Install dependencies
npm install
```

### **Run Development Server**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## **📦 Build for Production**

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

---

## **🌐 API Reference**

### **Superhero List**

```
GET https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records
```

**Query Parameters:**

- `page` → Page number (default: `1`)
- `perPage` → Items per page (default: `5`)
- `filter` → Search term (e.g., `name ~ 'Spider'`)
- `sort` → Sort order: `name` (A–Z) or `-name` (Z–A)

### **Superhero Details**

```
GET https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/{id}
```

Replace `{id}` with the superhero’s unique ID.

---

## **👩‍💻 Author**

**Tahsina Tanvin**

- GitHub: [Tahsina2226](https://github.com/Tahsina2226)
- Email: [tahsinatanvin274@gmail.com](mailto:tahsinatanvin274@gmail.com)

---

## **📄 License**

This project was created specifically for the **Innovix Matrix System Technical Task** and is not licensed for general use.

---
