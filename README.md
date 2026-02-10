# 🍽️ AI-Based Recipe Recommendation & Nutrition Analyzer

An AI-powered web application that recommends recipes based on user-provided ingredients.  
The application fetches real-time recipe data and displays detailed cooking methods in an interactive UI.

---

## 🚀 Features

- 🔍 Ingredient-based recipe search
- 🖼️ Recipe cards with images and titles
- 🧑‍🍳 Clickable recipe cards to view **cooking method**
- 🌐 Real-time data from Spoonacular API
- ⚡ Full-stack architecture (React + Node.js)
- 📱 Responsive and user-friendly UI

---

## 🧠 How It Works

1. User enters ingredients (e.g., `egg, tomato`)
2. Frontend sends request to backend API
3. Backend fetches matching recipes from Spoonacular
4. Recipes are displayed as cards

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Axios
- CORS

### API
- Spoonacular Recipe API

---

## 📂 Project Structure

ai-recipe-app/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── backend/
│ ├── routes/
│ ├── controllers/
│ ├── models/
│ ├── server.js
│ └── package.json
│
└── README.md


---

## ▶️ How to Run the Project

### 1️⃣ Start Backend

```bash
cd backend
npm install
node server.js
Backend runs on:

http://localhost:5000
2️⃣ Start Frontend
cd frontend
npm install
npm start
Frontend runs on:

http://localhost:3000
🔑 API Key Setup
Uses Spoonacular API

API key is configured in the backend

Ensure valid API quota is available
