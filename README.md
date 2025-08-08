---
# **Superhero Database – Frontend**

Explore a dynamic and responsive React application showcasing superheroes from across the multiverse. This project utilizes the **Innovix Matrix Public Superhero API** and is built with **Vite** and **Tailwind CSS** for optimal performance and sleek UI design.
---

## **🚀 Live Demo**

Experience the app live:
[https://superhero-l21l.onrender.com](https://superhero-l21l.onrender.com)

---

## **✨ Features**

- Robust search with partial and exact matching.
- Pagination with sorting options (A–Z and Z–A).
- Detailed superhero profiles with biography, stats, and more.
- Fully responsive interface for all device sizes.
- Fast, modern build tools powered by Vite.
- Responsive Navbar with intuitive navigation and alerts for upcoming features.
- Informative Footer with useful links, contact details, and social connections.

---

## **🛠 Tech Stack**

- React 18+
- Vite (bundler & dev server)
- Tailwind CSS (utility-first styling)
- React Router (routing)
- Fetch API (data fetching)
- SweetAlert2 (alert modals)

---

## **📂 Project Layout**

```
SUPERHERO/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Superhero.jsx
│   │   └── SuperheroCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
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

## **🧭 Navigation Bar**

- Sticky top nav with brand logo linking home.
- Desktop: horizontal menu with active link highlighting.
- Mobile: collapsible hamburger menu.
- Menu items include Home (navigable) and other pages (About, Services, Blog, Contact) showing friendly SweetAlert2 modals “Coming Soon!” when clicked.

---

## **📄 Footer**

- Structured into three main columns:

  - Quick navigation links to key pages.
  - Contact information including address, email, and phone.
  - Social icons linking to LinkedIn and GitHub profiles for easy connection.

- Responsive and accessible design ensuring usability across devices.

---

## **⚙️ Setup Instructions**

### Requirements

- Node.js v14+
- npm or yarn

### Installation

```bash
git clone https://github.com/Tahsina2226/Superheros.git
cd Superheros
npm install
```

### Running Locally

```bash
npm run dev
```

Access the app at [http://localhost:5173](http://localhost:5173).

---

## **📦 Production Build**

```bash
npm run build
```

Built files will be located in the `dist` directory.

---

## 🌐 API Endpoints

### Fetch Superhero List

**Endpoint:**  
`GET https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records`

**Query Parameters:**

- `page` — Page number to retrieve. Default is `1`.
- `perPage` — Number of superheroes per page. Default is `5`.
- `filter` — Filter superheroes by name. Example: `name ~ 'Batman'` supports partial matching.
- `sort` — Sort superheroes by name. Use `name` for ascending or `-name` for descending order.

---

### Fetch Superhero Details

**Endpoint:**  
`GET https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/{id}`

**Description:**  
Replace `{id}` with the unique identifier of the superhero to retrieve detailed information about that specific hero.

---

## **👩‍💻 Author**

**Tahsina Tanvin**

- GitHub: [Tahsina2226](https://github.com/Tahsina2226)
- Email: [tahsinatanvin274@gmail.com](mailto:tahsinatanvin274@gmail.com)

---

## **📄 License**

This project is intended exclusively for the **Innovix Matrix System Technical Task** and is not open for public reuse.

---
