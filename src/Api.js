// taken from reactnd-project-myreads-starter
import * as Actions from "./actions/index";

const api = "http://localhost:3001";

// https://jsfiddle.net/briguy37/2MVFd/
/* eslint-disable */
function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};
/* eslint-enable */



// Generate a unique token for storing your data on the backend server.
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
    fetch(`${api}/posts`, {headers})
        .then(res => (res.json()).then(
            (data) => {
                return data.reduce((acu, cur) => {
                    acu[cur.id] = cur;
                    return acu
                }, {})
            }));


export const newPost = (dispatch,title, body, author, category) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: generateUUID(),
            timestamp: Date.now(),
            title,
            body,
            author,
            category
        })
    }).then(res => updatePostsState(dispatch));

export const getPost = (postId) =>
    fetch(`${api}/posts/${postId}`, { headers })
        .then(res => res.json());

export const votePost = (dispatch,postId,option) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            option: option
        })
    }).then(res => updatePostsState(dispatch));

export const updatePost = (dispatch,postId,title,body) =>
    fetch(`${api}/posts/${postId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body
        })
    }).then(res => updatePostsState(dispatch));

export const deletePost = (dispatch,postId) => {
    fetch(`${api}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }).then(res => updatePostsState(dispatch));
};

export const getPostComments = (postId) =>
    fetch(`${api}/posts/${postId}/comments`, { headers })
        .then(res => res.json().then(
            (data) => {
                return data.reduce((acu, cur) => {
                    acu[cur.id] = cur;
                    return acu
                }, {})
            }));

export const newComment = (dispatch,body,author,parentId) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: generateUUID(),
            timestamp: Date.now(),
            body,
            author,
            parentId
        })
    }).then(res => updateCommentsState(dispatch));

export const getComment = (commentId) =>
    fetch(`${api}/comments/${commentId}`, { headers })
        .then(res => res.json());

export const voteComment = (dispatch,commentId,option) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            option: option
        })
    }).then(res => updateCommentsState(dispatch));

export const updateComment = (dispatch, commentId, body) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            timestamp: Date.now(),
            body
        })
    }).then(res => updateCommentsState(dispatch));

export const deleteComment = (dispatch,commentId) =>
    fetch(`${api}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    }).then(res => updateCommentsState(dispatch));


export const updatePostsState = (dispatch) => {
    getPosts().then(posts =>
    dispatch(Actions.updatePosts(posts))
    )
};

export const updateCommentsState = (dispatch) => {
    getPosts().then((posts) => {
        let actions = Object.keys(posts).map((postId) => getPostComments(postId) ); //https://stackoverflow.com/questions/31413749/node-js-promise-all-and-foreach
        let results = Promise.all(actions);
        results.then(
            (result) => {
                let comments = result.reduce((acu,cur) => ({...acu,...cur}) , {} ) ;
                dispatch(Actions.updateComments(comments));
            });
    })
};
