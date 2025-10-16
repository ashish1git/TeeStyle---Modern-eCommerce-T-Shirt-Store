# 🎨 TeeStyle - Modern eCommerce T-Shirt Store

A full-stack, modern eCommerce platform for custom T-shirt designs built with React, Node.js, MongoDB, Tailwind CSS, and Framer Motion.

![TeeStyle Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=TeeStyle+-+Premium+Custom+T-Shirts)

## ✨ Features

### 🛍️ Customer Features
- **Animated Hero Section** with background video
- **Product Catalog** with advanced filtering (category, price range, search)
- **Product Details** with size/color selection
- **Shopping Cart** with real-time updates
- **Secure Checkout** process
- **User Authentication** (Register/Login)
- **Responsive Design** - Works on all devices
- **Glassmorphism UI** - Modern glass-style components
- **Smooth Animations** - Powered by Framer Motion

### 🔐 Admin Features
- **Secure Admin Dashboard**
- **Full CRUD Operations** for products
- **Product Management** (Add/Edit/Delete/Publish)
- **Inventory Tracking**
- **Featured Products** management

### 🎨 Design Features
- Modern Glassmorphism UI
- Gradient text effects
- Smooth page transitions
- Custom scrollbar
- Hover animations
- Trust badges section

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Routing
- **Context API** - State management
- **Axios** - HTTP requests
- **React Hot Toast** - Notifications
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure
tshirt-store/
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── middleware/
│ │ └── auth.js
│ ├── models/
│ │ ├── Product.js
│ │ ├── User.js
│ │ └── Order.js
│ ├── routes/
│ │ ├── products.js
│ │ ├── auth.js
│ │ └── orders.js
│ ├── .env
│ ├── server.js
│ └── package.json
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── Hero.jsx
│ │ ├── ProductCard.jsx
│ │ ├── ProductGrid.jsx
│ │ ├── FilterSidebar.jsx
│ │ ├── Cart.jsx
│ │ ├── CartItem.jsx
│ │ ├── TrustBadges.jsx
│ │ ├── LoadingSpinner.jsx
│ │ └── ProtectedRoute.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Products.jsx
│ │ ├── ProductDetail.jsx
│ │ ├── Checkout.jsx
│ │ ├── Login.jsx
│ │ └── AdminDashboard.jsx
│ ├── contexts/
│ │ ├── AuthContext.jsx
│ │ ├── CartContext.jsx
│ │ └── ProductContext.jsx
│ ├── utils/
│ │ └── api.js
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
