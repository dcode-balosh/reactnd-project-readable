export const init = () => ({
   type: 'INIT'
});

export const updatePosts = (posts) => ({
    type: 'UPDATE_POSTS',
    posts
});

export const updateComments = (comments) => ({
    type: 'UPDATE_COMMENTS',
    comments
});
