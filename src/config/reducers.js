import { combineReducers } from 'redux';

import { reducer as cards } from 'modules/cards';
import { reducer as decks } from 'modules/decks';

export default combineReducers({
  cards,
  decks
});
