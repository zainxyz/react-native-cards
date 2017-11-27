import { combineReducers } from 'redux';
import { createSelector } from 'reselect';

import * as helpers from './helpers';
import { TYPES } from './actions';

/**
 * Decks' Reducer - 'byId'
 *
 * @method byId
 * @param  {Object} [state={}] The state
 * @param  {Object} action     The action
 * @return {Object}            The updated state
 */
const byId = (state = {}, action) => {
  switch (action.type) {
  case TYPES.ADD_DECK:
  case TYPES.EDIT_DECK:
  case TYPES.ADD_CARD_TO_DECK:
    return helpers.addEditDeckById(state, action);
  case TYPES.DELETE_DECK:
    return helpers.deleteDeckById(state, action);
  default:
    return state;
  }
};

/**
 * Decks' Reducer - 'allIds'
 *
 * @method allIds
 * @param  {Array}  [state=[]] The state
 * @param  {Object} action     The action
 * @return {Array}             The updated state
 */
const allIds = (state = [], action) => {
  switch (action.type) {
  case TYPES.ADD_DECK:
    return helpers.addDeckIdToAllIds(state, action);
  case TYPES.DELETE_DECK:
    return helpers.deleteDeckIdFromAllIds(state, action);
  default:
    return state;
  }
};

/**
 * The main Decks' Reducer
 *
 * @type {Object}
 */
const decks = combineReducers({
  byId,
  allIds
});

// By default we export out the reducer itself.
export default decks;

/**
 * Get all of the current decks from the store
 *
 * @method getAllDecks
 * @param  {Object}    state The current state
 * @return {Array}           The list of all of the decks from the store
 */
export const getAllDecks = state =>
  state.decks && state.decks.allIds.map(id => state.decks.byId[id]);

/**
 * Get a deck by deckId passed in via the route params
 *
 * @method getDeckByRouteParams
 * @param  {Object}             state The current state
 * @param  {Object}             props The current props
 * @return {Object}                   The deck that matches the route params deckId
 */
export const getDeckByRouteParams = (state, props) =>
  getAllDecks(state).find(deck => deck.id === props.navigation.state.params.deck.id);
