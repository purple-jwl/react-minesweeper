import React from 'react';

const style = {
    height: '24px',
    width: '24px',
    border: '1px solid black',
    margin: '2px',
//    backgroundColor: isOpened ? 'white' : 'lightyellow',
    textAlign: 'center',
};

const Cell = ({board, isFlagged, isOpened, mineNumber, openCell, toggleFlag}) => (
    <div
        style={Object.assign({}, style, {
            backgroundColor: isOpened ? 'white' : 'lightyellow'
        })}
        onClick={openCell}
        onContextMenu={toggleFlag}
    >
        {isFlagged ? '🚩' : (
            !isOpened ? '' : (
                board === mineNumber ? '💣' : (
                    board === 0 ? '' : board
                )
            )
        )}
    </div>
);

export default Cell;
