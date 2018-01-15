import React from 'react';
import Board from './Board';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        const rows = 9;
        const columns = 9;
        const board = Array.from(new Array(rows), () => (new Array(columns).fill()));

        this.state = {
            rows: rows,
            columns: columns,
            board: board,
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
                board={this.state.board}
                rows={this.state.rows}
                columns={this.state.columns}
                onLeftClick={this.handleLeftClick}
                onRightClick={this.handleRightClick}
            />
        );
    }
}
