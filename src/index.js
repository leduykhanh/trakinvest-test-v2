import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router,IndexRoute,Route,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'

import {getRoutes} from './routes.jsx'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store=createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={getRoutes(store)} location={React.PropTypes.object} />
  </Provider>
  , document.querySelector('.container'));
