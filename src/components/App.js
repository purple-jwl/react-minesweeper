import React from 'react';
import Board from './Board';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const mineNumber = 1000000;

        this.isFirstOpen = true;
        this.mines = 10;

        const rows = 9;
        const columns = 9;

        const board = Array.from(new Array(rows), () => (new Array(columns).fill(0)));
        const isOpened = Array.from(new Array(rows), () => (new Array(columns).fill(false)));
        const isFlagged = Array.from(new Array(rows), () => (new Array(columns).fill(false)));

        this.state = {
            mineNumber: mineNumber,
            rows: rows,
            columns: columns,
            remainingCells: rows * columns,
            status: 'playing',
            board: board,
            isOpened: isOpened,
            isFlagged: isFlagged,
        };
    }

    handleLeftClick = (cx, cy) => {
        if (this.isFirstOpen) {
            this.isFirstOpen = false;

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

            if (remainingCells === this.mines) {
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
        this.setState({isFlagged});
    };

    _init = (sx, sy) => {
        const board = this.state.board.slice();

        for (let m = 0; m < this.mines; m++) {
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
    }

    render() {
        return (
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
        );
    }
}
