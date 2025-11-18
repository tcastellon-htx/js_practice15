////////////////////////
// Practice Assignment 15
////////////////////////

// 1) Get all posts
async function getAllPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

// 2) Get all users
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// 3) Get comments for a specific post
async function getComments(postID) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const comments = await response.json();
        return comments;
    } catch (error) {
        console.error(`Error fetching comments for post ${postID}:`, error);
    }
}

// 4) Get a specific user
async function getUser(userID) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error(`Error fetching user ${userID}:`, error);
    }
}

// 5) Get todos for a specific user
async function getTodosForUser(userID) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}/todos`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const todos = await response.json();
        return todos;
    } catch (error) {
        console.error(`Error fetching todos for user ${userID}:`, error);
    }
}

// Example usage (uncomment to test):
// getAllPosts().then(posts => console.log(posts));
// getAllUsers().then(users => console.log(users));
// getComments(1).then(comments => console.log(comments));
// getUser(1).then(user => console.log(user));
// getTodosForUser(1).then(todos => console.log(todos));
