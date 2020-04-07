import {
  SELECT_MOVE,
  SELECT_PIECE,
  TAKE_PIECE,
  CLEAR_SELECTION,
  HOVERED_PIECE,
  CLEAR_HOVER,
  UPDATE_SCORE,
  CASTLE
} from '../actions/actionTypes';
import { board } from '../pieces/startingBoard';
import { squareVisualSelector } from '../../utils/squareVisualSelector';
import { boardChange } from '../../utils/boardChange';
import { castle } from '../../utils/castle/castle';

const initialState = {
  selectedSquare: [null, null],
  selectedPiece: null,
  hoveredPiece: null,
  hoveredSquare: [null, null],
  board: board,
  takenWhitePieces: [],
  takenBlackPieces: [],
  log: []
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
      return boardChange(state, payload.targetSquare, payload.startTime);
    case TAKE_PIECE:
      return boardChange(state, payload.targetPiece, payload.startTime);
    case CASTLE:
      let newState = castle(state, payload);
      board[state.selectedSquare[0]][state.selectedSquare[1]].hasMoved = true;
      board[payload.switchTo[0]][payload.switchTo[1]].hasMoved = true;
      return newState;
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
