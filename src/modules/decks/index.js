import * as deckActions from './actions';

// Extract the action types from actions to help export / import logic.
const { TYPES: actionTypes, ...actions } = deckActions;

export { actions, actionTypes };

/**
 * The authoritative Deck entity shape
 *
 * @typedef  {Object}  Deck
 * @property {string}  id        - Unique Identifier
 * @property {Integer} timestamp - Time created (default in unix)
 * @property {string}  title     - Title for the Deck of Cards
 * @property {Array}   cards     - List of cards present in the Deck of Cards
 */

//
// Redux Store Normalized Shape for 'decks'
//
// decks: {
//   byId: {
//     deck_1: {
//       id       : 'deck_1',
//       timestamp: 6546545444523,
//       title    : 'Redux (holy grail)',
//       cards    : ['card_1', 'card_5']
//     },
//     deck_2: {
//       id       : 'deck_2',
//       timestamp: 5373454523234,
//       title    : 'Econ Quiz',
//       cards    : ['card_2', 'card_3', 'card_6']
//     }
//   },
//   allIds: ['deck_1', 'deck_2']
// };
//
