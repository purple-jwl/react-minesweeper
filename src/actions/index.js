import * as timer from './timer.js';
import { getInitConfig } from '../config';

export const changeDifficulty = (difficulty) => {
    return {
        type: 'CHANGE_DIFFICULTY',
        initState: getInitConfig(difficulty)
    };
};

export const toggleFlag = ({x, y}) => {
    return (dispatch, getState) => {
        const nextState = _toggleFlag(x, y, getState());
        dispatch(setState(nextState));
    }
};

export const openCell = ({x, y}) => {
    return (dispatch, getState) => {
        const nextState = getState();

        if (nextState.isFirstOpen) {
            Object.assign(nextState, {
                isFirstOpen: false,
                status: 'playing',
                board: _generateBoard(x, y, nextState),
            });
            dispatch(timer.startTimer());
        }

        Object.assign(nextState, _openCell(x, y, getState()));

        dispatch(setState(nextState));
    }
};

export const setState = (state) => {
    return {
        type: 'SET_STATE',
        current_state: state,
    }
};

const _openCell = (cx, cy, state) => {
    // let remainingCells = state.remainingCells;
    // const isOpened = state.isOpened.slice();
    const queue = [[cx, cy]];

    while (queue.length) {
        const [cx, cy] = queue.shift();

        if (state.isOpened[cy][cx] || state.isFlagged[cy][cx]) {
            continue;
        }

        state.isOpened[cy][cx] = true;
        state.remainingCells--;

        if (state.board[cy][cx] === state.mineNumber) {
            state.status = 'game over';
            break;
        }

        if (state.remainingCells === state.mines) {
            state.status = 'clear';
            break;
        }

        if (state.board[cy][cx] !== 0) {
            continue;
        }

        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                const ny = cy + y;
                const nx = cx + x;
                if (0 <= ny && ny < state.rows &&
                    0 <= nx && nx < state.columns) {
                    queue.push([nx, ny]);
                }
            }
        }
    }

    return state;

    //this.checkGameStatus(status);
};

const _generateBoard = (sx, sy, state) => {
    const board = state.board.slice();

    for (let m = 0; m < state.mines; m++) {
        const my = Math.floor(Math.random() * state.rows);
        const mx = Math.floor(Math.random() * state.columns);

        if ((mx === sx && my === sy) || state.board[my][mx] === state.mineNumber) {
            m--;
            continue;
        }

        // 地雷を設置する
        board[my][mx] = state.mineNumber;

        // 周辺の地雷カウント
        for (let y = -1; y <= 1; y++) {
            for (let x = -1; x <= 1; x++) {
                const ny = my + y;
                const nx = mx + x;
                if (0 <= ny && ny < state.rows &&
                    0 <= nx && nx < state.columns &&
                    board[ny][nx] !== state.mineNumber
                ) {
                    board[ny][nx]++;
                }
            }
        }
    }

    return board;
};

const _toggleFlag = (cx, cy, state) => {
    if (state.isOpened[cy][cx]) {
        return state;
    }

    state.isFlagged[cy][cx] = !state.isFlagged[cy][cx];
    state.flags = state.flags + (state.isFlagged[cy][cx] ? 1 : -1);

    return state;
};
