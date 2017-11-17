import { combineReducers } from 'redux';

import * as helpers from './helpers';
import { TYPES } from './actions';

/**
 * Cards' Reducer - 'byId'
 *
 * @method byId
 * @param  {Object} [state={}] The state
 * @param  {Object} action     The action
 * @return {Object}            The updated state
 */
const byId = (state = {}, action) => {
  switch (action.type) {
  case TYPES.ADD_CARD:
  case TYPES.EDIT_CARD:
    return helpers.addEditCardById(state, action);
  case TYPES.DELETE_CARD:
    return helpers.deleteCardById(state, action);
  default:
    return state;
  }
};

/**
 * Cards' Reducer - 'allIds'
 *
 * @method allIds
 * @param  {Array}  [state=[]] The state
 * @param  {Object} action     The action
 * @return {Array}             The updated state
 */
const allIds = (state = [], action) => {
  switch (action.type) {
  case TYPES.ADD_CARD:
    return helpers.addCardIdToAllIds(state, action);
  case TYPES.DELETE_CARD:
    return helpers.deleteCardIdFromAllIds(state, action);
  default:
    return state;
  }
};

/**
 * The main Cards' Reducer
 *
 * @type {Object}
 */
const cards = combineReducers({
  byId,
  allIds
});

// By default we export out the reducer itself.
export default cards;

/**
 * Get all of the current cards from the store
 *
 * @method getAllCards
 * @param  {Object}    state The current state
 * @return {Array}           The list of all of the cards from the store
 */
export const getAllCards = state =>
  state.cards && state.cards.allIds.map(id => state.cards.byId[id]);
