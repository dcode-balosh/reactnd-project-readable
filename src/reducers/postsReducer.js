const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            let new_state = ['post_one', 'post_two', 'post_three'];
            return new_state;
        default:
            return state
    }
};

export default postsReducer;

