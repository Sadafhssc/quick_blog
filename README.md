QUICKBLOG
=========================================================

QuickBlog is a full-stack blogging platform with a public-facing
blog and a dedicated admin dashboard for content management. It
supports AI-assisted blog writing, image uploads, and comment
moderation, and is built on the MERN stack.


FEATURES
---------------------------------------------------------

- Public blog with a home feed, category browsing, and individual
  blog detail pages
- Rich text editing for blog content using Quill
- AI-assisted content generation for blog posts using the Google
  Gemini API
- Image upload and hosting via ImageKit
- Comment system with admin approval workflow (comments require
  approval before appearing publicly)
- Admin authentication with JWT-based login
- Admin dashboard for managing blogs, comments, and viewing site
  statistics
- Ability to publish, unpublish, or delete blog posts


TECH STACK
---------------------------------------------------------

Frontend
    React 19
    React Router
    Axios
    Quill (rich text editor)
    React Hot Toast (notifications)
    Vite (build tool)

Backend
    Node.js
    Express 5
    MongoDB with Mongoose
    JSON Web Tokens (JWT) for authentication
    Multer (file upload handling)
    ImageKit (image storage and delivery)
    Google Gemini API (AI content generation)


PROJECT STRUCTURE
---------------------------------------------------------

quick_blog/
  client/               React frontend (Vite)
    src/
      components/       Reusable UI components (Navbar, BlogCard,
                         Comment, AdminHeader, etc.)
      pages/             Route-level pages (Home, Blog, Layout,
                         admin pages)
      context/           Application context/state

  server/               Express backend
    config/             Database connection setup
    controllers/        Request handlers for admin and blog routes
    middlewares/         Auth and file upload middleware
    models/              Mongoose schemas (Blog, Comment)
    routes/              API route definitions
    server.js            Application entry point


API OVERVIEW
---------------------------------------------------------

Blog Routes (/api/blog)
    GET  /all              List all published blogs
    GET  /:id               Get a single blog by ID
    POST /addBlog           Create a new blog (admin only, supports
                             image upload)
    POST /delete             Delete a blog (admin only)
    POST /toggle-publish      Publish or unpublish a blog (admin only)
    POST /addComment          Add a comment to a blog
    POST /comments            Fetch comments for a blog
    POST /generate             Generate blog content using AI

Admin Routes (/api/admin)
    POST /login               Admin login
    GET  /blogs                Get all blogs (admin view)
    GET  /comments              Get all comments
    GET  /dashboard              Get dashboard statistics
    POST /approve-comment          Approve a pending comment
    POST /delete-comment            Delete a comment


GETTING STARTED
---------------------------------------------------------

Prerequisites
    - Node.js installed
    - A MongoDB instance (local or cloud, e.g. MongoDB Atlas)
    - An ImageKit account (for image uploads)
    - A Google Gemini API key (for AI content generation)

Installation

    Clone the repository:

        git clone https://github.com/Sadafhssc/quick_blog.git
        cd quick_blog

    Install server dependencies:

        cd server
        npm install

    Install client dependencies:

        cd ../client
        npm install


ENVIRONMENT VARIABLES
---------------------------------------------------------

Create a .env file inside the server directory with the following
variables:

    PORT=3000
    JWT_SECRET=your_jwt_secret
    ADMIN_EMAIL=your_admin_email
    ADMIN_PASSWORD=your_admin_password
    MONGODB_URI=your_mongodb_connection_string
    IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
    IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
    IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
    GEMINI_API_KEY=your_gemini_api_key

This file is excluded from version control via .gitignore and
should never be committed.


RUNNING THE APPLICATION
---------------------------------------------------------

Start the backend server:

    cd server
    npm run server

Start the frontend development server:

    cd client
    npm run dev

The client will be available at the local Vite development URL
(typically http://localhost:5173), and the API will run on the
port specified in .env (default 3000).



AUTHOR
---------------------------------------------------------

Sadaf Javed
LinkedIn: https://linkedin.com/in/sadaf-javed
