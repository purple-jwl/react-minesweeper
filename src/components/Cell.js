import React from 'react';

export default class Cell extends React.Component {
    _handleLeftClick = (e) => {
        e.preventDefault();
        this.props.onLeftClick(this.props.x, this.props.y);
    };

    _handleRightClick = (e) => {
        e.preventDefault();
        this.props.onRightClick(this.props.x, this.props.y);
    };

    render() {
        const style = {
            height: '32px',
            width: '32px',
            border: '1px solid black',
            margin: '2px',
            backgroundColor: 'lightyellow',
            textAlign: 'center',
        };

        const y = this.props.y;
        const x = this.props.x;
        const board = this.props.board;

        return (
            <div
                style={style}
                onClick={this._handleLeftClick}
                onContextMenu={this._handleRightClick}
            >
                {board[y][x] === this.props.mineNumber ? '💣' : (
                    board[y][x] === 0 ? '' : board[y][x]
                )}
            </div>
        );
    }
}
