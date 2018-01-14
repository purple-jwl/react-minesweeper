import React from 'react';
import Board from './Board';

export default class App extends React.Component {
    render() {
        const height = 9;
        const width = 9;

        return (
            <Board
                height={height}
                width={width}
            />
        );
    }
}
