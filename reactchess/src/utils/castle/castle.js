import { boardCopy } from '../boardCopy.js';
import collisionDetection from '../moveable/collisionDetection';
import { getTimeStamp } from '../../utils/getTimeStamp';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const castle = (state, payload) => {
  let { board, selectedSquare } = state;
  let { switchTo, startTime, currentPlayer } = payload;
  const newBoard = boardCopy(board);

  selectedSquare = selectedSquare.map(el => parseInt(el));
  switchTo = switchTo.map(el => parseInt(el));

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

    return { ...state, board: newBoard, log: logEntry };
  } else {
    console.log('noooooo dice');
    return { ...state };
  }
};
