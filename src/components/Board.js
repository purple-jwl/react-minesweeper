import React from 'react';
import Row from './Row';

export default class Board extends React.Component {
    render() {
        const rows = [];

        for (let i = 0; i < this.props.height; i++) {
            rows.push(
                <Row
                    key={i}
                    y={i}
                    height={this.props.height}
                    width={this.props.width}
                />
            );
        }

        return (
            <div>
                {rows}
            </div>
        );
    }
}
