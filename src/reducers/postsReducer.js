import {posts} from '../init_data/posts';

const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            let new_state = posts;
            return new_state;
        default:
            return state
    }
};

export default postsReducer;

