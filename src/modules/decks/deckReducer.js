import _uniq from 'lodash/uniq';
import _isEmpty from 'lodash/isEmpty';

import { TYPES } from './actions';

/**
 * A single 'deck' reducer
 *
 * @method deck
 * @param  {Object} state  The current state
 * @param  {Object} action The action being called upon
 * @return {Object}
 */
const deck = (state, action) => {
  switch (action.type) {
  case TYPES.ADD_DECK: {
    const { id, timestamp, title, cards: cardsFromAction } = action.payload;

    const cards = Array.isArray(cardsFromAction) ? [...cardsFromAction] : [];

    return {
      id,
      timestamp,
      title,
      cards,
      cardsCount: cards.length
    };
  }
  case TYPES.EDIT_DECK: {
    if (state.id !== action.payload.id) {
      return state;
    }

    const { cards: cardsFromAction, ...restOfDeckProps } = action.payload;

    let cards = Array.isArray(state.cards) && !_isEmpty(state.cards) ? state.cards : [];

    if (Array.isArray(cardsFromAction)) {
      cards = _uniq([...cards, ...cardsFromAction]);
    }

    return {
      ...state,
      cards,
      cardsCount: cards.length,
      ...restOfDeckProps
    };
  }
  default:
    return state;
  }
};

export default deck;
