🚀 Interviu-AI – AI Powered Interview Preparation Platform

Interviu-AI is a full-stack MERN web application that helps users prepare for technical interviews using AI-generated questions, answers, and concept explanations.
The platform allows users to create structured interview sessions, organize questions, add notes, and revisit preparation anytime.

🧠 Features

🔐 Authentication
Secure user registration & login
JWT-based authentication
Password hashing using bcrypt
Protected routes

🤖 AI-Powered Interview Prep
Generate personalized interview questions
AI-generated detailed answers
Concept explanation ("Learn More" feature)
Google Gemini API integration

📂 Session Management
Create role-based interview sessions
Store sessions in MongoDB
Add more AI questions to existing sessions
Delete sessions

📝 Question Tools
Expand/collapse answers
Pin/unpin important questions
Add personal notes
Markdown rendering
Syntax highlighting for code blocks

👤 Profile
Upload profile image
View profile info
Logout securely

🛠 Tech Stack

Frontend
React (Vite)
Tailwind CSS
React Router DOM
Context API
Axios
Framer Motion
React Markdown + Remark GFM
React Syntax Highlighter

Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
bcryptjs
Multer (file upload)
Google Gemini API

📁 Project Structure
Interviu-AI/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── utils/
│   ├── vite.config.js
│
└── README.md
