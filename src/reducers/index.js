import { combineReducers } from 'redux';
import categories from './categoriesReducer';
import posts from './postsReducer';
import comments from './commentsReducer';

const rootReducer = combineReducers({
    categories,
    posts,
    comments
})

export default rootReducer;
