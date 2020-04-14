import { moveable } from '../../../utils/moveable/moveable';
import { takeable } from '../../../utils/takeable/takeable';
import movedToCheckDetection from '../../../utils/check/movedToCheckDetection';

export const conditionals = (
  selectedSquare,
  targetSquare,
  selectedPiece,
  row,
  column,
  board,
  currentPlayer,
  pieces
) => {
  let canBeTaken;
  const correctPlayer = selectedPiece
    ? selectedPiece.color === currentPlayer.toLowerCase()
    : null;
  const kingInCheck =
    pieces[currentPlayer === 'White' ? 'blackKing' : 'whiteKing'].inCheck;
  console.log('is king in check ', kingInCheck);
  return {
    //if the new square is empty, move the piece there
    clickedOnEmptySelf:
      `${selectedSquare[0]}${selectedSquare[1]}` === `${row}${column}`,
    //If the square is already selected it deselcts it
    squareIsSelected: selectedSquare[0] !== null && correctPlayer,
    //if both are empty switch squares
    squareAndTargetEmpty: targetSquare === null && selectedPiece === null,
    //if the next target is empty clear the target
    targetEmpty: targetSquare === null,
    //if a square is selected, but empty, select a new square
    selectNewPiece: targetSquare !== null && selectedPiece === null,
    // Present an error if a piece trys to land on the same space of another piece of that color
    sameSquareAsAlly:
      targetSquare !== null &&
      selectedPiece !== null &&
      selectedPiece.color === targetSquare.color,
    //Present if a piece of an opposite color "Takes" a space from that color
    clickedOnEnemySquare:
      targetSquare !== null &&
      selectedPiece !== null &&
      selectedPiece.color !== targetSquare.color,
    //Use to get the first square selected
    selectFirstSquare:
      `${selectedSquare[0]}${selectedSquare[1]}` !== `${row}${column}`,
    canBeMoved: moveable(
      { board, selectedSquare, selectedPiece, pieces, currentPlayer },
      { row, column }
    ),
    canBeTaken:
      selectedPiece &&
      (canBeTaken = takeable(
        { board, selectedSquare, selectedPiece, pieces, currentPlayer },
        { row, column }
      )),
    movedToCheck: movedToCheckDetection(
      { board, pieces, selectedSquare, selectedPiece },
      currentPlayer,
      {
        row,
        column,
      }
    ),
    castling:
      selectedPiece &&
      targetSquare &&
      selectedPiece.hasMoved === false &&
      targetSquare.hasMoved === false &&
      ((selectedPiece.color === targetSquare.color &&
        selectedPiece.name.split(' ')[1] === 'Rook' &&
        targetSquare.name.split(' ')[1] === 'King') ||
        (selectedPiece.color === targetSquare.color &&
          selectedPiece.name.split(' ')[1] === 'King' &&
          targetSquare.name.split(' ')[1] === 'Rook')),
  };
};
