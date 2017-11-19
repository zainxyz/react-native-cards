import constants from 'namespace-constants';
import { generateID, getCurrentTimestamp } from 'utils';

export const TYPES = constants('cards', ['ADD_CARD', 'DELETE_CARD', 'EDIT_CARD']);

/**
 * Add a new card to the Store
 *
 * @method addCard
 * @param  {string} id       The id for the card
 * @param  {string} answer   The answer text for the card
 * @param  {string} question The question text for the card
 * @return {Action}
 */
export const addCard = ({ id, answer, question }) => ({
  type   : TYPES.ADD_CARD,
  payload: {
    // id       : generateID(),
    id,
    timestamp: getCurrentTimestamp(),
    question,
    answer
  }
});

/**
 * Edit a card
 *
 * @method editCard
 * @param  {string}  answer          The answer text for the card
 * @param  {...Rest} restOfCardProps The rest of the props for the card being edited
 * @return {Action}
 */
export const editCard = ({ id, ...restOfCardProps }) => ({
  type   : TYPES.EDIT_CARD,
  payload: {
    id,
    ...restOfCardProps
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
