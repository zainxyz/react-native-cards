import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { APP_STORAGE_ID } from 'utils';
import rootReducers from './reducers';

/**
 * The root config for the redux-persist reducers
 *
 * @type {Object}
 */
const config = {
  key: APP_STORAGE_ID,
  storage
};

/**
 * Build the main reducers via the redux-persist combine reducers
 *
 * @type {Function}
 */
const reducers = persistCombineReducers(config, rootReducers);

/**
 * Configure the main store for the application
 *
 * @method configureStore
 * @return {Function}
 */
const configureStore = () => {
  // Build the list of middlewares to be added to the Store
  const middleware = [];
  // Set the compose enhancer for our store
  let composeEnhancer = compose;
  // If we're running in the development mode,
  // then let's add the redux-logger as a middleware, and initialze the composeWithDevTools
  if (global.__DEV__ || __DEV__) {
    // Redux DevTools is faster and better :)
    // middleware.push(logger);
    // NOTE: Read more about 'remote-redux-devtools' for react-native at the link posted below:
    // [Link](https://github.com/zalmoxisus/remote-redux-devtools)
    composeEnhancer = composeWithDevTools;
  }

  // Create the store by adding in the default reducers, the persisted state, and the middleware
  const store = createStore(reducers, composeEnhancer(applyMiddleware(...middleware)));

  // Create the redux-persist's store (named 'persistor')
  const persistor = persistStore(store);

  return {
    persistor,
    store
  };
};

export default configureStore;
