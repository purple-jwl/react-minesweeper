import React from 'react';
import Board from '../containers/Board';
import ControlArea from '../containers/ControlArea';

const style = {
  textAlign: 'center',
};

const App = () => (
  <div style={style}>
    <ControlArea />
    <Board />
  </div>
);

export default App;
