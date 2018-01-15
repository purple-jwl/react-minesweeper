import React from 'react';
import Cell from './Cell';

export default class Board extends React.Component {
    _renderRow(i) {
        const cells = [];

        for (let j = 0; j < this.props.columns; j++) {
            cells.push(
                <Cell
                    key={j}
                    y={i}
                    x={j}
                    rows={this.props.rows}
                    columns={this.props.columns}
                />
            );
        }

        const style = {
            display: 'flex',
            flexDirection: 'row',
        };

        return (
            <div key={i} style={style}>
                {cells}
            </div>
        );
    }

    render() {
        const rows = [];

        for (let i = 0; i < this.props.rows; i++) {
            rows.push(this._renderRow(i));
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}
