import { CHANGE_TURN, CHANGE_PLAYER } from '../actions/actionTypes';

const initialState = {
  currentPlayer: 'White',
  playerWin: null,
  turnCount: 1
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PLAYER:
      return {
        ...state,
        currentPlayer: payload.nextPlayer,
        turnCount: state.turnCount + 0.5
      };

    case CHANGE_TURN:
      return { ...state, turnCount: state.turnCount + 0.5 };
    default:
      return { ...state };
  }
};
