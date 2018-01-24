import React from 'react';

export default class Difficulty extends React.Component {

    _handleOnChange = (e) => {
        e.preventDefault();
        this.props.onChange(document.getElementById('difficulty').value);
    };

    render() {
        const style = {
            padding: '5px',
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
                <span> | </span>
                <span style={style} role="img" aria-label="Bomb"> 💣 : {this.props.mines}</span>
                <span style={style} role="img" aria-label="Triangular Flag"> 🚩 : {this.props.flags}</span>
            </div>
        );
    }
}
