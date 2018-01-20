import React from 'react';

export default class Difficulty extends React.Component {

    _handleOnChange = (e) => {
        e.preventDefault();
        this.props.onChange(document.getElementById('difficulty').value);
    };

    render() {
        return (
            <div onChange={this._handleOnChange}>
                <select id="difficulty">
                    <option value="easy">Easy</option>
                    <option value="normal">Normal</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
        );
    }
}
