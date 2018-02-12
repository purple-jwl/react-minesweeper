const reducers = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_DIFFICULTY':
            return Object.assign({}, state, action.initState);
        default:
            return state;
    }
};

export default reducers;
