const init_data = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            let new_state = {};
            new_state['categories'] = ['category_one', 'category_two', 'category_three'];
            new_state['posts'] = ['post_one', 'post_two', 'post_three'];
            return new_state;
        default:
            return state
    }
};

export default init_data;

