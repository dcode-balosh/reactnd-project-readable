const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_COMMENTS':
            return action.comments;
        default:
            return state
    }
};

export default commentsReducer;

