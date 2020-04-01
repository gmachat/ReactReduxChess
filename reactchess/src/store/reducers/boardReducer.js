import {
  SELECT_MOVE,
  SELECT_PIECE,
  TAKE_PIECE,
  CLEAR_SELECTION,
  HOVERED_PIECE,
  CLEAR_HOVER
} from '../actions/actionTypes';

import { moveable } from '../../utils/moveable';
import { takePiece } from '../../utils/takePiece';
import { board } from '../pieces/startingBoard';

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
      if (state.selectedSquare[0] && state.selectedSquare[1]) {
        document
          .getElementById(
            `sq-${state.selectedSquare[0]}${state.selectedSquare[1]}`
          )
          .classList.remove('selected');
      }
      return {
        ...state,
        selectedSquare: [null, null],
        selectedPiece: null
      };
    case SELECT_PIECE:
      document
        .getElementById(`sq-${payload.row}${payload.column}`)
        .classList.add('selected');
      return {
        ...state,
        selectedSquare: [payload.row, payload.column],
        selectedPiece: board[payload.row][payload.column]
      };
    case HOVERED_PIECE:
      return {
        ...state,
        hoveredPiece: board[payload.row][payload.column],
        hoveredSquare: [payload.row, payload.column]
      };
    case CLEAR_HOVER:
      return { ...state, hoveredPiece: null, hoveredSquare: [null, null] };
    case SELECT_MOVE:
      const moved = moveable(
        state.board,
        state.selectedSquare,
        state.selectedPiece,
        payload
      );
      if (moved.moved) {
        console.log('moved');
        console.log(moved);
        return { ...state, board: moved.board };
      }
      console.log('didnt move');
      return {
        ...state
      };

    case TAKE_PIECE:
      return takePiece(state, payload);

    default:
      return state;
  }
};
