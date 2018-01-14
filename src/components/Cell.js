import React from 'react';

export default class Cell extends React.Component {
    render() {
        const style = {
            height: '32px',
            width: '32px',
            border: '1px solid black',
            margin: '2px',
            backgroundColor: 'lightyellow',
        };

        return (
            <div style={style}>

            </div>
        );
    }
}
