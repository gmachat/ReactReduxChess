import { boardCopy } from '../boardCopy.js';
import collisionDetection from '../moveable/collisionDetection';
import { getTimeStamp } from '../../utils/getTimeStamp';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const castle = (state, payload) => {
  let { board, selectedSquare, pieces } = state;
  let { switchTo, startTime, currentPlayer } = payload;
  const newBoard = boardCopy(board);
  let updatedPieces = { ...pieces };
  selectedSquare = selectedSquare.map(el => parseInt(el));
  switchTo = switchTo.map(el => parseInt(el));

  const piece1 = updatedPieces[board[selectedSquare[0]][selectedSquare[1]].id];
  const piece2 = updatedPieces[board[switchTo[0]][switchTo[1]].id];

  if (!collisionDetection(state, { row: switchTo[0], column: switchTo[1] })) {
    newBoard[selectedSquare[0]][selectedSquare[1]] =
      board[switchTo[0]][switchTo[1]];
    newBoard[switchTo[0]][switchTo[1]] =
      board[selectedSquare[0]][selectedSquare[1]];

    const logEntry = [
      ...state.log,
      `${currentPlayer} Castles his King to Square-${
        newBoard[selectedSquare[0]][selectedSquare[1]].name.split(' ')[1] ===
        'King'
          ? `${letters[selectedSquare[0]]}${parseInt(selectedSquare[1]) + 1}`
          : `${letters[switchTo[0]]}${parseInt(switchTo[1]) + 1}`
      } (${getTimeStamp(startTime)})`
    ];
    piece1.hasMoved = true;
    updatedPieces[piece1.id] = piece1;
    piece2.hasMoved = true;
    updatedPieces[piece2.id] = piece2;

    return { ...state, board: newBoard, log: logEntry, pieces: updatedPieces };
  } else {
    console.log('noooooo dice');
    return { ...state };
  }
};
