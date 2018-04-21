import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/';

// Styles //

import 'reset-css';
import 'flexboxgrid';
import './index.css';

// Components //

import App from './components/App/App';

// Middlewares //

import authMiddleware from './middlewares/authMiddleware';

const store = createStore(rootReducer, applyMiddleware(authMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
