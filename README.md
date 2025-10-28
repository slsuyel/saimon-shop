# 🛍️ Saimon Shop - E-commerce Client Application

**Saimon Shop** is a modern e-commerce client application built with **Next.js 15 (App Router)** and **TypeScript**. It uses a modular structure for components, routes, and layouts and manages global state with **Redux Toolkit**.

---

## 🔗 Live Demo & Repository

| Resource        | URL                                                                              |
| --------------- | -------------------------------------------------------------------------------- |
| **Live URL**    | [https://saimon-shop.vercel.app/](https://saimon-shop.vercel.app/)               |
| **GitHub Repo** | [https://github.com/slsuyel/saimon-shop](https://github.com/slsuyel/saimon-shop) |

---

## 🚀 Setup and Installation

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- A running backend/API server (The app is configured as an **RPC-client**)

### 1. Clone the repository

```bash
git clone https://github.com/slsuyel/saimon-shop.git
cd saimon-shop
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add:

```env
NEXT_PUBLIC_API_BASE_URL=https://fakestoreapi.com
```

> Replace the URL with your actual backend server endpoint.

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

### 5. Build for production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

---

## ⚙️ Architecture Overview

Saimon Shop uses **Next.js 15 App Router** for structured routing, co-located components, and modern data fetching patterns.

### 1. Project Structure

| Directory/File                        | Description |
| ------------------------------------- | ----------- |
| `src/app`                             | Main directory for all application routes, pages, and layouts. Next.js uses this folder structure to define URLs. |
| `src/app/(CommonLayout)`              | Route group for public-facing pages. Routes like `cart`, `login`, `register`, `shop`, and individual product pages share a common parent layout (header/footer). |
| `src/app/(CommonLayout)/product/[id]` | Dynamic route for handling individual product pages, where `[id]` is the product's unique identifier (e.g., `/product/456`). |
| `src/app/layout.tsx`                  | Root layout file defining the essential HTML structure. Global providers like Redux Provider and theme context are initialized here. |
| `src/components`                      | Reusable UI components across the application (buttons, navigation, product cards). |
| `src/constants` / `src/lib`           | Utility folders containing application-wide constants, helper functions, and custom hooks or logic. |
| `.env`                                 | Stores environment variables, including the API endpoint for backend communication (application functions as an RPC-client). |

### 2. Technology Stack

| Category        | Key Technologies |
| --------------- | ----------------|
| Framework       | Next.js 15 (App Router) |
| Language        | TypeScript |
| State Management| Redux Toolkit, React-Redux, redux-persist |
| Styling & UI    | Tailwind CSS, Shadcn UI (@radix-ui) |
| Utilities       | clsx, tailwind-merge, class-variance-authority (CVA) |
| Forms           | react-hook-form |
| Animations      | framer-motion |
| Feedbacks       | sonner (Toast notifications) |

### 3. State Management (Redux Toolkit)

- **Store Configuration:** Wrapped in a provider at the root layout.  
- **Data Flow:** Components dispatch actions → Redux Thunks handle async API calls → Reducers update state.  
- **Persistence:** `redux-persist` caches critical user and cart state in local storage.  

---

## ⏱️ Time Spent

The initial setup and architecture foundation took approximately **3 hours**, covering:

- Next.js 15 project setup (package.json, tsconfig.json)  
- `src/app` directory structure & routing  
- Tailwind CSS & Shadcn UI integration  
- Redux Toolkit setup and provider configuration  

---

## 📝 Features

- Modern **Next.js 15** architecture  
- **Dynamic product pages**  
- **Redux Toolkit** for centralized state management  
- **Persistent cart & user data** using `redux-persist`  
- **Responsive UI** with Tailwind CSS & Shadcn UI  
- **Form handling** via `react-hook-form`  
- **Smooth animations** with framer-motion  
- **Toast notifications** with sonner  
- Easy deployment with **Vercel**  

