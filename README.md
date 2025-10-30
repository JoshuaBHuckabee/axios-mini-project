# Axios Mini Project: A Beginner’s Guide to Making API Requests in Node.js

This mini project was created as part of a tutorial on how to use **Axios** — a popular HTTP client for JavaScript — to make API requests in **Node.js**.  
It demonstrates how to fetch, create, and list data from a REST API using a clean and scalable project structure.

> 🧠 This project is for **learning purposes only** and is based on the blog post:  
> **[Axios Mini Project: A Beginner’s Guide to Making API Requests in Node.js](<your-blog-post-link-here>)**

---

## What You’ll Learn

- How to install and configure Axios in a Node.js project  
- How to create a reusable Axios instance with interceptors  
- How to structure your project for API interactions  
- How to handle GET, POST, and error responses gracefully  

---

## Project Structure
<pre>
axios-mini-project/
├── package.json
├── index.js # Entry point – runs our script
├── api.js # Axios instance setup with interceptors
└── posts.js # API helper functions
</pre>

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/axios-mini-project.git
   cd axios-mini-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Run the project**
   ```bash
   node index.js
   ```

---

## How It Works
- The project uses JSONPlaceholder — a free fake REST API — as a data source.
- `api.js` sets up a pre-configured Axios client with interceptors for logging requests and responses.
- `posts.js` defines helper functions (`getPosts`, `getPost`, `createPost`) that interact with the /posts endpoint.
- `index.js` runs those functions sequentially to demonstrate real-world API usage.

---

## Example Output
When you run `node index.js`, you'll see logs like:

```css
[Request] GET /posts
[Response] Status: 200
Here are the first 5 posts:
[ { userId: 1, id: 1, title: '...', body: '...' }, ... ]

[Request] POST /posts
[Response] Status: 201
Newly Created Post:
{ title: 'Learning Axios', body: '...', userId: 1, id: 101 }
```

---

## Technologies Used
- Node.js
- Axios
- JavaScript (ES6)

---

## Author
Created by Josh Huckabee
