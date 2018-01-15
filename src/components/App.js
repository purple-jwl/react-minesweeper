import React from 'react';
import Board from './Board';

export default class App extends React.Component {
    render() {
        const rows = 9;
        const columns = 9;

        return (
            <Board
                rows={rows}
                columns={columns}
            />
        );
    }
}
