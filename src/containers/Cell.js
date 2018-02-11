import { connect } from 'react-redux';
import Cell from '../components/Cell';

const mapStateToProps = (state, ownProps) => {
    const y = ownProps.y;
    const x = ownProps.x;

    return {
        board: state.board[y][x],
        isFlagged: state.isFlagged[y][x],
        isOpened: state.isOpened[y][x],
        mineNumber: state.mineNumber,
    }
};

export default connect(mapStateToProps)(Cell);
