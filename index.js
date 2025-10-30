/**
 * Main entry point for our Axios mini project
 * This file imports our post functions and runs them in sequence.
 */
const { getPosts, getPost, createPost } = require('./posts');

async function main() {
    try {
        console.log('Fetching posts...');
        const posts = await getPosts();
        console.log('Here are the first 5 posts:\n', posts);

        console.log('\nFetching single post ( ID=1 )...');
        const single = await getPost(1);
        console.log('Single post:\n', single);

        console.log('\nCreating a new post...');
        const newPost = await createPost(
          'Learning Axios', 
          'This post was created using Axios in Node.js!',
          1
        );
        console.log('Newly created post:\n', newPost);

        console.log('\nAll operations completed successfully!');
    } catch (err) {
        // Error handling — catches any error from Axios or our functions
        console.error('[x][Error]:', err.message);
    }
}

// Run the main function
main();