import { connect } from 'react-redux';
import * as actions from '../actions';
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

const mapDispatchToProps = (dispatch, ownProps) => {
    const y = ownProps.y;
    const x = ownProps.x;

    return {
        openCell: (e) => {
            e.preventDefault();
            dispatch(actions.openCell({x, y}));
        },
        toggleFlag: (e) => {
            e.preventDefault();
            dispatch(actions.toggleFlag({x, y}));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Cell);
