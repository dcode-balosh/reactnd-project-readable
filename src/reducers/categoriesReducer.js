const categoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            let new_state = ['category_one', 'category_two', 'category_three'];
            return new_state;
        default:
            return state
    }
};

export default categoriesReducer;

