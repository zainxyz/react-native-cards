import constants from 'namespace-constants';
import { generateID, getCurrentTimestamp } from 'utils';

export const TYPES = constants('decks', [
  'ADD_CARD_TO_DECK',
  'ADD_DECK',
  'DELETE_CARD_FROM_DECK',
  'DELETE_DECK',
  'EDIT_DECK',
  'UPDATE_QUIZ_SCORES'
]);

/**
 * Add a new deck to the Store
 *
 * @method addDeck
 * @param  {string} id    The id of the deck
 * @param  {string} title The title of the deck
 * @return {Action}
 */
export const addDeck = ({ id, title }) => ({
  type   : TYPES.ADD_DECK,
  payload: {
    title,
    id,
    timestamp: getCurrentTimestamp()
  }
});

/**
 * Add a new card to the deck by a given 'id'
 *
 * @method addCardToDeck
 * @param  {string}      id   The id of the deck
 * @param  {Object}      card The properties of the card to add to the deck
 * @return {Action}
 */
export const addCardToDeck = ({ id, card }) => ({
  type   : TYPES.ADD_CARD_TO_DECK,
  payload: {
    id,
    card: {
      ...card,
      id: generateID()
    }
  }
});

/**
 * Update the quiz scores for the given deck
 *
 * @method updateQuizScores
 * @param  {string}         id    The id of the deck to update the score for
 * @param  {string}         score The score for the deck
 * @return {Action}
 */
export const updateQuizScores = ({ id, score }) => ({
  type   : TYPES.UPDATE_QUIZ_SCORES,
  payload: {
    id,
    score
  }
});

/**
 * Edit a deck's title by a given 'id'
 *
 * @method editDeck
 * @param  {string}  id    The id of the deck to edit
 * @param  {string}  title The updated title of the deck
 * @return {Action}
 */
// export const editDeck = ({ id, title }) => ({
//   type   : TYPES.EDIT_DECK,
//   payload: {
//     id,
//     title
//   }
// });

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

/**
 * Delete a card from a deck by a given 'id'
 *
 * @method deleteCardFromDeck
 * @param  {string}           id     The id of the deck to delete the card from
 * @param  {string}           cardId The id of the card to delete from the deck
 * @return {Action}
 */
export const deleteCardFromDeck = (id, cardId) => ({
  type   : TYPES.DELETE_CARD_FROM_DECK,
  payload: {
    id,
    cardId
  }
});
