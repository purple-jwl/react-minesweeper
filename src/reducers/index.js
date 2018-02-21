const reducers = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_DIFFICULTY':
      return Object.assign({}, state, action.initState);
    case 'SET_STATE':
      return Object.assign({}, state, action.state);
    case 'CLEAR_TIMER':
      return Object.assign({}, state, { seconds: 0 });
    case 'TICK_TIMER':
      return Object.assign({}, state, { seconds: state.seconds + 1 });
    default:
      return state;
  }
};

export default reducers;
