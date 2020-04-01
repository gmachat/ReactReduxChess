import { GAME_ALERT } from './actionTypes';
export const gameAlert = alert => dispatch => {
  return dispatch({
    type: GAME_ALERT,
    payload: {
      message: alert.message,
      color: alert.color
    }
  });
};
