import { CHECK_CHECK } from './actionTypes';

export const checkCheck = (checkPiece, currentPlayer) => dispatch => {
  return dispatch({
    type: CHECK_CHECK,
    payload: { checkPiece, currentPlayer }
  });
};
