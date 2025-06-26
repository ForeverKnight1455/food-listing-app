# Food Listing App

A full-stack MERN (MongoDB, Express, React, Node.js) application for listing, creating, editing, and deleting food products.

---

## Features

- View all food products
- Add new food products
- Edit existing food products
- Delete food products
- Toast notifications for actions
- Responsive UI with Tailwind CSS and DaisyUI
- State management with Zustand

---

## Project Structure

```
food-listing-app/
│
├── backend/
│   ├── config/
│   ├── controller/
│   ├── models/
│   ├── route/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── App.css
│   ├── package.json
│   ├── vite.config.ts
│   └── ...
│
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account or local MongoDB

---

### 1. Clone the repository

```sh
git clone https://github.com/ForeverKnight1455/food-listing-app.git
cd food-listing-app
```

---

### 2. Setup Backend

```sh
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

---

### 3. Setup Frontend

```sh
cd ../frontend
npm install
```

---

### 4. Development

In the root folder, run:

```sh
npm install --save-dev concurrently cross-env
npm run dev
```

- This will start both the backend (on port 8080) and the frontend (on port 5173).
- The frontend is configured to proxy API requests to the backend.

---

### 5. Production Build

Build the frontend:

```sh
cd frontend
npm run build
```

Serve the frontend from the backend:

```sh
cd ../backend
npm start
```

Visit [http://localhost:8080](http://localhost:8080)

---

## Environment Variables

In `backend/.env`:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string
NODE_ENV=production
```

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, DaisyUI, Zustand
- **Backend:** Node.js, Express, Mongoose, MongoDB

---

## License

[MIT](LICENSE)

---

## Author

- [ForeverKnight1455](https://github.com/ForeverKnight1455)

---

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
