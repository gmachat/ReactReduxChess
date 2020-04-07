import { checkDetectionNSEW } from './checkDetectionNSEW';
import { checkDetectionDiagonal } from './checkDetectionDiagonal';
import pieces from '../../../store/pieces'

const checkDetection = (state, payload) => {
  const selectedSquareRow = parseInt(state.selectedSquare[0]);
  const selectedSquareColumn = parseInt(state.selectedSquare[1]);

console.log(pieces)

  if(checkDetectionNSEW(state,
    payload,
    selectedSquareRow,
    selectedSquareColumn) || checkDetectionDiagonal(state,
      payload,
      selectedSquareRow,
      selectedSquareColumn)){
        return true
      }else{
        return false
      }
  }
};

export default checkDetection;
