import { combineReducers } from 'redux';
import game from './game';
import timer from './timer';

const reducers = combineReducers({
    game,
    timer,
});

export default reducers;
