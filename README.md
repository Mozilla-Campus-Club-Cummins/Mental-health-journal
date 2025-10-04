Mental Health Journaling App

A web-based journaling application designed to help users express their thoughts, track emotions, and maintain mental well-being through daily journaling.
Each user can securely register, log in, and maintain their own personal journal entries.

Current Features:
Personal Journal Entries - Users can write, edit, and delete their own journal entries.
Secure Authentication - User registration and login system using MongoDB for data storage.
Date-wise Entry Management - Automatically timestamps journal entries for easy tracking.
Cloud Database - Uses MongoDB Atlas to store user accounts and journals safely.
Responsive UI - Built with React for a smooth and modern user experience.

Tech Stack:

Frontend:
React.js

Backend:
Node.js
Express.js
MongoDB + Mongoose (for database operations)
JSON Web Token (JWT) for authentication

How to Run Locally:

Prerequisites:
Make sure you have the following installed:
Node.js (v16 or above)
npm (comes with Node)
MongoDB Atlas account (or local MongoDB setup)

Clone the Repository
git clone https://github.com/Mozilla-Campus-Club-Cummins/Mental-health-journal
cd Mental-health-journal

Backend Setup:
cd backend
npm install
Create a .env file inside the backend folder and add:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start the backend server:
npm start
Server will run on http://localhost:5000

Frontend Setup:
cd ../frontend
npm install
Start the React app:
npm start
Frontend will run on http://localhost:3000

Access the App:
Open your browser and visit:
http://localhost:3000

Contributing:
Pull requests are welcome!
For major changes, please open an issue first to discuss what you’d like to improve.
