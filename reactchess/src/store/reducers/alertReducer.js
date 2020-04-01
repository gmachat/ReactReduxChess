import { GAME_ALERT, CLEAR_ALERT } from '../actions/actionTypes';

const initialState = {
  gameAlert: {}
};

export default (state = initialState, action) => {
  //   console.log(action);

  const { type, payload } = action;
  switch (type) {
    case GAME_ALERT:
      return {
        ...state,
        gameAlert: { message: payload.message, color: payload.color }
      };
    case CLEAR_ALERT:
      return {
        ...state,
        gameAlert: {}
      };
    default:
      return state;
  }
};
