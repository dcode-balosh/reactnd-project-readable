// taken from reactnd-project-myreads-starter
const api = "http://localhost:3001";


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};


export const getCategories = () =>
    fetch(`${api}/categories`, { headers })
        .then(res => res.json());

export const getCategoryPost = (categoryId) =>
    fetch(`${api}/${categoryId}/posts`, { headers })
        .then(res => res.json());


export const getPosts = () =>
    fetch(`${api}/posts`, { headers })
        .then(res => res.json());

export const newPost = (title, body, author, category) =>
    fetch(`${api}/books/${book.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: guid(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category
        })
    }).then(res => res.json());

export const getPost = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json());

export const votePost = (postId,option) =>
    fetch(`${api}/posts/${postId.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            option
        })
    }).then(res => res.json());

export const updatePost = (postId,title,body) =>
    fetch(`${api}/posts/${postId.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body
        })
    }).then(res => res.json());

export const deletePost = (postId) =>
    fetch(`${api}/books/${postId.id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }).then(res => res.json());

export const getPostComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json());

export const newComment = (body,author,parentId) =>
    fetch(`${api}/comments}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            body,
            author,
            parentId})
    }).then(res => res.json());

export const getComment = (commentId) =>
    fetch(`${api}/comments/${commentId}`, { headers })
        .then(res => res.json());

export const voteComment = (commentId) =>
    fetch(`${api}/comments/${commentId.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }).then(res => res.json());

export const updateComment = (commentId,body) =>
    fetch(`${api}/posts/${commentId.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            timestamp: Date.now(),
            body
        })
    }).then(res => res.json());

export const deleteComment = (commentId) =>
    fetch(`${api}/books/${commentId.id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }).then(res => res.json());
