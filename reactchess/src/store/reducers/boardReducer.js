import {
  SELECT_MOVE,
  SELECT_PIECE,
  TAKE_PIECE,
  CLEAR_SELECTION,
  HOVERED_PIECE,
  CLEAR_HOVER,
  UPDATE_SCORE
} from '../actions/actionTypes';

import { board } from '../pieces/startingBoard';
import { squareVisualSelector } from '../../utils/squareVisualSelector';
import { boardChange } from '../../utils/boardChange';

const initialState = {
  selectedSquare: [null, null],
  selectedPiece: null,
  hoveredPiece: null,
  hoveredSquare: [null, null],
  board: board,
  takenWhitePieces: [],
  takenBlackPieces: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CLEAR_SELECTION:
      return squareVisualSelector(state, CLEAR_SELECTION, payload);
    case SELECT_PIECE:
      return squareVisualSelector(state, SELECT_PIECE, payload);
    case HOVERED_PIECE:
      return {
        ...state,
        hoveredPiece: board[payload.row][payload.column],
        hoveredSquare: [payload.row, payload.column]
      };
    case CLEAR_HOVER:
      return { ...state, hoveredPiece: null, hoveredSquare: [null, null] };
    case SELECT_MOVE:
      return boardChange(state, payload);
    case TAKE_PIECE:
      return boardChange(state, payload.targetPiece);
    case UPDATE_SCORE:
      return {
        ...state,
        board: payload.newBoard,
        takenWhitePieces: payload.takenWhitePieces,
        takenBlackPieces: payload.takenBlackPieces
      };
    default:
      return state;
  }
};
