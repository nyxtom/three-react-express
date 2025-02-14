# Three.js + React + Express

This repository provides a modern web development setup integrating:

- **Vite** for fast frontend development with React
- **Three.js** for 3D rendering
- **Express** for backend API handling
- **ESLint** + **Prettier** for consistent code formatting and linting
- **npm workspaces** for monorepo management

## 📂 Project Structure

```
three-react-express/
├── packages/
│   ├── client/  # React + Vite frontend
│   ├── server/  # Express backend
├── package.json  # npm workspace configuration
├── .eslintrc.json  # ESLint config
├── .prettierrc  # Prettier config
```

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/nyxtom/three-react-express.git
cd three-react-express
```

### 2️⃣ Install Dependencies
```sh
npm install
```
This will install dependencies for both frontend and backend using **npm workspaces**.

## 🛠 Running the Project

### ▶ Start the Frontend (Vite + React + Three.js)
```sh
npm run dev --workspace=client
```

### ▶ Start the Backend (Express API)
```sh
npm run start --workspace=server
```

## 🔧 Tooling Setup

### ✅ ESLint + Prettier
Linting and formatting are enforced using ESLint and Prettier:
```sh
npm run lint --workspace=client
npm run lint --workspace=server
npm run format --workspace=client
npm run format --workspace=server
```
Configuration files:
- `.eslintrc.json` for ESLint rules
- `.prettierrc` for Prettier formatting

### ⚡ Vite
The frontend is powered by **Vite**, providing fast development and hot module replacement.

### 🎨 Three.js
Three.js is integrated into the React app for 3D rendering.

## 📦 Building for Production
To create optimized builds:

### Client (Frontend)
```sh
npm run build --workspace=client
```

### Server (Backend)
```sh
npm run build --workspace=server
```

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## 📜 License
This project is licensed under the MIT License.

---

Feel free to reach out for any questions or suggestions! 🚀

