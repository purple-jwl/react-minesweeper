import React from 'react';
import Cookies from 'js-cookie';

const style = {
  margin: '5px',
};

const ControlArea = ({ status, mines, flags, seconds, changeDifficulty }) => {
  const difficulty = Cookies.get('difficulty');

  return (
    <div>
      <span style={style}>
        <a href="https://github.com/purple-jwl/react-minesweeper" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>GitHub
        </a>
      </span>
      <span style={style}>
        {status === 'ready'
          ? '😪'
          : status === 'playing' ? '🤔' : status === 'clear' ? '🤗' : '😱'}
      </span>
      <span style={style}>
        <select value={difficulty} onChange={changeDifficulty}>
          <option value="easy">Easy</option>
          <option value="normal">Normal</option>
          <option value="hard">Hard</option>
        </select>
      </span>
      <span style={style}>
        <span role="img" aria-label="Bomb">
          💣
        </span>{' '}
        : {mines}
      </span>
      <span style={style}>
        <span role="img" aria-label="Triangular Flag">
          🚩
        </span>{' '}
        : {flags}
      </span>
      <span style={style}>
        <span role="img" aria-label="Alarm Clock">
          ⏰
        </span>{' '}
        : {seconds}
      </span>
      {(() => {
        if (status === 'game_over') {
          return (
            <span style={style}>
              <button>Retry</button>
            </span>
          );
        }
      })()}
    </div>
  );
};

export default ControlArea;
