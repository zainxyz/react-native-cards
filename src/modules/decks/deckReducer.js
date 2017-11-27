import _uniq from 'lodash/uniq';
import _isEmpty from 'lodash/isEmpty';
import _filter from 'lodash/filter';

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
    return {
      ...action.payload,
      cards     : [],
      cardsCount: 0
    };
  }
  case TYPES.ADD_CARD_TO_DECK: {
    if (state.id !== action.payload.id) {
      return state;
    }

    const { card } = action.payload;
    const cards = [...state.cards, card];

    return {
      ...state,
      cards,
      cardsCount: cards.length
    };
  }
  case TYPES.DELETE_CARD_FROM_DECK: {
    if (state.id !== action.payload.id) {
      return state;
    }

    const { cardId } = action.payload;
    const cards = _filter(state.cards, card => card.id !== cardId);

    return {
      ...state,
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
