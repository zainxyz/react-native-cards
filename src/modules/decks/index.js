import * as deckActions from './actions';
import reducer, * as selectors from './reducer';

// Extract the action types from actions to help export / import logic.
const { TYPES: actionTypes, ...actions } = deckActions;

export { actions, actionTypes, reducer, selectors };

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
// INITIAL_STATE for the decks reducer
//
// decks: {
//   byId: {
//     react_deck_1: {
//       id       : 'react_deck_1',
//       timestamp: 5373454523234,
//       title    : 'React',
//       cards    : [
//         {
//           id      : 'react_card_1',
//           question: 'What is React?',
//           answer  : 'A library for managing user interfaces'
//         },
//         {
//           id      : 'react_card_2',
//           question: 'Where do you make Ajax requests in React?',
//           answer  : 'The componentDidMount lifecycle event'
//         }
//       ]
//     },
//     javascript_deck_2: {
//       id       : 'javascript_deck_2',
//       timestamp: 6546545444523,
//       title    : 'JavaScript',
//       cards    : [
//         {
//           id     : 'card_javascript_1',
//           questin: 'What is a closure?',
//           answer :
//             'The combination of a function and the lexical environment within which that function was declared.'
//         }
//       ]
//     }
//   },
//   allIds: ['react_deck_1', 'javascript_deck_2']
// };
