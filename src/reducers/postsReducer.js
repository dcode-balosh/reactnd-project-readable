import * as Actions from '../actions/index'
const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.updatePosts().type:
            return action.posts;
        default:
            return state
    }
};

export default postsReducer;

