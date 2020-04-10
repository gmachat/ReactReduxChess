import { TAKE_PIECE } from '../actions/actionTypes';

export const takePiece = (
  targetPiece,
  attacker,
  startTime,
  currentPlayer
) => dispatch => {
  console.log('dispatched', startTime);

  return dispatch({
    type: TAKE_PIECE,
    payload: {
      targetPiece: {
        row: targetPiece.dataset.row,
        column: targetPiece.dataset.column
      },
      attacker,
      startTime,
      currentPlayer
    }
  });
};
