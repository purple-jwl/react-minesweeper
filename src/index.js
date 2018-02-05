import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createApp } from 'redux';
import App from './components/App';

render(
    <App />,
    document.getElementById('root')
);
