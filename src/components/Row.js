import React from 'react';
import Cell from './Cell';

export default class Row extends React.Component {
    render() {
        const cells = [];

        for (let j = 0; j < this.props.width; j++) {
            cells.push(
                <Cell
                    key={j}
                    y={this.props.y}
                    x={j}
                    height={this.props.height}
                    width={this.props.width}
                />
            );
        }

        const style = {
            display: 'flex',
            flexDirection: 'row',
        };

        return (
            <div style={style}>
                {cells}
            </div>
        );
    }
}
