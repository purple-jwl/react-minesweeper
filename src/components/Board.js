import React from 'react';
import Cell from '../containers/Cell';

const style = {
    display: 'flex',
    flexDirection: 'row',
};

const Board = ({ rows, columns }) => {
    const rs = [];

    for (let i = 0; i < rows; i++) {
        const cs = [];
        for (let j = 0; j < columns; j++) {
            cs.push(
                <Cell
                    key={j}
                    y={i}
                    x={j}
                />
            );
        }
        rs.push(
            <div key={i} style={style}>
                {cs}
            </div>
        );
    }

    return (
        <div>
            {rs}
        </div>
    );
};

export default Board;
