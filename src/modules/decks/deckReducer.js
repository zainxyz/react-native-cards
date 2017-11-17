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
    const { id, timestamp, title, cards } = action.payload;

    return {
      id,
      timestamp,
      title,
      cards
    };
  }
  case TYPES.EDIT_DECK: {
    if (state.id !== action.payload.id) {
      return state;
    }

    return {
      ...state,
      ...action.payload
    };
  }
  default:
    return state;
  }
};

export default deck;
