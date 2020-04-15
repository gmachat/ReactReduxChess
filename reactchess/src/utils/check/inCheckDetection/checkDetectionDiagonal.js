export const checkDetectionDiagonal = (king, updatedBoard) => {
  //check the pieces Diagonally (closest to furthest)
  const length = updatedBoard.length;
  const kingRow = king.location[0];
  const kingColumn = king.location[1];
  const checkPieces = [];

  for (let i = 1; i < length; i++) {
    if (kingRow + i < length && kingColumn + i < length) {
      if (updatedBoard[kingRow + i][kingColumn + i] !== null) {
        if (updatedBoard[kingRow + i][kingColumn + i].color === king.color) {
          break;
        } else {
          console.log('here and coords', [kingRow + i, kingColumn + i]);
          checkPieces.push({
            piece: updatedBoard[kingRow + i][kingColumn + i],
            coords: [kingRow + i, kingColumn + i],
          });
          break;
        }
      }
    }
  }
  for (let i = 1; i < length; i++) {
    if (kingRow + i < length && kingColumn - i >= 0) {
      if (updatedBoard[kingRow + i][kingColumn - i] !== null) {
        if (updatedBoard[kingRow + i][kingColumn - i].color === king.color) {
          break;
        } else {
          console.log('here and coords', [kingRow + i, kingColumn - i]);
          checkPieces.push({
            piece: updatedBoard[kingRow + i][kingColumn - i],
            coords: [kingRow + i, kingColumn - i],
          });
          break;
        }
      }
    }
  }
  for (let i = 1; i < length; i++) {
    if (kingRow - i >= 0 && kingColumn - i >= 0) {
      if (updatedBoard[kingRow - i][kingColumn - i] !== null) {
        if (updatedBoard[kingRow - i][kingColumn - i].color === king.color) {
          break;
        } else {
          console.log('here and coords', [kingRow - i, kingColumn - i]);
          checkPieces.push({
            piece: updatedBoard[kingRow - i][kingColumn - i],
            coords: [kingRow - i, kingColumn - i],
          });
          break;
        }
      }
    }
  }
  for (let i = 1; i < length; i++) {
    if (kingRow - i >= 0 && kingColumn + i < length) {
      if (updatedBoard[kingRow - i][kingColumn + i] !== null) {
        if (updatedBoard[kingRow - i][kingColumn + i].color === king.color) {
          break;
        } else {
          console.log('here and coords', [kingRow - i, kingColumn - i]);
          checkPieces.push({
            piece: updatedBoard[kingRow - i][kingColumn + i],
            coords: [kingRow - i, kingColumn + i],
          });
          break;
        }
      }
    }
  }

  const threats = checkPieces.filter(
    (el) =>
      el.piece.type === 'queen' ||
      el.piece.type === 'bishop' ||
      (el.piece.type === 'king' && Math.abs(kingRow - el.coords[0]) === 1) ||
      (el.piece.type === 'pawn' &&
        Math.abs(kingRow - el.coords[0]) === 1 &&
        (el.piece.color === 'white'
          ? el.coords[0] < kingRow
          : el.coords[0] > kingRow))
  );

  if (threats.length > 0) return threats;
  return [];
};
