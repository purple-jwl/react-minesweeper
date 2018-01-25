import React from 'react';
import Board from './Board';
import Difficulty from './Difficulty';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const mineNumber = 1000000;

        this.isFirstOpen = true;

        const mines = 10;
        const rows = 9;
        const columns = 9;

        const board = Array.from(new Array(rows), () => (new Array(columns).fill(0)));
        const isOpened = Array.from(new Array(rows), () => (new Array(columns).fill(false)));
        const isFlagged = Array.from(new Array(rows), () => (new Array(columns).fill(false)));

        this.state = {
            mineNumber: mineNumber,
            mines: mines,
            rows: rows,
            columns: columns,
            remainingCells: rows * columns,
            flags: 0,
            status: 'playing',
            seconds: 0,
            board: board,
            isOpened: isOpened,
            isFlagged: isFlagged,
        };

        this.changeDifficulty = this.changeDifficulty.bind(this);
        this.tick = this.tick.bind(this);
    }

    handleLeftClick = (cx, cy) => {
        if (this.isFirstOpen) {
            this.isFirstOpen = false;

            this.startTimer();

            this._init(cx, cy);
        }

        let status = this.state.status;
        let remainingCells = this.state.remainingCells;
        const isOpened = this.state.isOpened.slice();
        const queue = [[cx, cy]];

        while (queue.length) {
            const [cx, cy] = queue.shift();

            if (this.state.isOpened[cy][cx] || this.state.isFlagged[cy][cx]) {
                continue;
            }

            isOpened[cy][cx] = true;
            remainingCells--;

            if (this.state.board[cy][cx] === this.state.mineNumber) {
                status = 'game over';
                break;
            }

            if (remainingCells === this.state.mines) {
                status = 'clear';
                break;
            }

            if (this.state.board[cy][cx] !== 0) {
                continue;
            }

            for (let y = -1; y <= 1; y++) {
                for (let x = -1; x <= 1; x++) {
                    const ny = cy + y;
                    const nx = cx + x;
                    if (0 <= ny && ny < this.state.rows &&
                        0 <= nx && nx < this.state.columns) {
                        queue.push([nx, ny]);
                    }
                }
            }
        }

        this.setState({status, remainingCells, isOpened});
        this.checkGameStatus(status);
    };

    handleRightClick = (cx, cy) => {
        if (this.state.isOpened[cy][cx]) {
            return;
        }

        const isFlagged = this.state.isFlagged.slice();
        isFlagged[cy][cx] = !isFlagged[cy][cx];
        const flags = this.state.flags + (isFlagged[cy][cx] ? 1 : -1);
        this.setState({isFlagged, flags});
    };

    _init = (sx, sy) => {
        const board = this.state.board.slice();

        for (let m = 0; m < this.state.mines; m++) {
            const my = Math.floor(Math.random() * this.state.rows);
            const mx = Math.floor(Math.random() * this.state.columns);

            if ((mx === sx && my === sy) || this.state.board[my][mx] === this.state.mineNumber) {
                m--;
                continue;
            }

            // 地雷を設置する
            board[my][mx] = this.state.mineNumber;

            // 周辺の地雷カウント
            for (let y = -1; y <= 1; y++) {
                for (let x = -1; x <= 1; x++) {
                    const ny = my + y;
                    const nx = mx + x;
                    if (0 <= ny && ny < this.state.rows &&
                        0 <= nx && nx < this.state.columns &&
                        board[ny][nx] !== this.state.mineNumber
                    ) {
                        board[ny][nx]++;
                    }
                }
            }
        }

        this.setState({board})
    };

    checkGameStatus(status) {
        if (status === 'game over') {
            const isOpened = this.state.isOpened.slice();

            for (let y = 0; y < this.state.rows; y++) {
                for (let x = 0; x < this.state.columns; x++) {
                    isOpened[y][x] = true;
                }
            }

            this.setState({isOpened});
        }
    };

    changeDifficulty(difficulty) {
        const [mines, rows, columns] = {
            'easy': [10, 9, 9],
            'normal': [40, 16, 16],
            'hard': [99, 16, 30],
        }[difficulty];

        const remainingCells = rows * columns;
        const flags = 0;
        const status = 'playing';
        const board = Array.from(new Array(rows), () => (new Array(columns).fill(0)));
        const isOpened = Array.from(new Array(rows), () => (new Array(columns).fill(false)));
        const isFlagged = Array.from(new Array(rows), () => (new Array(columns).fill(false)));

        this.isFirstOpen = true;

        this.setState({mines, rows, columns, remainingCells, flags, status, board, isOpened, isFlagged});

        this.clearTimer();
    };

    startTimer() {
        this.interval = setInterval(this.tick, 1000);
    }

    clearTimer() {
        clearInterval(this.interval);
        this.setState({
           seconds: 0,
        });
    }

    tick() {
        this.setState({
           seconds: this.state.seconds + 1,
        });
    }

    render() {
        return (
            <div>
                <Difficulty
                    mines={this.state.mines}
                    flags={this.state.flags}
                    status={this.state.status}
                    seconds={this.state.seconds}
                    onChange={this.changeDifficulty}
                />
                <Board
                    mineNumber={this.state.mineNumber}
                    rows={this.state.rows}
                    columns={this.state.columns}
                    board={this.state.board}
                    isOpened={this.state.isOpened}
                    isFlagged={this.state.isFlagged}
                    onLeftClick={this.handleLeftClick}
                    onRightClick={this.handleRightClick}
                />
            </div>
        );
    }
}
