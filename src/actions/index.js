import { getInitConfig } from '../config';

export const changeDifficulty = (difficulty) => {
    return {
        type: 'CHANGE_DIFFICULTY',
        initState: getInitConfig(difficulty)
    };
};

export const toggleFlag = (coordinate) => {
    return {
        type: 'TOGGLE_FLAG',
        coordinate,
    };
};

export const openCell = (coordinate) => {
    return {
        type: 'OPEN_CELL',
        coordinate,
    };
};
