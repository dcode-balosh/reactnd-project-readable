const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_POSTS':
            return action.posts;
        default:
            return state
    }
};

export default postsReducer;

