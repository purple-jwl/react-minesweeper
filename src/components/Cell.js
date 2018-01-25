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
        const y = this.props.y;
        const x = this.props.x;
        const board = this.props.board[y][x];
        const isOpened = this.props.isOpened[y][x];
        const isFlagged = this.props.isFlagged[y][x];

        const style = {
            height: '24px',
            width: '24px',
            border: '1px solid black',
            margin: '2px',
            backgroundColor: isOpened ? 'white' : 'lightyellow',
            textAlign: 'center',
        };

        return (
            <div
                style={style}
                onClick={this._handleLeftClick}
                onContextMenu={this._handleRightClick}
            >
                {isFlagged ? '🚩' : (
                    !isOpened ? '' : (
                        board === this.props.mineNumber ? '💣' : (
                            board === 0 ? '' : board
                        )
                    )
                )}
            </div>
        );
    }
}
