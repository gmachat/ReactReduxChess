import { CHECK_CHECK } from './actionTypes';

export const checkCheck = (currentPlayer, inCheck, startTime) => (dispatch) => {
  return dispatch({
    type: CHECK_CHECK,
    payload: { currentPlayer, inCheck, startTime },
  });
};
