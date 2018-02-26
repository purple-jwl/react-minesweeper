import React from 'react';
import Board from '../containers/Board';
import ControlArea from '../containers/ControlArea';

const style = {
  padding: '10px',
  textAlign: 'center',
  backgroundColor: '#ffeefe',
};

const App = () => (
  <div style={style}>
    <ControlArea />
    <Board />
  </div>
);

export default App;
