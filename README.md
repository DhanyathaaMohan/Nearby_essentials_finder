#  Nearby Essentials Finder

A **full-stack MERN application** that allows users to securely sign up, log in, and view their **current location on a protected dashboard**.  
The project demonstrates real-world **authentication, authorization, backend–frontend integration, and cloud database usage**.

---

##  Live Application (Local)

- **Frontend:** http://localhost:5173  
- **Backend API:** http://localhost:5000/api  

---

##  Project Overview

Nearby Essentials Finder is designed to simulate a real-world location-based service platform.  
Users can create an account, authenticate securely using JWT tokens, and access protected routes to view their location details.

The application follows **industry-standard full-stack architecture** with proper separation of concerns, secure environment variable handling, and scalable design.

---

##  Features

- 🔐 User Authentication (Signup / Login)
- 🛡️ JWT-based Authorization
- 🔒 Protected Routes (Frontend & Backend)
- 📍 Location capture using Browser Geolocation API
- 📊 User Dashboard with profile & location info
- ☁️ MongoDB Atlas cloud database
- 🔁 Auto logout on authentication failure
- 📱 Responsive UI

---

##  Tech Stack

### Frontend
- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **React Router**
- **Context API**
- **CSS (Responsive Design)**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT (JSON Web Tokens)**
- **bcrypt.js**
- **dotenv**
- **CORS**

---

##  Architecture

Frontend (React + Vite)
        ↓  REST API
Backend (Node.js + Express)
        ↓
MongoDB Atlas (Cloud Database)


---

## 📂 Project Structure
Nearby_essentials_finder/
│
├── backend/
│ ├── config/ # MongoDB configuration
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── middleware/ # Auth & error handling
│ ├── test-connection.js
│ └── index.js # Server entry
│
└── finder-app/
├── src/
│ ├── components/ # UI components
│ ├── context/ # Authentication context
│ ├── services/ # API service layer
│ ├── pages/ # Login, Signup, Dashboard
│ └── App.jsx
└── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/DhanyathaaMohan/Nearby_essentials_finder.git
cd Nearby_essentials_finder

2️⃣ Backend Setup
cd backend
npm install

Create .env file:
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_secure_secret
NODE_ENV=development
Run backend:
npm start

3️⃣ Frontend Setup
cd ../finder-app
npm install
npm run dev

How to Use

Open http://localhost:5173
Sign up with email and password
You will be logged in automatically
Allow location access or enter manually
View your dashboard
Logout and login again to test authentication

Security Practices

Password hashing using bcrypt
JWT tokens for session handling
Protected frontend & backend routes
Environment variables for sensitive data
No secrets committed to GitHub

Future Enhancements

Nearby places search using Maps API
User profile editing
Role-based access control
Admin dashboard
Deployment (Vercel + Render)
AI-based recommendations
