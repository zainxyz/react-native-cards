import { reducer as cards } from 'modules/cards';
import { reducer as decks } from 'modules/decks';

// Need to export an object which has all of the required reducers,
// rather than a combineReducers, for the redux-persist's persistCombineReducers functionality
export default {
  cards,
  decks
};
