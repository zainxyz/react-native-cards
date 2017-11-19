import constants from 'namespace-constants';
import { generateID, getCurrentTimestamp } from 'utils';

export const TYPES = constants('decks', ['ADD_DECK', 'DELETE_DECK', 'EDIT_DECK']);

/**
 * Add a new deck to the Store
 *
 * @method addDeck
 * @param  {string} title The title of the deck
 * @return {Action}
 */
export const addDeck = ({ title, ...restOfDeckProps }) => ({
  type   : TYPES.ADD_DECK,
  payload: {
    title,
    ...restOfDeckProps,
    // Add in the id + timestamp after adding the rest of the deck props,
    // because we don't want to accidentally pass in an 'id' and have it overwite
    // the generated id value.
    id       : generateID(),
    timestamp: getCurrentTimestamp()
  }
});

/**
 * Edit a deck
 *
 * @method editDeck
 * @param  {Array}   cards           The updated list for the current deck
 * @param  {...Rest} restOfDeckProps The rest of the props for the deck being edited
 * @return {Action}
 */
export const editDeck = ({ id, ...restOfDeckProps }) => ({
  type   : TYPES.EDIT_DECK,
  payload: {
    id,
    ...restOfDeckProps
  }
});

/**
 * Delete a deck by a given 'id'
 *
 * @method deleteDeck
 * @param  {string}   id The id of the deck to delete
 * @return {Action}
 */
export const deleteDeck = id => ({
  type   : TYPES.DELETE_DECK,
  payload: {
    id
  }
});
