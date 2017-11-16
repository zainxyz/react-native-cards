import constants from 'namespace-constants';
import { generateID, getCurrentTimestamp } from 'utils';

export const TYPES = constants('decks', [
  'ADD_DECK',
  'DELETE_DECK',
  'EDIT_DECK',
  'FETCH_ALL_DECKS',
  'FETCH_DECK_BY_ID'
]);

/**
 * Fetch all the decks from the Store
 *
 * @method fetchAllDecks
 * @return {Action}
 */
export const fetchAllDecks = () => ({
  type: TYPES.FETCH_ALL_DECKS
});

/**
 * Fetch a single deck by a given 'id'
 *
 * @method fetchDeckById
 * @param  {string}       id The id of the deck to fetch
 * @return {Action}
 */
export const fetchDeckById = id => ({
  type   : TYPES.FETCH_DECK_BY_ID,
  payload: {
    id
  }
});

/**
 * Add a new deck to the Store
 *
 * @method addDeck
 * @param  {string} title The title of the deck
 * @return {Action}
 */
export const addDeck = ({ title }) => ({
  type   : TYPES.ADD_DECK,
  payload: {
    id       : generateID(),
    timestamp: getCurrentTimestamp(),
    title,
    cards    : []
  }
});

/**
 * Edit a deck
 *
 * @method editDeck
 * @param  {Array}  cards The updated list for the current deck
 * @param  {string} id    The id of the deck
 * @param  {string} title The updated / title for the deck
 * @return {Action}
 */
export const editDeck = ({ cards, id, title }) => ({
  type   : TYPES.EDIT_DECK,
  payload: {
    id,
    title,
    cards
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
