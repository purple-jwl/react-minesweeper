import React from 'react';

const style = {
  base: {
    height: '24px',
    width: '24px',
    margin: '2px',
    border: '1px solid #C3C3C3',
    backgroundColor: '#C3C3C3',
    textAlign: 'center',
  },
  opened: {
    backgroundColor: 'white',
  },
};

const Cell = ({
  board,
  isFlagged,
  isOpened,
  mineNumber,
  openCell,
  toggleFlag,
}) => (
  <div
    style={Object.assign({}, style.base, isOpened ? style.opened : {})}
    onClick={openCell}
    onContextMenu={toggleFlag}
  >
    {isFlagged
      ? '🚩'
      : !isOpened ? '' : board === mineNumber ? '💣' : board === 0 ? '' : board}
  </div>
);

export default Cell;
