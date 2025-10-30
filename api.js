/**
 * This file creates and exports a reusable Axios instance.
 * Instead of typing the same base URL or settings for every request
 * we centralize configuration here.
 */

const axios = require('axios');

// Create a reusable Axios instance with a base URL and timeout.
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/WRONG',
    timeout: 5000,
});

// REQUEST INTERCEPTOR
// This runs before every request is sent
// We can modify the headers, log requests, or add authentication tokens here.
api.interceptors.request.use(config => {
    console.log(`[Request]: ${config.method.toUpperCase()} ${config.url}`);
    return config; // Must return the config so Axios can continue
});


// RESPONSE INTERCEPTOR
// This runs for every response receieved.
// Useful for logging, transforming data, or handling common errors.
api.interceptors.response.use(
    response => {
        console.log(`[Response]: ${response.status}`);
        return response; // Always return the response so the next code can use it
    },
    error => {
        console.error('[x][Error]:', error.message);
        return Promise.reject(error); // Pass error down to be caught later
    }
);

// Export our configured Axios instance for use in other files
module.exports = api;