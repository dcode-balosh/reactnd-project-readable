import {comments} from '../init_data/comments';

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            let new_state = comments;
            return new_state;
        default:
            return state
    }
};

export default commentsReducer;

