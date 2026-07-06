# Exclusive — E-Commerce Web Application

A full-stack e-commerce web application built with React, Firebase, and Tailwind CSS. Developed as a portfolio project to demonstrate real-world frontend development skills including authentication, state management, and Firestore integration.

**Live Demo:** [exclusive-e-commerce-project-iota.vercel.app](https://exclusive-e-commerce-project-iota.vercel.app)

---

## Screenshot

![Exclusive App Screenshot](./screenshot.png)

---

## Tech Stack

- **React 19** — UI library
- **Vite** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **Firebase Auth** — user authentication
- **Firestore** — database for users and orders
- **React Router DOM** — client-side routing
- **Axios** — HTTP requests to DummyJSON API
- **Lucide React** — icon library
- **Vercel** — deployment and hosting

---

## Features

### Authentication
- Email and password sign up with full name and phone number
- Email and password log in with error feedback
- Persistent auth state via Firebase `onAuthStateChanged`
- Protected routes — unauthenticated users are redirected to login
- Log out from profile page

### Product Browsing
- 200 products fetched from the [DummyJSON API](https://dummyjson.com)
- Browse by category with hover-driven subcategory dropdown
- Product detail page with images, reviews, ratings, availability status, and delivery info
- Star rating display utility

### Cart
- Add to cart, increase and decrease quantity, remove items
- Cart persists across sessions using localStorage
- Cart count displayed in navbar
- Cart total calculated dynamically

### Wishlist
- Toggle wishlist on any product — heart icon fills red when wishlisted
- Wishlist count displayed in navbar

### Checkout
- Billing details form with full validation
- Payment method selection — Credit Card or Cash on Delivery
- Order saved to Firestore with user ID, cart items, billing details, and timestamp
- Cart cleared automatically after successful order placement
- Redirects to order success page on completion

### User Profile
- Edit display name, email, and password
- Re-authentication required before sensitive changes
- Pre-filled with current user data
- Inline success and error feedback

### Routing
- Nested routes for profile sections
- Protected route wrapper component with loading spinner

---

## Project Structure

```
src/
├── assets/          # Images and static assets
├── component/       # Reusable UI components (Navbar, Cart, Checkout, etc.)
├── context/         # React context — ShopContext and AuthContext
├── pages/           # Page-level components
├── services/        # Firebase configuration
└── utils/           # Utility functions (star display)
```

---

## Getting Started

### Prerequisites
- Node.js 20+
- A Firebase project with Auth and Firestore enabled

### Installation

```bash
git clone https://github.com/Hayorkun/Exclusive-e-commerce-project
cd Exclusive-e-commerce-project
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

### Run Locally

```bash
npm run dev
```

---

## Author

Ayomide — [GitHub](https://github.com/Hayorkun)