import React from 'react';

export default class Difficulty extends React.Component {

    _handleOnChange = (e) => {
        e.preventDefault();
        this.props.onChange(document.getElementById('difficulty').value);
    };

    render() {
        const style = {
            margin: '5px',
        };

        return (
            <div>
                <span style={style}> [{this.props.status}]</span>
                <span style={style} onChange={this._handleOnChange}>
                    <select id="difficulty">
                        <option value="easy">Easy</option>
                        <option value="normal">Normal</option>
                        <option value="hard">Hard</option>
                    </select>
                </span>
                <span style={style}><span role="img" aria-label="Bomb">💣</span> : {this.props.mines}</span>
                <span style={style}><span role="img" aria-label="Triangular Flag">🚩</span> : {this.props.flags}</span>
                <span style={style}><span role="img" aria-label="Alarm Clock">⏰</span> : {this.props.seconds}</span>
            </div>
        );
    }
}
