import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

// import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import reducers from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhancers(applyMiddleware(ReduxPromise))(createStore);
const store = createStoreWithMiddleware(reducers);

// let store = createStore(
//   reducers,
//   // [ 'Use Redux' ],
//   applyMiddleware(ReduxPromise)
// )


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
