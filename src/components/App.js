import React from 'react';
import Board from './Board';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const rows = 9;
        const columns = 9;
        const board = Array.from(new Array(rows), () => (new Array(columns).fill()));
        const isOpened = Array.from(new Array(rows), () => (new Array(columns).fill(false)));
        const isFlagged = Array.from(new Array(rows), () => (new Array(columns).fill(false)));

        this.state = {
            rows: rows,
            columns: columns,
            board: board,
            isOpened: isOpened,
            isFlagged: isFlagged,
        };
    }

    handleLeftClick = (x, y) => {
        const board = this.state.board.slice();
        board[y][x] = '🍣';
        this.setState({board})
    };

    handleRightClick = (x, y) => {
        const board = this.state.board.slice();
        board[y][x] = '🍺';
        this.setState({board})
    };

    render() {
        return (
            <Board
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
