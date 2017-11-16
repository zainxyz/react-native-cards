import * as cardActions from './actions';
import reducer from './reducer';

// Extract the action types from actions to help export / import logic.
const { TYPES: actionTypes, ...actions } = cardActions;

export { actions, actionTypes, reducer };

/**
 * The authoritative Card entity shape
 *
 * @typedef  {Object}  Card
 * @property {string}  id        - Unique Identifier
 * @property {Integer} timestamp - Time created (default in unix)
 * @property {string}  question  - Question text the Card
 * @property {string}  answer    - Answer text for the Card
 */

//
// Redux Store Normalized Shape for 'cards'
//
// cards: {
//   byId: {
//     'card_1': {
//       id       : 'card_1',
//       timestamp: 2342253499583,
//       question : 'What is Redux?',
//       answer   : 'Redux is a predictable state container for JavaScript apps'
//     },
//     'card_2': {
//       id       : 'card_2',
//       timestamp: 6565154532121,
//       question : 'Can Redux be used with React Native?',
//       answer   :
//         'Offcourse, Redux is made for JavaScript applications. It can be used by any app that has been implemented with JavaScript. React, React Native, Angular JS, Backbone, etc.'
//     }
//   },
//   allIds: ['card_1', 'card_2']
// };
//
