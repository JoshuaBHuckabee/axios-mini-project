/**
 * This file defines helper functions for working with the "posts" endpoint.
 * Each function uses our pre-configured Axious instance from api.js
 */

const api = require('./api');

/**
 * Fetch all posts from the API.
 * - We limit the results to 5 to keep console output short.
 */
async function getPosts() {
    const res = await api.get('/posts');
    return res.data.slice(0, 5); // limit to first 5
}

/**
 * Fetch a single post by its ID.
 * - Example: getPost(1) → Fetches post with ID 1
 */
async function getPost(id) {
    const res = await api.get(`/posts/${id}`);
    return res.data;
}

/**
 * Create a new post.
 * - The JSONPlaceholder API doesn't actuall create data, 
 * but it simulates a successful POST response.
 */
async function createPost(title, body, userId) {
    const res = await api.post(`/posts`, { title, body, userId });
    return res.data;
}

// Export functions so other files ( like index.js ) can use them.
module.exports = { getPosts, getPost, createPost };