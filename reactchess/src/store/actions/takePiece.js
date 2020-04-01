import { TAKE_PIECE } from '../actions/actionTypes';

export const takePiece = (targetPiece, attacker) => dispatch => {
  return dispatch({
    type: TAKE_PIECE,
    payload: {
      targetPiece: {
        row: targetPiece.dataset.row,
        column: targetPiece.dataset.column
      },
      attacker
    }
  });
};
