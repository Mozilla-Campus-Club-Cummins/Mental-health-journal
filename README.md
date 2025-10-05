## Mental Health Journaling App HacktoberFest2025
![Image](https://github.com/user-attachments/assets/3c277aa6-6fb1-4636-b14a-a05bbbe9a0d9)
##  About Us
The **Mozilla Campus Club of CCEW** was formed to **promote the idea of open source** among aspiring students and encourage them to make the most of the opportunities that come along with it.  
Our aim is to help students contribute to real-world projects while learning and growing with the community.


---


##  About This Repository
This repository was created specifically to **support open-source participation among college students**.  
The issues listed here will range in difficulty — from **beginner-friendly** to **advanced-level** — ensuring everyone has a fair opportunity to contribute.


---


## Instructions for Hacktoberfest 2025


> Please read the following instructions carefully before contributing 


- You must be a **student of CCEW**.  
- You should be **registered in Mozilla** via the Mozilla-Campus Club website link shared earlier and also on the **official Hacktoberfest website**.  
- Each participant is allowed a **maximum of 3 Pull Requests (PRs)** throughout the event.  
- Make sure your **GitHub profile name** matches your real name (`First Name Last Name`).  
  > If we’re unable to identify you, your PR won’t be accepted.  
- When requesting issue assignment, mention:
  - Your **name**
  - **Branch**
  - **Year of study**
- Ensure your **code has proper comments and indentation**.  
- **No spamming** — spam PRs will be rejected.  
- **Plagiarism is strictly prohibited.**
  > If plagiarism is detected, the PR will be rejected and no further contributions will be accepted.  
- Issues will be assigned on a **first-come, first-serve basis**.  
- Time limits:
  -  **4 days** for easy/medium issues  
  -  **7 days** for hard issues  
  - If you fail to complete within the time, the issue will be reassigned to another student.

## About Project
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

DO NOT submit a PR until a maintainer has assigned the issue to your name.
