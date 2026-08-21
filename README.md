# QuickBlog

A full-stack blogging platform built with the MERN stack, featuring a public-facing blog, admin dashboard, AI-assisted content generation, image management, and comment moderation.

QuickBlog is designed to provide a complete content-management experience where administrators can create, edit, publish, unpublish, and manage blog posts while visitors can browse articles and interact through comments.

## Live Demo

**Deployed App:**
https://quick-blog-vert-one.vercel.app/

**LinkedIn Demo:**
https://www.linkedin.com/feed/update/urn:li:activity:7486760408440029186/

## Repository

**GitHub:**
https://github.com/Sadafhssc/quick_blog

---

## Screenshots

### Homepage
<img width="1920" height="1080" alt="Screenshot (2229)" src="https://github.com/user-attachments/assets/8e4b96ea-6867-4e23-afa9-cbdaaf6dc0ff" />
<img width="1920" height="1080" alt="Screenshot (2228)" src="https://github.com/user-attachments/assets/753d9b33-11d5-489e-b347-198de9033f5d" />
<img width="1920" height="1080" alt="Screenshot (1904)" src="https://github.com/user-attachments/assets/d233e06c-c962-4a9a-b0a9-e34b3947081c" />


### Blog Detail Page with Comment Section
<img width="1920" height="1080" alt="Screenshot (2231)" src="https://github.com/user-attachments/assets/8e0e8fe9-166d-437f-8d5c-e310b9e57963" />
<img width="1920" height="1080" alt="Screenshot (2230)" src="https://github.com/user-attachments/assets/7c791a7d-d481-491f-85e7-53b28bec3d92" />


### Login Page
<img width="1920" height="1080" alt="Screenshot (2237)" src="https://github.com/user-attachments/assets/94242e14-9ecc-498d-912b-dc1aba5a7140" />


### Admin Dashboard
<img width="1920" height="1080" alt="Screenshot (2236)" src="https://github.com/user-attachments/assets/623bf4f3-2ee8-4cc8-bb24-6c0eb4b670ed" />
<img width="1920" height="1080" alt="Screenshot (2235)" src="https://github.com/user-attachments/assets/36057f67-44c8-4b22-abcb-8b1a5dc40611" />
<img width="1920" height="1080" alt="Screenshot (2234)" src="https://github.com/user-attachments/assets/f232500f-4dc3-4a92-81ee-0f552c286b27" />
<img width="1920" height="1080" alt="Screenshot (2233)" src="https://github.com/user-attachments/assets/e60ece82-af7a-44ab-9127-c47b65b8d1a9" />


---

## Features

### Public Blog

* Responsive public-facing blog
* Home page with published blog posts
* Browse posts by category
* Individual blog detail pages
* Blog metadata and formatted content
* Public commenting system
* Comments are displayed only after admin approval

### Admin Dashboard

* Secure JWT-based admin authentication
* Dashboard with website statistics
* View and manage all blog posts
* Create new blog posts
* Publish and unpublish posts
* Delete blog posts
* View submitted comments
* Approve pending comments
* Delete comments

### Rich Text Content

QuickBlog uses Quill as the rich text editor, allowing administrators to create properly formatted blog content with a user-friendly editing experience.

### AI-Assisted Blog Generation

The platform integrates the Google Gemini API to assist administrators in generating blog content, making the content creation workflow faster and more efficient.

### Image Management

Images can be uploaded through the backend and hosted using ImageKit, providing optimized image storage and delivery for blog content.

### Comment Moderation

Comments submitted by visitors go through an approval workflow before becoming publicly visible. Administrators can review, approve, or delete comments from the dashboard.

---

## Tech Stack

### Frontend

* React 19
* React Router
* Axios
* Quill
* React Hot Toast
* Vite

### Backend

* Node.js
* Express 5
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* Multer
* ImageKit
* Google Gemini API

---

## Architecture

QuickBlog follows a client-server architecture built around the MERN stack.

```text
quick_blog/
│
├── client/                         # React frontend
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # Application pages and routes
│   │   └── context/                # Application state/context
│   └── ...
│
├── server/                         # Express backend
│   ├── config/                     # Database and service configuration
│   ├── controllers/                # Request handlers
│   ├── middlewares/                # Authentication and upload middleware
│   ├── models/                     # Mongoose models
│   ├── routes/                     # API routes
│   └── server.js                   # Backend entry point
│
└── README.md
```

---

## API Overview

### Blog API

Base route:

```text
/api/blog
```

| Method | Endpoint          | Description                  | Authentication |
| ------ | ----------------- | ---------------------------- | -------------- |
| GET    | `/all`            | Get all published blogs      | Public         |
| GET    | `/:id`            | Get a single blog            | Public         |
| POST   | `/addBlog`        | Create a blog post           | Admin          |
| POST   | `/delete`         | Delete a blog post           | Admin          |
| POST   | `/toggle-publish` | Publish/unpublish a blog     | Admin          |
| POST   | `/addComment`     | Submit a comment             | Public         |
| POST   | `/comments`       | Get comments for a blog      | Public         |
| POST   | `/generate`       | Generate AI-assisted content | Admin          |

### Admin API

Base route:

```text
/api/admin
```

| Method | Endpoint           | Description                | Authentication |
| ------ | ------------------ | --------------------------- | -------------- |
| POST   | `/login`           | Authenticate administrator | Public         |
| GET    | `/blogs`           | Get all blogs              | Admin          |
| GET    | `/comments`        | Get all comments           | Admin          |
| GET    | `/dashboard`       | Get dashboard statistics   | Admin          |
| POST   | `/approve-comment` | Approve a pending comment  | Admin          |
| POST   | `/delete-comment`  | Delete a comment           | Admin          |

---

## Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=3000

JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password

MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key

GEMINI_API_KEY=your_gemini_api_key
```

### Environment Variable Description

| Variable                | Purpose                            |
| ----------------------- | ----------------------------------- |
| `PORT`                  | Port used by the Express server    |
| `JWT_SECRET`            | Secret used for JWT authentication |
| `ADMIN_EMAIL`           | Administrator login email          |
| `ADMIN_PASSWORD`        | Administrator login password       |
| `MONGODB_URI`           | MongoDB database connection string |
| `IMAGEKIT_URL_ENDPOINT` | ImageKit delivery endpoint         |
| `IMAGEKIT_PRIVATE_KEY`  | ImageKit private API key           |
| `IMAGEKIT_PUBLIC_KEY`   | ImageKit public API key            |
| `GEMINI_API_KEY`        | Google Gemini API key              |

Never commit your `.env` file or expose API keys, database credentials, JWT secrets, or administrator credentials.

---

## Getting Started

### Prerequisites

Before running the project, make sure you have:

* Node.js installed
* npm installed
* MongoDB or a MongoDB Atlas database
* ImageKit account
* Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/Sadafhssc/quick_blog.git
cd quick_blog
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Configure Environment Variables

Create:

```text
server/.env
```

and add the required environment variables.

### 4. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 5. Start the Backend

From the `server` directory:

```bash
npm run server
```

The backend will run on the configured port, which defaults to:

```text
http://localhost:3000
```

### 6. Start the Frontend

From the `client` directory:

```bash
npm run dev
```

Vite will provide the frontend development URL, typically:

```text
http://localhost:5173
```

---

## Authentication

QuickBlog uses JSON Web Tokens for administrator authentication.

The admin login endpoint validates the configured administrator credentials and provides authentication for protected dashboard operations.

Protected functionality includes:

* Creating blog posts
* Deleting blog posts
* Publishing and unpublishing posts
* Managing comments
* Accessing dashboard statistics
* Generating AI-assisted blog content

---

## Content Management Workflow

The typical blog publishing workflow is:

```text
Admin Login
     |
     v
Admin Dashboard
     |
     v
Create Blog Post
     |
     +----> Upload Image
     |
     +----> Write/Edit Content
     |
     +----> Generate Content with Gemini
     |
     v
Publish Blog
     |
     v
Public Blog
     |
     v
Visitor Comments
     |
     v
Admin Review
     |
     +----> Approve
     |
     +----> Delete
     |
     v
Approved Comment Visible Publicly
```

---

## AI Content Generation

QuickBlog integrates the Google Gemini API to provide AI-assisted blog content generation.

The feature is intended to assist administrators during the writing process by generating content that can subsequently be reviewed and edited through the rich text editor before publication.

This keeps the administrator in control of the final published content.

---

## Image Uploads

Blog images are handled through the backend using Multer for file processing and ImageKit for image hosting and delivery.

The general workflow is:

```text
Admin
  |
  v
Image Upload
  |
  v
Multer
  |
  v
ImageKit
  |
  v
Hosted Image URL
  |
  v
Blog Post
```

---

## Comment Moderation

QuickBlog uses an approval-based comment system.

When a visitor submits a comment:

1. The comment is stored in the database.
2. The comment remains pending.
3. An administrator reviews it through the dashboard.
4. The administrator can approve or delete it.
5. Approved comments become visible on the public blog.

This provides administrators with control over publicly displayed user-generated content.

---

## Database Models

The backend uses MongoDB with Mongoose for data persistence.

Core models include:

### Blog

Stores information such as:

* Blog title
* Blog content
* Blog image
* Category
* Publication status
* Creation date
* Other blog metadata

### Comment

Stores information related to:

* Comment author
* Comment content
* Associated blog
* Approval status
* Creation date

---

## Project Goals

QuickBlog was developed to demonstrate the implementation of a modern full-stack content management platform using the MERN stack.

The project brings together several practical concepts, including:

* RESTful API development
* React application architecture
* MongoDB database management
* JWT authentication
* File uploads
* Cloud image hosting
* Rich text editing
* AI API integration
* Content moderation
* Admin dashboard development
* Client-server communication

---

## Future Improvements

Potential future enhancements include:

* Role-based admin permissions
* Blog editing functionality
* Search functionality
* Pagination and infinite scrolling
* SEO metadata management
* Scheduled publishing
* Advanced analytics
* Markdown support
* Social sharing
* Email notifications
* Improved AI writing tools
* Automated image optimization
* Deployment with production CI/CD

---

## Security Considerations

For production deployments:

* Store all secrets in environment variables.
* Never commit `.env` files.
* Use strong JWT secrets.
* Use secure administrator credentials.
* Configure CORS appropriately.
* Validate and sanitize user-generated content.
* Validate uploaded files and restrict unsupported file types.
* Apply rate limiting to authentication and public APIs.
* Use HTTPS in production.
* Keep dependencies updated.

---

## Author

**Sadaf Javed**

GitHub: https://github.com/Sadafhssc

LinkedIn: https://linkedin.com/in/sadaf-javed

Project Repository: https://github.com/Sadafhssc/quick_blog
