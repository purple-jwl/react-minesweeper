import { getConfig } from '../config';

const reducers = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_DIFFICULTY':
            return Object.assign({}, state, getConfig(action.difficulty));
        default:
            return state;
    }
};

export default reducers;
