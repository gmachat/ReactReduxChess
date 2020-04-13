export const movedToCheckDetectionNSEW = (state, king) => {
  const length = state.board.length;
  const kingRow = king.location[0];
  const kingColumn = king.location[1];
  const checkPieces = [];
  console.log('movedToCheckDetection');
  console.log(king.location);
  // check each side of the selected square for collisions
  //if there is a collision, check piece color, if its the same skip it
  //if piece color is not the same initiate board logic to check if it can hit the king.

  //check the pieces to the right (closest to furthest)

  if (kingColumn < length) {
    for (let i = kingColumn + 1; i < length; i++) {
      if (state.board[kingRow][i] !== null) {
        console.log('not row null');
        if (state.board[kingRow][i].color === king.color) {
          console.log('same color piece right');
          console.log(state.board[kingRow][i]);
          break;
        } else {
          console.log('different piece right');
          console.log(state.board[kingRow][i]);
          checkPieces.push({
            piece: state.board[kingRow][i],
            coords: [kingRow, i],
          });
        }
      }
    }
  }
  //check the pieces to the left (closest to furthest)
  if (kingColumn > 0) {
    for (let i = kingColumn - 1; i >= 0; i--) {
      if (state.board[kingRow][i] !== null) {
        console.log('not row null');
        if (state.board[kingRow][i].color === king.color) {
          console.log('same color piece left');
          console.log(state.board[kingRow][i]);
          break;
        } else {
          console.log('different piece left');
          console.log(state.board[kingRow][i]);
          checkPieces.push({
            piece: state.board[kingRow][i],
            coords: [kingRow, i],
          });
        }
      }
    }
  }

  //check the pieces Vertically Down (closest to furthest)
  if (kingRow < length) {
    for (let i = kingRow + 1; i < length; i++) {
      if (state.board[i][kingColumn] !== null) {
        console.log('not col null');
        if (state.board[i][kingColumn].color === king.color) {
          console.log('same color piece down');
          console.log(state.board[i][kingColumn]);
          break;
        } else {
          console.log('different piece down');
          console.log(state.board[i][kingColumn]);
          checkPieces.push({
            piece: state.board[i][kingColumn],
            coords: [kingRow, i],
          });
        }
      }
    }
  }
  //check the pieces Vertically Up (closest to furthest)
  if (kingRow > 0) {
    for (let i = kingRow - 1; i >= 0; i--) {
      if (state.board[i][kingColumn] !== null) {
        console.log('not col null');
        if (state.board[i][kingColumn].color === king.color) {
          console.log('same color piece up');
          console.log(state.board[i][kingColumn]);
          break;
        } else {
          console.log('different color piece up');
          console.log(state.board[i][kingColumn]);
          checkPieces.push({
            piece: state.board[i][kingColumn],
            coords: [kingRow, i],
          });
        }
      }
    }
  }

  return checkPieces;
};
