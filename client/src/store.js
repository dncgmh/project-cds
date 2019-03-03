import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import jwt_decode from 'jwt-decode';

const initialState = {};

const logout = store => next => action => {
  if (localStorage.jwtToken) {
    const decoded = jwt_decode(localStorage.jwtToken);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.clear();
      store.dispatch(logout());
    }
  }
  next(action);
};
const middleware = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require('redux-logger');
  const logger = createLogger({
    collapsed: true,
    diff: true
  });
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, logout))
);

export default store;
