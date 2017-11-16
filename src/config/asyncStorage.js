import { AsyncStorage } from 'react-native';

/**
 * Load the redux state from the AsyncStorage
 *
 * @method loadState
 * @return {Object|undefined} The currently persisted redux state from AsyncStorage
 */
export const loadState = () => {
  try {
    const serializedState = AsyncStorage.getItem('rnCardsStore');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
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
    AsyncStorage.setItem('rnCardsStore', serializedState);
  } catch (err) {
    // catch the error
  }
};
