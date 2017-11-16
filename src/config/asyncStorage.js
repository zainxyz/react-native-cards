import { AsyncStorage } from 'react-native';

import { APP_STORAGE_ID } from 'utils';

/**
 * Load the redux state from the AsyncStorage
 *
 * @method loadState
 * @return {Object|undefined} The currently persisted redux state from AsyncStorage
 */
export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem(APP_STORAGE_ID);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

/**
 * Save the given state to the AsyncStorage
 *
 * @method saveState
 * @param  {Object}  state The state to be saved
 */
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    AsyncStorage.setItem(APP_STORAGE_ID, serializedState);
  } catch (err) {
    // catch the error
  }
};
