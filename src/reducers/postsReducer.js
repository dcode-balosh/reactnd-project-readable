import {posts} from '../init_data/posts';
import * as Actions from '../actions/index'
const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case Actions.init().type:
            return posts;
        case Actions.updatePosts().type:
            return action.posts;
        default:
            return state
    }
};

export default postsReducer;

