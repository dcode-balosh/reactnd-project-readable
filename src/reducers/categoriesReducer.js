import {categories} from '../init_data/categories';

const categoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            let new_state = categories;
            return new_state;
        default:
            return state
    }
};

export default categoriesReducer;