const reducers = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_DIFFICULTY':
            return Object.assign({}, state, action.initState);
        case 'SET_STATE':
            return Object.assign({}, state, action.state);
        default:
            return state;
    }
};

export default reducers;
