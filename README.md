# ⚡ ChallengeForge

> A full-stack competitive contest platform where users participate in challenges, creators publish contests, and admins manage the ecosystem — all powered by a modern, role-based dashboard.

<br/>

## 🌐 Live Demo

**[challengeforge.web.app](https://challengeforge-7ce2b.web.app/)**

<br/>

## 🧩 Overview

**ChallengeForge** is a contest management web application that supports three distinct user roles — **User**, **Creator**, and **Admin**. Users can browse and participate in contests, Creators can publish their own challenges, and Admins manage the entire platform. The platform includes a secure payment gateway (Stripe), a real-time dashboard, and an intelligent winner-tracking system.

<br/>

## ✨ Features

### 🏠 Public Pages

- **Hero Banner** — Dynamic contest showcase with call-to-action
- **Popular Contests** — Highlighted high-traffic contests
- **All Contests** — Searchable, filterable contest listings with pagination
- **Contest Details** — Full contest info with entry payment flow
- **Best Creators** — Leaderboard of top contest publishers
- **Stats Section** — Platform-wide live statistics
- **How It Works** — Onboarding guide for new users
- **FAQ Section** — Common questions answered
- **Contact Section** — Reach the ChallengeForge team

### 🔐 Authentication

- **Email/Password** Login & Registration
- **Google OAuth** Social Login via Firebase
- **Protected Routes** — Role-aware access control

### 🎛️ Dashboard

- **User Dashboard**: View participated contests, winning contests, profile management
- **Creator Dashboard**: Add contests, manage own contests, review submissions, declare winners
- **Admin Dashboard**: Manage all users (CRUD + role change), manage all contest content

### 💳 Payment

- Stripe-powered secure checkout
- Payment required to enter a contest
- Order summary panel + live card validation

<br/>

## 🛠️ Tech Stack

| Layer                | Technology                   |
| -------------------- | ---------------------------- |
| **Framework**        | React 18 + Vite              |
| **Routing**          | React Router DOM v6          |
| **State / Fetching** | TanStack React Query v5      |
| **Styling**          | Tailwind CSS v3 + DaisyUI v4 |
| **Forms**            | React Hook Form              |
| **Authentication**   | Firebase Authentication      |
| **Payments**         | Stripe (react-stripe-js)     |
| **Charts**           | Recharts                     |
| **HTTP Client**      | Axios                        |
| **Alerts**           | SweetAlert2                  |
| **Animations**       | AOS (Animate On Scroll)      |
| **Typography**       | Inter (Google Fonts)         |
| **Icons**            | React Icons                  |
| **Image Hosting**    | ImgBB API                    |
| **Hosting**          | Firebase Hosting             |

<br/>

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18`
- **npm** or **yarn**
- A running **ChallengeForge API** (backend server)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/challengeforge-client.git

# 2. Navigate to the project directory
cd challengeforge-client

# 3. Install dependencies
npm install

# 4. Set up environment variables (see below)
cp .env.local.example .env.local

# 5. Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`**

### Build for Production

```bash
npm run build
```

<br/>

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following keys:

```env
# Firebase Configuration
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id

# Backend API
VITE_API_URL=http://localhost:5000

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key

# ImgBB Image Hosting
VITE_IMAGE_HOSTING_KEY=your_imgbb_api_key
```

> ⚠️ Never commit `.env.local` to version control.

<br/>

## 📁 Project Structure

```
challengeforge-client/
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images, icons, etc.
│   ├── Hooks/                  # Custom React hooks
│   │   ├── useAuth.jsx         # Firebase auth context hook
│   │   ├── useRole.jsx         # Fetches current user role
│   │   ├── useAxiosSecure.jsx  # Axios with auth interceptor
│   │   └── ...
│   ├── Layout/
│   │   ├── Main/               # Public layout (Navbar + Footer)
│   │   └── Dashboard/          # Dashboard layout + sidebar
│   │       ├── Dashboard.jsx   # Main dashboard shell
│   │       ├── Adminlayout.jsx # Admin sidebar nav
│   │       ├── Creator.jsx     # Creator sidebar nav
│   │       └── userdash.jsx    # User sidebar nav
│   ├── Page/
│   │   ├── Home/               # Homepage
│   │   ├── Banner/             # Hero banner
│   │   ├── PopularContest/     # Popular contests section
│   │   ├── AllContest/         # Full contest listing
│   │   ├── Details/            # Contest detail + payment
│   │   ├── BestCreator/        # Creator leaderboard
│   │   ├── Stats/              # Platform statistics
│   │   ├── HowItWorks/         # Guide section
│   │   ├── Faq/                # FAQ section
│   │   ├── Contact/            # Contact section
│   │   ├── Login/              # Login page
│   │   ├── Signup/             # Registration page
│   │   └── Dashboard/          # Dashboard pages
│   │       ├── Profile/        # User profile + chart
│   │       ├── UpdateProfile/  # Edit profile
│   │       ├── Participate/    # Participated contests (user)
│   │       ├── WinContest/     # Won contests (user)
│   │       ├── AddContest/     # Create contest (creator)
│   │       ├── MyContest/      # Creator's contests
│   │       ├── Submit/         # Submission management
│   │       ├── AllUsers/       # Manage all users (admin)
│   │       ├── ManageContent/  # Manage all contests (admin)
│   │       └── Payment/        # Stripe checkout
│   ├── Router/                 # React Router configuration
│   ├── Provider/               # AuthContext provider
│   └── main.jsx                # App entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

<br/>

## 👥 User Roles

| Role        | Permissions                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------- |
| **User**    | Browse contests, pay to participate, view won contests, update profile                        |
| **Creator** | All User permissions + create contests, manage own contests, pick winners from submissions    |
| **Admin**   | All permissions + manage all users (change roles, delete), approve/reject contest submissions |

<br/>

## 🔗 Related Repository

- **Backend API**: [challengeforge-server](https://github.com/your-username/challengeforge-server) — Node.js + Express + MongoDB

<br/>

## 📄 License

This project is for educational purposes as part of the **Programming Hero Level-1 Batch** coursework.

---

<p align="center">Built with ❤️ by <strong>ChallengeForge Team</strong></p>
