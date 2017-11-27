import _omit from 'lodash/omit';
import _filter from 'lodash/filter';

import deckReducer from './deckReducer';

/**
 * This is a helpers file for the 'decks' reducer!
 * It takes away all the logic and dumps it in one place,
 * to make the reducers' file look neat and clean.
 */

/**
 * Add a single deck's ID to the store...for 'allIds'
 *
 * @method addDeckIdToAllIds
 * @param  {Object}           state  The state
 * @param  {Object}           action The action
 * @return {Array}                   The updated state
 */
export const addDeckIdToAllIds = (state, action) => [...state, action.payload.id];

/**
 * Delete a single deck's ID to the store...for 'allIds'
 *
 * @method deleteDeckIdFromAllIds
 * @param  {Object}               state  The state
 * @param  {Object}               action The action
 * @return {Array}                       The updated state
 */
export const deleteDeckIdFromAllIds = (state, action) =>
  _filter(state, id => id !== action.payload.id);

/**
 * Delete a single deck from the store
 *
 * @method deleteDeckById
 * @param  {Object}        state  The state
 * @param  {Object}        action The action
 * @return {Object}               The updated state
 */
export const deleteDeckById = (state, action) => _omit(state, action.payload.id);

/**
 * Add / Edit a single deck from the store
 *
 * @method addEditDeckById
 * @param  {Object}        state  The state
 * @param  {Object}        action The action
 * @return {Object}               The updated state
 */
export const addEditDeckById = (state, action) => ({
  ...state,
  [action.payload.id]: deckReducer(state[action.payload.id], action)
});
