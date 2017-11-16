import constants from 'namespace-constants';
import { generateID, getCurrentTimestamp } from 'utils';

export const TYPES = constants('cards', [
  'ADD_CARD',
  'DELETE_CARD',
  'EDIT_CARD',
  'FETCH_ALL_CARDS',
  'FETCH_CARD_BY_ID'
]);

/**
 * Fetch all the cards from the Store
 *
 * @method fetchAllCards
 * @return {Action}
 */
export const fetchAllCards = () => ({
  type: TYPES.FETCH_ALL_CARDS
});

/**
 * Fetch a single card by a given 'id'
 *
 * @method fetchCardById
 * @param  {string}       id The id of the card to fetch
 * @return {Action}
 */
export const fetchCardById = id => ({
  type   : TYPES.FETCH_CARD_BY_ID,
  payload: {
    id
  }
});

/**
 * Add a new card to the Store
 *
 * @method addCard
 * @param  {string} answer   The answer text for the card
 * @param  {string} question The question text for the card
 * @return {Action}
 */
export const addCard = ({ answer, question }) => ({
  type   : TYPES.ADD_CARD,
  payload: {
    id       : generateID(),
    timestamp: getCurrentTimestamp(),
    question,
    answer
  }
});

/**
 * Edit a card
 *
 * @method editCard
 * @param  {string} answer   The answer text for the card
 * @param  {string} id       The id of the card being edited
 * @param  {string} question The question text for the card
 * @return {Action}
 */
export const editCard = ({ answer, id, question }) => ({
  type   : TYPES.EDIT_CARD,
  payload: {
    id,
    question,
    answer
  }
});

/**
 * Delete a card by a given 'id'
 *
 * @method deleteCard
 * @param  {string}   id The id of the card to delete
 * @return {Action}
 */
export const deleteCard = id => ({
  type   : TYPES.DELETE_CARD,
  payload: {
    id
  }
});
