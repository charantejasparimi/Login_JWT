# User Profile Management API

## Overview
This is a RESTful API for user authentication and profile management using **Node.js**, **Express.js**, and **MongoDB**. It includes user registration, login, profile retrieval, and update functionalities with **JWT authentication**.

## Features
- User Registration & Login
- JWT Authentication & Authorization
- Secure Password Hashing
- MongoDB Database Integration
- Error Handling & Validation
- Protected Routes (Users can access only their own profiles)

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT
- **Environment Variables:** dotenv

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/user-profile-api.git
cd Login_JWT
```
### 2. Install Dependencies
```sh
npm install
```
### 3. Configure Environment Variables
Create a .env file in the root directory and add the following (working MONGO_URI). If you encounter an error, use your own:```
PORT=5000
MONGO_URI=mongodb+srv://loginuser:loginpassword@loginjwt.xn6onv2.mongodb.net/
JWT_SECRET=bigbang

### 4. Start the Server

```sh
node index.js  (or)  npm start  (or)  npm run dev
```

## API Endpoints
### 1. User Registration
**POST** `/api/auth/register`
#### Request Body
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
}
```
#### Response (Sample)
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTY5YTY4MjE0MTNiMmVlOTcxMGU1MyIsImlhdCI6MTc0MzIyNDkwNywiZXhwIjoxNzQzMjI4NTA3fQ.ChfPs7pD-6Ym0hCWMW28XCf9NfdHbiy4RRr3jdWdqIc",
    "userId": "67e69a6821413b2ee9710e53"
}
```

### 2. User Login
**POST** `/api/auth/login`
#### Request Body
```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```
#### Response (200)
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTY5YTY4MjE0MTNiMmVlOTcxMGU1MyIsImlhdCI6MTc0MzIyNTExOCwiZXhwIjoxNzQzMjI4NzE4fQ.5T70GMJOZ9U2ByDxC7qIGRXoOLo-syERblzw7qRTs5E",
    "userId": "67e69a6821413b2ee9710e53"
}
```

### 3. Get User Profile (Protected)
**GET** `/api/user/profile`
#### Headers
```
Authorization: Bearer <JWT_TOKEN>
```
#### Response (200)
```json
{
  "_id": "67e69a6821413b2ee9710e53",
  "name": "John Doe",
  "email": "a1@gmail.com",
  "address": "123 Street, City, Country",
  "createdAt": "2025-03-28T12:47:36.674Z",
}
```

### 4. Update User Profile (Protected)
**PUT** `/api/user/profile/update`
#### Headers
```
Authorization: Bearer <JWT_TOKEN>
```
#### Request Body
```json
{
  "name": "kin",
  "address": "hyd"
  "bio": "asdfasdf",
  "profilePicture": "ssafkjasf"
}
```
#### Response (Sample Output)
```json
{
    "_id": "67e69a6821413b2ee9710e53",
    "name": "kin",
    "email": "a1@gmail.com",
    "address": "hyd",
    "createdAt": "2025-03-28T12:47:36.674Z",
    "updatedAt": "2025-03-29T05:14:12.733Z",
    "__v": 0,
    "bio": "asdfasdf",
    "profilePicture": "ssafkjasf"
}
```

## Error Handling
- **400 Bad Request** → Missing required fields
- **401 Unauthorized** → Invalid or missing JWT token
- **403 Forbidden** → Accessing another user’s data
- **404 Not Found** → Profile not found

