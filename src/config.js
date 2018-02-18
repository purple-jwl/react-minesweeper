const MINE_NUMBER = 1000000;

const config = {
    easy: {
        mines:  10,
        rows:    9,
        columns: 9,
    },
    normal: {
        mines:   40,
        rows:    16,
        columns: 16,
    },
    hard: {
        mines:   99,
        rows:    16,
        columns: 30,
    },
};

export const getInitConfig = (difficulty = 'easy') => {
    const {mines, rows, columns} = config[difficulty];
    const board = Array.from(new Array(rows), () => (new Array(columns).fill(0)));
    const isOpened = Array.from(new Array(rows), () => (new Array(columns).fill(false)));
    const isFlagged = Array.from(new Array(rows), () => (new Array(columns).fill(false)));

    return {
        mineNumber: MINE_NUMBER,
        mines: mines,
        rows: rows,
        columns: columns,
        board: board,
        isOpened: isOpened,
        isFlagged: isFlagged,
        remainingCells: rows * columns,
        flags: 0,
        seconds: 0,
        status: 'ready',
        isFirstOpen: true,
    }
};
