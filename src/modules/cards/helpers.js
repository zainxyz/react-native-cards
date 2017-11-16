import _omit from 'lodash/omit';

import cardReducer from './card';

/**
 * This is a helpers file for the 'cards' reducer!
 * It takes away all the logic and dumps it in one place,
 * to make the reducers' file look neat and clean.
 */

/**
 * Add a single card's ID to the store...for 'allIds'
 *
 * @method addCardIdToAllIds
 * @param  {Object}           state  The state
 * @param  {Object}           action The action
 * @return {Array}                   The updated state
 */
export const addCardIdToAllIds = (state, action) => [...state, action.payload.id];

/**
 * Delete a single card's ID to the store...for 'allIds'
 *
 * @method deleteCardIdFromAllIds
 * @param  {Object}               state  The state
 * @param  {Object}               action The action
 * @return {Array}                       The updated state
 */
export const deleteCardIdFromAllIds = (state, action) =>
  state.filter(id => id !== action.payload.id);

/**
 * Delete a single card from the store
 *
 * @method deleteCardById
 * @param  {Object}        state  The state
 * @param  {Object}        action The action
 * @return {Object}               The updated state
 */
export const deleteCardById = (state, action) => _omit(state, action.payload.id);

/**
 * Add / Edit a single card from the store
 *
 * @method addEditCardById
 * @param  {Object}        state  The state
 * @param  {Object}        action The action
 * @return {Object}               The updated state
 */

export const addEditCardById = (state, action) => ({
  ...state,
  [action.payload.id]: cardReducer(state[action.payload.id], action)
});
