import React from 'react';

const style = {
    margin: '5px',
};

const ControlArea = ({ status, mines, flags, seconds, changeDifficulty }) => {
    return (
        <div>
            <span style={style}>
                {status === 'ready' ? '😪' : (status === 'playing' ? '🤔' : (status === 'clear' ? '🤗' : '😱'))}
            </span>
            <span style={style} onChange={changeDifficulty}>
                <select id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="normal">Normal</option>
                    <option value="hard">Hard</option>
                </select>
            </span>
            <span style={style}><span role="img" aria-label="Bomb">💣</span> : {mines}</span>
            <span style={style}><span role="img" aria-label="Triangular Flag">🚩</span> : {flags}</span>
            <span style={style}><span role="img" aria-label="Alarm Clock">⏰</span> : {seconds}</span>
        </div>
    );
};

export default ControlArea;
