import { CHANGE_PLAYER } from './actionTypes';

export const changePlayer = player => dispatch => {
  return dispatch({
    type: CHANGE_PLAYER,
    payload: {
      nextPlayer: player === 'White' ? 'Black' : 'White'
    }
  });
};
