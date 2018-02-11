import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App';
import { getInitConfig } from './config';

let store = createStore(reducers, getInitConfig());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
