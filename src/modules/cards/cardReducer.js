import { TYPES } from './actions';

/**
 * A single 'card' reducer
 *
 * @method card
 * @param  {Object} state  The current state
 * @param  {Object} action The action being called upon
 * @return {Object}
 */
const card = (state, action) => {
  switch (action.type) {
  case TYPES.ADD_CARD: {
    const { id, timestamp, question, answer } = action.payload;

    return {
      id,
      timestamp,
      question,
      answer
    };
  }
  case TYPES.EDIT_CARD: {
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

export default card;
