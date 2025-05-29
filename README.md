# 📚 Courseck

A centralized platform that transforms YouTube playlists into structured, trackable learning experiences — making it easy for creators to manage courses and for learners to follow them effectively.

---

## 1. Project's Title

**Courseck** – A centralized YouTube course management system to help creators structure their content like real courses and make video-based learning more effective for students.

---

## 2. Project Description

**Courseck** bridges the gap between unstructured YouTube playlists and formal online courses. It provides creators with tools to structure their YouTube videos into modular, easy-to-navigate learning paths, and offers learners a clear way to track their progress and engage with content meaningfully.

- **What it does:**
  - Allows creators to organize their YouTube videos into proper courses.
  - Enables learners to enroll and revisit completed lessons.
  - Ensures quality with an admin review system before publishing courses.

- **Why these technologies were used:**
  - **Next.js** for a modern, fast, and SEO-optimized frontend.
  - **Node.js** for a performant backend.
  - **PostgreSQL** for a robust, relational data structure ideal for course management.
  - **Clerk Authentication**: Secure and scalable authentication system with built-in UI components for sign-in, sign-up, and session management.

- **Challenges faced:**
  - Learning of some api's take time from docs.

---

## 3. Table of Contents

- [1. Project's Title](#1-projects-title)
- [2. Project Description](#2-project-description)
- [3. Table of Contents](#3-table-of-contents)
- [4. How to Install and Run the Project](#4-how-to-install-and-run-the-project)
- [5. How to Use the Project](#5-how-to-use-the-project)
- [6. Credits](#6-credits)

---

## 4. How to Install and Run the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Samarth0016/Courseck.git
    cd courseck
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables in a `.env` file:**

    ```env
    # Database
    DATABASE_URL="postgresql://postgres:your_db_password@localhost:5432/postgres"

    # File Uploads (UploadThing)
    UPLOADTHING_TOKEN="your_uploadthing_token"

    # Mux Video Streaming
    MUX_TOKEN_ID="your_mux_token_id"
    MUX_TOKEN_SECRET="your_mux_token_secret"

    # Stripe Payments
    STRIPE_API_KEY="your_stripe_api_key"
    STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret"

    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_your_publishable_key"
    CLERK_SECRET_KEY="sk_test_your_secret_key"
    NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
    NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/"
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/"

    # App URL
    NEXT_PUBLIC_APP_URL="http://localhost:3000"
    ```

4. **Run database migrations :**

    ```bash
    npx prisma migrate dev --name init
    ```

5. **Start the development server:**

    ```bash
    npm run dev
    ```

6. **Visit in browser:**

    ```
    http://localhost:3000
    ```

---

## 5. How to Use the Project

- **Creators (Teacher Mode):**
  - Log in, upload your YouTube playlist.
  - Structure it into modules and lessons.
  - Optionally set pricing.
  - Submit for admin approval.

- **Learners (Student Mode):**
  - Browse available courses.
  - Enroll and start learning.
  - Track your course progress.
  - Revisit and complete lessons at your own pace.

- **Admin Mode:**
  - Admin.
  - Review submitted courses.
  - Approve or reject courses before they go live.

---

## 6. Credits

### 👨‍💻 Developed by:

- **[Suthar Samarth]** – [GitHub](https://github.com/Samarth0016) | [LinkedIn](https://www.linkedin.com/in/samarth-suthar/)
