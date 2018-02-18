import React from 'react';
import Cell from '../containers/Cell';

const style = {
    display: 'flex',
    flexDirection: 'row',
};

const Board = ({ rows, columns }) => {
    const board = [];

    for (let i = 0; i < rows; i++) {
        const cells = [];
        for (let j = 0; j < columns; j++) {
            cells.push(
                <Cell
                    key={j}
                    y={i}
                    x={j}
                />
            );
        }
        board.push(
            <div key={i} style={style}>
                {cells}
            </div>
        );
    }

    return (
        <div>
            {board}
        </div>
    );
};

export default Board;
