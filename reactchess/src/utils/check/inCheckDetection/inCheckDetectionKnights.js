//RUNS AFTER THE PLAYER MOVES TO CHECK IF THEY MOVED INTO CHECK (RUNS BEFORE THE PIECCE IS OFFICIALLY MOVED)
export const checkDetectionKnights = (king, updatedBoard) => {
  const length = updatedBoard.length;
  const kingRow = king.location[0];
  const kingColumn = king.location[1];
  const checkPieces = [];

  //check the pieces to the right (closest to furthest)
  if (kingRow + 1 < length && kingColumn + 2 < length) {
    if (
      updatedBoard[kingRow + 1][kingColumn + 2] !== null &&
      updatedBoard[kingRow + 1][kingColumn + 2].color !== king.color &&
      updatedBoard[kingRow + 1][kingColumn + 2].type === 'knight'
    ) {
      checkPieces.push({
        piece: updatedBoard[kingRow + 1][kingColumn + 2],
        coords: [kingRow + 1, kingColumn + 2],
      });
    }
  }

  if (kingRow - 1 >= 0 && kingColumn + 2 < length) {
    if (
      updatedBoard[kingRow - 1][kingColumn + 2] !== null &&
      updatedBoard[kingRow - 1][kingColumn + 2].color !== king.color &&
      updatedBoard[kingRow - 1][kingColumn + 2].type === 'knight'
    ) {
      checkPieces.push({
        piece: updatedBoard[kingRow - 1][kingColumn + 2],
        coords: [kingRow - 1, kingColumn + 2],
      });
    }
  }
  if (kingRow + 1 < length && kingColumn - 2 >= 0) {
    if (
      updatedBoard[kingRow + 1][kingColumn - 2] !== null &&
      updatedBoard[kingRow + 1][kingColumn - 2].color !== king.color &&
      updatedBoard[kingRow + 1][kingColumn - 2].type === 'knight'
    ) {
      checkPieces.push({
        piece: updatedBoard[kingRow + 1][kingColumn - 2],
        coords: [kingRow + 1, kingColumn - 2],
      });
    }
  }
  if (kingRow - 1 >= 0 && kingColumn - 2 >= 0) {
    if (
      updatedBoard[kingRow - 1][kingColumn - 2] !== null &&
      updatedBoard[kingRow - 1][kingColumn - 2].color !== king.color &&
      updatedBoard[kingRow - 1][kingColumn - 2].type === 'knight'
    ) {
      checkPieces.push({
        piece: updatedBoard[kingRow - 1][kingColumn - 2],
        coords: [kingRow - 1, kingColumn - 2],
      });
    }
  }

  if (kingRow + 2 < length && kingColumn + 1 < length) {
    if (
      updatedBoard[kingRow + 2][kingColumn + 1] !== null &&
      updatedBoard[kingRow + 2][kingColumn + 1].color !== king.color &&
      updatedBoard[kingRow + 2][kingColumn + 1].type === 'knight'
    ) {
      checkPieces.push({
        piece: updatedBoard[kingRow + 2][kingColumn + 1],
        coords: [kingRow + 2, kingColumn + 1],
      });
    }
  }
  if (kingRow - 2 >= 0 && kingColumn + 1 < length) {
    if (
      updatedBoard[kingRow - 2][kingColumn + 1] !== null &&
      updatedBoard[kingRow - 2][kingColumn + 1].color !== king.color &&
      updatedBoard[kingRow - 2][kingColumn + 1].type === 'knight'
    ) {
      checkPieces.push({
        piece: updatedBoard[kingRow - 2][kingColumn + 1],
        coords: [kingRow - 2, kingColumn + 1],
      });
    }
  }
  if (kingRow + 2 < length && kingColumn - 1 >= 0) {
    if (
      updatedBoard[kingRow + 2][kingColumn - 1] !== null &&
      updatedBoard[kingRow + 2][kingColumn - 1].color !== king.color &&
      updatedBoard[kingRow + 2][kingColumn - 1].type === 'knight'
    ) {
      checkPieces.push({
        piece: updatedBoard[kingRow + 2][kingColumn - 1],
        coords: [kingRow + 2, kingColumn - 1],
      });
    }
  }
  if (kingRow - 2 >= 0 && kingColumn - 1 >= 0) {
    if (
      updatedBoard[kingRow - 2][kingColumn - 1] !== null &&
      updatedBoard[kingRow - 2][kingColumn - 1].color !== king.color &&
      updatedBoard[kingRow - 2][kingColumn - 1].type === 'knight'
    ) {
      checkPieces.push({
        piece: updatedBoard[kingRow - 2][kingColumn - 1],
        coords: [kingRow - 2, kingColumn - 1],
      });
    }
  }

  if (checkPieces.length > 0) return checkPieces;
  return [];
};
