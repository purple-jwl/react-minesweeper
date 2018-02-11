import { connect } from 'react-redux';
import Board from '../components/Board';

const mapStateToProps = (state) => ({
    rows: state.rows,
    columns: state.columns,
});

export default connect(mapStateToProps)(Board);
