# E-Commerce App

This is a full-stack e-commerce application developed with Node.js, Express, MongoDB, and React. The application includes user authentication, product listing, and a shopping cart functionality.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)

## Features

- User Authentication (Register, Login, JWT-based authentication)
- Product Management (List, Add, Update, Delete)
- Shopping Cart (Add to cart, Remove from cart, View cart)
- Admin functionalities for product management
- Responsive frontend with React and Redux

## Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- MongoDB

## Getting Started

## Backend Setup
- Install Backend Dependencies
```bash
sh
cd backend
npm install
```
- Configure Environment Variables
Create a .env file in the backend directory and add the following variables:

```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

- Run the Backend Server
```bash
sh
npm run dev
```
The backend server will start on http://localhost:5000.

## Frontend Setup
Install Frontend Dependencies
```bash
sh
cd ../frontend
npm install
```
- Configure Environment Variables
Create a .env file in the frontend directory and add the following variable:

```bash
REACT_APP_API_URL=http://localhost:5000
```
- Run the Frontend Server
```bash
sh
npm start
```
The frontend server will start on http://localhost:3000.

## Running the Application
- Start Both Servers
To run the application, ensure both backend and frontend servers are running:

In one terminal, navigate to the backend directory and run:

```bash
sh
npm run dev
```
In another terminal, navigate to the frontend directory and run:

```bash
sh
npm start
```
Open http://localhost:3000 in your browser to access the application.

## API Endpoints
# User Authentication
- POST /register - Register a new user
- POST /login - Authenticate a user and return a JWT
# Product Management
- GET /products - Retrieve a list of products
- GET /products/:id - Retrieve details of a specific product
- POST /products - Add a new product (admin only)
- PUT /products/:id - Update an existing product (admin only)
- DELETE /products/:id - Delete a product (admin only)
# Shopping Cart
- GET /cart - Retrieve the user's shopping cart
- POST /cart - Add an item to the cart
- DELETE /cart/:id - Remove an item from the cart

### Clone the Repository

```sh
git clone https://github.com/pandeysarvagya/E-Commerce-App.git
cd E-Commerce-App

