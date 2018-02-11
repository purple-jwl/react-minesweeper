import React from 'react';
import Cell from '../containers/Cell';

const style = {
    display: 'flex',
    flexDirection: 'row',
};

const Board = ({ rows, columns }) => {
    const rs = [];

    for (let i = 0; i < rows; i++) {
        const cs = [];
        for (let j = 0; j < columns; j++) {
            cs.push(
                <Cell
                    key={j}
                    y={i}
                    x={j}
                />
            );
        }
        rs.push(
            <div key={i} style={style}>
                {cs}
            </div>
        );
    }

    return (
        <div>
            {rs}
        </div>
    );
};

export default Board;

// export default class Board extends React.Component {
//     _renderRow(i) {
//         const cells = [];
//
//         for (let j = 0; j < this.props.columns; j++) {
//             cells.push(
//                 <Cell
//                     key={j}
//                     y={i}
//                     x={j}
//                     mineNumber={this.props.mineNumber}
//                     rows={this.props.rows}
//                     columns={this.props.columns}
//                     board={this.props.board}
//                     isOpened={this.props.isOpened}
//                     isFlagged={this.props.isFlagged}
//                     onLeftClick={this.props.onLeftClick}
//                     onRightClick={this.props.onRightClick}
//                 />
//             );
//         }
//
//         const style = {
//             display: 'flex',
//             flexDirection: 'row',
//         };
//
//         return (
//             <div key={i} style={style}>
//                 {cells}
//             </div>
//         );
//     }
//
//     render() {
//         const rows = [];
//
//         for (let i = 0; i < this.props.rows; i++) {
//             rows.push(this._renderRow(i));
//         }
//
//         return (
//             <div>
//                 {rows}
//             </div>
//         );
//     }
// }
