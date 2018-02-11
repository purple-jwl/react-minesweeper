import { connect } from 'react-redux';
import { changeDifficulty } from '../actions';
import ControlArea from '../components/ControlArea';

const mapStateToProps = (state) => ({
    status: state.status,
    mines: state.mines,
    flags: state.flags,
    seconds: state.seconds,
});

const mapDispatchToProps = (dispatch) => ({
    onChangeDifficulty: (e) => {
        e.preventDefault();
        const difficulty = document.getElementById('difficulty').value;
        dispatch(changeDifficulty(difficulty));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ControlArea);
