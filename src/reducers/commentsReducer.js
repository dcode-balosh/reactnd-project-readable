const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EMPTY_COMMENTS':
            return {};
        case 'UPDATE_COMMENTS':
            return { ...state , ...action.comments };
        default:
            return state
    }
};

export default commentsReducer;

