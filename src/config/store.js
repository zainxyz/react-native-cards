import throttle from 'lodash/throttle';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

import { loadState, saveState } from './asyncStorage';
import rootReducer from './reducers';

/**
 * Configure the main store for the application
 *
 * @method configureStore
 * @return {Function}
 */
const configureStore = () => {
  // Set the persistated state by loading the default state (from AsyncStorage)
  const persistedState = loadState();
  // Build the list of middlewares to be added to the Store
  const middleware = [];
  // Set the compose enhancer for our store
  let composeEnhancer = compose;
  // If we're running in the development mode,
  // then let's add the redux-logger as a middleware, and initialze the composeWithDevTools
  if (global.__DEV__ || __DEV__) {
    middleware.push(logger);
    // NOTE: Read more about 'remote-redux-devtools' for react-native at the link posted below:
    // [Link](https://github.com/zalmoxisus/remote-redux-devtools)
    composeEnhancer = composeWithDevTools;
  }

  // Create the store by adding in the default reducers, the persisted state, and the middleware
  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancer(applyMiddleware(...middleware))
  );

  // Enable hot module replacement for reducers
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  // Subscribe to the store, by saving the state each successful action call
  store.subscribe(
    throttle(() => {
      saveState({
        cards: store.getState().cards,
        decks: store.getState().decks
      });
    }, 1000)
  );

  return store;
};

export default configureStore;
