# 🎬 MovieBaseAPI – Search and Explore Movies with OMDb API

MovieBaseAPI is a web application where users can search for **movies, series, and titles** using the **OMDb API**. The results are displayed in a **card view**, and users can click on a movie to see its **detailed information**.

## 📥 Installation

### 1. Clone the repository

```sh
git clone https://github.com/HanninenF/movieBaseApi-Final-Project.git
cd movieBaseApi-Final-Project
```

### 2. Install dependencies

```sh
npm install
```

## ⚙️ Run and Build the Project

### Start the development server

```sh
npm run dev
```

The app will run at `http://localhost:5173` (default for Vite).

### Build for production

```sh
npm run build
```

This will generate production-ready files in the `dist/` directory.

## 📂 Project Structure

The project is **modularized** for **scalability and reusability**.

```
src/
├── components/     # UI components (SearchBar, View, Arrows)
├── data/           # Icons and static assets
├── functions/      # API requests and rendering functions
├── keys/           # API keys (ignored in Git)
├── state/          # State management
├── styleHelpers/   # SCSS variables and mixins
├── types/          # TypeScript types
├── utils/          # Utility functions
├── main.scss       # Global styles
├── main.ts         # Main file (app initialization)
```

## 🌐 API and Endpoints

The project uses the **OMDb API** to fetch movie data.

| Function               | Endpoint                                                      |
| ---------------------- | ------------------------------------------------------------- |
| Search by keyword      | `https://www.omdbapi.com/?s={searchTerm}&apikey=YOUR_API_KEY` |
| Search by title        | `https://www.omdbapi.com/?t={title}&apikey=YOUR_API_KEY`      |
| Fetch movie by IMDb ID | `https://www.omdbapi.com/?i={movieId}&apikey=YOUR_API_KEY`    |

🔒 **Important!** The API key is stored in `keys/apiKey.ts` and **is not included in the repository** (added to `.gitignore`).

## 🚀 Technologies & Tools

- **TypeScript** – Strong typing for a more robust codebase
- **SCSS** – Variables, mixins, and modular styling
- **Vite** – Fast development server
- **ESLint & Prettier** – Code formatting and linting
- **Fetch API** – Fetching movie data from OMDb API
- **Git & GitHub** – Version control and hosting

## 🔗 Contact & LinkedIn

Developed by **Fredrik Hänninen**  
📎 [LinkedIn Profile](https://www.linkedin.com/in/fredrik-h%C3%A4nninen-0240a2327/)

---

### 📝 Additional Information

✅ `.gitignore` is configured to exclude **unnecessary files** (e.g., `node_modules`, `dist/`, API keys).  
✅ The code is **modularized** and follows the **DRY principle**.  
✅ **Full error handling** is implemented for API requests.

---

🎬 **MovieBaseAPI** is a well-structured and scalable project, focusing on **user experience and code quality**! 🚀
