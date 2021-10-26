import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './types/api'
import {ThunkAppDispatch} from './types/actions';
import {loadFilms} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  ),
);

(store.dispatch as ThunkAppDispatch)(loadFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*@ts-ignore*/}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

