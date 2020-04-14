//RUNS AFTER THE PLAYER MOVES TO CHECK IF THEY MOVED INTO CHECK (RUNS BEFORE THE PIECCE IS OFFICIALLY MOVED)
export const movedToCheckDetectionNSEW = (king, updatedBoard) => {
  const length = updatedBoard.length;

  const kingRow = king.location[0];
  const kingColumn = king.location[1];
  const checkPieces = [];

  //check the pieces to the right (closest to furthest)

  if (kingColumn < length) {
    for (let i = kingColumn + 1; i < length; i++) {
      if (updatedBoard[kingRow][i] !== null) {
        if (updatedBoard[kingRow][i].color === king.color) {
          break;
        } else {
          checkPieces.push({
            piece: updatedBoard[kingRow][i],
            coords: [kingRow, i],
          });
          break;
        }
      }
    }
  }
  //check the pieces to the left (closest to furthest)
  if (kingColumn > 0) {
    for (let i = kingColumn - 1; i >= 0; i--) {
      if (updatedBoard[kingRow][i] !== null) {
        if (updatedBoard[kingRow][i].color === king.color) {
          break;
        } else {
          checkPieces.push({
            piece: updatedBoard[kingRow][i],
            coords: [kingRow, i],
          });
          break;
        }
      }
    }
  }

  //check the pieces Vertically Down (closest to furthest)
  if (kingRow < length) {
    for (let i = kingRow + 1; i < length; i++) {
      if (updatedBoard[i][kingColumn] !== null) {
        if (updatedBoard[i][kingColumn].color === king.color) {
          break;
        } else {
          checkPieces.push({
            piece: updatedBoard[i][kingColumn],
            coords: [i, kingColumn],
          });
          break;
        }
      }
    }
  }
  //check the pieces Vertically Up (closest to furthest)
  if (kingRow > 0) {
    for (let i = kingRow - 1; i >= 0; i--) {
      if (updatedBoard[i][kingColumn] !== null) {
        if (updatedBoard[i][kingColumn].color === king.color) {
          break;
        } else {
          checkPieces.push({
            piece: updatedBoard[i][kingColumn],
            coords: [i, kingColumn],
          });
          break;
        }
      }
    }
  }

  const threats = checkPieces.filter(
    (el) =>
      el.piece.type === 'king' ||
      el.piece.type === 'queen' ||
      el.piece.type === 'rook'
  );

  if (threats.length > 0) return threats;
  return [];
};
