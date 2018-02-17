export const getInitConfig = (difficulty = 'easy') => {
    const mineNumber = 1000000;

    const [mines, rows, columns] = {
        'easy': [10, 9, 9],
        'normal': [40, 16, 16],
        'hard': [99, 16, 30],
    }[difficulty];

    const board = Array.from(new Array(rows), () => (new Array(columns).fill(0)));
    const isOpened = Array.from(new Array(rows), () => (new Array(columns).fill(false)));
    const isFlagged = Array.from(new Array(rows), () => (new Array(columns).fill(false)));

    return {
        mineNumber: mineNumber,
        mines: mines,
        rows: rows,
        columns: columns,
        remainingCells: rows * columns,
        flags: 0,
        seconds: 0,
        status: 'ready',
        board: board,
        isOpened: isOpened,
        isFlagged: isFlagged,
        isFirstOpen: true,
    }
};
